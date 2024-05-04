import { GetStaticProps } from "next";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { DEFAULT_I18N_LOCALE, DEFAULT_I18N_NAMESPACE } from "../../constants";
import { Button } from "@nextui-org/react";

export default function Custom404() {
  const { t: t404 } = useTranslation("404");

  return (
    <div className="flex flex-col items-center justify-between gap-4 my-auto py-24">
      <h1 className="text-center">404 | {t404("title")}</h1>
      <Button
        type="button"
        color="primary"
        size="lg"
        radius="sm"
        as={Link}
        href="/"
        passHref
      >
        {t404("goHome")}
      </Button>
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
