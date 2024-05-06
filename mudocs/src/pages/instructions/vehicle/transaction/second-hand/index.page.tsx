import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Formik, useFormikContext } from "formik";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { noop } from "lodash";
import Checkbox from "@/components/Checkbox/Checkbox";
import FormSelect from "@/components/forms/FormSelect/FormSelect";
import Abbr from "@/components/Abbr/Abbr";
import TypedTrans from "@/components/TypedTrans/TypedTrans";
import TechnicalTerm from "@/components/TechnicalTerm/TechnicalTerm";
import {
  convertCamelToKebabCase,
  generateDocumentTitle,
} from "@/utils/functions";
import {
  DEFAULT_I18N_LOCALE,
  DEFAULT_I18N_NAMESPACE,
} from "../../../../../../constants";
import styles from "./styles.module.css";

type InitialValues = {
  identity: "vendor" | "purchaser";
  transactionModel:
    | "individualToIndividual"
    | "individualToCompany"
    | "companyToIndividual";
};

const initialValues: InitialValues = {
  identity: "vendor",
  transactionModel: "individualToIndividual",
};

function VendorInstructions() {
  return (
    <>
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="notes.vendorItems.item1"
        components={{
          NLTAAbbr: <Abbr name="nlta" />,
        }}
      />
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="notes.vendorItems.item2"
        components={{
          NLTAAbbr: <Abbr name="nlta" />,
        }}
      />
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="notes.vendorItems.item3"
        components={{
          NLTAAbbr: <Abbr name="nlta" />,
        }}
      />
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="notes.vendorItems.item4"
        components={{
          NLTAAbbr: <Abbr name="nlta" />,
        }}
      />
    </>
  );
}

