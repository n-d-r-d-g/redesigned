import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DEFAULT_I18N_LOCALE, DEFAULT_I18N_NAMESPACE } from "../../constants";

export default function Home() {
  const { t: tHomePage } = useTranslation("home-page");

  return (
    <>
      <Head>
        <title>MUDOCS</title>
      </Head>
      <h1>{tHomePage("welcome")}</h1>
      <p className="text-center">{tHomePage("description")}</p>
      <div className="one-col-text flex flex-col justify-between bg-white pb-24 dark:bg-slate-900">
        <h2>{tHomePage("instructions.title")}</h2>
        <p>{tHomePage("instructions.description")}</p>
        <h3>{tHomePage("instructions.vehicles.title")}</h3>
        <ul>
          <li>
            <Link
              href="/instructions/vehicle/transaction/second-hand"
              className="rounded font-bold focus:ring-0 focus:ring-offset-0 focus-visible:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
            >
              {tHomePage("instructions.vehicles.secondHandSaleOrPurchase")}
            </Link>
          </li>
        </ul>

        <h2>{tHomePage("documentGenerators.title")}</h2>
        <p>{tHomePage("documentGenerators.description")}</p>
        <h3>{tHomePage("documentGenerators.vehicles.title")}</h3>
        <ul>
          <li>
            <Link
              href="/doc-gen/vehicle/non-attachment-certificate-authorization-letter"
              className="rounded font-bold focus:ring-0 focus:ring-offset-0 focus-visible:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
            >
              {tHomePage(
                "documentGenerators.vehicles.nonAttachmentCertificateAuthorizationLetter",
              )}
            </Link>
          </li>
          <li>
            <Link
              href="/doc-gen/vehicle/deed-of-sale"
              className="rounded font-bold focus:ring-0 focus:ring-offset-0 focus-visible:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
            >
              {tHomePage("documentGenerators.vehicles.deedOfSale")}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? DEFAULT_I18N_LOCALE, [
        DEFAULT_I18N_NAMESPACE,
        "home-page",
      ])),
    },
  };
};
