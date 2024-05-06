import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import { clx } from "@/utils/functions";

type Props = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  isValid?: boolean;
};

export default function Select({
  isValid = true,
  className,
  children,
  ...props
}: Props) {
  const selectClassName = clx(
    "text-md block max-w-full rounded-lg border border-slate-200 bg-gray-50 p-2.5 font-[monospace] focus:ring-0 focus:ring-offset-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700 dark:bg-slate-800 focus-visible:dark:ring-offset-slate-900",
    isValid &&
      props.value &&
      "text-gray-900 placeholder-gray-500 focus:border-slate-200 focus-visible:ring-blue-500 dark:text-white dark:placeholder-gray-400 focus:dark:border-slate-700 dark:focus-visible:ring-blue-500",
    isValid &&
      !props.value &&
      "text-gray-500 focus:border-slate-200 focus-visible:ring-blue-500 dark:text-gray-400 focus:dark:border-slate-700 dark:focus-visible:ring-blue-500",
    !isValid &&
      "text-red-700 placeholder-red-700 focus-visible:ring-red-700 dark:text-red-400 dark:placeholder-red-400 dark:focus-visible:ring-red-400",
    className,
  );

  return (
    <select {...props} className={selectClassName}>
      {children}
    </select>
  );
}
