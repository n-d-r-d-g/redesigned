import { useCallback } from "react";
import { useFormikContext } from "formik";
import Checkbox from "@/components/Checkbox/Checkbox";
import TypedTrans from "@/components/TypedTrans/TypedTrans";
import TechnicalTerm from "@/components/TechnicalTerm/TechnicalTerm";
import { retrieveDirectorRequiredI18nText } from "../../c2i-utils";
import { InitialValues } from "../../types";
import styles from "../../../styles.module.css";

function ConditionalInstructions1() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByCompany =
    values.administrativeStatusCertificateIssuer === "company";
  const isIssuedByPurchaser =
    values.administrativeStatusCertificateIssuer === "purchaser";
  const isIssuedByCompanyAndPurchaser =
    values.administrativeStatusCertificateIssuer === "companyAndPurchaser";
  const isPreparedByCompany = values.documentsPreparer === "company";
  const isPreparedByPurchaser = values.documentsPreparer === "purchaser";
  const whetherDirectorIsRequired = retrieveDirectorRequiredI18nText(values);

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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByCompany.step1"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByCompany.step2"
            params={{
              numOfDirectors: values.numOfDirectors,
              whetherDirectorIsRequired,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByCompany.step3"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-3"
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
            id="sale-payment-conditional-1-step-4"
            name="payment"
            value="conditional-1-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByCompany.step5"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByCompany.step6"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
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
    [values.numOfDirectors, values.numOfPurchasers, whetherDirectorIsRequired],
  );

  const CompanyIssuerPurchaserPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByPurchaser.step1"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByPurchaser.step2"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByPurchaser.step3"
            params={{
              numOfDirectors: values.numOfDirectors,
              whetherDirectorIsRequired,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByPurchaser.step4"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByPurchaser.step5"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByPurchaser.step6"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany.preparedByPurchaser.step7"
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
    [values.numOfDirectors, values.numOfPurchasers, whetherDirectorIsRequired],
  );

  const PurchaserIssuerCompanyPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByCompany.step1"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByCompany.step2"
            params={{
              numOfDirectors: values.numOfDirectors,
              whetherDirectorIsRequired,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByCompany.step3"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-3"
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
            id="sale-payment-conditional-1-step-4"
            name="payment"
            value="conditional-1-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByCompany.step4"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByCompany.step5"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByCompany.step6"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByCompany.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-7"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-8"
            name="payment"
            value="conditional-1-step-8"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByCompany.step8"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-8"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
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
            id="sale-payment-conditional-1-step-1"
            name="payment"
            value="conditional-1-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByPurchaser.step1"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByPurchaser.step2"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByPurchaser.step3"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByPurchaser.step4"
            params={{
              numOfDirectors: values.numOfDirectors,
              whetherDirectorIsRequired,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByPurchaser.step5"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByPurchaser.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-7"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-1-step-8"
            name="payment"
            value="conditional-1-step-8"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByPurchaser.preparedByPurchaser.step8"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-8"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
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
            id="sale-payment-conditional-1-step-1"
            name="payment"
            value="conditional-1-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompanyAndPurchaser.preparedByCompany.step1"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompanyAndPurchaser.preparedByCompany.step2"
            params={{
              numOfDirectors: values.numOfDirectors,
              whetherDirectorIsRequired,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompanyAndPurchaser.preparedByCompany.step3"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-3"
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
            id="sale-payment-conditional-1-step-4"
            name="payment"
            value="conditional-1-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompanyAndPurchaser.preparedByCompany.step4"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompanyAndPurchaser.preparedByCompany.step5"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompanyAndPurchaser.preparedByCompany.step6"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompanyAndPurchaser.preparedByCompany.step7"
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
    [values.numOfDirectors, values.numOfPurchasers, whetherDirectorIsRequired],
  );

  const CompanyAndPurchaserIssuerPurchaserPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompanyAndPurchaser.preparedByPurchaser.step1"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompanyAndPurchaser.preparedByPurchaser.step2"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-1-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompanyAndPurchaser.preparedByPurchaser.step3"
            params={{
              numOfDirectors: values.numOfDirectors,
              whetherDirectorIsRequired,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompanyAndPurchaser.preparedByPurchaser.step4"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompanyAndPurchaser.preparedByPurchaser.step5"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompanyAndPurchaser.preparedByPurchaser.step6"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompanyAndPurchaser.preparedByPurchaser.step7"
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
  if (isIssuedByCompanyAndPurchaser && isIssuedByPurchaser)
    return <CompanyAndPurchaserIssuerPurchaserPreparerInstructions />;
  return null;
}

function ConditionalInstructions2() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByCompany =
    values.administrativeStatusCertificateIssuer === "company";
  const isIssuedByPurchaser =
    values.administrativeStatusCertificateIssuer === "purchaser";
  const isIssuedByCompanyAndPurchaser =
    values.administrativeStatusCertificateIssuer === "companyAndPurchaser";

  const CommonCashInstructions = useCallback(
    () => (
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
        i18nKey="payment.conditionalInstructions2.paidInCash.cashDeposit"
        params={{
          numOfDirectors: values.numOfDirectors,
          numOfPurchasers: values.numOfPurchasers,
        }}
        components={{
          em: <em className="font-bold" />,
          DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
          ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
        }}
      />
    ),
    [values.numOfDirectors, values.numOfPurchasers],
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey={`payment.conditionalInstructions2.paidInCash.issuedByCompany.step1`}
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
    [CommonCashInstructions],
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey={`payment.conditionalInstructions2.paidInCash.issuedByPurchaser.step1`}
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
    [CommonCashInstructions],
  );

  const CashCompanyAndPurchaserInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey={`payment.conditionalInstructions2.paidInCash.issuedByCompanyAndPurchaser.step1`}
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
    [CommonCashInstructions],
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
          ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
          i18nKey={`payment.conditionalInstructions2.notPaidInCash.issuedByCompany.step1`}
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
    [],
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
          ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
          i18nKey={`payment.conditionalInstructions2.notPaidInCash.issuedByPurchaser.step1`}
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
    [],
  );

  const NonCashCompanyAndPurchaserInstructions = useCallback(
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
          ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
          i18nKey={`payment.conditionalInstructions2.notPaidInCash.issuedByCompanyAndPurchaser.step1`}
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
    [],
  );

  if (values.paymentMethod === "cash" && isIssuedByCompany)
    return <CashCompanyInstructions />;
  if (values.paymentMethod === "cash" && isIssuedByPurchaser)
    return <CashPurchaserInstructions />;
  if (values.paymentMethod === "cash" && isIssuedByCompanyAndPurchaser)
    return <CashCompanyAndPurchaserInstructions />;
  if (values.paymentMethod === "notCash" && isIssuedByCompany)
    return <NonCashCompanyInstructions />;
  if (values.paymentMethod === "notCash" && isIssuedByPurchaser)
    return <NonCashPurchaserInstructions />;
  if (values.paymentMethod === "notCash" && isIssuedByCompanyAndPurchaser)
    return <NonCashCompanyAndPurchaserInstructions />;
  return null;
}

function ConditionalInstructions3() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByCompany =
    values.administrativeStatusCertificateIssuer === "company";
  const isIssuedByPurchaser =
    values.administrativeStatusCertificateIssuer === "purchaser";
  const isIssuedByCompanyAndPurchaser =
    values.administrativeStatusCertificateIssuer === "companyAndPurchaser";
  const isPreparedByCompany = values.documentsPreparer === "company";
  const isPreparedByPurchaser = values.documentsPreparer === "purchaser";
  const whetherDirectorIsRequired = retrieveDirectorRequiredI18nText(values);

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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByCompany.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByCompany.step2"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByCompany.step3"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByCompany.step4"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByCompany.step5"
            params={{
              numOfDirectors: values.numOfDirectors,
              whetherDirectorIsRequired,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByCompany.step6"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByCompany.step7"
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
    [values.numOfDirectors, values.numOfPurchasers, whetherDirectorIsRequired],
  );

  const CompanyIssuerPurchaserPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByPurchaser.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByPurchaser.step2"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByPurchaser.step3"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByPurchaser.step4"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByPurchaser.step5"
            params={{
              numOfDirectors: values.numOfDirectors,
              whetherDirectorIsRequired,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByPurchaser.step6"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany.preparedByPurchaser.step7"
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
    [values.numOfDirectors, values.numOfPurchasers, whetherDirectorIsRequired],
  );

  const PurchaserIssuerCompanyPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByCompany.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByCompany.step2"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByCompany.step3"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByCompany.step4"
            params={{
              numOfDirectors: values.numOfDirectors,
              whetherDirectorIsRequired,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByCompany.step5"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByCompany.step6"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByCompany.step7"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-8"
            name="payment"
            value="conditional-3-step-8"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByCompany.step8"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-8"
                  className="hover:cursor-pointer"
                />
              ),
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
            id="sale-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByPurchaser.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByPurchaser.step2"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByPurchaser.step3"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByPurchaser.step4"
            params={{
              numOfDirectors: values.numOfDirectors,
              whetherDirectorIsRequired,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByPurchaser.step5"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByPurchaser.step6"
            params={{
              numOfPurchasers: values.numOfPurchasers,
            }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByPurchaser.step7"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
        <div className="flex gap-2">
          <Checkbox
            id="sale-payment-conditional-3-step-8"
            name="payment"
            value="conditional-3-step-8"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByPurchaser.preparedByPurchaser.step8"
            components={{
              label: (
                <label
                  htmlFor="sale-payment-conditional-3-step-8"
                  className="hover:cursor-pointer"
                />
              ),
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
            id="sale-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompanyAndPurchaser.preparedByCompany.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompanyAndPurchaser.preparedByCompany.step2"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompanyAndPurchaser.preparedByCompany.step3"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompanyAndPurchaser.preparedByCompany.step4"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompanyAndPurchaser.preparedByCompany.step5"
            params={{
              numOfDirectors: values.numOfDirectors,
              whetherDirectorIsRequired,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompanyAndPurchaser.preparedByCompany.step6"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompanyAndPurchaser.preparedByCompany.step7"
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
    [values.numOfDirectors, values.numOfPurchasers, whetherDirectorIsRequired],
  );

  const CompanyAndPurchaserIssuerPurchaserPreparerInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompanyAndPurchaser.preparedByPurchaser.step1"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompanyAndPurchaser.preparedByPurchaser.step2"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompanyAndPurchaser.preparedByPurchaser.step3"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompanyAndPurchaser.preparedByPurchaser.step4"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompanyAndPurchaser.preparedByPurchaser.step5"
            params={{
              numOfDirectors: values.numOfDirectors,
              whetherDirectorIsRequired,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompanyAndPurchaser.preparedByPurchaser.step6"
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompanyAndPurchaser.preparedByPurchaser.step7"
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

export function PaymentSteps() {
  const { values } = useFormikContext<InitialValues>();
  const whetherDirectorIsRequired = retrieveDirectorRequiredI18nText(values);

  return (
    <>
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
        i18nKey="payment.description"
        params={{
          numOfDirectors: values.numOfDirectors,
          numOfPurchasers: values.numOfPurchasers,
          whetherDirectorIsRequired,
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
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
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
        ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
        i18nKey="payment.leaveWithVehicle"
        params={{ numOfPurchasers: values.numOfPurchasers }}
      />
    </>
  );
}
