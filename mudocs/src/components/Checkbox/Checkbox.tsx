import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { clx } from "@/utils/functions";

type Props = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "type"
> & {
  isValid?: boolean;
  validClassName?: string;
  invalidClassName?: string;
};

export default function Checkbox({
  isValid = true,
  validClassName,
  invalidClassName,
  className,
  ...props
}: Props) {
  const inputClassName = clx(
    "block h-4 w-4 max-w-full rounded border-gray-300 bg-gray-200 hover:cursor-pointer focus:ring-0 focus:ring-offset-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-gray-600 dark:bg-gray-700 focus-visible:dark:ring-offset-slate-900",
    isValid &&
      `text-blue-500 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-500 ${clx(
        validClassName,
      )}`,
    !isValid &&
      `border-red-700 text-red-700 focus-visible:ring-red-700 dark:border-red-400 dark:focus-visible:ring-red-400 ${clx(
        invalidClassName,
      )}`,
    className,
  );

  return <input {...props} type="checkbox" className={inputClassName} />;
}
