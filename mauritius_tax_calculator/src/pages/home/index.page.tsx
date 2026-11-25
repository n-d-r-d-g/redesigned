import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
import {
  DEFAULT_I18N_LOCALE,
  DEFAULT_I18N_NAMESPACE,
} from "../../../constants";
import { Pages } from "./components/Pages";
import { Route } from "./types";
import { getRoutes } from "./getRoutes";
import { useTranslation } from "next-i18next/pages";

interface HomePageProps {
  routes: Route[];
}

export default function HomePage({ routes }: HomePageProps) {
  const { t: tCommon } = useTranslation("common");

  return (
    <>
      <h1 className="mb-4">{tCommon("websiteTitle")}</h1>

      <p className="text-center one-col-text mb-8">
        {tCommon("websiteDescription")}
      </p>

      <div className="w-[80rem] max-w-full flex flex-col items-center pb-24 mx-auto">
        <Pages routes={routes} />
      </div>
    </>
  );
}

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
