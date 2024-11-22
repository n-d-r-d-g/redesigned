/* "use client";

import { Select, SelectItem, Tooltip } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { useTheme } from "next-themes";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { APP_THEMES, DEFAULT_I18N_NAMESPACE } from "../../../constants";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSelectionChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value),
    [setTheme]
  );

  const Icon = useCallback(() => {
    const currTheme = APP_THEMES.find((appTheme) => appTheme.key === theme);
    const CurrThemeIcon = (currTheme ?? APP_THEMES[0]).icon;

    return <CurrThemeIcon size={18} className="min-w-[18px]" />;
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-row">
      <Tooltip content={tCommon("changeTheme")}>
        <div>
          <Select
            aria-label={tCommon("changeTheme")}
            selectedKeys={[theme ?? "system"]}
            startContent={<Icon />}
            size="md"
            radius="sm"
            onChange={handleSelectionChange}
            className="w-[68px]"
          >
            {APP_THEMES.map((appTheme) => (
              <SelectItem
                key={appTheme.key}
                aria-label={tCommon(
                  `themeSwitch.themes.${appTheme.key as (typeof APP_THEMES)[number]["key"]}`
                )}
              >
                <appTheme.icon size={16} />
              </SelectItem>
            ))}
          </Select>
        </div>
      </Tooltip>
    </div>
  );
}
 */

"use client";

import { Select, SelectItem, Tooltip } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { useTheme } from "next-themes";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import {
  APP_THEMES,
  DEFAULT_I18N_NAMESPACE,
  I18N_LOCALES,
} from "../../../constants";

export function ThemeSwitch() {
  const locales = I18N_LOCALES.map((l) => ({
    value: l,
    label: l.toUpperCase(),
  }));
  const [mounted, setMounted] = useState(false);
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSelectionChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value),
    [setTheme]
  );

  const Icon = useCallback(() => {
    const currTheme = APP_THEMES.find((appTheme) => appTheme.key === theme);
    const CurrThemeIcon = (currTheme ?? APP_THEMES[0]).icon;

    return <CurrThemeIcon size={18} className="min-w-[18px]" />;
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <Tooltip content={tCommon("changeTheme")}>
      <div>
        <Select
          items={APP_THEMES}
          aria-label={tCommon("changeTheme")}
          onChange={handleSelectionChange}
          startContent={<Icon />}
          size="md"
          radius="sm"
          className="min-w-[4.375rem] w-[4.375rem] font-mono"
          classNames={{
            innerWrapper: "mt-0.5",
            selectorIcon: "right-3",
          }}
        >
          {(appTheme) => (
            <SelectItem
              key={appTheme.key}
              aria-label={tCommon(
                `themeSwitch.themes.${appTheme.key as (typeof APP_THEMES)[number]["key"]}`
              )}
            >
              <appTheme.icon size={16} />
            </SelectItem>
          )}
        </Select>
      </div>
    </Tooltip>
  );
}
