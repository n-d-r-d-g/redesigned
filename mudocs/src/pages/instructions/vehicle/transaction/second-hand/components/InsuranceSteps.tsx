import { useFormikContext } from "formik";
import Checkbox from "@/components/Checkbox/Checkbox";
import Abbr from "@/components/Abbr/Abbr";
import TechnicalTerm from "@/components/TechnicalTerm/TechnicalTerm";
import TypedTrans from "@/components/TypedTrans/TypedTrans";
import { InitialValues as IndividualInitialValues } from "../individual-to-individual/types";
import styles from "../styles.module.css";

type Props = {
  purchaserType: "individual" | "company";
};

function IndividualConditionalRequirements() {
  const { values } = useFormikContext<IndividualInitialValues>();

  return (
    <>
      <div className="flex gap-2">
        <Checkbox
          id="purchase-insurance-requirement-1"
          name="insurance"
          value="requirement-1"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.conditionalRequirements.individualRequirements.requirement1"
          components={{
            label: (
              <label
                htmlFor="purchase-insurance-requirement-1"
                className="hover:cursor-pointer"
              />
            ),
            DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
          }}
        />
      </div>
      <div className="flex gap-2">
        <Checkbox
          id="purchase-insurance-requirement-2"
          name="insurance"
          value="requirement-2"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.conditionalRequirements.individualRequirements.requirement2"
          components={{
            label: (
              <label
                htmlFor="purchase-insurance-requirement-2"
                className="hover:cursor-pointer"
              />
            ),
            ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
          }}
        />
      </div>
      <div className="flex gap-2">
        <Checkbox
          id="purchase-insurance-requirement-3"
          name="insurance"
          value="requirement-3"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.conditionalRequirements.individualRequirements.requirement3"
          params={{ numOfPurchasers: values.numOfPurchasers }}
          components={{
            label: (
              <label
                htmlFor="purchase-insurance-requirement-3"
                className="hover:cursor-pointer"
              />
            ),
            ProofOfAddress: <TechnicalTerm name="proofOfAddress" />,
          }}
        />
      </div>
      <div className="flex gap-2">
        <Checkbox
          id="purchase-insurance-requirement-4"
          name="insurance"
          value="requirement-4"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.conditionalRequirements.individualRequirements.requirement4"
          components={{
            label: (
              <label
                htmlFor="purchase-insurance-requirement-4"
                className="hover:cursor-pointer"
              />
            ),
            ProofOfEmployment: <TechnicalTerm name="proofOfEmployment" />,
          }}
        />
      </div>
      <div className="flex gap-2">
        <Checkbox
          id="purchase-insurance-requirement-5"
          name="insurance"
          value="requirement-5"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.conditionalRequirements.individualRequirements.requirement5"
          components={{
            label: (
              <label
                htmlFor="purchase-insurance-requirement-5"
                className="hover:cursor-pointer"
              />
            ),
          }}
        />
      </div>
      <div className="flex gap-2">
        <Checkbox
          id="purchase-insurance-requirement-6"
          name="insurance"
          value="requirement-6"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.conditionalRequirements.individualRequirements.requirement6"
          components={{
            label: (
              <label
                htmlFor="purchase-insurance-requirement-6"
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
          id="purchase-insurance-requirement-7"
          name="insurance"
          value="requirement-7"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.conditionalRequirements.individualRequirements.requirement7"
          components={{
            label: (
              <label
                htmlFor="purchase-insurance-requirement-7"
                className="hover:cursor-pointer"
              />
            ),
          }}
        />
      </div>
    </>
  );
}

function CompanyConditionalRequirements() {
  return (
    <>
      <div className="flex gap-2">
        <Checkbox
          id="purchase-insurance-requirement-1"
          name="insurance"
          value="requirement-1"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.conditionalRequirements.companyRequirements.requirement1"
          components={{
            label: (
              <label
                htmlFor="purchase-insurance-requirement-1"
                className="hover:cursor-pointer"
              />
            ),
            DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
          }}
        />
      </div>
      <div className="flex gap-2">
        <Checkbox
          id="purchase-insurance-requirement-2"
          name="insurance"
          value="requirement-2"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.conditionalRequirements.companyRequirements.requirement2"
          components={{
            label: (
              <label
                htmlFor="purchase-insurance-requirement-2"
                className="hover:cursor-pointer"
              />
            ),
            ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
          }}
        />
      </div>
      <div className="flex gap-2">
        <Checkbox
          id="purchase-insurance-requirement-3"
          name="insurance"
          value="requirement-3"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.conditionalRequirements.companyRequirements.requirement3"
          components={{
            label: (
              <label
                htmlFor="purchase-insurance-requirement-3"
                className="hover:cursor-pointer"
              />
            ),
          }}
        />
      </div>
      <div className="flex gap-2">
        <Checkbox
          id="purchase-insurance-requirement-4"
          name="insurance"
          value="requirement-4"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.conditionalRequirements.companyRequirements.requirement4"
          components={{
            label: (
              <label
                htmlFor="purchase-insurance-requirement-4"
                className="hover:cursor-pointer"
              />
            ),
            ProofOfAddress: <TechnicalTerm name="proofOfAddress" />,
          }}
        />
      </div>
      <div className="flex gap-2">
        <Checkbox
          id="purchase-insurance-requirement-5"
          name="insurance"
          value="requirement-5"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.conditionalRequirements.companyRequirements.requirement5"
          components={{
            label: (
              <label
                htmlFor="purchase-insurance-requirement-5"
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
          id="purchase-insurance-requirement-6"
          name="insurance"
          value="requirement-6"
          validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
          className={`${styles.checkbox} mt-2`}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.conditionalRequirements.companyRequirements.requirement6"
          components={{
            label: (
              <label
                htmlFor="purchase-insurance-requirement-6"
                className="hover:cursor-pointer"
              />
            ),
          }}
        />
      </div>
    </>
  );
}

export function InsuranceSteps({ purchaserType }: Props) {
  const ConditionalRequirements =
    purchaserType === "individual"
      ? IndividualConditionalRequirements
      : CompanyConditionalRequirements;

  return (
    <>
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="insurance.conditionalRequirements.description"
        components={{
          p: <p className="mt-4" />,
        }}
      />
      <div className="mb-3 mt-2 flex flex-col gap-3">
        <ConditionalRequirements />
      </div>
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="insurance.itemsReceived.description"
        components={{
          p: <p className="mt-4" />,
        }}
      />
      <ul>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.itemsReceived.item1"
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.itemsReceived.item2"
          components={{
            InsuranceVignette: <TechnicalTerm name="insuranceVignette" />,
          }}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.itemsReceived.item3"
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.itemsReceived.item4"
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.itemsReceived.item5"
          components={{
            AgreedStatementOfFacts: (
              <TechnicalTerm name="agreedStatementOfFacts" />
            ),
          }}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.itemsReceived.item6"
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="insurance.itemsReceived.item7"
        />
      </ul>
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="insurance.note1"
        components={{
          p: <p className="mt-4" />,
          em: <em className="font-bold" />,
          DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
          NLTA: <Abbr name="nlta" />,
        }}
      />
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="insurance.note2"
        components={{
          p: <p className="mt-4" />,
          em: <em className="font-bold" />,
        }}
      />
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="insurance.note3"
        components={{
          p: <p className="mt-4" />,
          em: <em className="font-bold" />,
          NLTA: <Abbr name="nlta" />,
        }}
      />
    </>
  );
}
