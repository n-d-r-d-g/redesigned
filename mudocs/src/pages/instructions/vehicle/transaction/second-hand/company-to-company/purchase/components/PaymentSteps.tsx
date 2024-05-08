import { useCallback } from "react";
import { useFormikContext } from "formik";
import Checkbox from "@/components/Checkbox/Checkbox";
import TypedTrans from "@/components/TypedTrans/TypedTrans";
import TechnicalTerm from "@/components/TechnicalTerm/TechnicalTerm";
import { retrieveDirectorRequiredI18nText } from "../../c2c-utils";
import { InitialValues } from "../../types";
import styles from "../../../styles.module.css";

function ConditionalInstructions1() {
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
            id="purchase-payment-conditional-1-step-1"
            name="payment"
            value="conditional-1-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1.preparedByCompany1.step1"
            params={{
              numOfCompany1Directors: values.numOfCompany1Directors,
              whetherDirectorIsRequired,
            }}
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-2"
            name="payment"
            value="conditional-1-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1.preparedByCompany1.step2"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-2"
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
            id="purchase-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1.preparedByCompany1.step3"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-3"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-4"
            name="payment"
            value="conditional-1-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1.preparedByCompany1.step4"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-4"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-5"
            name="payment"
            value="conditional-1-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1.preparedByCompany1.step5"
            params={{ numOfCompany2Directors: values.numOfCompany2Directors }}
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-6"
            name="payment"
            value="conditional-1-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1.preparedByCompany1.step6"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-6"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-7"
            name="payment"
            value="conditional-1-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1.preparedByCompany1.step7"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-7"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
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
            id="purchase-payment-conditional-1-step-1"
            name="payment"
            value="conditional-1-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1.preparedByCompany2.step1"
            params={{
              numOfCompany1Directors: values.numOfCompany1Directors,
              whetherDirectorIsRequired,
            }}
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-2"
            name="payment"
            value="conditional-1-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1.preparedByCompany2.step2"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-2"
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
            id="purchase-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1.preparedByCompany2.step3"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-3"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-4"
            name="payment"
            value="conditional-1-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1.preparedByCompany2.step4"
            params={{
              numOfCompany2Directors: values.numOfCompany2Directors,
            }}
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-4"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-5"
            name="payment"
            value="conditional-1-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1.preparedByCompany2.step5"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-5"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-6"
            name="payment"
            value="conditional-1-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1.preparedByCompany2.step6"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-7"
            name="payment"
            value="conditional-1-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1.preparedByCompany2.step7"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-7"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
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
            id="purchase-payment-conditional-1-step-1"
            name="payment"
            value="conditional-1-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1AndCompany2.preparedByCompany1.step1"
            params={{
              numOfCompany1Directors: values.numOfCompany1Directors,
              whetherDirectorIsRequired,
            }}
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-2"
            name="payment"
            value="conditional-1-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1AndCompany2.preparedByCompany1.step2"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-2"
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
            id="purchase-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1AndCompany2.preparedByCompany1.step3"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-3"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-4"
            name="payment"
            value="conditional-1-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1AndCompany2.preparedByCompany1.step4"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-4"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-5"
            name="payment"
            value="conditional-1-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1AndCompany2.preparedByCompany1.step5"
            params={{ numOfCompany2Directors: values.numOfCompany2Directors }}
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-6"
            name="payment"
            value="conditional-1-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1AndCompany2.preparedByCompany1.step6"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-6"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-7"
            name="payment"
            value="conditional-1-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1AndCompany2.preparedByCompany1.step7"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-7"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
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
            id="purchase-payment-conditional-1-step-1"
            name="payment"
            value="conditional-1-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1AndCompany2.preparedByCompany2.step1"
            params={{
              numOfCompany1Directors: values.numOfCompany1Directors,
              whetherDirectorIsRequired,
            }}
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-2"
            name="payment"
            value="conditional-1-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1AndCompany2.preparedByCompany2.step2"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-2"
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
            id="purchase-payment-conditional-1-step-3"
            name="payment"
            value="conditional-1-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1AndCompany2.preparedByCompany2.step3"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-3"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-4"
            name="payment"
            value="conditional-1-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1AndCompany2.preparedByCompany2.step4"
            params={{
              numOfCompany2Directors: values.numOfCompany2Directors,
            }}
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-4"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-5"
            name="payment"
            value="conditional-1-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1AndCompany2.preparedByCompany2.step5"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-5"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-6"
            name="payment"
            value="conditional-1-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1AndCompany2.preparedByCompany2.step6"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-1-step-7"
            name="payment"
            value="conditional-1-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions1.issuedByCompany1AndCompany2.preparedByCompany2.step7"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-1-step-7"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={3} />,
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

function ConditionalInstructions2() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByCompany1 =
    values.administrativeStatusCertificateIssuer === "company1";
  const isIssuedByCompany1AndCompany2 =
    values.administrativeStatusCertificateIssuer === "company1AndCompany2";
  const whetherDirectorIsRequired = retrieveDirectorRequiredI18nText(values);

  const CommonCashInstructions = useCallback(
    () => (
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
        i18nKey="payment.conditionalInstructions2.paidInCash.cashDeposit"
        params={{
          numOfCompany1Directors: values.numOfCompany1Directors,
          numOfCompany2Directors: values.numOfCompany2Directors,
          whetherDirectorIsRequired,
        }}
        components={{
          em: <em className="font-bold" />,
          DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
          ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
        }}
      />
    ),
    [
      values.numOfCompany1Directors,
      values.numOfCompany2Directors,
      whetherDirectorIsRequired,
    ],
  );

  const CashCompany1Instructions = useCallback(
    () => (
      <>
        <CommonCashInstructions />
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-2-step-1"
            name="payment"
            value="conditional-2-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey={`payment.conditionalInstructions2.paidInCash.issuedByCompany1.step1`}
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-2-step-1"
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

  const CashCompany1AndCompany2Instructions = useCallback(
    () => (
      <>
        <CommonCashInstructions />
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-2-step-1"
            name="payment"
            value="conditional-2-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey={`payment.conditionalInstructions2.paidInCash.issuedByCompany1AndCompany2.step1`}
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-2-step-1"
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

  const NonCashCompany1Instructions = useCallback(
    () => (
      <div className="flex gap-2">
        <Checkbox
          id="purchase-payment-conditional-2-step-1"
          name="payment"
          value="conditional-2-step-1"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
          i18nKey={`payment.conditionalInstructions2.notPaidInCash.issuedByCompany1.step1`}
          components={{
            label: (
              <label
                htmlFor="purchase-payment-conditional-2-step-1"
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

  const NonCashCompany1AndCompany2Instructions = useCallback(
    () => (
      <div className="flex gap-2">
        <Checkbox
          id="purchase-payment-conditional-2-step-1"
          name="payment"
          value="conditional-2-step-1"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
          i18nKey={`payment.conditionalInstructions2.notPaidInCash.issuedByCompany1AndCompany2.step1`}
          components={{
            label: (
              <label
                htmlFor="purchase-payment-conditional-2-step-1"
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

  if (values.paymentMethod === "cash" && isIssuedByCompany1)
    return <CashCompany1Instructions />;
  if (values.paymentMethod === "cash" && isIssuedByCompany1AndCompany2)
    return <CashCompany1AndCompany2Instructions />;
  if (values.paymentMethod === "notCash" && isIssuedByCompany1)
    return <NonCashCompany1Instructions />;
  if (values.paymentMethod === "notCash" && isIssuedByCompany1AndCompany2)
    return <NonCashCompany1AndCompany2Instructions />;
  return null;
}

function ConditionalInstructions3() {
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
            id="purchase-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1.preparedByCompany1.step1"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-2"
            name="payment"
            value="conditional-3-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1.preparedByCompany1.step2"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-3"
            name="payment"
            value="conditional-3-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1.preparedByCompany1.step3"
            params={{
              numOfCompany1Directors: values.numOfCompany1Directors,
              whetherDirectorIsRequired,
            }}
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-4"
            name="payment"
            value="conditional-3-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1.preparedByCompany1.step4"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-4"
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
            id="purchase-payment-conditional-3-step-5"
            name="payment"
            value="conditional-3-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1.preparedByCompany1.step5"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-5"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-6"
            name="payment"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1.preparedByCompany1.step6"
            params={{ numOfCompany2Directors: values.numOfCompany2Directors }}
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-7"
            name="payment"
            value="conditional-3-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1.preparedByCompany1.step7"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-7"
                  className="hover:cursor-pointer"
                />
              ),
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
            id="purchase-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1.preparedByCompany2.step1"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-2"
            name="payment"
            value="conditional-3-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1.preparedByCompany2.step2"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-3"
            name="payment"
            value="conditional-3-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1.preparedByCompany2.step3"
            params={{
              numOfCompany1Directors: values.numOfCompany1Directors,
              whetherDirectorIsRequired,
            }}
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-4"
            name="payment"
            value="conditional-3-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1.preparedByCompany2.step4"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-4"
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
            id="purchase-payment-conditional-3-step-5"
            name="payment"
            value="conditional-3-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1.preparedByCompany2.step5"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-5"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-6"
            name="payment"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1.preparedByCompany2.step6"
            params={{ numOfCompany2Directors: values.numOfCompany2Directors }}
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-7"
            name="payment"
            value="conditional-3-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1.preparedByCompany2.step7"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-7"
                  className="hover:cursor-pointer"
                />
              ),
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
            id="purchase-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1AndCompany2.preparedByCompany1.step1"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-2"
            name="payment"
            value="conditional-3-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1AndCompany2.preparedByCompany1.step2"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-3"
            name="payment"
            value="conditional-3-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1AndCompany2.preparedByCompany1.step3"
            params={{
              numOfCompany1Directors: values.numOfCompany1Directors,
              whetherDirectorIsRequired,
            }}
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-4"
            name="payment"
            value="conditional-3-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1AndCompany2.preparedByCompany1.step4"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-4"
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
            id="purchase-payment-conditional-3-step-5"
            name="payment"
            value="conditional-3-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1AndCompany2.preparedByCompany1.step5"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-5"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-6"
            name="payment"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1AndCompany2.preparedByCompany1.step6"
            params={{ numOfCompany2Directors: values.numOfCompany2Directors }}
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-7"
            name="payment"
            value="conditional-3-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1AndCompany2.preparedByCompany1.step7"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-7"
                  className="hover:cursor-pointer"
                />
              ),
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
            id="purchase-payment-conditional-3-step-1"
            name="payment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1AndCompany2.preparedByCompany1.step1"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-2"
            name="payment"
            value="conditional-3-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1AndCompany2.preparedByCompany1.step2"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-3"
            name="payment"
            value="conditional-3-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1AndCompany2.preparedByCompany1.step3"
            params={{
              numOfCompany1Directors: values.numOfCompany1Directors,
              whetherDirectorIsRequired,
            }}
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-4"
            name="payment"
            value="conditional-3-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1AndCompany2.preparedByCompany1.step4"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-4"
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
            id="purchase-payment-conditional-3-step-5"
            name="payment"
            value="conditional-3-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1AndCompany2.preparedByCompany1.step5"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-5"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-6"
            name="payment"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1AndCompany2.preparedByCompany1.step6"
            params={{ numOfCompany2Directors: values.numOfCompany2Directors }}
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-conditional-3-step-7"
            name="payment"
            value="conditional-3-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.conditionalInstructions3.issuedByCompany1AndCompany2.preparedByCompany1.step7"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-conditional-3-step-7"
                  className="hover:cursor-pointer"
                />
              ),
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

export function PaymentSteps() {
  const { values } = useFormikContext<InitialValues>();
  const whetherDirectorIsRequired = retrieveDirectorRequiredI18nText(values);

  return (
    <>
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
        i18nKey="payment.description"
        params={{
          numOfCompany1Directors: values.numOfCompany1Directors,
          whetherDirectorIsRequired,
        }}
      />
      <div className="mb-3 mt-2 flex flex-col gap-3">
        <div className="flex gap-2">
          <Checkbox
            id="purchase-payment-step-1"
            name="payment"
            value="step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
            i18nKey="payment.step1"
            components={{
              label: (
                <label
                  htmlFor="purchase-payment-step-1"
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
        ns="instructions-vehicle-transaction-2nd-hand-c2c-purchase-page"
        i18nKey="payment.leaveWithVehicle"
      />
    </>
  );
}
