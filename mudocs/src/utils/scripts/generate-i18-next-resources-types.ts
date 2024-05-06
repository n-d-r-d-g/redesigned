import { promises } from "fs";
import path from "path";
import prettier from "prettier";
import { DEFAULT_I18N_LOCALE } from "../../../constants";

/**
 * Generate i18NextResources type definition.
 * Make sure to restart the TS server in VSCode after executing this script.
 */
export async function generateI18NextResourcesTypeDef() {
  const resources: Record<string, unknown> = {};

  try {
    const namespaces = await promises.readdir(
      path.resolve(__dirname, "../../../public/locales/en"),
    );
    let nsWithExt;

    for (nsWithExt of namespaces) {
      const ns = nsWithExt.split(".")[0];
      resources[ns] =
        `../../public/locales/${DEFAULT_I18N_LOCALE}/${nsWithExt}`;
    }

    const headerContent = `
    /**
      * This file was generated via a script.
      * Please do not modify anything directly in this file.
      * Your changes will be overridden every time the script is executed.
    */`;
    const typeDefinitionsContent = `
      type I18NextResources = {
        ${Object.entries(resources).reduce(
          (str, [ns, filePath], index, resourcesArray) => {
            str += `"${ns}": typeof import("${filePath}");${index === resourcesArray.length - 1 ? "" : "\n"}`;

            return str;
          },
          "",
        )}
      }
    `;
    const fileContent = `${headerContent}\n\n${typeDefinitionsContent}`;
    const prettifiedFileContent = await prettier.format(fileContent, {
      parser: "typescript",
    });

    try {
      const outputFilePath = "../../types/i18next-resources.generated.d.ts";
      const resolvedOutputPath = path.resolve(__dirname, outputFilePath);

      await promises.writeFile(resolvedOutputPath, prettifiedFileContent);

      console.log(
        "Type definitions for I18NextResources have been successfully generated:",
        resolvedOutputPath,
      );
    } catch (err) {
      console.error(
        "An error occurred while saving the type definitions of I18NextResources.",
        err,
      );
    }
  } catch (e) {
    console.error("An error occurred while reading namespace files.", e);
  }
}
