import Abbr from "@/components/Abbr/Abbr";
import Checkbox from "@/components/Checkbox/Checkbox";
import TechnicalTerm from "@/components/TechnicalTerm/TechnicalTerm";
import TypedTrans from "@/components/TypedTrans/TypedTrans";
import styles from "../styles.module.css";

type Props = {
  purchaserType: "individual" | "company";
  numOfPurchasers: "singlePurchaser" | "multiplePurchasers";
};

export function TransferSteps({ purchaserType, numOfPurchasers }: Props) {
  return (
    <>
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="transfer.requirements.description"
        components={{
          p: <p className="mt-4" />,
        }}
      />
      <div className="mb-3 mt-2 flex flex-col gap-3">
        <div className="flex gap-2">
          <Checkbox
            id="purchase-transfer-requirement-1"
            name="transfer"
            value="requirement-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-page"
            i18nKey="transfer.requirements.requirement1"
            components={{
              label: (
                <label
                  htmlFor="purchase-transfer-requirement-1"
                  className="hover:cursor-pointer"
                />
              ),
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-transfer-requirement-2"
            name="transfer"
            value="requirement-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-page"
            i18nKey="transfer.requirements.requirement2"
            components={{
              label: (
                <label
                  htmlFor="purchase-transfer-requirement-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-transfer-requirement-3"
            name="transfer"
            value="requirement-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-page"
            i18nKey="transfer.requirements.requirement3"
            components={{
              label: (
                <label
                  htmlFor="purchase-transfer-requirement-3"
                  className="hover:cursor-pointer"
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-transfer-requirement-4"
            name="transfer"
            value="requirement-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-page"
            i18nKey="transfer.requirements.requirement4"
            params={{ purchaserType, numOfPurchasers }}
            components={{
              label: (
                <label
                  htmlFor="purchase-transfer-requirement-4"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfAddress: <TechnicalTerm name="proofOfAddress" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-transfer-requirement-5"
            name="transfer"
            value="requirement-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-page"
            i18nKey="transfer.requirements.requirement5"
            components={{
              label: (
                <label
                  htmlFor="purchase-transfer-requirement-5"
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
            id="purchase-transfer-requirement-6"
            name="transfer"
            value="requirement-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-page"
            i18nKey="transfer.requirements.requirement6"
            components={{
              label: (
                <label
                  htmlFor="purchase-transfer-requirement-6"
                  className="hover:cursor-pointer"
                />
              ),
              dl: (
                <dl className="mt-1 grid grid-cols-[auto_auto] rounded-md border border-slate-200 dark:border-slate-700" />
              ),
              dt: (
                <dt className="border-b border-e border-slate-200 px-2 last-of-type:border-b-0 dark:border-slate-700" />
              ),
              dd: (
                <dd className="border-b border-slate-200 px-2 last-of-type:border-b-0 dark:border-slate-700" />
              ),
            }}
          />
        </div>
      </div>
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="transfer.itemsReceived.description"
        components={{
          p: <p className="mt-6" />,
          NLTA: <Abbr name="nlta" />,
        }}
      />
      <ul>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="transfer.itemsReceived.item1"
          components={{
            VehicleRegistrationBook: (
              <TechnicalTerm name="vehicleRegistrationBook" />
            ),
          }}
        />
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-page"
          i18nKey="transfer.itemsReceived.item2"
        />
      </ul>
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-page"
        i18nKey="transfer.note"
        components={{
          p: <p className="mt-4" />,
          em: <em className="font-bold" />,
          DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
          NLTA: <Abbr name="nlta" />,
          VehicleRegistrationBook: (
            <TechnicalTerm name="vehicleRegistrationBook" />
          ),
        }}
      />
    </>
  );
}
