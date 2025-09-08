import Link from "next/link";
import { useTranslation } from "next-i18next";
import { Route } from "../types";

export function Pages({ routes }: { routes: Route[] }) {
  const { t: tCommon } = useTranslation("common");

  return (
    <ul>
      {routes.map((route) => (
        <li
          key={`${route.label}-${route.slug}`}
          className="last-of-type:mb-[1em]"
        >
          {route.slug ? (
            <Link href={`/${route.slug}`}>
              {tCommon(
                `breadcrumbs.${route.label as keyof I18NextResources["common"]["breadcrumbs"]}`
              )}
            </Link>
          ) : (
            <span className="text-zinc-700 dark:text-zinc-200">
              {route.label}
            </span>
          )}

          {route.children && <Pages routes={route.children} />}
        </li>
      ))}
    </ul>
  );
}
