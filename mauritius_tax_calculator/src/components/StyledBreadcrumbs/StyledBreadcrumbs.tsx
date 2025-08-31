import { Breadcrumbs, BreadcrumbsProps } from "@heroui/react";

export function StyledBreadcrumbs(props: BreadcrumbsProps) {
  return (
    <Breadcrumbs
      className="w-[120rem] max-w-full mx-auto [&_[data-slot='item']]:font-normal [&_[data-slot='item']]:underline-offset-2 [&_[data-current='true']]:underline [&_[data-slot='item']:not([data-current='true'])]:text-zinc-700 [&_[data-slot='item']:not([data-current='true'])]:dark:text-zinc-400"
      {...props}
    />
  );
}
