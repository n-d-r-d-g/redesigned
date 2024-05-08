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
import { RegistrationSteps } from "../../components/RegistrationSteps";
import { InsuranceSteps } from "../../components/InsuranceSteps";
import { TransferSteps } from "../../components/TransferSteps";
import { Conclusion } from "./components/Conclusion";
import TypedTrans from "@/components/TypedTrans/TypedTrans";
import TechnicalTerm from "@/components/TechnicalTerm/TechnicalTerm";
import Abbr from "@/components/Abbr/Abbr";
import { generateDocumentTitle } from "@/utils/functions";
import {
  DEFAULT_I18N_LOCALE,
  DEFAULT_I18N_NAMESPACE,
} from "../../../../../../../../constants";
import { initialValues } from "../i2c-utils";
import styles from "../../styles.module.css";

function TransferInstructions() {
  return (
    <>
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="transfer.description"
        params={{
          purchaserType: "company",
          numOfPurchasers: "singlePurchaser",
        }}
        components={{
          NLTA: <Abbr name="nlta" />,
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
      <TransferSteps
        purchaserType="company"
        numOfPurchasers="singlePurchaser"
      />
    </>
  );
}

export default function I2CPurchaseInstructions() {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { t: tSecondHandVehicleI2CPurchaseInstructions } = useTranslation(
    "instructions-vehicle-transaction-2nd-hand-i2c-purchase-page",
  );
  const documentTitle = generateDocumentTitle(
    tSecondHandVehicleI2CPurchaseInstructions("documentTitle"),
  );

  return (
    <>
      <Head>
        <title>{documentTitle}</title>
      </Head>

      <h1 className={styles.h1}>
        {tSecondHandVehicleI2CPurchaseInstructions("pageTitle")}
      </h1>

      <div className="one-col-text my-[4rem]">
        <Formik initialValues={initialValues} onSubmit={noop}>
          <form>
            <p>{tSecondHandVehicleI2CPurchaseInstructions("description")}</p>

            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
              i18nKey="companyRepresentativeNote"
              components={{
                p: <p className="mt-3" />,
                em: <em className="font-bold" />,
              }}
            />

            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
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
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
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
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
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
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
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

            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-page"
              i18nKey="registration.title"
              components={{
                h2: (
                  <h2
                    id={tCommon("headingStepID", { count: 4 })}
                    className={styles.h2}
                  />
                ),
              }}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-page"
              i18nKey="registration.description"
              components={{
                em: <em className="font-bold" />,
                RegistrarLink: (
                  <Link
                    href="https://registrar.govmu.org/Pages/Contact%20Us/Contact-Us.aspx"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    className="rounded font-bold focus:ring-0 focus:ring-offset-0 focus-visible:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
                  />
                ),
                DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
                AdministrativeStatusCertificate: (
                  <TechnicalTerm name="administrativeStatusCertificate" />
                ),
              }}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-page"
              i18nKey="registration.note"
              components={{
                p: <p className="my-4" />,
                em: <em className="font-bold" />,
              }}
            />
            <RegistrationSteps />

            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-page"
              i18nKey="insurance.title"
              components={{
                h2: (
                  <h2
                    id={tCommon("headingStepID", { count: 5 })}
                    className={styles.h2}
                  />
                ),
              }}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-page"
              i18nKey="insurance.description"
              components={{
                em: <em className="font-bold" />,
                ComprehensiveInsuranceCover: (
                  <TechnicalTerm name="comprehensiveInsuranceCover" />
                ),
                ThirdPartyInsuranceCover: (
                  <TechnicalTerm name="thirdPartyInsuranceCover" />
                ),
                DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
              }}
            />
            <InsuranceSteps purchaserType="company" />

            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-page"
              i18nKey="transfer.title"
              components={{
                h2: (
                  <h2
                    id={tCommon("headingStepID", { count: 6 })}
                    className={styles.h2}
                  />
                ),
              }}
            />
            <TransferInstructions />

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
        "instructions-vehicle-transaction-2nd-hand-i2c-purchase-page",
        "instructions-vehicle-transaction-2nd-hand-page",
      ])),
    },
  };
};
