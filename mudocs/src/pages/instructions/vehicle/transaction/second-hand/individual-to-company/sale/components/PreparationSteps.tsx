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
import { isVendorRequired } from "../../i2c-utils";
import { InitialValues } from "../../types";
import styles from "../../../styles.module.css";

function NonAttachmentIssuerFormSelect() {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { values } = useFormikContext<InitialValues>();
  const vendorIsRequired = isVendorRequired(values);

  return (
    <FormSelect
      name="nonAttachmentIssuer"
      label={
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
          i18nKey={"form.nonAttachmentIssuer.label"}
          components={{
            NLTAAbbr: <Abbr name="nlta" />,
          }}
        />
      }
      className="w-full xs:w-auto"
      containerClassName="col-start-2 mt-2 leading-4"
    >
      <option value="vendor">
        {tCommon("nonAttachmentCertificateIssuers.vendor", {
          count: values.numOfVendors === "singleVendor" ? 1 : 2,
        })}
      </option>
      {!vendorIsRequired && (
        <option value="company">
          {tCommon("nonAttachmentCertificateIssuers.company")}
        </option>
      )}
      <option value="vendorAndCompany">
        {tCommon("nonAttachmentCertificateIssuers.vendorAndCompany", {
          numOfVendors: values.numOfVendors,
          numOfDirectors: "singleDirector",
        })}
      </option>
    </FormSelect>
  );
}

