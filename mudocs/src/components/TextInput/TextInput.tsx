import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { clx } from "@/utils/functions";

type Props = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "type"
> & {
  isValid?: boolean;
};

export default function TextInput({
  isValid = true,
  className,
  ...props
}: Props) {
  const inputClassName = clx(
    "block w-full max-w-full rounded-lg border bg-gray-50 p-2.5 font-[monospace] dark:bg-slate-800",
    isValid &&
      "border-slate-200 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
    !isValid &&
      "border-red-700 text-red-700 placeholder-red-700 focus:border-red-700 focus:ring-red-700 dark:border-red-400 dark:text-red-400 dark:placeholder-red-400 dark:focus:border-red-400 dark:focus:ring-red-400",
    className,
  );

  return <input {...props} type="text" className={inputClassName} />;
}
