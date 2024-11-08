import Decimal from "decimal.js";
import { I18nLocale } from "@/types";
import { DEFAULT_I18N_LOCALE } from "../../constants";

export function retrieveLocalePath(
  path: string,
  locale: I18nLocale,
  prefixSlash: boolean = true
) {
  if (locale === DEFAULT_I18N_LOCALE) return path;

  return `${prefixSlash ? "/" : ""}${locale}${
    path.startsWith("/") ? path : `/${path}`
  }`;
}

export function noop() {}

export function decimalToString(amount: Decimal, dp?: number) {
  let finalValue: string | number | Decimal = amount;

  if (Number.isInteger(dp)) {
    finalValue = finalValue.toDP(dp);
  }

  finalValue = (finalValue.toNumber() || 0).toLocaleString(undefined, {
    maximumFractionDigits: dp ?? 0,
    minimumFractionDigits: dp ?? 0,
  });

  return finalValue;
}
