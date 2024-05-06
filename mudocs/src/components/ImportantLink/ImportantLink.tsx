import { AnchorHTMLAttributes, ReactNode, RefAttributes } from "react";
import Link, { LinkProps } from "next/link";

export default function ImportantLink({
  children,
  ...props
}: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps & {
    children?: ReactNode;
  } & RefAttributes<HTMLAnchorElement>) {
  return (
    <Link
      {...props}
      className="rounded font-bold text-violet-800 underline decoration-wavy underline-offset-2 hover:text-black focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-teal-300 hover:dark:text-white dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
    >
      {children}
    </Link>
  );
}
