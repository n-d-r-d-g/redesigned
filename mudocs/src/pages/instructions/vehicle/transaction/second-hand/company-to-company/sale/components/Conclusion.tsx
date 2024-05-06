import TypedTrans from "@/components/TypedTrans/TypedTrans";

export function Conclusion() {
  return (
    <>
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
        i18nKey="informInsurance"
        components={{
          p: <p className="mt-4" />,
        }}
      />
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
        i18nKey="endingNote"
        components={{
          p: <p className="mt-4" />,
        }}
      />
    </>
  );
}
