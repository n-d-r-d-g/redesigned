import { FieldsetHTMLAttributes, useCallback, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import FormError from "../FormError/FormError";
import { clx } from "@/utils/functions";
import { FormFieldSetField } from "@/types";
import useFormValidity, { FormValidityProvider } from "@/hooks/useFormValidity";

type Props = FieldsetHTMLAttributes<HTMLFieldSetElement> &
  FormFieldSetField & {
    name: string;
    className?: string;
    containerClassName?: string;
    legendClassName?: string;
    handleValidityChange?: (isValid: boolean) => void;
  };

function FormFieldSetContent({
  name,
  label,
  children,
  containerClassName,
  className,
  legendClassName: propLegendClassName,
  handleValidityChange,
  ...props
}: Props) {
  const { isFormValid } = useFormValidity();

  useEffect(
    () => handleValidityChange?.(isFormValid),
    [handleValidityChange, isFormValid],
  );

  const fieldSetClassName = clx(
    "rounded-md border px-2 pb-3 pt-2",
    isFormValid && "border-slate-200 dark:border-slate-700",
    !isFormValid && "border-red-700 dark:border-red-400",
    className,
  );
  const legendClassName = clx(
    "ml-[-0.125rem] inline-block px-0.5 text-sm font-bold",
    isFormValid && "text-gray-600 dark:text-slate-300",
    !isFormValid && "text-red-700 dark:text-red-400",
    propLegendClassName,
  );
  const warningIconErrorClassName = clx(
    "mb-0.5 ml-1.5 inline-block h-4 w-4",
    isFormValid && "text-gray-600 dark:text-slate-300",
    !isFormValid && "text-red-700 dark:text-red-400",
  );

  const renderWarningIcon = useCallback(
    () =>
      !isFormValid && (
        <svg
          className={warningIconErrorClassName}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 19 20"
        >
          <path d="M18.012 13.453c-.219-1.173-2.163-1.416-2.6-3.76l-.041-.217c0 .006 0-.005-.007-.038v.021l-.017-.09-.005-.025v-.006l-.265-1.418a5.406 5.406 0 0 0-5.051-4.408.973.973 0 0 0 0-.108L9.6 1.082a1 1 0 0 0-1.967.367l.434 2.325a.863.863 0 0 0 .039.1A5.409 5.409 0 0 0 4.992 9.81l.266 1.418c0-.012 0 0 .007.037v-.007l.006.032.009.046v-.01l.007.038.04.215c.439 2.345-1.286 3.275-1.067 4.447.11.586.22 1.173.749 1.074l12.7-2.377c.523-.098.413-.684.303-1.27ZM1.917 9.191h-.074a1 1 0 0 1-.924-1.07 9.446 9.446 0 0 1 2.426-5.648 1 1 0 1 1 1.482 1.343 7.466 7.466 0 0 0-1.914 4.449 1 1 0 0 1-.996.926Zm5.339 8.545A3.438 3.438 0 0 0 10 19.1a3.478 3.478 0 0 0 3.334-2.5l-6.078 1.136Z" />
        </svg>
      ),
    [isFormValid, warningIconErrorClassName],
  );

  return (
    <div className={containerClassName || ""}>
      <fieldset className={fieldSetClassName} {...props}>
        <legend className={legendClassName}>
          {label}
          {renderWarningIcon()}
        </legend>
        {children}
      </fieldset>
      <FormError name={name} isFieldSetValid={isFormValid} isFieldSet />
    </div>
  );
}

export default function FormFieldSet(props: Props) {
  const fieldsetId = useRef<string>(`fieldset-${uuidv4()}`);
  const { handleInvalidField, handleValidField } = useFormValidity();

  const handleValidityChange = useCallback(
    (isFieldSetValid: boolean) => {
      if (isFieldSetValid) handleValidField(fieldsetId.current);
      else handleInvalidField(fieldsetId.current);
    },
    [handleInvalidField, handleValidField],
  );

  return (
    <FormValidityProvider>
      <FormFieldSetContent
        handleValidityChange={handleValidityChange}
        {...props}
      />
    </FormValidityProvider>
  );
}
