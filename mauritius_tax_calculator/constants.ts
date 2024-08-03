import { I18nLocale } from "@/types";
import {
  TbBrightnessFilled,
  TbBrightnessUpFilled,
  TbMoonFilled,
} from "react-icons/tb";

export const I18N_LOCALES = ["en", "fr", "mu"] as const;
export const DEFAULT_I18N_LOCALE: I18nLocale = "en";
export const DEFAULT_I18N_NAMESPACE = "common" as const;
export const APP_THEMES = [
  {
    key: "system",
    icon: TbBrightnessFilled,
  },
  {
    key: "light",
    icon: TbBrightnessUpFilled,
  },
  {
    key: "dark",
    icon: TbMoonFilled,
  },
] as const;
