import {
  ChangeEvent,
  FocusEvent,
  MouseEvent,
  useCallback,
  useState,
} from "react";
import { useTranslation } from "next-i18next";
import { useField } from "formik";
import { v4 as uuidv4 } from "uuid";
import Tippy from "@tippyjs/react";
import FormSelect from "../FormSelect/FormSelect";
import FormTextInput from "../FormTextInput/FormTextInput";
import FormFieldSet from "../FormFieldSet/FormFieldSet";
import useFormValidity from "@/hooks/useFormValidity";
import { clx } from "@/utils/functions";
import { DEFAULT_I18N_NAMESPACE } from "../../../../constants";
import FormRadio from "../FormRadio/FormRadio";
import { Company } from "@/types";
import "tippy.js/dist/tippy.css";

type CommonProps = { name: string; index: number };

type AddressProps = {
  addressKey: string;
};

type WithAddressProps = CommonProps &
  AddressProps & {
    showAddress?: true;
  };

type WithoutAddressProps = CommonProps & {
  showAddress?: false;
};

type Props = (WithAddressProps | WithoutAddressProps) & {
  disableAddress?: boolean;
  showListItemHeader?: boolean;
  showType?: boolean;
  showDirectors?: boolean;
  directorsKey?: string;
  showRepresentingDirector?: boolean;
  showRepresentative?: boolean;
  onAddressChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function FormTrader({
  name,
  index,
  showAddress = false,
  disableAddress = false,
  showListItemHeader = false,
  showType = false,
  showRepresentative = false,
  showDirectors = false,
  showRepresentingDirector = false,
  onAddressChange,
  ...props
}: Props) {
  const [field, _meta, helpers] = useField(name);
  const [directorsField, _directorsMeta, directorsHelpers] = useField(
    `${name}[${index}].${props.directorsKey ?? "directors"}`,
  );
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { clearAllErrors } = useFormValidity();
  const [isDragToMoveTooltipVisible, setIsDragToMoveTooltipVisible] =
    useState(false);
  const [isRemoveTooltipVisible, setIsRemoveTooltipVisible] = useState(false);
  const [
    visibleRemoveDirectorTooltipIndex,
    setVisibleRemoveDirectorTooltipIndex,
  ] = useState(-1);
  const isFirstTrader = index === 0;
  const isPerson = field.value?.[index]?.traderType === "person";
  const isCompany = field.value?.[index]?.traderType === "company";
  const isAddressDisabled = index > 0 && disableAddress;

  const showDragToMoveTooltip = useCallback((e: FocusEvent | MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragToMoveTooltipVisible(true);
  }, []);

  const hideDragToMoveTooltip = useCallback((e: FocusEvent | MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragToMoveTooltipVisible(false);
  }, []);

  const toggleDragToMoveTooltip = useCallback((e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragToMoveTooltipVisible((prevIsVisible) => !prevIsVisible);
  }, []);

  const onOutsideDragToMoveTooltipClick = useCallback(
    (_i: unknown, e: Event) => {
      hideDragToMoveTooltip(e as unknown as MouseEvent);
    },
    [hideDragToMoveTooltip],
  );

  const showRemoveTooltip = useCallback((e: FocusEvent | MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsRemoveTooltipVisible(true);
  }, []);

  const hideRemoveTooltip = useCallback((e: FocusEvent | MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsRemoveTooltipVisible(false);
  }, []);

  const toggleRemoveTooltip = useCallback((e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsRemoveTooltipVisible((prevIsVisible) => !prevIsVisible);
  }, []);

  const onOutsideRemoveTooltipClick = useCallback(
    (_i: unknown, e: Event) => {
      hideRemoveTooltip(e as unknown as MouseEvent);
    },
    [hideRemoveTooltip],
  );

  const removeTrader = useCallback(
    (e: MouseEvent) => {
      toggleRemoveTooltip(e);
      const tradersCopy = [...field.value];
      tradersCopy.splice(index, 1);
      helpers.setValue(tradersCopy);
    },
    [field.value, helpers, index, toggleRemoveTooltip],
  );

  const addDirector = useCallback(() => {
    const newDirector = {
      uuid: uuidv4(),
      traderType: "person",
      title: "mr",
      name: "",
      nationality: "mauritian" as const,
      id: "",
      ...(showAddress && {
        [(props as AddressProps).addressKey]: "",
      }),
    };

    return directorsHelpers.setValue(
      [...directorsField.value, newDirector],
      true,
    );
  }, [directorsField.value, directorsHelpers, props, showAddress]);

  const removeDirector = useCallback(
    (directorIndex: number) => {
      const directorsCopy = [...directorsField.value];
      directorsCopy.splice(directorIndex, 1);
      directorsHelpers.setValue(directorsCopy);
    },
    [directorsField.value, directorsHelpers],
  );

  const renderHeaderMoveButton = useCallback(
    () =>
      showListItemHeader && (
        <Tippy
          content={tCommon("dragToMove")}
          visible={isDragToMoveTooltipVisible}
          onClickOutside={onOutsideDragToMoveTooltipClick}
        >
          <button
            type="button"
            aria-label={tCommon("dragToMove")}
            onClick={toggleDragToMoveTooltip}
            onMouseEnter={showDragToMoveTooltip}
            onMouseLeave={hideDragToMoveTooltip}
            onFocus={showDragToMoveTooltip}
            onBlur={hideDragToMoveTooltip}
            className="handle col-start-1 col-end-2 row-start-1 row-end-2 grid h-[2.5rem] max-h-[2.5rem] min-h-[2.5rem] w-[2.5rem] min-w-[2.5rem] max-w-[2.5rem] place-items-center items-center rounded-full border border-gray-200 bg-transparent text-center text-sm font-medium text-slate-500 hover:border-blue-700 hover:text-blue-700 focus:outline-none focus-visible:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-700 dark:border-slate-700 dark:text-white dark:hover:border-blue-400 dark:hover:text-blue-400 dark:focus-visible:text-blue-400 dark:focus-visible:ring-blue-400"
          >
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>
            <span className="sr-only">{tCommon("dragToMove")}</span>
          </button>
        </Tippy>
      ),
    [
      hideDragToMoveTooltip,
      isDragToMoveTooltipVisible,
      onOutsideDragToMoveTooltipClick,
      showDragToMoveTooltip,
      showListItemHeader,
      tCommon,
      toggleDragToMoveTooltip,
    ],
  );

  const renderHeaderText = useCallback(
    () =>
      showListItemHeader && (
        <p className="col-start-2 col-end-3 row-start-1 row-end-2 truncate text-center font-bold leading-10">
          #{index + 1}
        </p>
      ),
    [index, showListItemHeader],
  );

  const renderHeaderRemoveButton = useCallback(
    () =>
      showListItemHeader && (
        <Tippy
          content={tCommon("remove")}
          visible={isRemoveTooltipVisible}
          onClickOutside={onOutsideRemoveTooltipClick}
        >
          <button
            type="button"
            aria-label={tCommon("remove")}
            onClick={removeTrader}
            onMouseEnter={showRemoveTooltip}
            onMouseLeave={hideRemoveTooltip}
            onFocus={showRemoveTooltip}
            onBlur={hideRemoveTooltip}
            className="col-start-3 col-end-4 row-start-1 row-end-2 grid h-[2.5rem] max-h-[2.5rem] min-h-[2.5rem] w-[2.5rem] max-w-[2.5rem] place-items-center items-center rounded-full border border-gray-200 bg-transparent text-center text-sm font-medium text-slate-500 hover:border-red-700 hover:text-red-700 focus:outline-none focus-visible:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 dark:border-slate-700 dark:text-white dark:hover:border-red-400 dark:hover:text-red-400 dark:focus-visible:text-red-400 dark:focus-visible:ring-red-400"
          >
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span className="sr-only">{`${tCommon("remove")} *`}</span>
          </button>
        </Tippy>
      ),
    [
      hideRemoveTooltip,
      isRemoveTooltipVisible,
      onOutsideRemoveTooltipClick,
      removeTrader,
      showRemoveTooltip,
      showListItemHeader,
      tCommon,
    ],
  );

  const renderType = useCallback(
    () =>
      showType && (
        <FormSelect
          name={`${name}[${index}].traderType`}
          label={`${tCommon("traderType")} *`}
          aria-required="true"
          containerClassName="w-full"
          onChange={
            /* To avoid parent fieldsets to be in error state when they shouldn't */
            clearAllErrors
          }
        >
          <option value="" disabled>
            {tCommon("none")}
          </option>
          <option value="person">{tCommon("traderTypes.person")}</option>
          <option value="company">{tCommon("traderTypes.company")}</option>
        </FormSelect>
      ),
    [clearAllErrors, index, name, showType, tCommon],
  );

  const renderTitle = useCallback(
    () =>
      isPerson && (
        <FormSelect
          name={`${name}[${index}].title`}
          label={`${tCommon("title")} *`}
          aria-required="true"
        >
          <option value="" disabled>
            {tCommon("none")}
          </option>
          <option value="mr">{tCommon("titles.mr")}</option>
          <option value="mrs">{tCommon("titles.mrs")}</option>
          <option value="miss">{tCommon("titles.miss")}</option>
        </FormSelect>
      ),
    [index, isPerson, name, tCommon],
  );

  const renderName = useCallback(
    () => (
      <FormTextInput
        name={`${name}[${index}].name`}
        label={`${tCommon("name")} *`}
        placeholder={tCommon(
          isPerson ? "namePlaceholder" : "companyNamePlaceholder",
        )}
        aria-required="true"
        containerClassName="grow shrink"
      />
    ),
    [index, isPerson, name, tCommon],
  );

  const renderNationality = useCallback(
    () =>
      isPerson && (
        <FormSelect
          name={`${name}[${index}].nationality`}
          label={`${tCommon("nationality")} *`}
          aria-required="true"
        >
          <option value="" disabled>
            {tCommon("none")}
          </option>
          <option value="mauritian">
            {tCommon("nationalities.mauritian")}
          </option>
          <option value="nonMauritian">
            {tCommon("nationalities.nonMauritian")}
          </option>
        </FormSelect>
      ),
    [index, isPerson, name, tCommon],
  );

  const renderID = useCallback(
    () =>
      isPerson && (
        <FormTextInput
          name={`${name}[${index}].id`}
          label={`${tCommon("nidOrPassportNum")} *`}
          placeholder={tCommon("nidOrPassportNumPlaceholder")}
          aria-required="true"
          containerClassName="grow shrink"
        />
      ),
    [index, isPerson, name, tCommon],
  );

  const renderBRN = useCallback(
    () =>
      isCompany && (
        <FormTextInput
          name={`${name}[${index}].brn`}
          label={`${tCommon("brn")} *`}
          placeholder={tCommon("brnPlaceholder")}
          aria-required="true"
          containerClassName="grow shrink"
        />
      ),
    [index, isCompany, name, tCommon],
  );

  const renderAddress = useCallback(
    () =>
      showAddress && (
        <FormTextInput
          name={`${name}[${index}].address`}
          label={`${tCommon("address")} *`}
          placeholder={tCommon("addressPlaceholder")}
          aria-required="true"
          containerClassName={clx("grow shrink", isAddressDisabled && "hidden")}
          {...(onAddressChange ? { onChange: onAddressChange } : {})}
        />
      ),
    [index, isAddressDisabled, name, onAddressChange, showAddress, tCommon],
  );

  const renderDirectors = useCallback(
    () =>
      showDirectors &&
      isCompany && (
        <FormFieldSet
          name={`${name}[${index}].directors`}
          label={`${tCommon("directors")} *`}
          containerClassName="w-full max-w-full mt-2"
          className="flex flex-col items-center gap-8"
        >
          {(field.value?.[index]?.directors as Company["directors"])?.map(
            (director, directorIndex: number) => {
              const isFirstDirector = directorIndex === 0;

              const showRemoveDirectorTooltip = (
                e: FocusEvent | MouseEvent,
              ) => {
                e.preventDefault();
                e.stopPropagation();
                setVisibleRemoveDirectorTooltipIndex(directorIndex);
              };

              const hideRemoveDirectorTooltip = (
                e: FocusEvent | MouseEvent,
              ) => {
                e.preventDefault();
                e.stopPropagation();
                setVisibleRemoveDirectorTooltipIndex(-1);
              };

              const toggleRemoveDirectorTooltip = (e: MouseEvent) => {
                e.preventDefault();
                e.stopPropagation();
                setVisibleRemoveDirectorTooltipIndex((prevIndex) =>
                  prevIndex === -1 ? directorIndex : -1,
                );
              };

              const onOutsideRemoveDirectorTooltipClick = (
                _i: unknown,
                e: Event,
              ) => {
                hideRemoveDirectorTooltip(e as unknown as MouseEvent);
              };

              const handleRemoveDirector = (e: MouseEvent) => {
                toggleRemoveDirectorTooltip(e);
                removeDirector(directorIndex);
              };

              return (
                <div key={director.uuid} className="flex w-full flex-col">
                  {!isFirstDirector && (
                    <hr className="mb-8 w-full max-w-full border-slate-200 dark:border-slate-700" />
                  )}
                  <div className="flex w-full max-w-full flex-col-reverse items-end gap-2">
                    <div className="mt-0.5 flex w-full max-w-full flex-row flex-wrap gap-x-2 gap-y-3">
                      <FormSelect
                        name={`${name}[${index}].directors[${directorIndex}].title`}
                        label={`${tCommon("title")} *`}
                        aria-required="true"
                      >
                        <option value="" disabled>
                          {tCommon("none")}
                        </option>
                        <option value="mr">{tCommon("titles.mr")}</option>
                        <option value="mrs">{tCommon("titles.mrs")}</option>
                        <option value="miss">{tCommon("titles.miss")}</option>
                      </FormSelect>
                      <FormTextInput
                        name={`${name}[${index}].directors[${directorIndex}].name`}
                        label={`${tCommon("name")} *`}
                        placeholder={tCommon("namePlaceholder")}
                        aria-required="true"
                        containerClassName="grow shrink"
                      />
                      <FormSelect
                        name={`${name}[${index}].directors[${directorIndex}].nationality`}
                        label={`${tCommon("nationality")} *`}
                        aria-required="true"
                      >
                        <option value="" disabled>
                          {tCommon("none")}
                        </option>
                        <option value="mauritian">
                          {tCommon("nationalities.mauritian")}
                        </option>
                        <option value="nonMauritian">
                          {tCommon("nationalities.nonMauritian")}
                        </option>
                      </FormSelect>
                      <FormTextInput
                        name={`${name}[${index}].directors[${directorIndex}].id`}
                        label={`${tCommon("nidOrPassportNum")} *`}
                        placeholder={tCommon("nidOrPassportNumPlaceholder")}
                        aria-required="true"
                        containerClassName="grow shrink"
                      />
                      {showRepresentingDirector && (
                        <FormRadio
                          id={`${name}[${index}].directors[${directorIndex}].isRepresentative`}
                          name={`${name}[${index}].representingDirectorUUID`}
                          label={tCommon("isDirectorRepresentingCompany")}
                          value={
                            field.value?.[index]?.directors[directorIndex].uuid
                          }
                          checked={
                            field.value?.[index].representingDirectorUUID ===
                            director.uuid
                          }
                          containerClassName="w-full"
                          labelClassName="!mb-0 font-medium"
                          className="mt-1"
                        />
                      )}
                    </div>
                    <Tippy
                      content={tCommon("remove")}
                      visible={
                        visibleRemoveDirectorTooltipIndex === directorIndex
                      }
                      onClickOutside={onOutsideRemoveDirectorTooltipClick}
                    >
                      <button
                        type="button"
                        aria-label={tCommon("remove")}
                        onClick={handleRemoveDirector}
                        onMouseEnter={showRemoveDirectorTooltip}
                        onMouseLeave={hideRemoveDirectorTooltip}
                        onFocus={showRemoveDirectorTooltip}
                        onBlur={hideRemoveDirectorTooltip}
                        className="col-start-3 col-end-4 row-start-1 row-end-2 grid h-[2.5rem] max-h-[2.5rem] min-h-[2.5rem] w-[2.5rem] max-w-[2.5rem] place-items-center items-center rounded-full border border-gray-200 bg-transparent text-center text-sm font-medium text-slate-500 hover:border-red-700 hover:text-red-700 focus:outline-none focus-visible:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 dark:border-slate-700 dark:text-white dark:hover:border-red-400 dark:hover:text-red-400 dark:focus-visible:text-red-400 dark:focus-visible:ring-red-400"
                      >
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <span className="sr-only">{`${tCommon("remove")} *`}</span>
                      </button>
                    </Tippy>
                  </div>
                </div>
              );
            },
          )}
          <button
            type="button"
            onClick={addDirector}
            className="inline-flex w-full max-w-full items-center justify-center rounded-lg border border-gray-200 px-4 py-2.5 text-center text-base font-medium text-black hover:border-blue-800 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700 dark:text-white dark:hover:border-blue-700 dark:hover:bg-blue-700 dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900"
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
      ),
    [
      addDirector,
      field.value,
      index,
      isCompany,
      name,
      removeDirector,
      showDirectors,
      showRepresentingDirector,
      tCommon,
      visibleRemoveDirectorTooltipIndex,
    ],
  );

  const renderRepresentative = useCallback(
    () =>
      showRepresentative &&
      isCompany && (
        <FormFieldSet
          name={`${name}[${index}].representative`}
          label={`${tCommon("representative")} *`}
          containerClassName="w-full max-w-full mt-2"
          className="mt-0.5 flex flex-row flex-wrap gap-x-2 gap-y-3"
        >
          <FormSelect
            name={`${name}[${index}].representative.title`}
            label={`${tCommon("title")} *`}
            aria-required="true"
          >
            <option value="" disabled>
              {tCommon("none")}
            </option>
            <option value="mr">{tCommon("titles.mr")}</option>
            <option value="mrs">{tCommon("titles.mrs")}</option>
            <option value="miss">{tCommon("titles.miss")}</option>
          </FormSelect>
          <FormTextInput
            name={`${name}[${index}].representative.name`}
            label={`${tCommon("name")} *`}
            placeholder={tCommon("namePlaceholder")}
            aria-required="true"
            containerClassName="grow shrink"
          />
          <FormSelect
            name={`${name}[${index}].representative.nationality`}
            label={`${tCommon("nationality")} *`}
            aria-required="true"
          >
            <option value="" disabled>
              {tCommon("none")}
            </option>
            <option value="mauritian">
              {tCommon("nationalities.mauritian")}
            </option>
            <option value="nonMauritian">
              {tCommon("nationalities.nonMauritian")}
            </option>
          </FormSelect>
          <FormTextInput
            name={`${name}[${index}].representative.id`}
            label={`${tCommon("nidOrPassportNum")} *`}
            placeholder={tCommon("nidOrPassportNumPlaceholder")}
            aria-required="true"
            containerClassName="grow shrink"
          />
          <FormTextInput
            name={`${name}[${index}].representative.role`}
            label={`${tCommon("role")} *`}
            placeholder={tCommon("rolePlaceholder")}
            aria-required="true"
            containerClassName="grow shrink"
          />
        </FormFieldSet>
      ),
    [index, isCompany, name, showRepresentative, tCommon],
  );

  return (
    /* Cannot use fragment - react-sortable will not work properly; bug when dragging upwards */
    <div className="w-full max-w-full">
      {!isFirstTrader && (
        <hr className="mb-8 border-slate-200 dark:border-slate-700" />
      )}
      <div className="grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr] gap-2">
        {renderHeaderMoveButton()}
        {renderHeaderText()}
        <div className="col-start-1 col-end-4 row-start-2 row-end-3 flex w-full max-w-full flex-row flex-wrap gap-x-2 gap-y-3 rounded-md">
          {renderType()}
          {renderTitle()}
          {renderName()}
          {renderNationality()}
          {renderID()}
          {renderBRN()}
          {renderAddress()}
          {renderDirectors()}
          {renderRepresentative()}
        </div>
        {renderHeaderRemoveButton()}
      </div>
    </div>
  );
}
