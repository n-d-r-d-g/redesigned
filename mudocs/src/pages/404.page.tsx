import { GetStaticProps } from "next";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { DEFAULT_I18N_LOCALE, DEFAULT_I18N_NAMESPACE } from "../../constants";

export default function Custom404() {
  const { t: t404 } = useTranslation("404");

  return (
    <div className="flex h-full flex-col items-center justify-between gap-4 py-24">
      <h1 className="text-center">404 | {t404("title")}</h1>
      <Link
        href="/"
        className="inline-flex max-w-full items-center justify-center rounded-lg border border-gray-200 px-4 py-2.5 text-center text-base font-medium text-black hover:border-blue-800 hover:bg-blue-800 hover:text-white hover:no-underline focus:outline-none focus:ring-0 focus:ring-blue-300 focus:ring-offset-0 focus-visible:no-underline focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700 dark:text-white dark:hover:border-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
      >
        {t404("goHome")}
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? DEFAULT_I18N_LOCALE, [
        DEFAULT_I18N_NAMESPACE,
        "404",
      ])),
    },
  };
};
