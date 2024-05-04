import { Select, SelectProps } from "@nextui-org/react";
import { useField } from "formik";

type FormSelectProps = Omit<SelectProps, "isInvalid" | "errorMessage"> & {
  name: string;
};

export default function FormSelect({
  name,
  children,
  ...props
}: FormSelectProps) {
  const [field, meta] = useField(name);

  return (
    <Select
      selectedKeys={Array.isArray(field.value) ? field.value : [field.value]}
      isInvalid={!!meta.error}
      errorMessage={meta.error}
      radius="sm"
      size="lg"
      labelPlacement="outside"
      classNames={{
        label: "text-sm z-0",
      }}
      {...props}
      {...field}
    >
      {children}
    </Select>
  );
}
