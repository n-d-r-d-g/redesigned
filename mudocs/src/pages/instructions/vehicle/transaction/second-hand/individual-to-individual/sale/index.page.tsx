import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Formik } from "formik";
import { noop } from "lodash";
import Abbr from "@/components/Abbr/Abbr";
import TechnicalTerm from "@/components/TechnicalTerm/TechnicalTerm";
import TypedTrans from "@/components/TypedTrans/TypedTrans";
import { Conclusion } from "./components/Conclusion";
import { PreparationSteps } from "./components/PreparationSteps";
import { PaymentSteps } from "./components/PaymentSteps";
import { NonAttachmentCertificateSteps } from "./components/NonAttachmentCertificateSteps";
import { generateDocumentTitle } from "@/utils/functions";
import {
  DEFAULT_I18N_LOCALE,
  DEFAULT_I18N_NAMESPACE,
} from "../../../../../../../../constants";
import { initialValues } from "../i2i-utils";
import styles from "../../styles.module.css";

export default function I2ISaleInstructions() {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { t: tSecondHandVehicleI2ISaleInstructions } = useTranslation(
    "instructions-vehicle-transaction-2nd-hand-i2i-sale-page",
  );
  const documentTitle = generateDocumentTitle(
    tSecondHandVehicleI2ISaleInstructions("documentTitle"),
  );

  return (
    <>
      <Head>
        <title>{documentTitle}</title>
      </Head>

      <h1 className={styles.h1}>
        {tSecondHandVehicleI2ISaleInstructions("pageTitle")}
      </h1>

      <div className="one-col-text my-[4rem]">
        <Formik initialValues={initialValues} onSubmit={noop}>
          <form>
            <p>{tSecondHandVehicleI2ISaleInstructions("description")}</p>

            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.title"
              components={{
                h2: (
                  <h2
                    id={tCommon("headingStepID", { count: 3 })}
                    className={styles.h2}
                  />
                ),
                NonAttachmentCertificate: (
                  <TechnicalTerm name="nonAttachmentCertificate" />
                ),
              }}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.description"
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
            <NonAttachmentCertificateSteps />

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
        "instructions-vehicle-transaction-2nd-hand-i2i-sale-page",
      ])),
    },
  };
};
