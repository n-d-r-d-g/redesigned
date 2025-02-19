import { I18N_LOCALES, I18N_NAMESPACES } from "@/constants";
import { ReactNode } from "react";

type I18nLocale = (typeof I18N_LOCALES)[number];

type I18nNamespace = (typeof I18N_NAMESPACES)[number];

type DeepLeafKeys<
  ObjType,
  RestrictedLeafTypes = object,
> = ObjType extends object
  ? {
      [K in keyof ObjType]-?: K extends string | number
        ?
            | `${ObjType[K] extends RestrictedLeafTypes ? never : K}`
            | `${K}.${DeepLeafKeys<ObjType[K]>}`
        : never;
    }[keyof ObjType]
  : never;

type DeepLeafValues<
  ObjType,
  RestrictedLeafTypes = object,
> = ObjType extends object
  ? {
      [K in keyof ObjType]-?: K extends string | number
        ?
            | `${ObjType[K] extends RestrictedLeafTypes ? never : ObjType[K]}`
            | `${K}.${DeepLeafKeys<ObjType[K]>}`
        : never;
    }[keyof ObjType]
  : never;

type PickAs<
  Type,
  OriginalKey extends keyof Type,
  NewKey extends PropertyKey,
> = undefined extends Type[OriginalKey]
  ? { [K in NewKey]?: Type[OriginalKey] }
  : { [K in NewKey]: Type[OriginalKey] };

type FormFieldSetField = {
  label: string | ReactNode;
  name: string;
};

type Address = {
  address: string;
};

type Trader = {
  uuid: string;
  name: string;
};

type Nationality = "mauritian" | "nonMauritian";

type PersonTitle = "mr" | "mrs" | "miss";

type Person = Trader & {
  traderType: "person";
  title: PersonTitle;
  nationality: Nationality;
  id: string;
};

type Company = Trader & {
  traderType: "company";
  brn: string;
  directors: [
    {
      uuid: string;
      title: PersonTitle;
      nationality: Nationality;
      id: string;
      name: string;
    },
  ];
  representative: Address & {
    title: PersonTitle;
    nationality: Nationality;
    id: string;
    name: string;
    role: string;
  };
};

type SubString<
  TPrefix extends string,
  TSuffix extends string,
  TString extends string,
> = TString extends `${TPrefix}${infer T}${TSuffix}` ? T : never;

type StartsWithPrefix<TPrefix extends string> = `${TPrefix}${string}`;

type SelectiveTerms<
  AllTerms,
  TPrefix extends string,
  TSuffix extends string,
> = keyof {
  [K in keyof AllTerms as K extends StartsWithPrefix<TPrefix>
    ? SubString<TPrefix, TSuffix, K>
    : never]: any;
};
