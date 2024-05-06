import { useFormikContext } from "formik";
import TypedTrans from "@/components/TypedTrans/TypedTrans";
import { InitialValues } from "../../types";

export function Conclusion() {
  const { values } = useFormikContext<InitialValues>();

  return (
    <>
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
        i18nKey="informInsurance"
        components={{
          p: <p className="mt-4" />,
        }}
      />
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
        i18nKey="endingNote"
        params={{ numOfPurchasers: values.numOfPurchasers }}
        components={{
          p: <p className="mt-4" />,
        }}
      />
    </>
  );
}
