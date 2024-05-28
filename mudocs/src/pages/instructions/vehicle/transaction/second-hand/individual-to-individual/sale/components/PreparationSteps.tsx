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
import { isVendorRequired } from "../../i2i-utils";
import { InitialValues } from "../../types";
import styles from "../../../styles.module.css";

function AdministrativeStatusCertificateIssuerFormSelect() {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { values } = useFormikContext<InitialValues>();
  const vendorIsRequired = isVendorRequired(values);

  return (
    <FormSelect
      name="administrativeStatusCertificateIssuer"
      label={
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
          i18nKey={"form.administrativeStatusCertificateIssuer.label"}
          components={{
            NLTAAbbr: <Abbr name="nlta" />,
          }}
        />
      }
      className="w-full xs:w-auto"
      containerClassName="col-start-2 mt-2 leading-4"
    >
      <option value="vendor">
        {tCommon("administrativeStatusCertificateIssuers.vendor", {
          count: values.numOfVendors === "singleVendor" ? 1 : 2,
        })}
      </option>
      {!vendorIsRequired && (
        <option value="purchaser">
          {tCommon("administrativeStatusCertificateIssuers.purchaser", {
            count: values.numOfPurchasers === "singlePurchaser" ? 1 : 2,
          })}
        </option>
      )}
      <option value="vendorAndPurchaser">
        {tCommon("administrativeStatusCertificateIssuers.vendorAndPurchaser", {
          numOfVendors: values.numOfVendors,
          numOfPurchasers: values.numOfPurchasers,
        })}
      </option>
      {!vendorIsRequired && (
        <option value="vendorDelegate">
          {tCommon("administrativeStatusCertificateIssuers.vendorDelegate", {
            count: values.numOfVendors === "singleVendor" ? 1 : 2,
          })}
        </option>
      )}
      {!vendorIsRequired && (
        <option value="purchaserDelegate">
          {tCommon("administrativeStatusCertificateIssuers.purchaserDelegate", {
            count: values.numOfPurchasers === "singlePurchaser" ? 1 : 2,
          })}
        </option>
      )}
    </FormSelect>
  );
}

