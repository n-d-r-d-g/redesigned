import { ReactNode, useCallback } from "react";
import { useField } from "formik";
import { clx } from "@/utils/functions";

type Props = {
  id?: string;
  name: string;
  label: string | ReactNode;
  iconClassName?: string;
  labelClassName?: string;
};

export default function FormLabel({
  id,
  name,
  label,
  iconClassName: extraIconClasses,
  labelClassName: extraLabelClasses,
}: Props) {
  const [_field, meta] = useField(name);
  const isValid = !(meta.touched && meta.error);
  const labelClassName = clx(
    "mb-2 inline-block text-sm font-bold",
    isValid && "text-gray-600 dark:text-slate-300",
    !isValid && "text-red-700 dark:text-red-400",
    extraLabelClasses,
  );
  const warningIconErrorClassName = clx(
    "mb-0.5 ml-1.5 inline-block h-4 w-4",
    isValid && "text-gray-600 dark:text-slate-300",
    !isValid && "text-red-700 dark:text-red-400",
    extraIconClasses,
  );

  const renderWarningIcon = useCallback(
    () =>
      !isValid && (
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
    [isValid, warningIconErrorClassName],
  );

  return (
    <label htmlFor={id || name} className={labelClassName}>
      {label}
      {renderWarningIcon()}
    </label>
  );
}
