import {
  ChangeEvent,
  DetailedHTMLProps,
  SelectHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useField } from "formik";
import { v4 as uuidv4 } from "uuid";
import Select from "../../Select/Select";
import FormLabel from "../FormLabel/FormLabel";
import FormError from "../FormError/FormError";
import { clx } from "@/utils/functions";
import { FormFieldSetField } from "@/types";
import useFormValidity from "@/hooks/useFormValidity";

type Props = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  FormFieldSetField & {
    id?: string;
    name: string;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    containerClassName?: string;
  };

export default function FormSelect({
  label,
  id,
  name,
  children,
  onChange,
  containerClassName: containerExtraClasses,
  ...props
}: Props) {
  const fieldId = useRef<string>(`select-${uuidv4()}`);
  const [field, meta] = useField(name);
  const { handleInvalidField, handleValidField } = useFormValidity();
  const containerClassName = clx("max-w-full", containerExtraClasses);

  const isValid = useCallback(() => {
    const newIsValid = !(meta.touched && meta.error);

    return newIsValid;
  }, [meta.error, meta.touched]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      field.onChange(e);
      onChange?.(e);
    },
    [field, onChange],
  );

  useEffect(() => {
    if (isValid()) handleValidField(fieldId.current);
    else handleInvalidField(fieldId.current);
  }, [handleInvalidField, handleValidField, isValid]);

  return (
    <div className={containerClassName}>
      <FormLabel id={id} name={name} label={label} />
      <Select
        {...field}
        {...props}
        id={id ?? name}
        name={name}
        isValid={isValid()}
        onChange={handleChange}
      >
        {children}
      </Select>
      <FormError name={name} />
    </div>
  );
}
