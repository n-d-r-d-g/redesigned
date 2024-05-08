import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Formik } from "formik";
import { noop } from "lodash";
import { PreparationSteps } from "./components/PreparationSteps";
import { PaymentSteps } from "./components/PaymentSteps";
import { AdministrativeStatusCertificateSteps } from "./components/AdministrativeStatusCertificateSteps";
import { Conclusion } from "./components/Conclusion";
import TypedTrans from "@/components/TypedTrans/TypedTrans";
import TechnicalTerm from "@/components/TechnicalTerm/TechnicalTerm";
import Abbr from "@/components/Abbr/Abbr";
import { generateDocumentTitle } from "@/utils/functions";
import {
  DEFAULT_I18N_LOCALE,
  DEFAULT_I18N_NAMESPACE,
} from "../../../../../../../../constants";
import { initialValues } from "../c2c-utils";
import styles from "../../styles.module.css";

export default function C2ISaleInstructions() {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { t: tSecondHandVehicleC2CSaleInstructions } = useTranslation(
    "instructions-vehicle-transaction-2nd-hand-c2c-sale-page",
  );
  const documentTitle = generateDocumentTitle(
    tSecondHandVehicleC2CSaleInstructions("documentTitle"),
  );

  return (
    <>
      <Head>
        <title>{documentTitle}</title>
      </Head>

      <h1 className={styles.h1}>
        {tSecondHandVehicleC2CSaleInstructions("pageTitle")}
      </h1>
      <div className="one-col-text my-[4rem]">
        <Formik initialValues={initialValues} onSubmit={noop}>
          <form>
            <p>{tSecondHandVehicleC2CSaleInstructions("description")}</p>

            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="companyRepresentativeNote"
              components={{
                p: <p className="mt-3" />,
                em: <em className="font-bold" />,
              }}
            />

            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="preparation.title"
              components={{
                h2: (
                  <h2
                    id={tCommon("headingStepID", { count: 1 })}
                    className={styles.h2}
                  />
                ),
              }}
            />
            <PreparationSteps />

            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="payment.title"
              components={{
                h2: (
                  <h2
                    id={tCommon("headingStepID", { count: 2 })}
                    className={styles.h2}
                  />
                ),
              }}
            />
            <PaymentSteps />

            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="administrativeStatusCertificate.title"
              components={{
                h2: (
                  <h2
                    id={tCommon("headingStepID", { count: 3 })}
                    className={styles.h2}
                  />
                ),
                AdministrativeStatusCertificate: (
                  <TechnicalTerm name="administrativeStatusCertificate" />
                ),
              }}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="administrativeStatusCertificate.description"
              components={{
                NLTAAbbr: <Abbr name="nlta" />,
                NLTAContactLink: (
                  <Link
                    href="https://nlta.govmu.org/Pages/Contact%20Us/Contact-Us.aspx"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    className="rounded font-bold hover:text-black focus:ring-0 focus:ring-offset-0 focus-visible:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white hover:dark:text-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
                  />
                ),
              }}
            />
            <AdministrativeStatusCertificateSteps />

            <Conclusion />
          </form>
        </Formik>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? DEFAULT_I18N_LOCALE, [
        DEFAULT_I18N_NAMESPACE,
        "instructions-vehicle-transaction-2nd-hand-c2c-sale-page",
      ])),
    },
  };
};
