import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  DEFAULT_I18N_LOCALE,
  DEFAULT_I18N_NAMESPACE,
} from "../../../constants";
import { Pages } from "./components/Pages";
import { Route } from "./types";

export default function HomePage({ routes }: { routes: Route[] }) {
  return (
    <div className="flex flex-col items-center">
      <Pages routes={routes} />
    </div>
  );
}

const getRoutes = (
  folderPath = ""
): { slug: string | null; label: string }[] => {
  const pagesFolderAbsolutePath = path.join(process.cwd(), "src/pages");

  const folderContents = fs.readdirSync(
    path.join(pagesFolderAbsolutePath, folderPath),
    {
      withFileTypes: true,
    }
  );
  let routes: Route[] = [];

  for (const fileOrFolder of folderContents) {
    const relativeFileOrFolderPath = path.join(folderPath, fileOrFolder.name);
    const absoluteFileOrFolderPath = path.join(
      pagesFolderAbsolutePath,
      relativeFileOrFolderPath
    );
    const isFolder = fileOrFolder.isDirectory();

    if (isFolder && fileOrFolder.name !== "home") {
      const indexFileAbsolutePath = path.join(
        absoluteFileOrFolderPath,
        "index.page.tsx"
      );
      const isFirstLevelFolder = !relativeFileOrFolderPath.includes("/");
      const indexFileExists = fs.existsSync(indexFileAbsolutePath);

      if (isFirstLevelFolder) {
        routes.push({
          slug: null,
          label: fileOrFolder.name,
          children: getRoutes(relativeFileOrFolderPath),
        });
      } else if (indexFileExists) {
        routes.push({
          slug: relativeFileOrFolderPath.replace(/\\/g, "/"),
          label: fileOrFolder.name,
          children: getRoutes(relativeFileOrFolderPath),
        });
      } else {
        routes = routes.concat(getRoutes(relativeFileOrFolderPath));
      }
    }
  }

  return routes;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? DEFAULT_I18N_LOCALE, [
        DEFAULT_I18N_NAMESPACE,
      ])),
      routes: getRoutes(),
    },
  };
};
