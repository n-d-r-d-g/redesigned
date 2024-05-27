import { useFormikContext } from "formik";
import TechnicalTerm from "@/components/TechnicalTerm/TechnicalTerm";
import Checkbox from "@/components/Checkbox/Checkbox";
import TypedTrans from "@/components/TypedTrans/TypedTrans";
import { InitialValues } from "../../types";
import styles from "../../../styles.module.css";
import { useCallback } from "react";

function ConditionalInstructions1() {
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
            id="sale-payment-conditional-1-step-1"
            name="payment"
            value="conditional-1-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByVendor.step1"
            params={{ numOfVendors: values.numOfVendors }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByVendor.step2"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
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
            id="sale-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByVendor.step3"
            params={{ numOfVendors: values.numOfVendors }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByVendor.step4"
            params={{ numOfVendors: values.numOfVendors }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByVendor.step5"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
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
      </>
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  const VendorIssuerPurchaserPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByPurchaser.step1"
            params={{ numOfVendors: values.numOfVendors }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByPurchaser.step2"
            params={{
              numOfVendors: values.numOfVendors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
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
            id="sale-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByPurchaser.step3"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByPurchaser.step4"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByPurchaser.step5"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendor.preparedByPurchaser.step6"
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
      </>
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  const PurchaserIssuerVendorPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByVendor.step1"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByVendor.step2"
            params={{
              numOfVendors: values.numOfVendors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
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
            id="sale-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByVendor.step3"
            params={{ numOfVendors: values.numOfVendors }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByVendor.step4"
            params={{ numOfVendors: values.numOfVendors }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByVendor.step5"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-5"
                  className="hover:cursor-pointer"
                />
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByVendor.step6"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByVendor.step7"
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
    [values.numOfPurchasers, values.numOfVendors],
  );

  const PurchaserIssuerPurchaserPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByPurchaser.step1"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByPurchaser.step2"
            params={{
              numOfVendors: values.numOfVendors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
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
            id="sale-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByPurchaser.step3"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByPurchaser.step4"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByPurchaser.step5"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByPurchaser.step6"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByPurchaser.step7"
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
    [values.numOfPurchasers, values.numOfVendors],
  );

  const VendorAndPurchaserIssuerVendorPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndPurchaser.preparedByVendor.step1"
            params={{ numOfVendors: values.numOfVendors }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndPurchaser.preparedByVendor.step2"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
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
            id="sale-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndPurchaser.preparedByVendor.step3"
            params={{ numOfVendors: values.numOfVendors }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndPurchaser.preparedByVendor.step4"
            params={{ numOfVendors: values.numOfVendors }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndPurchaser.preparedByVendor.step5"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndPurchaser.preparedByVendor.step6"
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
      </>
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  const VendorAndPurchaserIssuerPurchaserPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndPurchaser.preparedByPurchaser.step1"
            params={{ numOfVendors: values.numOfVendors }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndPurchaser.preparedByPurchaser.step2"
            params={{
              numOfVendors: values.numOfVendors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
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
            id="sale-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndPurchaser.preparedByPurchaser.step3"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndPurchaser.preparedByPurchaser.step4"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndPurchaser.preparedByPurchaser.step5"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorAndPurchaser.preparedByPurchaser.step6"
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
      </>
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  const VendorDelegateIssuerVendorPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorDelegate.preparedByVendor.step1"
            params={{ numOfVendors: values.numOfVendors }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorDelegate.preparedByVendor.step2"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
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
            id="sale-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorDelegate.preparedByVendor.step3"
            params={{ numOfVendors: values.numOfVendors }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorDelegate.preparedByVendor.step4"
            params={{ numOfVendors: values.numOfVendors }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorDelegate.preparedByVendor.step5"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorDelegate.preparedByVendor.step6"
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
      </>
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  const VendorDelegateIssuerPurchaserPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorDelegate.preparedByPurchaser.step1"
            params={{ numOfVendors: values.numOfVendors }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorDelegate.preparedByPurchaser.step2"
            params={{
              numOfVendors: values.numOfVendors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
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
            id="sale-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorDelegate.preparedByPurchaser.step3"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorDelegate.preparedByPurchaser.step4"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorDelegate.preparedByPurchaser.step5"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByVendorDelegate.preparedByPurchaser.step6"
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
      </>
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  const PurchaserDelegateIssuerVendorPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaserDelegate.preparedByVendor.step1"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaserDelegate.preparedByVendor.step2"
            params={{
              numOfVendors: values.numOfVendors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
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
            id="sale-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaserDelegate.preparedByVendor.step3"
            params={{ numOfVendors: values.numOfVendors }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaserDelegate.preparedByVendor.step4"
            params={{ numOfVendors: values.numOfVendors }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaserDelegate.preparedByVendor.step5"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-5"
                  className="hover:cursor-pointer"
                />
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaserDelegate.preparedByVendor.step6"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaserDelegate.preparedByVendor.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-7"
                  className="hover:cursor-pointer"
                />
              ),
              em: <em className="font-bold" />,
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
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
            id="sale-payment-conditional-1-step-1"
            name="payment"
            value="conditional-1-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaserDelegate.preparedByPurchaser.step1"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaserDelegate.preparedByPurchaser.step2"
            params={{
              numOfVendors: values.numOfVendors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
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
            id="sale-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaserDelegate.preparedByPurchaser.step3"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaserDelegate.preparedByPurchaser.step4"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaserDelegate.preparedByPurchaser.step5"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaserDelegate.preparedByPurchaser.step6"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaserDelegate.preparedByPurchaser.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-7"
                  className="hover:cursor-pointer"
                />
              ),
              em: <em className="font-bold" />,
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            }}
          />
        </div>
      </>
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  if (isIssuedByVendor && isPreparedByVendor)
    return <VendorIssuerVendorPreparerInstructions />;
  if (isIssuedByVendor && isPreparedByPurchaser)
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

function ConditionalInstructions2() {
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

  const CommonCashInstructions = useCallback(
    () => (
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
        i18nKey="payment.conditionalInstructions2.paidInCash.cashDeposit"
        params={{
          numOfVendors: values.numOfVendors,
          numOfPurchasers: values.numOfPurchasers,
        }}
        components={{
          em: <em className="font-bold" />,
          DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
          ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
        }}
      />
    ),
    [values.numOfPurchasers, values.numOfVendors],
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey={`payment.conditionalInstructions2.paidInCash.issuedByVendor.step1`}
            params={{
              numOfVendors: values.numOfVendors,
              numOfPurchasers: values.numOfPurchasers,
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
    [CommonCashInstructions, values.numOfPurchasers, values.numOfVendors],
  );

  const CashPurchaserInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey={`payment.conditionalInstructions2.paidInCash.issuedByPurchaser.step1`}
            params={{
              numOfVendors: values.numOfVendors,
              numOfPurchasers: values.numOfPurchasers,
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
    [CommonCashInstructions, values.numOfPurchasers, values.numOfVendors],
  );

  const CashVendorAndPurchaserInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey={`payment.conditionalInstructions2.paidInCash.issuedByVendorAndPurchaser.step1`}
            params={{
              numOfVendors: values.numOfVendors,
              numOfPurchasers: values.numOfPurchasers,
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
    [CommonCashInstructions, values.numOfPurchasers, values.numOfVendors],
  );

  const CashVendorDelegateInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey={`payment.conditionalInstructions2.paidInCash.issuedByVendorDelegate.step1`}
            params={{
              numOfVendors: values.numOfVendors,
              numOfPurchasers: values.numOfPurchasers,
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
    [CommonCashInstructions, values.numOfPurchasers, values.numOfVendors],
  );

  const CashPurchaserDelegateInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey={`payment.conditionalInstructions2.paidInCash.issuedByPurchaserDelegate.step1`}
            params={{
              numOfVendors: values.numOfVendors,
              numOfPurchasers: values.numOfPurchasers,
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
    [CommonCashInstructions, values.numOfPurchasers, values.numOfVendors],
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
          ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
          i18nKey={`payment.conditionalInstructions2.notPaidInCash.issuedByVendor.step1`}
          params={{
            numOfVendors: values.numOfVendors,
            numOfPurchasers: values.numOfPurchasers,
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
    [values.numOfPurchasers, values.numOfVendors],
  );

  const NonCashPurchaserInstructions = useCallback(
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
          ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
          i18nKey={`payment.conditionalInstructions2.notPaidInCash.issuedByPurchaser.step1`}
          params={{
            numOfVendors: values.numOfVendors,
            numOfPurchasers: values.numOfPurchasers,
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
    [values.numOfPurchasers, values.numOfVendors],
  );

  const NonCashVendorAndPurchaserInstructions = useCallback(
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
          ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
          i18nKey={`payment.conditionalInstructions2.notPaidInCash.issuedByVendorAndPurchaser.step1`}
          params={{
            numOfVendors: values.numOfVendors,
            numOfPurchasers: values.numOfPurchasers,
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
    [values.numOfPurchasers, values.numOfVendors],
  );

  const NonCashVendorDelegateInstructions = useCallback(
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
          ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
          i18nKey={`payment.conditionalInstructions2.notPaidInCash.issuedByVendorDelegate.step1`}
          params={{
            numOfVendors: values.numOfVendors,
            numOfPurchasers: values.numOfPurchasers,
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
    [values.numOfPurchasers, values.numOfVendors],
  );

  const NonCashPurchaserDelegateInstructions = useCallback(
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
          ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
          i18nKey={`payment.conditionalInstructions2.notPaidInCash.issuedByPurchaserDelegate.step1`}
          params={{
            numOfVendors: values.numOfVendors,
            numOfPurchasers: values.numOfPurchasers,
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
    [values.numOfPurchasers, values.numOfVendors],
  );

  if (values.paymentMethod === "cash" && isIssuedByVendor)
    return <CashVendorInstructions />;
  if (values.paymentMethod === "cash" && isIssuedByPurchaser)
    return <CashPurchaserInstructions />;
  if (values.paymentMethod === "cash" && isIssuedByVendorAndPurchaser)
    return <CashVendorAndPurchaserInstructions />;
  if (values.paymentMethod === "cash" && isIssuedByVendorDelegate)
    return <CashVendorDelegateInstructions />;
  if (values.paymentMethod === "cash" && isIssuedByPurchaserDelegate)
    return <CashPurchaserDelegateInstructions />;
  if (values.paymentMethod === "notCash" && isIssuedByVendor)
    return <NonCashVendorInstructions />;
  if (values.paymentMethod === "notCash" && isIssuedByPurchaser)
    return <NonCashPurchaserInstructions />;
  if (values.paymentMethod === "notCash" && isIssuedByVendorAndPurchaser)
    return <NonCashVendorAndPurchaserInstructions />;
  if (values.paymentMethod === "notCash" && isIssuedByVendorDelegate)
    return <NonCashVendorDelegateInstructions />;
  if (values.paymentMethod === "notCash" && isIssuedByPurchaserDelegate)
    return <NonCashPurchaserDelegateInstructions />;
  return null;
}

function ConditionalInstructions3() {
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
            id="sale-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByVendor.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByVendor.step2"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByVendor.step3"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByVendor.step4"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByVendor.step5"
            params={{
              numOfVendors: values.numOfVendors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-5"
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
            id="sale-payment-conditional-3-step-6"
            name="payment"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByVendor.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
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
            id="sale-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByPurchaser.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByPurchaser.step2"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByPurchaser.step3"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByPurchaser.step4"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByPurchaser.step5"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-5"
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
            id="sale-payment-conditional-3-step-6"
            name="payment"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendor.preparedByPurchaser.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
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
            id="sale-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByVendor.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByVendor.step2"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByVendor.step3"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByVendor.step4"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByVendor.step5"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByVendor.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-6"
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
            id="sale-payment-conditional-3-step-7"
            name="payment"
            value="conditional-3-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByVendor.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-7"
                  className="hover:cursor-pointer"
                />
              ),
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
            id="sale-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByPurchaser.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByPurchaser.step2"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByPurchaser.step3"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByPurchaser.step4"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByPurchaser.step5"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByPurchaser.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-6"
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
            id="sale-payment-conditional-3-step-7"
            name="payment"
            value="conditional-3-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByPurchaser.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-7"
                  className="hover:cursor-pointer"
                />
              ),
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
            id="sale-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndPurchaser.preparedByVendor.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndPurchaser.preparedByVendor.step2"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndPurchaser.preparedByVendor.step3"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndPurchaser.preparedByVendor.step4"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndPurchaser.preparedByVendor.step5"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-5"
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
            id="sale-payment-conditional-3-step-6"
            name="payment"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndPurchaser.preparedByVendor.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
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
            id="sale-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndPurchaser.preparedByPurchaser.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndPurchaser.preparedByPurchaser.step2"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndPurchaser.preparedByPurchaser.step3"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndPurchaser.preparedByPurchaser.step4"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndPurchaser.preparedByPurchaser.step5"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-5"
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
            id="sale-payment-conditional-3-step-6"
            name="payment"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorAndPurchaser.preparedByPurchaser.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
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
            id="sale-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorDelegate.preparedByVendor.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorDelegate.preparedByVendor.step2"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorDelegate.preparedByVendor.step3"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorDelegate.preparedByVendor.step4"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorDelegate.preparedByVendor.step5"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-5"
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
            id="sale-payment-conditional-3-step-6"
            name="payment"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorDelegate.preparedByVendor.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
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
            id="sale-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorDelegate.preparedByPurchaser.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorDelegate.preparedByPurchaser.step2"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorDelegate.preparedByPurchaser.step3"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorDelegate.preparedByPurchaser.step4"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorDelegate.preparedByPurchaser.step5"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-5"
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
            id="sale-payment-conditional-3-step-6"
            name="payment"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByVendorDelegate.preparedByPurchaser.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
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
            id="sale-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaserDelegate.preparedByVendor.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaserDelegate.preparedByVendor.step2"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaserDelegate.preparedByVendor.step3"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaserDelegate.preparedByVendor.step4"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaserDelegate.preparedByVendor.step5"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaserDelegate.preparedByVendor.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-6"
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
            id="sale-payment-conditional-3-step-7"
            name="payment"
            value="conditional-3-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaserDelegate.preparedByVendor.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-7"
                  className="hover:cursor-pointer"
                />
              ),
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
            id="sale-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaserDelegate.preparedByPurchaser.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaserDelegate.preparedByPurchaser.step2"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaserDelegate.preparedByPurchaser.step3"
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaserDelegate.preparedByPurchaser.step4"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaserDelegate.preparedByPurchaser.step5"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaserDelegate.preparedByPurchaser.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-6"
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
            id="sale-payment-conditional-3-step-7"
            name="payment"
            value="conditional-3-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaserDelegate.preparedByPurchaser.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-7"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
      </>
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  if (isIssuedByVendor && isPreparedByVendor)
    return <VendorIssuerVendorPreparerInstructions />;
  if (isIssuedByVendor && isPreparedByPurchaser)
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

export function PaymentSteps() {
  const { values } = useFormikContext<InitialValues>();

  return (
    <>
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
        i18nKey="payment.description"
        params={{
          numOfVendors: values.numOfVendors,
          numOfPurchasers: values.numOfPurchasers,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
            i18nKey="payment.step1"
            params={{
              numOfVendors: values.numOfVendors,
            }}
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
        ns="instructions-vehicle-transaction-2nd-hand-i2i-purchase-page"
        i18nKey="payment.leaveWithVehicle"
      />
    </>
  );
}
