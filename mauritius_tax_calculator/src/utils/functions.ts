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

export function retrieveFinancialPeriod(
  language: string,
  startYear: number,
  endYear: number
) {
  const startDate = 1;
  const startMonth = 7;
  const endDate = 30;
  const endMonth = 6;

  if (language === "mu") {
    const muMonths = {
      1: "Zan",
      2: "Fev",
      3: "Mar",
      4: "Avr",
      5: "Me",
      6: "Zin",
      7: "Ziy",
      8: "Ut",
      9: "Sep",
      10: "Okt",
      11: "Nov",
      12: "Des",
    };
    const start = `${muMonths[startMonth]} ${startDate}, ${startYear}`;
    const end = `${muMonths[endMonth]} ${endDate}, ${endYear}`;

    return {
      start,
      end,
    };
  }

  const dateTimeIntl = new Intl.DateTimeFormat(language, {
    dateStyle: "medium",
  });
  const paddedStartDate = String(startDate).padStart(2, "0");
  const paddedStartMonth = String(startMonth).padStart(2, "0");
  const paddedEndDate = String(endDate).padStart(2, "0");
  const paddedEndMonth = String(endMonth).padStart(2, "0");

  return {
    start: dateTimeIntl.format(
      new Date(`${startYear}-${paddedStartMonth}-${paddedStartDate}`)
    ),
    end: dateTimeIntl.format(
      new Date(`${endYear}-${paddedEndMonth}-${paddedEndDate}`)
    ),
  };
}
