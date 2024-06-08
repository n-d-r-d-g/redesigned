import { useCallback } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useFormikContext } from "formik";
import FormSelect from "@/components/forms/FormSelect/FormSelect";
import Abbr from "@/components/Abbr/Abbr";
import ImportantLink from "@/components/ImportantLink/ImportantLink";
import TechnicalTerm from "@/components/TechnicalTerm/TechnicalTerm";
import Checkbox from "@/components/Checkbox/Checkbox";
import TypedTrans from "@/components/TypedTrans/TypedTrans";
import { DEFAULT_I18N_NAMESPACE } from "../../../../../../../../../constants";
import {
  isDirectorRequired,
  retrieveDirectorRequiredI18nText,
} from "../../c2c-utils";
import { InitialValues } from "../../types";
import styles from "../../../styles.module.css";

function RequiredDirectorNote() {
  const { values } = useFormikContext<InitialValues>();
  const directorIsRequired = isDirectorRequired(values);

  if (!directorIsRequired) return null;

  return (
    <TypedTrans
      ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
      i18nKey="preparation.requiredDirectorNote"
      params={{ numOfCompany1Directors: values.numOfCompany1Directors }}
      components={{
        p: <p className="col-start-2" />,
        em: <em className="font-bold text-green-800 dark:text-amber-400" />,
        NLTAAbbr: <Abbr name="nlta" />,
        AdministrativeStatusCertificate: (
          <TechnicalTerm name="administrativeStatusCertificate" />
        ),
      }}
    />
  );
}

