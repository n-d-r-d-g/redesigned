import { promises } from "fs";
import path from "path";
import prettier from "prettier";
import { isSet, mergeWith } from "lodash";
import allHTMLTags from "../../../html-tags";
import { I18N_LOCALES } from "../../../constants";

function retrieveParamsAndComponents(
  text: string,
  currentNs: string,
  translationsByNs: Record<string, Record<string, string>>,
): Record<"params" | "components", Set<string>> {
  if (!text) {
    return {
      params: new Set(),
      components: new Set(),
    };
  }

  const interpolatedParamsRegExp = new RegExp("{{[a-zA-Z0-9\\s-]+}}", "g");
  const interpolatedComponentRegExp = new RegExp(`<[a-zA-Z0-9_]+[ ]?/?>`, "g");
  const nestingRegExp = new RegExp(`\\$t\\([a-zA-Z0-9_{}:.\\s]+\\)`, "g");
  const curlyBracketsRegExp = new RegExp("[{}\\s]", "g");
  const tagCharsRegExp = new RegExp("[<>/\\s]", "g");
  let interpolatedParams = [...text.matchAll(interpolatedParamsRegExp)].map(
    (param) => {
      const paramWithoutCurlyBrackets = param[0].replace(
        curlyBracketsRegExp,
        "",
      );

      return paramWithoutCurlyBrackets;
    },
  );
  let interpolatedComponents = [
    ...text.matchAll(interpolatedComponentRegExp),
  ].map((param) => {
    const paramWithoutTagCharsBrackets = param[0].replace(tagCharsRegExp, "");

    return paramWithoutTagCharsBrackets;
  });
  const nestedTranslations = [...text.matchAll(nestingRegExp)];
  const textContainsNesting = nestedTranslations.length > 0;

  if (textContainsNesting) {
    const nestedTextParamsAndComponents = nestedTranslations.reduce(
      (
        { params: nestedParams, components: nestedComponents },
        nestedTranslation,
      ) => {
        const nestedKeyWrapperRegExp = new RegExp("\\$t\\(|[)]+", "g");
        const nestedRawKey = nestedTranslation[0].replace(
          nestedKeyWrapperRegExp,
          "",
        );
        let nestedKey = nestedRawKey;
        let nestedNs = currentNs;

        if (nestedRawKey.includes(":")) {
          const keyParts = nestedRawKey.split(":");
          nestedNs = keyParts[0];
          nestedKey = keyParts[1];
        }

        const nestedKeyContainsInterpolations =
          [...nestedKey.matchAll(interpolatedParamsRegExp)].length > 0;

        if (nestedKeyContainsInterpolations) {
          const nestedKeyRegExp = new RegExp(
            nestedKey.replace(interpolatedParamsRegExp, "[a-zA-Z0-9]+"),
            "g",
          );
          const matchingKeyParamsAndComponents = Object.entries(
            translationsByNs[currentNs],
          ).reduce(
            (
              { params: nestedParams, components: nestedComponents },
              [nestedMatchingKey, nestedMatchingText],
            ) => {
              const nestedKeyMatchesKey =
                [...nestedMatchingKey.matchAll(nestedKeyRegExp)].length > 0;

              if (nestedKeyMatchesKey) {
                const retrievedParamsAndComponents =
                  retrieveParamsAndComponents(
                    nestedMatchingText,
                    currentNs,
                    translationsByNs,
                  );

                nestedParams = [
                  ...nestedParams,
                  ...retrievedParamsAndComponents.params,
                ];
                nestedComponents = [
                  ...nestedComponents,
                  ...retrievedParamsAndComponents.components,
                ];
              }

              return {
                params: nestedParams,
                components: nestedComponents,
              };
            },
            {
              params: [] as Array<string>,
              components: [] as Array<string>,
            },
          );

          interpolatedParams = [
            ...interpolatedParams,
            ...matchingKeyParamsAndComponents.params,
          ];
          interpolatedComponents = [
            ...interpolatedComponents,
            ...matchingKeyParamsAndComponents.components,
          ];
        }

        const nestedText = translationsByNs?.[nestedNs]?.[nestedKey];
        const retrievedParamsAndComponents = retrieveParamsAndComponents(
          nestedText,
          currentNs,
          translationsByNs,
        );

        nestedParams = [
          ...nestedParams,
          ...retrievedParamsAndComponents.params,
        ];
        nestedComponents = [
          ...nestedComponents,
          ...retrievedParamsAndComponents.components,
        ];

        return {
          params: nestedParams,
          components: nestedComponents,
        };
      },
      { params: interpolatedParams, components: interpolatedComponents },
    );

    return {
      params: new Set([
        ...interpolatedParams,
        ...nestedTextParamsAndComponents.params,
      ]),
      components: new Set([
        ...interpolatedComponents,
        ...nestedTextParamsAndComponents.components,
      ]),
    };
  }

  return {
    params: new Set([...interpolatedParams]),
    components: new Set([...interpolatedComponents]),
  };
}

