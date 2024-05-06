import { ChangeEvent, useCallback } from "react";
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
} from "../../c2i-utils";
import { InitialValues } from "../../types";
import styles from "../../../styles.module.css";

function NonAttachmentIssuerFormSelect() {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { values } = useFormikContext<InitialValues>();
  const directorIsRequired = isDirectorRequired(values);

  return (
    <FormSelect
      name="nonAttachmentIssuer"
      label={
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
          i18nKey={"form.nonAttachmentIssuer.label"}
          components={{
            NLTAAbbr: <Abbr name="nlta" />,
          }}
        />
      }
      className="w-full xs:w-auto"
      containerClassName="col-start-2 mt-2 leading-4"
    >
      <option value="company">
        {tCommon("nonAttachmentCertificateIssuers.company")}
      </option>
      {!directorIsRequired && (
        <option value="purchaser">
          {tCommon("nonAttachmentCertificateIssuers.purchaser")}
        </option>
      )}
      <option value="companyAndPurchaser">
        {tCommon("nonAttachmentCertificateIssuers.companyAndPurchaser", {
          numOfDirectors: "singleDirector",
          numOfPurchasers: values.numOfPurchasers,
        })}
      </option>
    </FormSelect>
  );
}

function RequiredDirectorNote() {
  const { values } = useFormikContext<InitialValues>();
  const directorIsRequired = isDirectorRequired(values);

  if (!directorIsRequired) return null;

  return (
    <TypedTrans
      ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
      i18nKey="preparation.requiredDirectorNote"
      params={{ numOfDirectors: values.numOfDirectors }}
      components={{
        p: <p className="col-start-2" />,
        em: <em className="font-bold text-green-800 dark:text-amber-400" />,
        NLTAAbbr: <Abbr name="nlta" />,
        nonAttachmentCertificate: (
          <TechnicalTerm name="nonAttachmentCertificate" />
        ),
      }}
    />
  );
}