function ConditionalInstructions() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByCompany1 =
    values.administrativeStatusCertificateIssuer === "company1";
  const isIssuedByCompany1AndCompany2 =
    values.administrativeStatusCertificateIssuer === "company1AndCompany2";
  const isPreparedByCompany1 = values.documentsPreparer === "company1";
  const isPreparedByCompany2 = values.documentsPreparer === "company2";
  const whetherDirectorIsRequired = retrieveDirectorRequiredI18nText(values);

  const Company1IssuerCompany1PreparerInstructions = useCallback(
    () => (
      <>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-1"
            name="prep"
            value="conditional-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1.preparedByCompany1.step1"
            params={{
              numOfCompany2Directors: values.numOfCompany2Directors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              BRNAbbr: <Abbr name="brn" />,
              ProofOfAddress: <TechnicalTerm name="proofOfAddress" />,
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-2"
            name="prep"
            value="conditional-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1.preparedByCompany1.step2"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              NLTAAbbr: <Abbr name="nlta" />,
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
              DeedOfSaleImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/deed-of-sale/cToC"
                  target="_blank"
                  rel="noreferrer noopener"
                />
              ),
              GovtDeedOfSaleLink: (
                <Link
                  href="https://nlta.govmu.org/Documents/Downloads/Download%20Forms/deed-sale.pdf"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="rounded font-bold hover:text-black focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:dark:text-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-3"
            name="prep"
            value="conditional-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1.preparedByCompany1.step3"
            params={{ whetherDirectorIsRequired }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              NLTAAbbr: <Abbr name="nlta" />,
              C1ToD1AuthorizationLetterImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/administrative-status-certificate-authorization-letter/c1ToD1"
                  target="_blank"
                  rel="noreferrer noopener"
                />
              ),
              C1ToR1AuthorizationLetterImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/administrative-status-certificate-authorization-letter/c1ToR2"
                  target="_blank"
                  rel="noreferrer noopener"
                />
              ),
              GovtAuthorizationLetterLink: (
                <Link
                  href="https://nlta.govmu.org/Documents/Downloads/Letter%20for%20gage%20authorize.pdf"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="rounded font-bold hover:text-black focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:dark:text-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-4"
            name="prep"
            value="conditional-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1.preparedByCompany1.step4"
            params={{
              numOfCompany1Directors: values.numOfCompany1Directors,
              whetherDirectorIsRequired,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-4"
                  className="hover:cursor-pointer"
                />
              ),
              BRNAbbr: <Abbr name="brn" />,
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-5"
            name="prep"
            value="conditional-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1.preparedByCompany1.step5"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-6"
            name="prep"
            value="conditional-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1.preparedByCompany1.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              PDFAbbr: <Abbr name="pdf" />,
              NLTAAbbr: <Abbr name="nlta" />,
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-7"
            name="prep"
            value="conditional-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1.preparedByCompany1.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-7"
                  className="hover:cursor-pointer"
                />
              ),
              PDFAbbr: <Abbr name="pdf" />,
            }}
          />
        </div>
      </>
    ),
    [
      values.numOfCompany1Directors,
      values.numOfCompany2Directors,
      whetherDirectorIsRequired,
    ],
  );

  const Company1IssuerCompany2PreparerInstructions = useCallback(
    () => (
      <>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-1"
            name="prep"
            value="conditional-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            params={{ whetherDirectorIsRequired }}
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1.preparedByCompany2.step1"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              NLTAAbbr: <Abbr name="nlta" />,
              C1ToD1AuthorizationLetterImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/administrative-status-certificate-authorization-letter/c1ToD1"
                  target="_blank"
                  rel="noreferrer noopener"
                />
              ),
              C1ToR1AuthorizationLetterImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/administrative-status-certificate-authorization-letter/c1ToR2"
                  target="_blank"
                  rel="noreferrer noopener"
                />
              ),
              GovtAuthorizationLetterLink: (
                <Link
                  href="https://nlta.govmu.org/Documents/Downloads/Letter%20for%20gage%20authorize.pdf"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="rounded font-bold hover:text-black focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:dark:text-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-2"
            name="prep"
            value="conditional-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1.preparedByCompany2.step2"
            params={{
              numOfCompany1Directors: values.numOfCompany1Directors,
              whetherDirectorIsRequired,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              BRNAbbr: <Abbr name="brn" />,
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-3"
            name="prep"
            value="conditional-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1.preparedByCompany2.step3"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-4"
            name="prep"
            value="conditional-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1.preparedByCompany2.step4"
            params={{ numOfCompany2Directors: values.numOfCompany2Directors }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-4"
                  className="hover:cursor-pointer"
                />
              ),
              BRNAbbr: <Abbr name="brn" />,
              ProofOfAddress: <TechnicalTerm name="proofOfAddress" />,
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-5"
            name="prep"
            value="conditional-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1.preparedByCompany2.step5"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              PDFAbbr: <Abbr name="pdf" />,
              NLTAAbbr: <Abbr name="nlta" />,
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-6"
            name="prep"
            value="conditional-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1.preparedByCompany2.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              PDFAbbr: <Abbr name="pdf" />,
            }}
          />
        </div>
      </>
    ),
    [
      values.numOfCompany1Directors,
      values.numOfCompany2Directors,
      whetherDirectorIsRequired,
    ],
  );

  const Company1AndCompany2IssuerCompany1PreparerInstructions = useCallback(
    () => (
      <>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-1"
            name="prep"
            value="conditional-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1AndCompany2.preparedByCompany1.step1"
            params={{
              numOfCompany2Directors: values.numOfCompany2Directors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              BRNAbbr: <Abbr name="brn" />,
              ProofOfAddress: <TechnicalTerm name="proofOfAddress" />,
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-2"
            name="prep"
            value="conditional-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1AndCompany2.preparedByCompany1.step2"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              NLTAAbbr: <Abbr name="nlta" />,
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
              DeedOfSaleImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/deed-of-sale/cToC"
                  target="_blank"
                  rel="noreferrer noopener"
                />
              ),
              GovtDeedOfSaleLink: (
                <Link
                  href="https://nlta.govmu.org/Documents/Downloads/Download%20Forms/deed-sale.pdf"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="rounded font-bold hover:text-black focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:dark:text-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-3"
            name="prep"
            value="conditional-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            params={{ whetherDirectorIsRequired }}
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1AndCompany2.preparedByCompany1.step3"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              NLTAAbbr: <Abbr name="nlta" />,
              C1ToD1AuthorizationLetterImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/administrative-status-certificate-authorization-letter/c1ToD1"
                  target="_blank"
                  rel="noreferrer noopener"
                />
              ),
              C1ToR1AuthorizationLetterImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/administrative-status-certificate-authorization-letter/c1ToR2"
                  target="_blank"
                  rel="noreferrer noopener"
                />
              ),
              GovtAuthorizationLetterLink: (
                <Link
                  href="https://nlta.govmu.org/Documents/Downloads/Letter%20for%20gage%20authorize.pdf"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="rounded font-bold hover:text-black focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:dark:text-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-4"
            name="prep"
            value="conditional-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1AndCompany2.preparedByCompany1.step4"
            params={{
              numOfCompany1Directors: values.numOfCompany1Directors,
              whetherDirectorIsRequired,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-4"
                  className="hover:cursor-pointer"
                />
              ),
              BRNAbbr: <Abbr name="brn" />,
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-5"
            name="prep"
            value="conditional-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1AndCompany2.preparedByCompany1.step5"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-6"
            name="prep"
            value="conditional-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1AndCompany2.preparedByCompany1.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              PDFAbbr: <Abbr name="pdf" />,
              NLTAAbbr: <Abbr name="nlta" />,
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-7"
            name="prep"
            value="conditional-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1AndCompany2.preparedByCompany1.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-7"
                  className="hover:cursor-pointer"
                />
              ),
              PDFAbbr: <Abbr name="pdf" />,
            }}
          />
        </div>
      </>
    ),
    [
      values.numOfCompany1Directors,
      values.numOfCompany2Directors,
      whetherDirectorIsRequired,
    ],
  );

  const Company1AndCompany2IssuerCompany2PreparerInstructions = useCallback(
    () => (
      <>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-1"
            name="prep"
            value="conditional-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            params={{ whetherDirectorIsRequired }}
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1AndCompany2.preparedByCompany2.step1"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              NLTAAbbr: <Abbr name="nlta" />,
              C1ToD1AuthorizationLetterImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/administrative-status-certificate-authorization-letter/c1ToD1"
                  target="_blank"
                  rel="noreferrer noopener"
                />
              ),
              C1ToR1AuthorizationLetterImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/administrative-status-certificate-authorization-letter/c1ToR2"
                  target="_blank"
                  rel="noreferrer noopener"
                />
              ),
              GovtAuthorizationLetterLink: (
                <Link
                  href="https://nlta.govmu.org/Documents/Downloads/Letter%20for%20gage%20authorize.pdf"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="rounded font-bold hover:text-black focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:dark:text-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-2"
            name="prep"
            value="conditional-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1AndCompany2.preparedByCompany2.step2"
            params={{
              numOfCompany1Directors: values.numOfCompany1Directors,
              whetherDirectorIsRequired,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              BRNAbbr: <Abbr name="brn" />,
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-3"
            name="prep"
            value="conditional-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1AndCompany2.preparedByCompany2.step3"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-4"
            name="prep"
            value="conditional-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1AndCompany2.preparedByCompany2.step4"
            params={{ numOfCompany2Directors: values.numOfCompany2Directors }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-4"
                  className="hover:cursor-pointer"
                />
              ),
              BRNAbbr: <Abbr name="brn" />,
              ProofOfAddress: <TechnicalTerm name="proofOfAddress" />,
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-5"
            name="prep"
            value="conditional-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1AndCompany2.preparedByCompany2.step5"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              PDFAbbr: <Abbr name="pdf" />,
              NLTAAbbr: <Abbr name="nlta" />,
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-prep-conditional-step-6"
            name="prep"
            value="conditional-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany1AndCompany2.preparedByCompany2.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              PDFAbbr: <Abbr name="pdf" />,
            }}
          />
        </div>
      </>
    ),
    [
      values.numOfCompany1Directors,
      values.numOfCompany2Directors,
      whetherDirectorIsRequired,
    ],
  );

  if (isIssuedByCompany1 && isPreparedByCompany1)
    return <Company1IssuerCompany1PreparerInstructions />;
  if (isIssuedByCompany1 && isPreparedByCompany2)
    return <Company1IssuerCompany2PreparerInstructions />;
  if (isIssuedByCompany1AndCompany2 && isPreparedByCompany1)
    return <Company1AndCompany2IssuerCompany1PreparerInstructions />;
  if (isIssuedByCompany1AndCompany2 && isPreparedByCompany2)
    return <Company1AndCompany2IssuerCompany2PreparerInstructions />;
  return null;
}

