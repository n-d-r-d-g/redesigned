import { useField } from "formik";
import { Input, InputProps } from "@heroui/react";
import { FocusEvent, useCallback } from "react";

type CurrencyContentProps = {
  currency: string;
};

type FormNumberInputProps = Partial<CurrencyContentProps> &
  Omit<InputProps, "type" | "startContent" | "isInvalid" | "errorMessage"> & {
    name: string;
  };

function CurrencyContent({ currency }: CurrencyContentProps) {
  return (
    <div className="pointer-events-none h-6 flex items-center">
      <span className="text-inherit text-small">{currency}</span>
    </div>
  );
}

export default function FormNumberInput({
  currency,
  name,
  ...props
}: FormNumberInputProps) {
  const [field, meta] = useField(name);
  const startContentProp = currency
    ? { startContent: <CurrencyContent currency={currency} /> }
    : {};

  const handleFocus = useCallback(
    (e: FocusEvent<Element, Element>) =>
      (e.target as HTMLInputElement)?.select(),
    []
  );

  return (
    <Input
      type="number"
      step="any"
      radius="sm"
      size="lg"
      isInvalid={!!meta.error}
      errorMessage={meta.error}
      labelPlacement="outside"
      classNames={{
        base: meta.error && "text-danger-700",
        label: "text-sm z-0",
        description: "text-default-600",
        errorMessage: meta.error && "text-danger-700",
      }}
      onFocus={handleFocus}
      {...startContentProp}
      {...props}
      {...field}
    />
  );
}
