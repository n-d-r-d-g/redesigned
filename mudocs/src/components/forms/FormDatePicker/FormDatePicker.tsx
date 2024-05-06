import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useField } from "formik";
import { v4 as uuidv4 } from "uuid";
import DatePicker from "../../DatePicker/DatePicker";
import FormLabel from "../FormLabel/FormLabel";
import FormError from "../FormError/FormError";
import { FormFieldSetField } from "@/types";
import useFormValidity from "@/hooks/useFormValidity";

type Props = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "type"
> &
  FormFieldSetField & {
    id?: string;
    name: string;
  };

export default function FormDatePicker({ label, id, name, ...props }: Props) {
  const fieldId = useRef<string>(`date-picker-${uuidv4()}`);
  const [field, meta, helpers] = useField(name);
  const { handleInvalidField, handleValidField } = useFormValidity();

  const isValid = useCallback(() => {
    const newIsValid = !(meta.touched && meta.error);

    return newIsValid;
  }, [meta.error, meta.touched]);

  const handlePickerOpened = useCallback(
    () => helpers.setTouched(true),
    [helpers]
  );

  useEffect(() => {
    if (isValid()) handleValidField(fieldId.current);
    else handleInvalidField(fieldId.current);
  }, [handleInvalidField, handleValidField, isValid]);

  return (
    <div>
      <FormLabel id={id} name={name} label={label} />
      <DatePicker
        {...field}
        {...props}
        id={id ?? name}
        name={name}
        isValid={isValid()}
        onPickerOpened={handlePickerOpened}
      />
      <FormError name={name} />
    </div>
  );
}
