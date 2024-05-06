import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useField } from "formik";
import { v4 as uuidv4 } from "uuid";
import TextInput from "../../TextInput/TextInput";
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
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    containerClassName?: string;
  };

export default function FormTextInput({
  label,
  id,
  name,
  onChange,
  containerClassName: containerExtraClasses,
  ...props
}: Props) {
  const fieldId = useRef<string>(`text-input-${uuidv4()}`);
  const [field, meta] = useField(name);
  const { handleInvalidField, handleValidField } = useFormValidity();
  const containerClassName = clx("max-w-full", containerExtraClasses);
  const isValid = !(meta.touched && meta.error);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      field.onChange(e);
      onChange?.(e);
    },
    [field, onChange],
  );

  useEffect(() => {
    if (isValid) handleValidField(fieldId.current);
    else handleInvalidField(fieldId.current);
  }, [handleInvalidField, handleValidField, isValid]);

  return (
    <div className={containerClassName}>
      <FormLabel id={id} name={name} label={label} />
      <TextInput
        {...field}
        {...props}
        id={id ?? name}
        name={name}
        isValid={isValid}
        onChange={handleChange}
      />
      <FormError name={name} />
    </div>
  );
}
