import { useField } from "formik";
import { Checkbox, CheckboxProps } from "@nextui-org/react";

type FormCheckboxProps = CheckboxProps & {
  name: string;
};

export default function FormCheckbox({ name, ...props }: FormCheckboxProps) {
  const [field, meta] = useField(name);

  return (
    <Checkbox
      radius="sm"
      isInvalid={!!meta.error}
      {...props}
      {...field}
      isSelected={field.value}
    />
  );
}
