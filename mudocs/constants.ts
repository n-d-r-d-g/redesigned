import { I18nLocale } from "./src/types";

// export const I18N_LOCALES = ["en", "fr", "mu"] as const;
export const I18N_LOCALES = ["en"] as const;
export const DEFAULT_I18N_LOCALE: I18nLocale = "en";
export const I18N_NAMESPACES = [
  "common",
  "doc-gen-vehicle-page",
  "home-page",
  "404",
] as const;
export const DEFAULT_I18N_NAMESPACE = "common" as const;
export const I18N_PLURAL_SUFFIXES = [
  "zero",
  "one",
  "two",
  "few",
  "many",
  "other",
];
export const IS_DEV_ENV = process.env.NODE_ENV === "development";
export const IS_PRD_ENV = process.env.NODE_ENV === "production";
export const IS_TEST_ENV = process.env.NODE_ENV === "test";