function ConditionalInstructions() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByVendor = values.nonAttachmentIssuer === "vendor";
  const isIssuedByCompany = values.nonAttachmentIssuer === "company";
  const isIssuedByVendorAndCompany =
    values.nonAttachmentIssuer === "vendorAndCompany";
  const isPreparedByVendor = values.documentsPreparer === "vendor";
  const isPreparedByCompany = values.documentsPreparer === "company";

  const VendorIssuerVendorPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendor.preparedByVendor.step1"
            params={{
              numOfDirectors: values.numOfDirectors,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendor.preparedByVendor.step2"
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
                  href="/doc-gen/vehicle/deed-of-sale/iToC"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendor.preparedByVendor.step3"
            params={{
              numOfVendors: values.numOfVendors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-3"
                  className="hover:cursor-pointer"
                />
              ),
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendor.preparedByVendor.step4"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-4"
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
            id="sale-prep-conditional-step-5"
            name="prep"
            value="conditional-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendor.preparedByVendor.step5"
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
      </>
    ),
    [values.numOfDirectors, values.numOfVendors],
  );

  const VendorIssuerCompanyPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendor.preparedByCompany.step1"
            params={{
              numOfVendors: values.numOfVendors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-1"
                  className="hover:cursor-pointer"
                />
              ),
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendor.preparedByCompany.step2"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendor.preparedByCompany.step3"
            params={{
              numOfDirectors: values.numOfDirectors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-3"
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
            id="sale-prep-conditional-step-4"
            name="prep"
            value="conditional-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendor.preparedByCompany.step4"
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
      </>
    ),
    [values.numOfDirectors, values.numOfVendors],
  );

  const CompanyIssuerVendorPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByVendor.step1"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-1"
                  className="hover:cursor-pointer"
                />
              ),
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByVendor.step2"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-2"
                  className="hover:cursor-pointer"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByVendor.step3"
            params={{ numOfDirectors: values.numOfDirectors }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-3"
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
            id="sale-prep-conditional-step-4"
            name="prep"
            value="conditional-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByVendor.step4"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-4"
                  className="hover:cursor-pointer"
                />
              ),
              NLTAAbbr: <Abbr name="nlta" />,
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
              DeedOfSaleImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/deed-of-sale/iToC"
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
            id="sale-prep-conditional-step-5"
            name="prep"
            value="conditional-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByVendor.step5"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              NLTAAbbr: <Abbr name="nlta" />,
              I1ToR2AuthorizationLetterImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/non-attachment-certificate-authorization-letter/i1ToR2"
                  target="_blank"
                  rel="noreferrer noopener"
                />
              ),
              I1ToD2AuthorizationLetterImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/non-attachment-certificate-authorization-letter/i1ToD2"
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
            id="sale-prep-conditional-step-6"
            name="prep"
            value="conditional-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByVendor.step6"
            params={{
              numOfVendors: values.numOfVendors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByVendor.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-7"
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
            id="sale-prep-conditional-step-8"
            name="prep"
            value="conditional-step-8"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByVendor.step8"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-8"
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
            id="sale-prep-conditional-step-9"
            name="prep"
            value="conditional-step-9"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByVendor.step9"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-9"
                  className="hover:cursor-pointer"
                />
              ),
              PDFAbbr: <Abbr name="pdf" />,
            }}
          />
        </div>
      </>
    ),
    [values.numOfDirectors, values.numOfVendors],
  );

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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByCompany.step1"
            params={{
              numOfVendors: values.numOfVendors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-1"
                  className="hover:cursor-pointer"
                />
              ),
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByCompany.step2"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByCompany.step3"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-3"
                  className="hover:cursor-pointer"
                />
              ),
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByCompany.step4"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-4"
                  className="hover:cursor-pointer"
                />
              ),
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByCompany.step5"
            params={{
              numOfDirectors: values.numOfDirectors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-5"
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
            id="sale-prep-conditional-step-6"
            name="prep"
            value="conditional-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByCompany.step6"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByCompany.preparedByCompany.step7"
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
    [values.numOfDirectors, values.numOfVendors],
  );

  const VendorAndCompanyIssuerVendorPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorAndCompany.preparedByVendor.step1"
            params={{
              numOfDirectors: values.numOfDirectors,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorAndCompany.preparedByVendor.step2"
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
                  href="/doc-gen/vehicle/deed-of-sale/iToC"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorAndCompany.preparedByVendor.step3"
            params={{
              numOfVendors: values.numOfVendors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-3"
                  className="hover:cursor-pointer"
                />
              ),
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorAndCompany.preparedByVendor.step4"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-4"
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
            id="sale-prep-conditional-step-5"
            name="prep"
            value="conditional-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorAndCompany.preparedByVendor.step5"
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
      </>
    ),
    [values.numOfDirectors, values.numOfVendors],
  );

  const VendorAndCompanyIssuerCompanyPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorAndCompany.preparedByCompany.step1"
            params={{
              numOfVendors: values.numOfVendors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-1"
                  className="hover:cursor-pointer"
                />
              ),
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorAndCompany.preparedByCompany.step2"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorAndCompany.preparedByCompany.step3"
            params={{
              numOfDirectors: values.numOfDirectors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-3"
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
            id="sale-prep-conditional-step-4"
            name="prep"
            value="conditional-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorAndCompany.preparedByCompany.step4"
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
      </>
    ),
    [values.numOfDirectors, values.numOfVendors],
  );

  if (isIssuedByVendor && isPreparedByVendor)
    return <VendorIssuerVendorPreparerInstructions />;
  if (isIssuedByVendor && isPreparedByCompany)
    return <VendorIssuerCompanyPreparerInstructions />;
  if (isIssuedByCompany && isPreparedByVendor)
    return <CompanyIssuerVendorPreparerInstructions />;
  if (isIssuedByCompany && isPreparedByCompany)
    return <CompanyIssuerCompanyPreparerInstructions />;
  if (isIssuedByVendorAndCompany && isPreparedByVendor)
    return <VendorAndCompanyIssuerVendorPreparerInstructions />;
  if (isIssuedByVendorAndCompany && isPreparedByCompany)
    return <VendorAndCompanyIssuerCompanyPreparerInstructions />;
  return null;
}

export function PreparationSteps() {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { t: tSecondHandVehicleI2CSaleInstructions } = useTranslation(
    "instructions-vehicle-transaction-2nd-hand-i2c-sale-page",
  );
  const { values, setValues } = useFormikContext<InitialValues>();

  const handleVendorRelatedFieldChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const newFormValues: InitialValues = { ...values };

      newFormValues[e.currentTarget.name as keyof InitialValues] = e
        .currentTarget.value as never;

      if (
        values.nonAttachmentIssuer === "company" &&
        isVendorRequired(newFormValues)
      ) {
        newFormValues.nonAttachmentIssuer = "vendorAndCompany";
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
          ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
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
          name="numOfVendors"
          label={tSecondHandVehicleI2CSaleInstructions(
            "form.numOfVendors.label",
          )}
          className="w-full xs:w-auto"
          containerClassName="col-start-2 leading-4"
        >
          <option value="singleVendor">{tCommon("numOfPeople.single")}</option>
          <option value="multipleVendors">
            {tCommon("numOfPeople.multiple")}
          </option>
        </FormSelect>
        <FormSelect
          name="numOfDirectors"
          label={tSecondHandVehicleI2CSaleInstructions(
            "form.numOfDirectors.label",
          )}
          className="w-full xs:w-auto"
          containerClassName="col-start-2 mt-2 leading-4"
        >
          <option value="singleDirector">
            {tCommon("numOfPeople.single")}
          </option>
          <option value="multipleDirectors">
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
          ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
          i18nKey="preparation.step2"
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
          label={tSecondHandVehicleI2CSaleInstructions(
            "form.documentsPreparer.label",
          )}
          className="w-full xs:w-auto"
          containerClassName="col-start-2 leading-4"
        >
          <option value="vendor">
            {tCommon("documentsPreparers.vendor", {
              count: values.numOfVendors === "singleVendor" ? 1 : 2,
            })}
          </option>
          <option value="company">
            {tCommon("documentsPreparers.company")}
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
          ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
          i18nKey="preparation.step3"
          params={{
            numOfVendors: values.numOfVendors,
          }}
          components={{
            label: (
              <label
                htmlFor="sale-prep-step-3"
                className="hover:cursor-pointer"
              />
            ),
            NLTAAbbr: <Abbr name="nlta" />,
            DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            NonAttachmentCertificate: (
              <TechnicalTerm name="nonAttachmentCertificate" />
            ),
            ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
          }}
        />
        <FormSelect
          name="directorHasOriginalID"
          label={
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
              i18nKey="form.directorHasOriginalID.label"
              params={{
                count: values.numOfDirectors === "singleDirector" ? 1 : 2,
              }}
              components={{
                ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
                MNISIDCardLayoutLink: (
                  <Link
                    href="https://mnis.govmu.org/Pages/New%20ID%20Card/Card-Layout-and-Design.aspx"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    className="rounded font-bold hover:text-black focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:dark:text-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
                  />
                ),
              }}
            />
          }
          onChange={handleVendorRelatedFieldChange}
          className="w-full xs:w-auto"
          containerClassName="col-start-2 leading-4"
        >
          <option value="yes">{tCommon("yes")}</option>
          <option value="no">{tCommon("no")}</option>
        </FormSelect>
        <FormSelect
          name="vendorNameMatches"
          label={
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
              i18nKey={"form.vendorNameMatches.label"}
              params={{ count: values.numOfVendors === "singleVendor" ? 1 : 2 }}
              components={{
                ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
                VehicleRegistrationBook: (
                  <TechnicalTerm name="vehicleRegistrationBook" />
                ),
              }}
            />
          }
          onChange={handleVendorRelatedFieldChange}
          className="w-full xs:w-auto"
          containerClassName="col-start-2 mt-2 leading-4"
        >
          <option value="yes">{tCommon("yes")}</option>
          <option value="no">{tCommon("no")}</option>
        </FormSelect>
        <NonAttachmentIssuerFormSelect />
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
          ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
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
          label={tSecondHandVehicleI2CSaleInstructions(
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