function ConditionalInstructions() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByCompany = values.nonAttachmentIssuer === "company";
  const isIssuedByPurchaser = values.nonAttachmentIssuer === "purchaser";
  const isIssuedByCompanyAndPurchaser =
    values.nonAttachmentIssuer === "companyAndPurchaser";
  const isPreparedByCompany = values.documentsPreparer === "company";
  const isPreparedByPurchaser = values.documentsPreparer === "purchaser";
  const whetherDirectorIsRequired = retrieveDirectorRequiredI18nText(values);

  const CompanyIssuerCompanyPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByCompany.step1"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-1"
                  className="hover:cursor-pointer"
                />
              ),
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByCompany.step2"
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
                  href="/doc-gen/vehicle/deed-of-sale/cToI"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByCompany.step3"
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
                  href="/doc-gen/vehicle/non-attachment-certificate-authorization-letter/c1ToD1"
                  target="_blank"
                  rel="noreferrer noopener"
                />
              ),
              C1ToR1AuthorizationLetterImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/non-attachment-certificate-authorization-letter/c1ToR2"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByCompany.step4"
            params={{
              numOfDirectors: values.numOfDirectors,
              numOfPurchasers: values.numOfPurchasers,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByCompany.step5"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByCompany.step6"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByCompany.step7"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
    [values.numOfDirectors, values.numOfPurchasers, whetherDirectorIsRequired],
  );

  const CompanyIssuerPurchaserPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByPurchaser.step1"
            params={{ whetherDirectorIsRequired }}
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
                  href="/doc-gen/vehicle/non-attachment-certificate-authorization-letter/c1ToD1"
                  target="_blank"
                  rel="noreferrer noopener"
                />
              ),
              C1ToR1AuthorizationLetterImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/non-attachment-certificate-authorization-letter/c1ToR2"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByPurchaser.step2"
            params={{
              numOfDirectors: values.numOfDirectors,
              numOfPurchasers: values.numOfPurchasers,
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
              ProofOfAddress: <TechnicalTerm name="proofOfAddress" />,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByPurchaser.step3"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByPurchaser.step4"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-4"
                  className="hover:cursor-pointer"
                />
              ),
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByPurchaser.step5"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByPurchaser.step6"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
    [values.numOfDirectors, values.numOfPurchasers, whetherDirectorIsRequired],
  );

  const PurchaserIssuerCompanyPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByCompany.step1"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-1"
                  className="hover:cursor-pointer"
                />
              ),
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByCompany.step2"
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
                  href="/doc-gen/vehicle/deed-of-sale/cToI"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByCompany.step3"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              NLTAAbbr: <Abbr name="nlta" />,
              C1ToI2AuthorizationLetterImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/non-attachment-certificate-authorization-letter/c1ToI2"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByCompany.step4"
            params={{
              numOfDirectors: values.numOfDirectors,
              numOfPurchasers: values.numOfPurchasers,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByCompany.step5"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByCompany.step6"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByCompany.step7"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
    [values.numOfDirectors, values.numOfPurchasers, whetherDirectorIsRequired],
  );

  const PurchaserIssuerPurchaserPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByPurchaser.step1"
            params={{
              numOfDirectors: values.numOfDirectors,
              numOfPurchasers: values.numOfPurchasers,
              whetherDirectorIsRequired,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByPurchaser.step2"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-2"
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
            id="sale-prep-conditional-step-3"
            name="prep"
            value="conditional-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByPurchaser.step3"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfAddress: <TechnicalTerm name="proofOfAddress" />,
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByPurchaser.step4"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-4"
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
            id="sale-prep-conditional-step-5"
            name="prep"
            value="conditional-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByPurchaser.step5"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              PDFAbbr: <Abbr name="pdf" />,
            }}
          />
        </div>
      </>
    ),
    [values.numOfDirectors, values.numOfPurchasers, whetherDirectorIsRequired],
  );

  const CompanyAndPurchaserIssuerCompanyPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompanyAndPurchaser.preparedByCompany.step1"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-1"
                  className="hover:cursor-pointer"
                />
              ),
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompanyAndPurchaser.preparedByCompany.step2"
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
                  href="/doc-gen/vehicle/deed-of-sale/cToI"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompanyAndPurchaser.preparedByCompany.step3"
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
                  href="/doc-gen/vehicle/non-attachment-certificate-authorization-letter/c1ToD1"
                  target="_blank"
                  rel="noreferrer noopener"
                />
              ),
              C1ToR1AuthorizationLetterImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/non-attachment-certificate-authorization-letter/c1ToR2"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompanyAndPurchaser.preparedByCompany.step4"
            params={{
              numOfDirectors: values.numOfDirectors,
              numOfPurchasers: values.numOfPurchasers,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompanyAndPurchaser.preparedByCompany.step5"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompanyAndPurchaser.preparedByCompany.step6"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompanyAndPurchaser.preparedByCompany.step7"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
    [values.numOfDirectors, values.numOfPurchasers, whetherDirectorIsRequired],
  );

  const CompanyAndPurchaserIssuerPurchaserPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompanyAndPurchaser.preparedByPurchaser.step1"
            params={{ whetherDirectorIsRequired }}
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
                  href="/doc-gen/vehicle/non-attachment-certificate-authorization-letter/c1ToD1"
                  target="_blank"
                  rel="noreferrer noopener"
                />
              ),
              C1ToR1AuthorizationLetterImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/non-attachment-certificate-authorization-letter/c1ToR2"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompanyAndPurchaser.preparedByPurchaser.step2"
            params={{
              numOfDirectors: values.numOfDirectors,
              numOfPurchasers: values.numOfPurchasers,
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
              ProofOfAddress: <TechnicalTerm name="proofOfAddress" />,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompanyAndPurchaser.preparedByPurchaser.step3"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompanyAndPurchaser.preparedByPurchaser.step4"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-4"
                  className="hover:cursor-pointer"
                />
              ),
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompanyAndPurchaser.preparedByPurchaser.step5"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompanyAndPurchaser.preparedByPurchaser.step6"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
    [values.numOfDirectors, values.numOfPurchasers, whetherDirectorIsRequired],
  );

  if (isIssuedByCompany && isPreparedByCompany)
    return <CompanyIssuerCompanyPreparerInstructions />;
  if (isIssuedByCompany && isPreparedByPurchaser)
    return <CompanyIssuerPurchaserPreparerInstructions />;
  if (isIssuedByPurchaser && isPreparedByCompany)
    return <PurchaserIssuerCompanyPreparerInstructions />;
  if (isIssuedByPurchaser && isPreparedByPurchaser)
    return <PurchaserIssuerPurchaserPreparerInstructions />;
  if (isIssuedByCompanyAndPurchaser && isPreparedByCompany)
    return <CompanyAndPurchaserIssuerCompanyPreparerInstructions />;
  if (isIssuedByCompanyAndPurchaser && isPreparedByPurchaser)
    return <CompanyAndPurchaserIssuerPurchaserPreparerInstructions />;
  return null;
}

