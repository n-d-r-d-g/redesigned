import { useCallback } from "react";
import { useFormikContext } from "formik";
import Checkbox from "@/components/Checkbox/Checkbox";
import TypedTrans from "@/components/TypedTrans/TypedTrans";
import { InitialValues } from "../../types";
import styles from "../../../styles.module.css";
import TechnicalTerm from "@/components/TechnicalTerm/TechnicalTerm";

function ConditionalInstructions1() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByVendor =
    values.administrativeStatusCertificateIssuer === "vendor";
  const isIssuedByCompany =
    values.administrativeStatusCertificateIssuer === "company";
  const isIssuedByVendorAndCompany =
    values.administrativeStatusCertificateIssuer === "vendorAndCompany";
  const isPreparedByVendor = values.documentsPreparer === "vendor";
  const isPreparedByCompany = values.documentsPreparer === "company";

  const VendorIssuerVendorPreparerInstructions = useCallback(
    () => (
      <>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-1"
            name="payment"
            value="conditional-1-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByVendor.step1"
            params={{ numOfDirectors: values.numOfDirectors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-2"
            name="payment"
            value="conditional-1-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByVendor.step2"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByVendor.step3"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-3"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-4"
            name="payment"
            value="conditional-1-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByVendor.step4"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-4"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-5"
            name="payment"
            value="conditional-1-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByVendor.step5"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-5"
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
            id="sale-payment-conditional-1-step-6"
            name="payment"
            value="conditional-1-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByVendor.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-7"
            name="payment"
            value="conditional-1-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByVendor.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-7"
                  className="hover:cursor-pointer"
                />
              ),
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
            id="sale-payment-conditional-1-step-1"
            name="payment"
            value="conditional-1-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByCompany.step1"
            params={{ numOfDirectors: values.numOfDirectors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-2"
            name="payment"
            value="conditional-1-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByCompany.step2"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByCompany.step3"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-3"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-4"
            name="payment"
            value="conditional-1-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByCompany.step4"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-4"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-5"
            name="payment"
            value="conditional-1-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByCompany.step5"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-6"
            name="payment"
            value="conditional-1-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByCompany.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-6"
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
            id="sale-payment-conditional-1-step-7"
            name="payment"
            value="conditional-1-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByCompany.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-7"
                  className="hover:cursor-pointer"
                />
              ),
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
            id="sale-payment-conditional-1-step-1"
            name="payment"
            value="conditional-1-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByVendor.step1"
            params={{ numOfDirectors: values.numOfDirectors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-2"
            name="payment"
            value="conditional-1-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByVendor.step2"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByVendor.step3"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-4"
            name="payment"
            value="conditional-1-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByVendor.step4"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-4"
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
            id="sale-payment-conditional-1-step-5"
            name="payment"
            value="conditional-1-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByVendor.step5"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-6"
            name="payment"
            value="conditional-1-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByVendor.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-6"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-7"
            name="payment"
            value="conditional-1-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByVendor.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-7"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
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
            id="sale-payment-conditional-1-step-1"
            name="payment"
            value="conditional-1-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByCompany.step1"
            params={{ numOfDirectors: values.numOfDirectors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-2"
            name="payment"
            value="conditional-1-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByCompany.step2"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByCompany.step3"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-4"
            name="payment"
            value="conditional-1-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByCompany.step4"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-4"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-5"
            name="payment"
            value="conditional-1-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByCompany.step5"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-6"
            name="payment"
            value="conditional-1-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByCompany.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-6"
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
            id="sale-payment-conditional-1-step-7"
            name="payment"
            value="conditional-1-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByCompany.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-7"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
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
            id="sale-payment-conditional-1-step-1"
            name="payment"
            value="conditional-1-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndCompany.preparedByVendor.step1"
            params={{ numOfDirectors: values.numOfDirectors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-2"
            name="payment"
            value="conditional-1-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndCompany.preparedByVendor.step2"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndCompany.preparedByVendor.step3"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-3"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-4"
            name="payment"
            value="conditional-1-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndCompany.preparedByVendor.step4"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-4"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-5"
            name="payment"
            value="conditional-1-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndCompany.preparedByVendor.step5"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-5"
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
            id="sale-payment-conditional-1-step-6"
            name="payment"
            value="conditional-1-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndCompany.preparedByVendor.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-7"
            name="payment"
            value="conditional-1-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndCompany.preparedByVendor.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-7"
                  className="hover:cursor-pointer"
                />
              ),
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
            id="sale-payment-conditional-1-step-1"
            name="payment"
            value="conditional-1-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndCompany.preparedByCompany.step1"
            params={{ numOfDirectors: values.numOfDirectors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-2"
            name="payment"
            value="conditional-1-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndCompany.preparedByCompany.step2"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndCompany.preparedByCompany.step3"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-3"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-4"
            name="payment"
            value="conditional-1-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndCompany.preparedByCompany.step4"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-4"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-5"
            name="payment"
            value="conditional-1-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndCompany.preparedByCompany.step5"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-6"
            name="payment"
            value="conditional-1-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndCompany.preparedByCompany.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-6"
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
            id="sale-payment-conditional-1-step-7"
            name="payment"
            value="conditional-1-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndCompany.preparedByCompany.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-7"
                  className="hover:cursor-pointer"
                />
              ),
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

function ConditionalInstructions2() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByVendor =
    values.administrativeStatusCertificateIssuer === "vendor";
  const isIssuedByCompany =
    values.administrativeStatusCertificateIssuer === "company";
  const isIssuedByVendorAndCompany =
    values.administrativeStatusCertificateIssuer === "vendorAndCompany";

  const CommonCashInstructions = useCallback(
    () => (
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
        i18nKey="payment.conditionalInstructions2.paidInCash.cashDeposit"
        params={{
          numOfVendors: values.numOfVendors,
          numOfDirectors: values.numOfDirectors,
        }}
        components={{
          em: <em className="font-bold" />,
          DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
          ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
        }}
      />
    ),
    [values.numOfDirectors, values.numOfVendors],
  );

  const CashVendorInstructions = useCallback(
    () => (
      <>
        <CommonCashInstructions />
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-2-step-1"
            name="payment"
            value="conditional-2-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey={`payment.conditionalInstructions2.paidInCash.issuedByVendor.step1`}
            params={{
              numOfVendors: values.numOfVendors,
              numOfDirectors: values.numOfDirectors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-2-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
      </>
    ),
    [CommonCashInstructions, values.numOfDirectors, values.numOfVendors],
  );

  const CashCompanyInstructions = useCallback(
    () => (
      <>
        <CommonCashInstructions />
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-2-step-1"
            name="payment"
            value="conditional-2-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey={`payment.conditionalInstructions2.paidInCash.issuedByCompany.step1`}
            params={{
              numOfVendors: values.numOfVendors,
              numOfDirectors: values.numOfDirectors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-2-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
      </>
    ),
    [CommonCashInstructions, values.numOfDirectors, values.numOfVendors],
  );

  const CashVendorAndCompanyInstructions = useCallback(
    () => (
      <>
        <CommonCashInstructions />
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-2-step-1"
            name="payment"
            value="conditional-2-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey={`payment.conditionalInstructions2.paidInCash.issuedByVendorAndCompany.step1`}
            params={{
              numOfVendors: values.numOfVendors,
              numOfDirectors: values.numOfDirectors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-2-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
      </>
    ),
    [CommonCashInstructions, values.numOfDirectors, values.numOfVendors],
  );

  const NonCashVendorInstructions = useCallback(
    () => (
      <div className="flex gap-2">
        <Checkbox
          id="sale-payment-conditional-2-step-1"
          name="payment"
          value="conditional-2-step-1"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
          i18nKey={`payment.conditionalInstructions2.notPaidInCash.issuedByVendor.step1`}
          params={{
            numOfVendors: values.numOfVendors,
            numOfDirectors: values.numOfDirectors,
          }}
          components={{
            label: (
              <label
                htmlFor="sale-payment-conditional-2-step-1"
                className="hover:cursor-pointer"
              />
            ),
            em: <em className="font-bold" />,
            DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
          }}
        />
      </div>
    ),
    [values.numOfDirectors, values.numOfVendors],
  );

  const NonCashCompanyInstructions = useCallback(
    () => (
      <div className="flex gap-2">
        <Checkbox
          id="sale-payment-conditional-2-step-1"
          name="payment"
          value="conditional-2-step-1"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
          i18nKey={`payment.conditionalInstructions2.notPaidInCash.issuedByCompany.step1`}
          params={{
            numOfVendors: values.numOfVendors,
            numOfDirectors: values.numOfDirectors,
          }}
          components={{
            label: (
              <label
                htmlFor="sale-payment-conditional-2-step-1"
                className="hover:cursor-pointer"
              />
            ),
            em: <em className="font-bold" />,
            DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
          }}
        />
      </div>
    ),
    [values.numOfDirectors, values.numOfVendors],
  );

  const NonCashVendorAndCompanyInstructions = useCallback(
    () => (
      <div className="flex gap-2">
        <Checkbox
          id="sale-payment-conditional-2-step-1"
          name="payment"
          value="conditional-2-step-1"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
          i18nKey={`payment.conditionalInstructions2.notPaidInCash.issuedByVendorAndCompany.step1`}
          params={{
            numOfVendors: values.numOfVendors,
            numOfDirectors: values.numOfDirectors,
          }}
          components={{
            label: (
              <label
                htmlFor="sale-payment-conditional-2-step-1"
                className="hover:cursor-pointer"
              />
            ),
            em: <em className="font-bold" />,
            DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
          }}
        />
      </div>
    ),
    [values.numOfDirectors, values.numOfVendors],
  );

  if (values.paymentMethod === "cash" && isIssuedByVendor)
    return <CashVendorInstructions />;
  if (values.paymentMethod === "cash" && isIssuedByCompany)
    return <CashCompanyInstructions />;
  if (values.paymentMethod === "cash" && isIssuedByVendorAndCompany)
    return <CashVendorAndCompanyInstructions />;
  if (values.paymentMethod === "notCash" && isIssuedByVendor)
    return <NonCashVendorInstructions />;
  if (values.paymentMethod === "notCash" && isIssuedByCompany)
    return <NonCashCompanyInstructions />;
  if (values.paymentMethod === "notCash" && isIssuedByVendorAndCompany)
    return <NonCashVendorAndCompanyInstructions />;
  return null;
}

function ConditionalInstructions3() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByVendor =
    values.administrativeStatusCertificateIssuer === "vendor";
  const isIssuedByCompany =
    values.administrativeStatusCertificateIssuer === "company";
  const isIssuedByVendorAndCompany =
    values.administrativeStatusCertificateIssuer === "vendorAndCompany";
  const isPreparedByVendor = values.documentsPreparer === "vendor";
  const isPreparedByCompany = values.documentsPreparer === "company";

  const VendorIssuerVendorPreparerInstructions = useCallback(
    () => (
      <>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByVendor.step1"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-2"
            name="payment"
            value="conditional-3-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByVendor.step2"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-3"
            name="payment"
            value="conditional-3-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByVendor.step3"
            params={{ numOfDirectors: values.numOfDirectors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-4"
            name="payment"
            value="conditional-3-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByVendor.step4"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-4"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-5"
            name="payment"
            value="conditional-3-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByVendor.step5"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-5"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-6"
            name="payment"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByVendor.step6"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-7"
            name="payment"
            value="conditional-3-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByVendor.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-7"
                  className="hover:cursor-pointer"
                />
              ),
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
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
            id="sale-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByCompany.step1"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-2"
            name="payment"
            value="conditional-3-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByCompany.step2"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-3"
            name="payment"
            value="conditional-3-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByCompany.step3"
            params={{ numOfDirectors: values.numOfDirectors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-4"
            name="payment"
            value="conditional-3-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByCompany.step4"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-4"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-5"
            name="payment"
            value="conditional-3-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByCompany.step5"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-5"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-6"
            name="payment"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByCompany.step6"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-7"
            name="payment"
            value="conditional-3-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByCompany.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-7"
                  className="hover:cursor-pointer"
                />
              ),
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
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
            id="sale-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByVendor.step1"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-2"
            name="payment"
            value="conditional-3-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByVendor.step2"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-3"
            name="payment"
            value="conditional-3-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByVendor.step3"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-3"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-4"
            name="payment"
            value="conditional-3-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByVendor.step4"
            params={{ numOfDirectors: values.numOfDirectors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-4"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-5"
            name="payment"
            value="conditional-3-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByVendor.step5"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-5"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-6"
            name="payment"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByVendor.step6"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-7"
            name="payment"
            value="conditional-3-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByVendor.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-7"
                  className="hover:cursor-pointer"
                />
              ),
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
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
            id="sale-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByCompany.step1"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-2"
            name="payment"
            value="conditional-3-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByCompany.step2"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-3"
            name="payment"
            value="conditional-3-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByCompany.step3"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-3"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-4"
            name="payment"
            value="conditional-3-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByCompany.step4"
            params={{ numOfDirectors: values.numOfDirectors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-4"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-5"
            name="payment"
            value="conditional-3-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByCompany.step5"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-5"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-6"
            name="payment"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByCompany.step6"
            params={{
              numOfVendors: values.numOfVendors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-7"
            name="payment"
            value="conditional-3-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByCompany.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-7"
                  className="hover:cursor-pointer"
                />
              ),
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
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
            id="sale-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndCompany.preparedByVendor.step1"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-2"
            name="payment"
            value="conditional-3-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndCompany.preparedByVendor.step2"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-3"
            name="payment"
            value="conditional-3-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndCompany.preparedByVendor.step3"
            params={{ numOfDirectors: values.numOfDirectors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-4"
            name="payment"
            value="conditional-3-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndCompany.preparedByVendor.step4"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-4"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-5"
            name="payment"
            value="conditional-3-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndCompany.preparedByVendor.step5"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-5"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-6"
            name="payment"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndCompany.preparedByVendor.step6"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-7"
            name="payment"
            value="conditional-3-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndCompany.preparedByVendor.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-7"
                  className="hover:cursor-pointer"
                />
              ),
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
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
            id="sale-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndCompany.preparedByCompany.step1"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-2"
            name="payment"
            value="conditional-3-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndCompany.preparedByCompany.step2"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-3"
            name="payment"
            value="conditional-3-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndCompany.preparedByCompany.step3"
            params={{ numOfDirectors: values.numOfDirectors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-4"
            name="payment"
            value="conditional-3-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndCompany.preparedByCompany.step4"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-4"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-5"
            name="payment"
            value="conditional-3-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndCompany.preparedByCompany.step5"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-5"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-6"
            name="payment"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndCompany.preparedByCompany.step6"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-7"
            name="payment"
            value="conditional-3-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndCompany.preparedByCompany.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-7"
                  className="hover:cursor-pointer"
                />
              ),
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
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

export function PaymentSteps() {
  const { values } = useFormikContext<InitialValues>();

  return (
    <>
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
        i18nKey="payment.description"
        params={{
          numOfVendors: values.numOfVendors,
          numOfDirectors: values.numOfDirectors,
        }}
      />
      <div className="mb-3 mt-2 flex flex-col gap-3">
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-step-1"
            name="payment"
            value="step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
            i18nKey="payment.step1"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-step-1"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <ConditionalInstructions1 />
        <ConditionalInstructions2 />
        <ConditionalInstructions3 />
      </div>
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-i2c-sale-page"
        i18nKey="payment.leaveWithVehicle"
      />
    </>
  );
}
