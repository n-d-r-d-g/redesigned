import { GetServerSideProps } from "next";
import { retrieveLocalePath } from "@/utils/functions";
import { DEFAULT_I18N_LOCALE } from "../../constants";
import { I18nLocale } from "@/types";

export default function HomePage() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    redirect: {
      destination: retrieveLocalePath(
        `/2023-2024`,
        (locale as undefined | I18nLocale) ?? DEFAULT_I18N_LOCALE
      ),
      statusCode: 301,
    },
  };
};
