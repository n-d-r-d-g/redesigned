/**
 * `SafeTrans` was created to flag runtime errors whenever either not enough or too many components are not specified in the `components` prop.
 * The `Trans` component from `next-i18next` does not indicate whenever components are missing or unnecessary.
 */

// TODO
// This strategy only works during runtime, i.e. the `SafeTrans` component needs to render to show errors;
// It's not ideal as you have to visit all pages and switch to every use case to check for errors.
// A better approach is to create a script that generates and saves the type definitions for the `components` prop in a file.
// Also generate the type definition for the `values` prop as relying only on missingInterpolationHandler in `next-i18next` creates the same issue, i.e. error thrown only at runtime.
// The script can then be executed automatically before running the dev server and before building the project.

import { HTMLProps, useEffect } from "react";
import { TFunction, i18n } from "i18next";
import { Trans } from "next-i18next";
import { TransProps } from "react-i18next";
import {
  $FirstNamespace,
  KeysWithoutReturnObjects,
  Namespace,
  ParseKeys,
  ParseKeysByKeyPrefix,
  TOptions,
} from "i18next";
import { _DefaultNamespace } from "react-i18next/TransWithoutContext";
import allHTMLTags from "../../../html-tags";
import { IS_DEV_ENV } from "../../../constants";

type Props<BaseTransProps> = BaseTransProps & {
  ignoreAllUnnecessaryComponents?: boolean;
  ignoredUnnecessaryComponents?: Array<string>;
  i18n: i18n;
};

/**
 * A *more* type-safe version of next-i18next's Trans component
 * @param {boolean=} ignoreAllUnnecessaryComponents - Components that are passed via the **components** prop but not required in the translated text will not be flagged as error
 * @param {string[]=} ignoredUnnecessaryComponents - A list of components that are passed via the **components** prop that will not be flagged as error if they are not required in the translated text
 * @param {i18n} i18n - i18n instance
 * @type {TransProps} - All others props come from the original Trans component
 * @returns
 */
export default function SafeTrans<
  Key extends ParseKeys<Ns, TOpt, KPrefix>,
  Ns extends Namespace = _DefaultNamespace,
  TOpt extends TOptions = object,
  KPrefix = undefined,
  E = HTMLProps<HTMLDivElement>,
>({
  ignoreAllUnnecessaryComponents = false,
  ignoredUnnecessaryComponents = [],
  ...props
}: Props<TransProps<Key, Ns, TOpt, KPrefix, E>>) {
  useEffect(() => {
    if (IS_DEV_ENV) {
      const { t, i18nKey, values, components } = props;
      const html = t?.(
        i18nKey as ParseKeysByKeyPrefix<
          KeysWithoutReturnObjects[$FirstNamespace<Ns>],
          KPrefix
        >,
        values as string,
      ) as undefined | string;
      const openingOrSelfClosingTagsRegex = /<[A-Za-z0-9\s-]+\/?>/g;
      const allHTMLTagNames = new Set(allHTMLTags);
      const allComponents = Object.keys(components || {});
      const nonHTMLComponents = new Set(
        allComponents.filter((tag) => !allHTMLTagNames.has(tag)),
      );
      const nonHTMLTagNamesInText = new Set<string>();
      const allTagNamesInText = [
        ...(html ?? "").matchAll(openingOrSelfClosingTagsRegex),
      ].reduce((tagNames, tag) => {
        const tagName = tag[0].replace(/[</\s>]/g, "");
        const isHTMLTag = allHTMLTagNames.has(tagName);

        tagNames.add(tagName);

        if (!isHTMLTag) {
          nonHTMLTagNamesInText.add(tagName);
        }

        return tagNames;
      }, new Set<string>());

      if (!ignoreAllUnnecessaryComponents) {
        const tagsInComponentsNotInText = allComponents.filter(
          (tag) =>
            !ignoredUnnecessaryComponents.includes(tag) &&
            !allTagNamesInText.has(tag),
        );

        if (tagsInComponentsNotInText.length > 0) {
          console.error(
            "Please remove the following unnecessary components:",
            "\n",
            tagsInComponentsNotInText,
            "\n",
            "Key:",
            i18nKey,
            "\n",
            "Namespace:",
            (t as TFunction<Ns, KPrefix> & { ns: Ns })?.ns,
          );
        }
      }

      const tagsInTextNotInComponents = [...nonHTMLTagNamesInText].filter(
        (tag) => !nonHTMLComponents.has(tag),
      );

      if (tagsInTextNotInComponents.length > 0) {
        console.error(
          "The following components are required:",
          "\n",
          tagsInTextNotInComponents,
          "\n",
          "Key:",
          i18nKey,
          "\n",
          "Namespace:",
          (t as TFunction<Ns, KPrefix> & { ns: Ns })?.ns,
        );
      }
    }
  }, [ignoreAllUnnecessaryComponents, ignoredUnnecessaryComponents, props]);

  return <Trans {...(props as TransProps<Key, Ns, TOpt, KPrefix, E>)} />;
}