export async function generateTypedTransTypeDef() {
  const { flatten } = await import("flat");
  let currentLocale;
  const translationsByLocaleByNs: Record<
    string,
    Record<string, Record<string, string>>
  > = {};
  const paramsAndComponentsByLocaleByNs: Record<
    string,
    Record<string, Record<string, Record<"params" | "components", Set<string>>>>
  > = {};
  const pluralizationRegExpSuffix = "_(zero|one|two|few|many|other)$";
  const pluralizationRegExp = new RegExp(
    `(.*?)${pluralizationRegExpSuffix}`,
    "g",
  );
  const singularizationRegExp = new RegExp(pluralizationRegExpSuffix, "g");

  for (currentLocale of I18N_LOCALES) {
    try {
      const namespaces = await promises.readdir(
        path.resolve(__dirname, `../../../public/locales/${currentLocale}`),
      );
      let currentNsWithExt;
      const translationsByNs: Record<string, Record<string, string>> = {};

      for (currentNsWithExt of namespaces) {
        const currentNs = currentNsWithExt.split(".")[0];

        try {
          const currentLocaleTranslations = JSON.parse(
            await promises.readFile(
              path.resolve(
                __dirname,
                `../../../public/locales/${currentLocale}/${currentNsWithExt}`,
              ),
              "utf8",
            ),
          );
          const flattenedCurrentLocaleTranslations = flatten(
            currentLocaleTranslations,
          ) as Record<string, string>;
          translationsByNs[currentNs] = flattenedCurrentLocaleTranslations;
        } catch (e) {
          console.error(
            `An error occurred while reading ${currentNsWithExt}.`,
            e,
          );
        }
      }
      translationsByLocaleByNs[currentLocale] = translationsByNs;
    } catch (e) {
      console.error("An error occurred while reading namespace files.", e);
    }
  }

  Object.entries(translationsByLocaleByNs).forEach(
    ([locale, translationsByNs]) => {
      Object.entries(translationsByNs).forEach(([ns, translations]) => {
        Object.entries(translations).forEach(([key, text]) => {
          if (typeof text === "string") {
            const retrievedParamsAndComponents = retrieveParamsAndComponents(
              text,
              ns,
              translationsByNs,
            );
            const isKeyPluralized =
              (key.match(pluralizationRegExp)?.length ?? 0) > 0;

            paramsAndComponentsByLocaleByNs[locale] = {
              ...(paramsAndComponentsByLocaleByNs[locale] ?? {}),
              [ns]: {
                ...(paramsAndComponentsByLocaleByNs[locale]?.[ns] ?? {}),
                [key]: {
                  params: retrievedParamsAndComponents.params,
                  components: retrievedParamsAndComponents.components,
                },
              },
            };

            if (isKeyPluralized) {
              const singularizedKey = key.replace(singularizationRegExp, "");

              paramsAndComponentsByLocaleByNs[locale][ns][singularizedKey] = {
                params: new Set([
                  ...(paramsAndComponentsByLocaleByNs[locale][ns][
                    singularizedKey
                  ]?.params ?? []),
                  ...retrievedParamsAndComponents.params,
                  "count",
                ]),
                components: new Set([
                  ...(paramsAndComponentsByLocaleByNs[locale][ns][
                    singularizedKey
                  ]?.components ?? []),
                  ...retrievedParamsAndComponents.components,
                ]),
              };
            }
          }
        });
      });
    },
  );

  const paramsAndComponentsByNs = Object.values(
    paramsAndComponentsByLocaleByNs,
  ).reduce((prevParamsAndComponentsByNs, currentParamsAndComponentsByNs) => {
    return mergeWith(
      prevParamsAndComponentsByNs,
      currentParamsAndComponentsByNs,
      (a, b) => {
        if (isSet(a) && isSet(b)) {
          return new Set([...a, ...b]);
        }
      },
    );
  }, {});

  const typedTransTypes = {
    params: "",
    components: "",
  };

  Object.entries(paramsAndComponentsByNs).forEach(
    ([ns, paramsAndComponentsByKey]) => {
      typedTransTypes.params += `"${ns}": {`;
      typedTransTypes.components += `"${ns}": {`;

      Object.entries(paramsAndComponentsByKey).forEach(
        ([key, paramsAndComponents]) => {
          const hasParams = paramsAndComponents.params.size > 0;
          const paramsType = hasParams
            ? `{${[...paramsAndComponents.params].reduce(
                (prevKeyParamTypes, param) => {
                  return `${prevKeyParamTypes}"${param}": ${param === "count" ? "number" : "any"};`;
                },
                "",
              )}}`
            : "never";
          const hasComponents = paramsAndComponents.components.size > 0;
          const components = [...paramsAndComponents.components];
          const areAllComponentsOptional =
            !hasComponents ||
            components.every((component) => allHTMLTags.includes(component));
          const componentsType = hasComponents
            ? `{${components.reduce((prevKeyComponentTypes, component) => {
                const isHTMLComponent = allHTMLTags.includes(component);

                return `${prevKeyComponentTypes}"${component}"${isHTMLComponent ? "?" : ""}: JSX.Element;`;
              }, "")}}`
            : "never";

          typedTransTypes.params += `"${key}"${hasParams ? "" : "?"}: ${paramsType};`;
          typedTransTypes.components += `"${key}"${areAllComponentsOptional ? "?" : ""}: ${componentsType};`;
        },
      );

      typedTransTypes.params += `};`;
      typedTransTypes.components += `};`;
    },
  );

  const headerContent = `
  /**
    * This file was generated via a script.
    * Please do not modify anything directly in this file.
    * Your changes will be overridden every time the script is executed.
  */`;
  const paramsAndComponentsTypeDefContent = `
    type TypedTransParams = {
      ${typedTransTypes.params}
    }

    type TypedTransComponents = {
      ${typedTransTypes.components}
    }
  `;

  const fileContent = `${headerContent}\n\n${paramsAndComponentsTypeDefContent}`;
  const prettifiedFileContent = await prettier.format(fileContent, {
    parser: "typescript",
  });

  try {
    const outputFilePath = "../../types/i18next-typed-trans.generated.d.ts";
    const resolvedOutputPath = path.resolve(__dirname, outputFilePath);

    await promises.writeFile(resolvedOutputPath, prettifiedFileContent);

    console.log(
      "Type definitions for TypedTrans have been successfully generated:",
      resolvedOutputPath,
    );
  } catch (err) {
    console.error(
      "An error occurred while saving the type definitions of TypedTrans.",
      err,
    );
  }
}