export function PreparationSteps() {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { t: tSecondHandVehicleC2CSaleInstructions } = useTranslation(
    "instructions-vehicle-transaction-2nd-hand-c2c-sale-page",
  );

  return (
    <div className="my-2 flex flex-col gap-3">
      <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto] gap-2">
        <Checkbox
          id="sale-prep-step-1"
          name="prep"
          value="step-1"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
          i18nKey="preparation.step1"
          components={{
            label: (
              <label
                htmlFor="sale-prep-step-1"
                className="hover:cursor-pointer"
              />
            ),
          }}
        />
        <FormSelect
          name="numOfCompany1Directors"
          label={tSecondHandVehicleC2CSaleInstructions(
            "form.numOfCompany1Directors.label",
          )}
          className="w-full xs:w-auto"
          containerClassName="col-start-2 leading-4"
        >
          <option value="singleCompany1Director">
            {tCommon("numOfPeople.single")}
          </option>
          <option value="multipleCompany1Directors">
            {tCommon("numOfPeople.multiple")}
          </option>
        </FormSelect>
        <FormSelect
          name="numOfCompany2Directors"
          label={tSecondHandVehicleC2CSaleInstructions(
            "form.numOfCompany2Directors.label",
          )}
          className="w-full xs:w-auto"
          containerClassName="col-start-2 mt-2 leading-4"
        >
          <option value="singleCompany2Director">
            {tCommon("numOfPeople.single")}
          </option>
          <option value="multipleCompany2Directors">
            {tCommon("numOfPeople.multiple")}
          </option>
        </FormSelect>
      </div>
      <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto] gap-2">
        <Checkbox
          id="sale-prep-step-2"
          name="prep"
          value="step-2"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
          i18nKey="preparation.step2"
          components={{
            label: (
              <label
                htmlFor="sale-prep-step-2"
                className="hover:cursor-pointer"
              />
            ),
            DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
          }}
        />
        <FormSelect
          name="documentsPreparer"
          label={tSecondHandVehicleC2CSaleInstructions(
            "form.documentsPreparer.label",
          )}
          className="w-full xs:w-auto"
          containerClassName="col-start-2 leading-4"
        >
          <option value="company1">
            {tCommon("documentsPreparers.vendor")}
          </option>
          <option value="company2">
            {tCommon("documentsPreparers.purchaser")}
          </option>
        </FormSelect>
      </div>
      <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto] gap-2">
        <Checkbox
          id="sale-prep-step-3"
          name="prep"
          value="step-3"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
          i18nKey="preparation.step3"
          components={{
            label: (
              <label
                htmlFor="sale-prep-step-3"
                className="hover:cursor-pointer"
              />
            ),
            NLTAAbbr: <Abbr name="nlta" />,
            AdministrativeStatusCertificate: (
              <TechnicalTerm name="administrativeStatusCertificate" />
            ),
            DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
          }}
        />
        <FormSelect
          name="vendorHasStamp"
          label={
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey={"form.vendorHasStamp.label"}
            />
          }
          className="w-full xs:w-auto"
          containerClassName="col-start-2 leading-4"
        >
          <option value="yes">{tCommon("yes")}</option>
          <option value="no">{tCommon("no")}</option>
        </FormSelect>
        <FormSelect
          name="isVehicleRegistrationBookValid"
          label={
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey={"form.isVehicleRegistrationBookValid.label"}
              components={{
                VehicleRegistrationBook: (
                  <TechnicalTerm name="vehicleRegistrationBook" />
                ),
              }}
            />
          }
          className="w-full xs:w-auto"
          containerClassName="col-start-2 mt-2 leading-4"
        >
          <option value="yes">{tCommon("yes")}</option>
          <option value="no">{tCommon("no")}</option>
        </FormSelect>
        <FormSelect
          name="administrativeStatusCertificateIssuer"
          label={
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey={"form.administrativeStatusCertificateIssuer.label"}
              components={{
                NLTAAbbr: <Abbr name="nlta" />,
              }}
            />
          }
          className="w-full xs:w-auto"
          containerClassName="col-start-2 mt-2 leading-4"
        >
          <option value="company1">
            {tCommon("administrativeStatusCertificateIssuers.vendor")}
          </option>
          <option value="company1AndCompany2">
            {tCommon(
              "administrativeStatusCertificateIssuers.vendorAndPurchaser",
              {
                numOfVendors: "singleVendor",
                numOfPurchasers: "singlePurchaser",
              },
            )}
          </option>
        </FormSelect>
        <RequiredDirectorNote />
      </div>
      <ConditionalInstructions />
      <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto] gap-2">
        <Checkbox
          id="sale-payment-last-step"
          name="payment"
          value="last-step"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
          i18nKey="preparation.lastStep"
          components={{
            label: (
              <label
                htmlFor="sale-payment-last-step"
                className="hover:cursor-pointer"
              />
            ),
          }}
        />
        <FormSelect
          name="paymentMethod"
          label={tSecondHandVehicleC2CSaleInstructions(
            "form.paymentMethod.label",
          )}
          className="w-full xs:w-auto"
          containerClassName="col-start-2 leading-4"
        >
          <option value="cash">{tCommon("paymentMethods.cash")}</option>
          <option value="notCash">{tCommon("paymentMethods.notCash")}</option>
        </FormSelect>
      </div>
    </div>
  );
}
