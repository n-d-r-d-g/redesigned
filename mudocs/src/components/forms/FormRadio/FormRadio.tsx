import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useRef,
} from "react";
import { useField } from "formik";
import { v4 as uuidv4 } from "uuid";
import FormLabel from "../FormLabel/FormLabel";
import FormError from "../FormError/FormError";
import { clx } from "@/utils/functions";
import { FormFieldSetField } from "@/types";
import useFormValidity from "@/hooks/useFormValidity";
import Radio from "@/components/Radio/Radio";

type Props = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "type"
> &
  FormFieldSetField & {
    id?: string;
    name: string;
    containerClassName?: string;
    labelClassName?: string;
  };

export default function FormRadio({
  label,
  id,
  name,
  containerClassName: extraContainerClasses,
  labelClassName: extraLabelClasses,
  ...props
}: Props) {
  const fieldId = useRef<string>(`radio-${uuidv4()}`);
  const [field, meta] = useField(name);
  const { handleInvalidField, handleValidField } = useFormValidity();
  const containerClassName = clx(
    "flex max-w-full flex-col",
    extraContainerClasses,
  );
  const labelClassName = clx("mt-0.5", extraLabelClasses);
  const isValid = !(meta.touched && meta.error);

  useEffect(() => {
    if (isValid) handleValidField(fieldId.current);
    else handleInvalidField(fieldId.current);
  }, [handleInvalidField, handleValidField, isValid]);

  return (
    <div className={containerClassName}>
      <div className="flex max-w-full flex-row items-start gap-2">
        <Radio
          {...field}
          {...props}
          id={id ?? name}
          name={name}
          isValid={isValid}
        />
        <FormLabel
          id={id}
          name={name}
          label={label}
          labelClassName={labelClassName}
        />
      </div>
      <FormError name={name} className="pe-0 ps-[1.85rem]" />
    </div>
  );
}