export function PreparationSteps() {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { t: tSecondHandVehicleC2ISaleInstructions } = useTranslation(
    "instructions-vehicle-transaction-2nd-hand-c2i-sale-page",
  );
  const { values, setValues } = useFormikContext<InitialValues>();

  const handleDirectorRelatedFieldChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const newFormValues: InitialValues = { ...values };

      newFormValues[e.currentTarget.name as keyof InitialValues] = e
        .currentTarget.value as never;

      if (
        values.nonAttachmentIssuer === "purchaser" &&
        isDirectorRequired(newFormValues)
      ) {
        newFormValues.nonAttachmentIssuer = "companyAndPurchaser";
      }

      setValues(newFormValues, true);
    },
    [setValues, values],
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
          ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
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
          name="numOfDirectors"
          label={tSecondHandVehicleC2ISaleInstructions(
            "form.numOfDirectors.label",
          )}
          onChange={handleDirectorRelatedFieldChange}
          className="w-full xs:w-auto"
          containerClassName="col-start-2 leading-4"
        >
          <option value="singleDirector">
            {tCommon("numOfPeople.single")}
          </option>
          <option value="multipleDirectors">
            {tCommon("numOfPeople.multiple")}
          </option>
        </FormSelect>
        <FormSelect
          name="numOfPurchasers"
          label={tSecondHandVehicleC2ISaleInstructions(
            "form.numOfPurchasers.label",
          )}
          className="w-full xs:w-auto"
          containerClassName="col-start-2 mt-2 leading-4"
        >
          <option value="singlePurchaser">
            {tCommon("numOfPeople.single")}
          </option>
          <option value="multiplePurchasers">
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
          ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
          i18nKey="preparation.step2"
          params={{ numOfPurchasers: values.numOfPurchasers }}
          components={{
            label: (
              <label
                htmlFor="sale-prep-step-2"
                className="hover:cursor-pointer"
              />
            ),
            DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            NonAttachmentCertificate: (
              <TechnicalTerm name="nonAttachmentCertificate" />
            ),
          }}
        />
        <FormSelect
          name="documentsPreparer"
          label={tSecondHandVehicleC2ISaleInstructions(
            "form.documentsPreparer.label",
          )}
          className="w-full xs:w-auto"
          containerClassName="col-start-2 leading-4"
        >
          <option value="company">
            {tCommon("documentsPreparers.company")}
          </option>
          <option value="purchaser">
            {tCommon("documentsPreparers.purchaser", {
              count: values.numOfPurchasers === "singlePurchaser" ? 1 : 2,
            })}
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
          ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
          i18nKey="preparation.step3"
          params={{
            numOfPurchasers: values.numOfPurchasers,
          }}
          components={{
            label: (
              <label
                htmlFor="sale-prep-step-3"
                className="hover:cursor-pointer"
              />
            ),
            NLTAAbbr: <Abbr name="nlta" />,
            NonAttachmentCertificate: (
              <TechnicalTerm name="nonAttachmentCertificate" />
            ),
          }}
        />
        <FormSelect
          name="vendorHasStamp"
          label={
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey={"form.vendorHasStamp.label"}
            />
          }
          onChange={handleDirectorRelatedFieldChange}
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
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey={"form.isVehicleRegistrationBookValid.label"}
            />
          }
          onChange={handleDirectorRelatedFieldChange}
          className="w-full xs:w-auto"
          containerClassName="col-start-2 mt-2 leading-4"
        >
          <option value="yes">{tCommon("yes")}</option>
          <option value="no">{tCommon("no")}</option>
        </FormSelect>
        <NonAttachmentIssuerFormSelect />
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
          ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
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
          label={tSecondHandVehicleC2ISaleInstructions(
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
