import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useField } from "formik";
import { v4 as uuidv4 } from "uuid";
import NumberInput from "@/components/NumberInput/NumberInput";
import FormLabel from "../FormLabel/FormLabel";
import FormError from "../FormError/FormError";
import { clx } from "@/utils/functions";
import { FormFieldSetField } from "@/types";
import useFormValidity from "@/hooks/useFormValidity";

type Props = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "type"
> &
  FormFieldSetField & {
    id?: string;
    name: string;
    containerClassName?: string;
  };

export default function FormNumberInput({
  label,
  id,
  name,
  containerClassName: containerExtraClasses,
  ...props
}: Props) {
  const fieldId = useRef<string>(`number-input-${uuidv4()}`);
  const [field, meta] = useField(name);
  const { handleInvalidField, handleValidField } = useFormValidity();

  const containerClassName = clx("max-w-full", containerExtraClasses);

  const isValid = useCallback(() => {
    const newIsValid = !(meta.touched && meta.error);

    return newIsValid;
  }, [meta.error, meta.touched]);

  useEffect(() => {
    if (isValid()) handleValidField(fieldId.current);
    else handleInvalidField(fieldId.current);
  }, [handleInvalidField, handleValidField, isValid]);

  return (
    <div className={containerClassName}>
      <FormLabel id={id} name={name} label={label} />
      <NumberInput
        {...field}
        {...props}
        id={id ?? name}
        name={name}
        isValid={isValid()}
      />
      <FormError name={name} />
    </div>
  );
}
