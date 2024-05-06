/* eslint-disable @typescript-eslint/no-explicit-any */
import { PickAs } from "@/types";
import { TFunction } from "i18next";
import { Trans } from "next-i18next";
import { TransChild } from "react-i18next/TransWithoutContext";

/**
 * A *more* type-safe version of next-i18next's Trans component
 * **Do not use this component with an array as translation value as this feature is out of scope of this project, at least at the time of typing this.**
 * @param {TransChild | readonly TransChild[]} children - Any valid React children
 * @param {Ns=} ns - Translation's namespace
 * @param {ParamsKey|ComponentsKey=} i18nKey - Translation key using dot notation
 * @param {TFunction<Ns, KPrefix>} t - translate function
 * @param {TypedTransParams[Ns][ParamsKey]} params - Parameters used in the translated text
 * @param {TypedTransComponents[Ns][ComponentsKey]} components - Component mappings used in the translated text
 * @returns
 */
export default function TypedTrans<
  Ns extends keyof (TypedTransParams | TypedTransComponents),
  ParamsKey extends keyof TypedTransParams[Ns],
  ComponentsKey extends keyof TypedTransComponents[Ns],
>({
  children,
  ns,
  i18nKey,
  ...otherProps
}: {
  children?: TransChild | readonly TransChild[];
  ns: Ns;
  i18nKey: ParamsKey | ComponentsKey;
  t?: TFunction<any, any>;
} & PickAs<TypedTransParams[Ns], ParamsKey, "params"> &
  PickAs<TypedTransComponents[Ns], ComponentsKey, "components">) {
  const { params, components, ...rest } = (otherProps || {}) as {
    params?: any;
    components?: any;
  };

  return (
    <Trans
      i18nKey={i18nKey as any}
      ns={ns as any}
      values={params}
      components={components}
      {...rest}
    >
      {children}
    </Trans>
  );
}