function PurchaserInstructions() {
  return (
    <>
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="notes.purchaserItems.item1"
      />
      <li>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="notes.purchaserItems.item2.label"
        />
        <div className="mb-3 mt-2 flex flex-col gap-3">
          <div className="flex gap-2">
            <Checkbox
              id="purchaser-vehicle-item-1"
              name="purchaser-vehicle-items"
              value="purchaser-vehicle-item-1"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-page"
              i18nKey="notes.purchaserItems.item2.checklist.item1"
              components={{
                label: (
                  <label
                    htmlFor="purchaser-vehicle-item-1"
                    className="first-letter:uppercase hover:cursor-pointer"
                  />
                ),
                EmergencyTriangle: <TechnicalTerm name="emergencyTriangle" />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="purchaser-vehicle-item-2"
              name="purchaser-vehicle-items"
              value="purchaser-vehicle-item-2"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-page"
              i18nKey="notes.purchaserItems.item2.checklist.item2"
              components={{
                label: (
                  <label
                    htmlFor="purchaser-vehicle-item-2"
                    className="first-letter:uppercase hover:cursor-pointer"
                  />
                ),
                IndelibleChalk: <TechnicalTerm name="indelibleChalk" />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="purchaser-vehicle-item-3"
              name="purchaser-vehicle-items"
              value="purchaser-vehicle-item-3"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-page"
              i18nKey="notes.purchaserItems.item2.checklist.item3"
              components={{
                label: (
                  <label
                    htmlFor="purchaser-vehicle-item-3"
                    className="first-letter:uppercase hover:cursor-pointer"
                  />
                ),
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="purchaser-vehicle-item-4"
              name="purchaser-vehicle-items"
              value="purchaser-vehicle-item-4"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-page"
              i18nKey="notes.purchaserItems.item2.checklist.item4"
              components={{
                label: (
                  <label
                    htmlFor="purchaser-vehicle-item-4"
                    className="first-letter:uppercase hover:cursor-pointer"
                  />
                ),
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="purchaser-vehicle-item-5"
              name="purchaser-vehicle-items"
              value="purchaser-vehicle-item-5"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-page"
              i18nKey="notes.purchaserItems.item2.checklist.item5"
              components={{
                label: (
                  <label
                    htmlFor="purchaser-vehicle-item-5"
                    className="first-letter:uppercase hover:cursor-pointer"
                  />
                ),
                Jack: <TechnicalTerm name="jack" />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="purchaser-vehicle-item-6"
              name="purchaser-vehicle-items"
              value="purchaser-vehicle-item-6"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-page"
              i18nKey="notes.purchaserItems.item2.checklist.item6"
              components={{
                label: (
                  <label
                    htmlFor="purchaser-vehicle-item-6"
                    className="first-letter:uppercase hover:cursor-pointer"
                  />
                ),
                LugWrench: <TechnicalTerm name="lugWrench" />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="purchaser-vehicle-item-7"
              name="purchaser-vehicle-items"
              value="purchaser-vehicle-item-7"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-page"
              i18nKey="notes.purchaserItems.item2.checklist.item7"
              components={{
                label: (
                  <label
                    htmlFor="purchaser-vehicle-item-7"
                    className="first-letter:uppercase hover:cursor-pointer"
                  />
                ),
                AgreedStatementOfFacts: (
                  <TechnicalTerm name="agreedStatementOfFacts" />
                ),
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="purchaser-vehicle-item-8"
              name="purchaser-vehicle-items"
              value="purchaser-vehicle-item-8"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-page"
              i18nKey="notes.purchaserItems.item2.checklist.item8"
              components={{
                label: (
                  <label
                    htmlFor="purchaser-vehicle-item-8"
                    className="first-letter:uppercase hover:cursor-pointer"
                  />
                ),
                li: <li className="first-letter:uppercase" />,
                InsuranceVignette: <TechnicalTerm name="insuranceVignette" />,
                FitnessCertificate: <TechnicalTerm name="fitnessCertificate" />,
                MVL: <Abbr name="mvl" />,
              }}
            />
          </div>
        </div>
      </li>
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="notes.purchaserItems.item3"
        components={{
          ComprehensiveCover: (
            <TechnicalTerm name="comprehensiveInsuranceCover" />
          ),
          ThirdPartyCover: <TechnicalTerm name="thirdPartyInsuranceCover" />,
          GovtRegFeeLink: (
            <Link
              href="https://mof.govmu.org/Documents/Legislations/Economic%20and%20Financial%20Measures%20%28Miscellaneous%20Provisions%29%20Act%202012%20-%20Fourth%20Schedule.pdf"
              target="_blank"
              rel="noreferrer noopener nofollow"
              className="rounded font-bold focus:ring-0 focus:ring-offset-0 focus-visible:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
            />
          ),
          MyCarMuRegFeeCalculatorLink: (
            <Link
              href="https://www.mycar.mu/blog/vehicle-registration-fee-calculator"
              target="_blank"
              rel="noreferrer noopener nofollow"
              className="rounded font-bold focus:ring-0 focus:ring-offset-0 focus-visible:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
            />
          ),
        }}
      />
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="notes.purchaserItems.item4"
        components={{
          NLTAAbbr: <Abbr name="nlta" />,
        }}
      />
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="notes.purchaserItems.item5"
        components={{
          NLTAAbbr: <Abbr name="nlta" />,
        }}
      />
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="notes.purchaserItems.item6"
        components={{
          NLTAAbbr: <Abbr name="nlta" />,
        }}
      />
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="notes.purchaserItems.item7"
        components={{
          NLTAAbbr: <Abbr name="nlta" />,
        }}
      />
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="notes.purchaserItems.item8"
      />
    </>
  );
}

function Notes() {
  const { values } = useFormikContext<InitialValues>();
  const { t: tSecondHandVehicleTransactionInstructions } = useTranslation(
    "instructions-vehicle-transaction-2nd-hand-page",
  );
  const isVendor = values.identity === "vendor";
  const Instructions = isVendor ? VendorInstructions : PurchaserInstructions;

  return (
    <ul className="flex flex-col gap-2">
      {tSecondHandVehicleTransactionInstructions("notes.label")}
      <Instructions />
    </ul>
  );
}

function ViewButton() {
  const { values } = useFormikContext<InitialValues>();
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const transactionType = values.identity === "vendor" ? "sale" : "purchase";
  const transactionModel = convertCamelToKebabCase(values.transactionModel);

  return (
    <Link
      href={`/instructions/vehicle/transaction/second-hand/${transactionModel}/${transactionType}`}
      className="inline-flex w-full max-w-full items-center justify-center rounded-lg border border-gray-200 px-4 py-2.5 text-center text-base font-medium text-black hover:border-blue-800 hover:bg-blue-800 hover:text-white hover:no-underline focus:ring-0 focus:ring-offset-0 focus-visible:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700 dark:text-white dark:hover:border-blue-700 dark:hover:bg-blue-700 dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
    >
      {tCommon("viewInstructions")}
    </Link>
  );
}

export default function VehicleSaleOrPurchase() {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { t: tSecondHandVehicleTransactionInstructions } = useTranslation(
    "instructions-vehicle-transaction-2nd-hand-page",
  );
  const documentTitle = generateDocumentTitle(
    tSecondHandVehicleTransactionInstructions("documentTitle"),
  );

  return (
    <>
      <Head>
        <title>{documentTitle}</title>
      </Head>
      <h1 className="text-center">
        {tSecondHandVehicleTransactionInstructions("pageTitle")}
      </h1>
      <div className="one-col-text my-[4rem]">
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="description"
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="form.description"
          components={{
            p: <p className="mt-3" />,
          }}
        />
        <Formik initialValues={initialValues} onSubmit={noop}>
          <form className="flex flex-col gap-x-8 gap-y-5 pt-4">
            <FormSelect
              name="identity"
              label={tSecondHandVehicleTransactionInstructions(
                "form.identity.label",
              )}
            >
              <option value="vendor">
                {tCommon("responsibilities.vendorOrDelegate")}
              </option>
              <option value="purchaser">
                {tCommon("responsibilities.purchaserOrDelegate")}
              </option>
            </FormSelect>
            <FormSelect
              name="transactionModel"
              label={tSecondHandVehicleTransactionInstructions(
                "form.transactionModel.label",
              )}
            >
              <option value="individualToIndividual">
                {tCommon("transactionModels.i2i")}
              </option>
              <option value="individualToCompany">
                {tCommon("transactionModels.i2c")}
              </option>
              <option value="companyToIndividual">
                {tCommon("transactionModels.c2i")}
              </option>
              <option value="companyToCompany">
                {tCommon("transactionModels.c2c")}
              </option>
            </FormSelect>
            <Notes />
            <ViewButton />
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
        "instructions-vehicle-transaction-2nd-hand-page",
      ])),
    },
  };
};