function ConditionalInstructions() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByVendor =
    values.administrativeStatusCertificateIssuer === "vendor";
  const isIssuedByPurchaser =
    values.administrativeStatusCertificateIssuer === "purchaser";
  const isIssuedByVendorAndPurchaser =
    values.administrativeStatusCertificateIssuer === "vendorAndPurchaser";
  const isIssuedByVendorDelegate =
    values.administrativeStatusCertificateIssuer === "vendorDelegate";
  const isIssuedByPurchaserDelegate =
    values.administrativeStatusCertificateIssuer === "purchaserDelegate";
  const isPreparedByVendor = values.documentsPreparer === "vendor";
  const isPreparedByPurchaser = values.documentsPreparer === "purchaser";

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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendor.preparedByVendor.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
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
                  href="/doc-gen/vehicle/deed-of-sale/iToI"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendor.preparedByVendor.step3"
            params={{
              numOfVendors: values.numOfVendors,
              numOfPurchasers: values.numOfPurchasers,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendor.preparedByVendor.step4"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendor.preparedByVendor.step5"
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
              PDFAbbr: <Abbr name="pdf" />,
              NLTAAbbr: <Abbr name="nlta" />,
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            }}
          />
        </div>
      </>
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  const VendorIssuerPurchaserPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendor.preparedByPurchaser.step1"
            params={{
              numOfVendors: values.numOfVendors,
              numOfPurchasers: values.numOfPurchasers,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendor.preparedByPurchaser.step2"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendor.preparedByPurchaser.step3"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendor.preparedByPurchaser.step4"
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
      </>
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  const PurchaserIssuerVendorPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByVendor.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByVendor.step2"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
              NLTAAbbr: <Abbr name="nlta" />,
              DeedOfSaleImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/deed-of-sale/iToI"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByVendor.step3"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              NLTAAbbr: <Abbr name="nlta" />,
              AuthorizationLetterImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/administrative-status-certificate-authorization-letter/i1ToI2"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByVendor.step4"
            params={{
              numOfVendors: values.numOfVendors,
              numOfPurchasers: values.numOfPurchasers,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-4"
                  className="hover:cursor-pointer"
                />
              ),
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByVendor.step5"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByVendor.step6"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByVendor.step7"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
    [values.numOfPurchasers, values.numOfVendors],
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByPurchaser.step1"
            params={{
              numOfVendors: values.numOfVendors,
              numOfPurchasers: values.numOfPurchasers,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByPurchaser.step2"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByPurchaser.step3"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaser.preparedByPurchaser.step5"
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
              PDFAbbr: <Abbr name="pdf" />,
            }}
          />
        </div>
      </>
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  const VendorAndPurchaserIssuerVendorPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorAndPurchaser.preparedByVendor.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorAndPurchaser.preparedByVendor.step2"
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
                  href="/doc-gen/vehicle/deed-of-sale/iToI"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorAndPurchaser.preparedByVendor.step3"
            params={{
              numOfVendors: values.numOfVendors,
              numOfPurchasers: values.numOfPurchasers,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorAndPurchaser.preparedByVendor.step4"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorAndPurchaser.preparedByVendor.step5"
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
              PDFAbbr: <Abbr name="pdf" />,
              NLTAAbbr: <Abbr name="nlta" />,
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            }}
          />
        </div>
      </>
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  const VendorAndPurchaserIssuerPurchaserPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorAndPurchaser.preparedByPurchaser.step1"
            params={{
              numOfVendors: values.numOfVendors,
              numOfPurchasers: values.numOfPurchasers,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorAndPurchaser.preparedByPurchaser.step2"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorAndPurchaser.preparedByPurchaser.step3"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorAndPurchaser.preparedByPurchaser.step4"
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
      </>
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  const VendorDelegateIssuerVendorPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorDelegate.preparedByVendor.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorDelegate.preparedByVendor.step2"
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
                  href="/doc-gen/vehicle/deed-of-sale/iToI"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorDelegate.preparedByVendor.step3"
            params={{
              numOfVendors: values.numOfVendors,
              numOfPurchasers: values.numOfPurchasers,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorDelegate.preparedByVendor.step4"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorDelegate.preparedByVendor.step5"
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
              PDFAbbr: <Abbr name="pdf" />,
              NLTAAbbr: <Abbr name="nlta" />,
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            }}
          />
        </div>
      </>
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  const VendorDelegateIssuerPurchaserPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorDelegate.preparedByPurchaser.step1"
            params={{
              numOfVendors: values.numOfVendors,
              numOfPurchasers: values.numOfPurchasers,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorDelegate.preparedByPurchaser.step2"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorDelegate.preparedByPurchaser.step3"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByVendorDelegate.preparedByPurchaser.step4"
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
      </>
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  const PurchaserDelegateIssuerVendorPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaserDelegate.preparedByVendor.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaserDelegate.preparedByVendor.step2"
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
              NLTAAbbr: <Abbr name="nlta" />,
              DeedOfSaleImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/deed-of-sale/iToI"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaserDelegate.preparedByVendor.step3"
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
              em: <em className="font-bold" />,
              NLTAAbbr: <Abbr name="nlta" />,
              AuthorizationLetterImportantLink: (
                <ImportantLink
                  href="/doc-gen/vehicle/administrative-status-certificate-authorization-letter/i1ToI2"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaserDelegate.preparedByVendor.step4"
            params={{
              numOfVendors: values.numOfVendors,
              numOfPurchasers: values.numOfPurchasers,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-prep-conditional-step-4"
                  className="hover:cursor-pointer"
                />
              ),
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaserDelegate.preparedByVendor.step5"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaserDelegate.preparedByVendor.step6"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaserDelegate.preparedByVendor.step7"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
    [values.numOfPurchasers, values.numOfVendors],
  );

  const PurchaserDelegateIssuerPurchaserPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaserDelegate.preparedByPurchaser.step1"
            params={{
              numOfVendors: values.numOfVendors,
              numOfPurchasers: values.numOfPurchasers,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaserDelegate.preparedByPurchaser.step2"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaserDelegate.preparedByPurchaser.step3"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaserDelegate.preparedByPurchaser.step4"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="preparation.conditionalInstructions.issuedByPurchaserDelegate.preparedByPurchaser.step5"
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
              em: <em className="font-bold" />,
              PDFAbbr: <Abbr name="pdf" />,
            }}
          />
        </div>
      </>
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  if (isIssuedByVendor && isPreparedByVendor)
    return <VendorIssuerVendorPreparerInstructions />;
  if (isIssuedByVendor && isPreparedByVendor)
    return <VendorIssuerPurchaserPreparerInstructions />;
  if (isIssuedByPurchaser && isPreparedByVendor)
    return <PurchaserIssuerVendorPreparerInstructions />;
  if (isIssuedByPurchaser && isPreparedByPurchaser)
    return <PurchaserIssuerPurchaserPreparerInstructions />;
  if (isIssuedByVendorAndPurchaser && isPreparedByVendor)
    return <VendorAndPurchaserIssuerVendorPreparerInstructions />;
  if (isIssuedByVendorAndPurchaser && isPreparedByPurchaser)
    return <VendorAndPurchaserIssuerPurchaserPreparerInstructions />;
  if (isIssuedByVendorDelegate && isPreparedByVendor)
    return <VendorDelegateIssuerVendorPreparerInstructions />;
  if (isIssuedByVendorDelegate && isPreparedByPurchaser)
    return <VendorDelegateIssuerPurchaserPreparerInstructions />;
  if (isIssuedByPurchaserDelegate && isPreparedByVendor)
    return <PurchaserDelegateIssuerVendorPreparerInstructions />;
  if (isIssuedByPurchaserDelegate && isPreparedByPurchaser)
    return <PurchaserDelegateIssuerPurchaserPreparerInstructions />;
  return null;
}

export function PreparationSteps() {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { t: tSecondHandVehicleI2ISaleInstructions } = useTranslation(
    "instructions-vehicle-transaction-2nd-hand-i2i-sale-page",
  );
  const { values, setValues } = useFormikContext<InitialValues>();

  const handleVendorRelatedFieldChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const newFormValues: InitialValues = { ...values };

      newFormValues[e.currentTarget.name as keyof InitialValues] = e
        .currentTarget.value as never;

      if (
        ["purchaser", "vendorDelegate", "purchaserDelegate"].includes(
          values.administrativeStatusCertificateIssuer,
        ) &&
        isVendorRequired(newFormValues)
      ) {
        newFormValues.administrativeStatusCertificateIssuer =
          "vendorAndPurchaser";
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
          ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
          i18nKey="preparation.step1"
          components={{
            label: (
              <label
                htmlFor="sale-prep-step-1"
                className="hover:cursor-pointer"
              />
            ),
            NLTAAbbr: <Abbr name="nlta" />,
            NLTAPhone: (
              <Link
                href="tel:+2302600919"
                rel="noreferrer noopener nofollow"
                className="cursor-pointer rounded font-bold hover:text-black focus-visible:underline focus-visible:decoration-dotted focus-visible:decoration-2 focus-visible:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:dark:text-white dark:focus-visible:ring-green-500 focus-visible:dark:ring-offset-slate-900"
              />
            ),
          }}
        />
        <FormSelect
          name="numOfVendors"
          label={tSecondHandVehicleI2ISaleInstructions(
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
          name="numOfPurchasers"
          label={tSecondHandVehicleI2ISaleInstructions(
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
          ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
          i18nKey="preparation.step2"
          params={{
            numOfPurchasers: values.numOfPurchasers,
          }}
          components={{
            label: (
              <label
                htmlFor="sale-prep-step-2"
                className="hover:cursor-pointer"
              />
            ),
            DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            AdministrativeStatusCertificate: (
              <TechnicalTerm name="administrativeStatusCertificate" />
            ),
          }}
        />
        <FormSelect
          name="documentsPreparer"
          label={tSecondHandVehicleI2ISaleInstructions(
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
          ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
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
            DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            AdministrativeStatusCertificate: (
              <TechnicalTerm name="administrativeStatusCertificate" />
            ),
            ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            DeedOfSaleImportantLink: (
              <ImportantLink
                href="/doc-gen/vehicle/deed-of-sale/iToI"
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
        <FormSelect
          name="purchaserHasOriginalID"
          label={
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="form.purchaserHasOriginalID.label"
              params={{
                count: values.numOfPurchasers === "singlePurchaser" ? 1 : 2,
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
          name="vendorAndPurchaserAreRelated"
          label={
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="form.vendorAndPurchaserAreRelated.label"
              params={{
                numOfVendors: values.numOfVendors,
                numOfPurchasers: values.numOfPurchasers,
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
        <FormSelect
          name="vendorNameMatches"
          label={
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
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
        <AdministrativeStatusCertificateIssuerFormSelect />
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
          ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
          i18nKey="preparation.lastStep"
          params={{
            numOfPurchasers: values.numOfPurchasers,
          }}
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
          label={tSecondHandVehicleI2ISaleInstructions(
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
