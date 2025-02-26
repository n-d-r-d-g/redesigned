import { useField } from "formik";
import { Checkbox, CheckboxProps } from "@heroui/react";

type FormCheckboxProps = CheckboxProps & {
  name: string;
};

export default function FormCheckbox({ name, ...props }: FormCheckboxProps) {
  const [field, meta] = useField(name);

  return (
    <Checkbox
      radius="sm"
      isInvalid={!!meta.error}
      isSelected={field.value}
      classNames={{
        label: "text-sm",
      }}
      {...props}
      {...field}
    />
  );
}
