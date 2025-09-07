import { GetServerSideProps } from "next";
import { retrieveLocalePath } from "@/utils/functions";
import { DEFAULT_I18N_LOCALE } from "../../constants";
import { I18nLocale } from "@/types";
import { CURRENT_FINANCIAL_YEAR_NAMESPACE } from "./2025-2026/reusables";

export default function HomePage() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    redirect: {
      destination: retrieveLocalePath(
        `/${CURRENT_FINANCIAL_YEAR_NAMESPACE}/calculator`,
        (locale as undefined | I18nLocale) ?? DEFAULT_I18N_LOCALE
      ),
      statusCode: 301,
    },
  };
};
