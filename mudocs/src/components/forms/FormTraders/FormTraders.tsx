import { ChangeEvent, useCallback } from "react";
import { useTranslation } from "next-i18next";
import { ItemInterface, ReactSortable } from "react-sortablejs";
import { useField } from "formik";
import { v4 as uuidv4 } from "uuid";
import FormTrader from "../FormTrader/FormTrader";
import FormFieldSet from "../FormFieldSet/FormFieldSet";
import { DEFAULT_I18N_NAMESPACE } from "../../../../constants";
import { Address, Company, FormFieldSetField, Person, Trader } from "@/types";
import FormCheckbox from "../FormCheckbox/FormCheckbox";

type AddressProps = {
  addressKey: string;
  commonAddressKey: string;
};

type WithAddressProps = AddressProps & {
  showAddress: true;
};

type WithoutAddressProps = {
  showAddress: false;
};

type Props = FormFieldSetField &
  (WithAddressProps | WithoutAddressProps) & {
    newTraderType?: Person["traderType"] | Company["traderType"];
    showListItemHeader?: boolean;
    showType?: boolean;
    showRepresentative?: boolean;
    showRepresentingDirector?: boolean;
    showDirectors?: boolean;
    containerClassName?: string;
  };

export default function FormTraders({
  name,
  label,
  newTraderType = "person",
  showListItemHeader = true,
  showAddress = false,
  showType = false,
  showRepresentative = false,
  showRepresentingDirector = false,
  showDirectors = false,
  containerClassName,
  ...props
}: Props) {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const [field, _meta, helpers] = useField(name);
  const [commonAddressField] = useField(
    (props as WithAddressProps).commonAddressKey ?? "commonAddressKey",
  );

  const setList = useCallback(
    (sortedTraders: Array<ItemInterface>) => helpers.setValue(sortedTraders),
    [helpers],
  );

  const addTrader = useCallback(() => {
    const newTrader =
      newTraderType === "person"
        ? {
            uuid: uuidv4(),
            traderType: "person",
            title: "mr",
            name: "",
            nationality: "mauritian",
            id: "",
            ...(showAddress && {
              [(props as WithAddressProps).addressKey]: "",
            }),
          }
        : {
            uuid: uuidv4(),
            traderType: "company",
            title: "mr",
            name: "",
            brn: "",
            representative: {
              title: "mr",
              name: "",
              nationality: "mauritian",
              id: "",
              role: "",
            },
            ...(showAddress && {
              [(props as WithAddressProps).addressKey]: "",
            }),
          };

    return helpers.setValue([...field.value, newTrader], true);
  }, [field.value, helpers, newTraderType, showAddress]);

  const renderCommonAddress = useCallback(
    () =>
      showAddress && (
        <FormCheckbox
          name={(props as WithAddressProps).commonAddressKey}
          label={tCommon("commonAddress")}
          containerClassName="w-full"
          labelClassName="!mb-0 font-medium"
          className="mt-1"
        />
      ),
    [props, showAddress, tCommon],
  );

  const renderTradersInfo = useCallback(() => {
    const formikValue = field.value as Array<undefined | Trader>;
    const traders = formikValue.filter(Boolean) as Array<Trader>;
    const formTraderInfoAddressProps = showAddress
      ? ({
          showAddress,
          addressKey: (props as AddressProps).addressKey,
        } as WithAddressProps)
      : ({
          showAddress,
        } as WithoutAddressProps);

    return traders.map((trader, i) => {
      const enableAddressHandler = showAddress && i === 0;

      const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
        helpers.setValue(
          field.value?.map?.((trader: (Person | Company) & Address) => {
            const typedProps = props as WithAddressProps;

            return {
              ...trader,
              [typedProps.addressKey]: e?.currentTarget?.value,
            };
          }),
        );
      };

      return (
        <FormTrader
          key={trader.uuid}
          name={name}
          index={i}
          disableAddress={commonAddressField.value}
          showType={showType}
          showRepresentative={showRepresentative}
          showRepresentingDirector={showRepresentingDirector}
          showDirectors={showDirectors}
          showListItemHeader={showListItemHeader}
          {...(enableAddressHandler
            ? {
                onAddressChange: handleAddressChange,
              }
            : {})}
          {...formTraderInfoAddressProps}
        />
      );
    });
  }, [
    commonAddressField.value,
    field.value,
    helpers,
    name,
    props,
    showAddress,
    showRepresentingDirector,
    showDirectors,
    showListItemHeader,
    showRepresentative,
    showType,
  ]);

  return (
    <FormFieldSet
      name={name}
      label={label}
      className="flex flex-col items-center gap-8"
      legendClassName="mb-3"
      {...(containerClassName ? { containerClassName } : undefined)}
    >
      {renderCommonAddress()}
      <ReactSortable
        list={field.value}
        setList={setList}
        animation={150}
        handle=".handle"
        className="flex w-full max-w-full flex-col gap-8"
      >
        {renderTradersInfo()}
      </ReactSortable>
      <button
        type="button"
        onClick={addTrader}
        className="inline-flex w-full max-w-full items-center justify-center rounded-lg border border-gray-200 px-4 py-2.5 text-center text-base font-medium text-black hover:border-blue-800 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-0 focus:ring-blue-300 focus:ring-offset-0 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700 dark:text-white dark:hover:border-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
      >
        <svg
          className="mr-2 h-3 w-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
        {tCommon("add")}
      </button>
    </FormFieldSet>
  );
}
