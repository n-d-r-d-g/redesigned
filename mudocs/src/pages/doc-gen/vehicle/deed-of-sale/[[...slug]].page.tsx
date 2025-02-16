import { ChangeEvent, useCallback } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  TypeOf,
  enum as _enum,
  number,
  object,
  string,
  z,
  literal,
  boolean,
} from "zod";
import { FormikValues, useFormikContext } from "formik";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "next-i18next";
import PageWrapper from "../../../../components/DocGenVehiclePageWrapper/DocGenVehiclePageWrapper";
import FormDatePicker from "@/components/forms/FormDatePicker/FormDatePicker";
import FormTextInput from "@/components/forms/FormTextInput/FormTextInput";
import FormNumberInput from "@/components/forms/FormNumberInput/FormNumberInput";
import FormTraders from "@/components/forms/FormTraders/FormTraders";
import FormSelect from "@/components/forms/FormSelect/FormSelect";
import FormFieldSet from "@/components/forms/FormFieldSet/FormFieldSet";
import FormTrader from "@/components/forms/FormTrader/FormTrader";
import SignatureBlock, {
  SignatureBlockProps,
} from "@/components/SignatureBlock/SignatureBlock";
import TypedTrans from "@/components/TypedTrans/TypedTrans";
import {
  amountToWords,
  formattedDate,
  namesWithAddress,
  silentlyUpdateURL,
} from "@/utils/functions";
import { Company, Person } from "@/types";
import {
  DEFAULT_I18N_LOCALE,
  DEFAULT_I18N_NAMESPACE,
  I18N_LOCALES,
} from "../../../../../constants";

const TRANSACTION_MODES = ["iToI", "iToC", "cToI", "cToC"] as const;

const EXAMPLE_DATA = {
  saleDate: Intl.DateTimeFormat("sv-SE").format(new Date()),
  vehicleFirstRegDate: Intl.DateTimeFormat("sv-SE").format(
    new Date("2010-01-10"),
  ),
  vehicleRegMark: "1234JN12",
  vehicleMake: "TOYOTA",
  vehicleModel: "COROLLA",
  vehicleEngineDisplacement: "1498",
  vehicleEngineNum: "AAAAAA111111",
  vehicleChassisNum: "AAAAA111AA1111111",
  vehiclePrice: 500_000,
  transactionMode: "iToI",
  individualVendors: [
    {
      uuid: uuidv4(),
      traderType: "person" as const,
      title: "mr",
      name: "ALAN SMITH",
      nationality: "mauritian",
      id: "AS111111111111",
      address: {
        street: "321, M.M.M Avenue",
        locality: "QUATRE BORNES",
      },
    },
  ],
  companyVendors: undefined,
  individualPurchasers: [
    {
      uuid: uuidv4(),
      traderType: "person" as const,
      title: "mrs",
      name: "BELLA MARLEY",
      nationality: "mauritian",
      id: "BM222222222222222",
      address: {
        street: "432, V.V Avenue",
        locality: "PORT-LOUIS",
      },
    },
  ],
  companyPurchasers: undefined,
  vendorsCommonAddress: true,
  purchasersCommonAddress: true,
};

const getDefaultIndividuals = () => [
  {
    uuid: uuidv4(),
    traderType: "person" as const,
    title: "mr" as const,
    name: "",
    nationality: "mauritian" as const,
    id: "",
    address: {
      street: "",
      locality: "",
    },
  },
];

const getDefaultCompanies = () => [
  {
    uuid: uuidv4(),
    name: "",
    traderType: "company" as const,
    brn: "",
    address: {
      street: "",
      locality: "",
    },
    directors: [
      {
        uuid: uuidv4(),
        title: "mr" as const,
        name: "",
        nationality: "mauritian" as const,
        id: "",
      },
    ],
  },
];

type TransactionMode = (typeof TRANSACTION_MODES)[number];

type Props = {
  transactionMode: TransactionMode;
};

function TransactionModeField({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);

  return (
    <>
      <div className="2xl:hidden">
        <FormSelect
          name="transactionMode"
          label={`${tCommon("transactionMode")} *`}
          aria-required="true"
          className="w-full"
          onChange={onChange}
        >
          <option value="" disabled>
            {tCommon("none")}
          </option>
          <option value="iToI" className="2xl:hidden">
            {tCommon("transactionModes.iToI.short")}
          </option>
          <option value="iToC" className="2xl:hidden">
            {tCommon("transactionModes.iToC.short")}
          </option>
          <option value="cToI" className="2xl:hidden">
            {tCommon("transactionModes.cToI.short")}
          </option>
          <option value="cToC" className="2xl:hidden">
            {tCommon("transactionModes.cToC.short")}
          </option>
        </FormSelect>
        <dl className="mt-1.5 grid grid-cols-[auto_auto_1fr] px-2 text-sm leading-6">
          <dt>
            <em className="font-bold not-italic leading-6">
              {tCommon("transactionModeAcronyms.individual.acronym")}
            </em>
          </dt>
          <span className="me-2 ms-0.5">:</span>
          <dd>{tCommon("transactionModeAcronyms.individual.meaning")}</dd>
          <dt>
            <em className="font-bold not-italic leading-6">
              {tCommon("transactionModeAcronyms.company.acronym")}
            </em>
          </dt>
          <span className="me-2 ms-0.5">:</span>
          <dd>{tCommon("transactionModeAcronyms.company.meaning")}</dd>
        </dl>
      </div>
      <div className="hidden 2xl:block">
        <FormSelect
          name="transactionMode"
          label={`${tCommon("transactionMode")} *`}
          aria-required="true"
          className="w-full"
          onChange={onChange}
        >
          <option value="" disabled>
            {tCommon("none")}
          </option>
          <option value="iToI" className="hidden 2xl:block">
            {tCommon("transactionModes.iToI.long")}
          </option>
          <option value="iToC" className="hidden 2xl:block">
            {tCommon("transactionModes.iToC.long")}
          </option>
          <option value="cToI" className="hidden 2xl:block">
            {tCommon("transactionModes.cToI.long")}
          </option>
          <option value="cToC" className="hidden 2xl:block">
            {tCommon("transactionModes.cToC.long")}
          </option>
        </FormSelect>
      </div>
    </>
  );
}

function VendorsField() {
  const { values } = useFormikContext<FormikValues>();
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);

  if (
    (["iToI", "iToC"] as Array<TransactionMode>).includes(
      values.transactionMode,
    )
  ) {
    return (
      <FormTraders
        name="individualVendors"
        label={`${tCommon("vendorOrVendors")} *`}
        newTraderType="person"
        containerClassName="lg:row-start-7"
        commonAddressKey="vendorsCommonAddress"
        addressKey="address"
        streetKey="street"
        localityKey="locality"
        showDirectors
        showAddress
      />
    );
  }

  return (
    <FormFieldSet
      name="companyVendors"
      label={`${tCommon("vendorOrVendors")} *`}
      containerClassName="lg:row-start-7"
      className="flex flex-col items-center gap-8 px-2"
      legendClassName="mb-3"
    >
      <FormTrader
        name="companyVendors"
        index={0}
        addressKey="address"
        streetKey="street"
        localityKey="locality"
        showDirectors
        showAddress
      />
    </FormFieldSet>
  );
}

function PurchasersField() {
  const { values } = useFormikContext<FormikValues>();
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);

  if (
    (["iToI", "cToI"] as Array<TransactionMode>).includes(
      values.transactionMode,
    )
  ) {
    return (
      <FormTraders
        name="individualPurchasers"
        label={`${tCommon("purchaserOrPurchasers")} *`}
        newTraderType="person"
        containerClassName="lg:row-start-7"
        commonAddressKey="purchasersCommonAddress"
        addressKey="address"
        streetKey="street"
        localityKey="locality"
        showDirectors
        showAddress
      />
    );
  }

  return (
    <FormFieldSet
      name="companyPurchasers"
      label={`${tCommon("purchaserOrPurchasers")} *`}
      containerClassName="lg:row-start-7"
      className="flex flex-col items-center gap-8 px-2"
      legendClassName="mb-3"
    >
      <FormTrader
        name="companyPurchasers"
        index={0}
        addressKey="address"
        streetKey="street"
        localityKey="locality"
        showDirectors
        showAddress
      />
    </FormFieldSet>
  );
}

function Fields() {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const router = useRouter();
  const { values, setValues } = useFormikContext<FormikValues>();

  const shallowUpdateURL = useCallback(
    (transactionMode: string) =>
      silentlyUpdateURL(
        `/doc-gen/vehicle/deed-of-sale/${transactionMode}`,
        router,
      ),
    [router],
  );

  const handleTransactionModeChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const newTransactionMode = e.target.value as TransactionMode;

      const newIndividualVendors = (
        ["iToI", "iToC"] as Array<TransactionMode>
      ).includes(newTransactionMode)
        ? (values.individualVendors ?? getDefaultIndividuals())
        : undefined;

      const newCompanyVendors = (
        ["cToI", "cToC"] as Array<TransactionMode>
      ).includes(newTransactionMode)
        ? (values.companyVendors ?? getDefaultCompanies())
        : undefined;

      const newIndividualPurchasers = (
        ["iToI", "cToI"] as Array<TransactionMode>
      ).includes(newTransactionMode)
        ? (values.individualPurchasers ?? getDefaultIndividuals())
        : undefined;

      const newCompanyPurchasers = (
        ["iToC", "cToC"] as Array<TransactionMode>
      ).includes(newTransactionMode)
        ? (values.companyPurchasers ?? getDefaultCompanies())
        : undefined;

      setValues(
        {
          ...values,
          transactionMode: newTransactionMode,
          individualVendors: newIndividualVendors,
          companyVendors: newCompanyVendors,
          individualPurchasers: newIndividualPurchasers,
          companyPurchasers: newCompanyPurchasers,
        },
        true,
      );

      shallowUpdateURL(newTransactionMode);
    },
    [setValues, shallowUpdateURL, values],
  );

  return (
    <>
      <FormDatePicker
        name="saleDate"
        label={tCommon("saleDate")}
        aria-required="false"
      />
      <FormDatePicker
        name="vehicleFirstRegDate"
        label={`${tCommon("vehicleFirstRegDate")} *`}
        aria-required="true"
      />
      <FormTextInput
        name="vehicleMake"
        label={`${tCommon("vehicleMake")} *`}
        placeholder={tCommon("vehicleMakePlaceholder")}
        aria-required="true"
      />
      <FormTextInput
        name="vehicleModel"
        label={`${tCommon("vehicleModel")} *`}
        placeholder={tCommon("vehicleModelPlaceholder")}
        aria-required="true"
      />
      <FormTextInput
        name="vehicleRegMark"
        label={`${tCommon("vehicleRegMark")} *`}
        placeholder={tCommon("vehicleRegMarkPlaceholder")}
        aria-required="true"
      />
      <FormTextInput
        name="vehicleEngineDisplacement"
        label={`${tCommon("vehicleEngineDisplacement")} *`}
        placeholder={tCommon("vehicleEngineDisplacementPlaceholder")}
        aria-required="true"
      />
      <FormTextInput
        name="vehicleEngineNum"
        label={`${tCommon("vehicleEngineNum")} *`}
        placeholder={tCommon("vehicleEngineNumPlaceholder")}
        aria-required="true"
      />
      <FormTextInput
        name="vehicleChassisNum"
        label={`${tCommon("vehicleChassisNum")} *`}
        placeholder={tCommon("vehicleChassisNumPlaceholder")}
        aria-required="true"
      />
      <FormNumberInput
        name="vehiclePrice"
        label={`${tCommon("vehiclePrice")} *`}
        placeholder={tCommon("vehiclePricePlaceholder")}
        aria-required="true"
      />
      <TransactionModeField onChange={handleTransactionModeChange} />
      <VendorsField />
      <PurchasersField />
    </>
  );
}

function Preview() {
  const { values, isValid } = useFormikContext<FormikValues>();
  const { t: tCommon, i18n } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const tENCommon = i18n.getFixedT("en", DEFAULT_I18N_NAMESPACE);
  const tENDocGenVehicle = i18n.getFixedT("en", "doc-gen-vehicle-page");

  const renderPrimaryBody = useCallback(() => {
    const isIndividualVendors = (
      ["iToI", "iToC"] as Array<TransactionMode>
    ).includes(values.transactionMode);
    const isIndividualPurchasers = (
      ["iToI", "cToI"] as Array<TransactionMode>
    ).includes(values.transactionMode);
    const vendorCount = isIndividualVendors
      ? (values.individualVendors?.length ?? 0)
      : 2;
    const vendorNamesWithAddress = namesWithAddress(
      isIndividualVendors ? values.individualVendors : values.companyVendors,
      tENCommon,
      values.vendorsCommonAddress,
    );
    const vehicleRegMark = values.vehicleRegMark.toUpperCase();
    const purchaserNamesWithAddress = namesWithAddress(
      isIndividualPurchasers
        ? values.individualPurchasers
        : values.companyPurchasers,
      tENCommon,
      values.purchasersCommonAddress,
    );
    const price = values.vehiclePrice;
    const priceInWords = amountToWords(
      parseInt(values.vehiclePrice),
    )?.toUpperCase();
    const priceWithCommas = new Intl.NumberFormat("en-US").format(
      values.vehiclePrice,
    );

    return (
      <TypedTrans
        ns="doc-gen-vehicle-page"
        i18nKey="deedOfSale.pagePreviewPrimaryBody"
        t={tENDocGenVehicle}
        params={{
          vendorCount,
          vendorNamesWithAddress,
          vehicleRegMark,
          purchaserNamesWithAddress,
          price,
          priceInWords,
          priceWithCommas,
        }}
      />
    );
  }, [
    tENCommon,
    tENDocGenVehicle,
    values.companyPurchasers,
    values.companyVendors,
    values.individualPurchasers,
    values.individualVendors,
    values.purchasersCommonAddress,
    values.transactionMode,
    values.vehiclePrice,
    values.vehicleRegMark,
    values.vendorsCommonAddress,
  ]);

  const renderSignatureBlocks = useCallback(
    (
      traders: FormikValues[string],
      responsibility: SignatureBlockProps["responsibility"],
      otherProps?: Pick<SignatureBlockProps, "showDate" | "date">,
    ) => {
      return traders?.map((trader: Person | Company) => {
        const typedTrader = trader as Person;
        const signatureBlockProps: SignatureBlockProps = {
          translateFn: tENCommon,
          responsibility,
          title: typedTrader.title,
          nationality: typedTrader.nationality,
          id: typedTrader.id,
          name: typedTrader.name,
          ...otherProps,
        };

        return (
          <div key={trader.uuid} className="relative">
            <SignatureBlock {...signatureBlockProps} />
            {responsibility === "director" && (
              <p
                className="hide-on-print absolute end-[-35px] top-[40px] rotate-[-80deg] cursor-no-drop rounded-md text-3xl font-black leading-none text-red-700 opacity-75 outline-offset-2 hover:opacity-25"
                title={tCommon("companyStamp")}
              >
                {tENDocGenVehicle("stampPlaceholder")}
              </p>
            )}
          </div>
        );
      });
    },
    [tCommon, tENCommon, tENDocGenVehicle],
  );

  const renderVendorSignatureBlocks = useCallback(
    ({ withDate }: { withDate?: boolean } = {}) => {
      const isIndividualVendors = (
        ["iToI", "iToC"] as Array<TransactionMode>
      ).includes(values.transactionMode);
      const traders = isIndividualVendors
        ? values.individualVendors
        : values.companyVendors?.[0]?.directors;
      const responsibility = isIndividualVendors ? "vendor" : "director";

      return renderSignatureBlocks(
        traders,
        responsibility,
        withDate
          ? {
              date: values.saleDate,
              showDate: true,
            }
          : undefined,
      );
    },
    [
      renderSignatureBlocks,
      values.companyVendors,
      values.individualVendors,
      values.saleDate,
      values.transactionMode,
    ],
  );

  const renderPurchaserSignatureBlocks = useCallback(
    ({ withDate }: { withDate?: boolean } = {}) => {
      const isIndividualPurchasers = (
        ["iToI", "cToI"] as Array<TransactionMode>
      ).includes(values.transactionMode);
      const traders = isIndividualPurchasers
        ? values.individualPurchasers
        : values.companyPurchasers?.[0]?.directors;
      const responsibility = isIndividualPurchasers ? "purchaser" : "director";

      return renderSignatureBlocks(
        traders,
        responsibility,
        withDate
          ? {
              date: values.saleDate,
              showDate: true,
            }
          : undefined,
      );
    },
    [
      renderSignatureBlocks,
      values.companyPurchasers,
      values.individualPurchasers,
      values.saleDate,
      values.transactionMode,
    ],
  );

  return (
    <div className="a4-page mx-auto flex flex-col items-end rounded-lg font-[Arial] text-[11pt] leading-[1.5] text-black">
      {isValid ? (
        <div className="main-content">
          <p className="leading-[1.45]">{renderPrimaryBody()}</p>
          <dl className="my-5 grid grid-cols-[max-content_1fr] gap-x-4">
            <dt className="with-colon relative after:absolute after:end-[-0.75rem]">
              {tENDocGenVehicle("deedOfSale.registrationMark")}
            </dt>
            <dd className="mt-auto break-all">{values.vehicleRegMark}</dd>
            <dt className="with-colon relative after:absolute after:end-[-0.75rem]">
              {tENDocGenVehicle("deedOfSale.make")}
            </dt>
            <dd className="mt-auto break-all">
              {values.vehicleMake?.toUpperCase()}
            </dd>
            <dt className="with-colon relative after:absolute after:end-[-0.75rem]">
              {tENDocGenVehicle("deedOfSale.model")}
            </dt>
            <dd className="mt-auto break-all">
              {values.vehicleModel?.toUpperCase()}
            </dd>
            <dt className="with-colon relative after:absolute after:end-[-0.75rem]">
              {tENDocGenVehicle("deedOfSale.rating")}
            </dt>
            <dd className="mt-auto break-all">
              {values.vehicleEngineDisplacement}CC
            </dd>
            <dt className="with-colon relative after:absolute after:end-[-0.75rem]">
              {tENDocGenVehicle("deedOfSale.engineNum")}
            </dt>
            <dd className="mt-auto break-all">{values.vehicleEngineNum}</dd>
            <dt className="with-colon relative after:absolute after:end-[-0.75rem]">
              {tENDocGenVehicle("deedOfSale.chassisNum")}
            </dt>
            <dd className="mt-auto break-all">{values.vehicleChassisNum}</dd>
            <dt className="with-colon relative after:absolute after:end-[-0.75rem]">
              {tENDocGenVehicle("deedOfSale.dateOfFirstRegistration")}
            </dt>
            <dd className="mt-auto break-all">
              {formattedDate(
                values.vehicleFirstRegDate,
                undefined,
                undefined,
                "long",
              )}
            </dd>
            <dt className="with-colon relative after:absolute after:end-[-0.75rem]">
              {tENDocGenVehicle("deedOfSale.dateOfSale")}
            </dt>
            <dd
              className={`mt-auto break-all ${
                values.saleDate
                  ? ""
                  : "w-[calc(12*var(--font-size))] max-w-full border-b-2 border-dotted border-black"
              }`}
            >
              {formattedDate(values.saleDate, undefined, undefined, "long")}
            </dd>
          </dl>
          <div className="w-full">
            <aside className="grid grid-cols-[auto_auto] justify-between gap-[calc(2*var(--print-preview-font-size))]">
              <div className="flex flex-col gap-4">
                {renderVendorSignatureBlocks()}
              </div>
              <div className="flex flex-col gap-4">
                {renderPurchaserSignatureBlocks()}
              </div>
            </aside>
          </div>
          <p className="my-5 text-justify leading-[1.45]">
            {tENDocGenVehicle("deedOfSale.pagePreviewSecondaryBody")}
          </p>
          <div className="w-full">
            <aside className="grid grid-cols-[auto_auto] justify-between gap-[calc(2*var(--print-preview-font-size))]">
              <div className="flex flex-col gap-4">
                {renderVendorSignatureBlocks({ withDate: true })}
              </div>
              <div className="flex flex-col gap-4">
                {renderPurchaserSignatureBlocks({ withDate: true })}
              </div>
            </aside>
          </div>
        </div>
      ) : (
        <p className="w-full text-center">
          {tCommon("fillInfoToViewPagePreview")}
        </p>
      )}
    </div>
  );
}

export default function DeedOfSale({ transactionMode }: Props) {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { t: tDocGenVehicle } = useTranslation("doc-gen-vehicle-page");
  const initialValues = {
    saleDate: Intl.DateTimeFormat("sv-SE").format(new Date()), // YYYY-MM-DD
    vehicleFirstRegDate: "",
    vehicleRegMark: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleEngineDisplacement: "",
    vehicleEngineNum: "",
    vehicleChassisNum: "",
    vehiclePrice: 1,
    transactionMode,
    individualVendors: ["iToI", "iToC"].includes(transactionMode)
      ? getDefaultIndividuals()
      : undefined,
    companyVendors: ["cToI", "cToC"].includes(transactionMode)
      ? getDefaultCompanies()
      : undefined,
    individualPurchasers: ["iToI", "cToI"].includes(transactionMode)
      ? getDefaultIndividuals()
      : undefined,
    companyPurchasers: ["iToC", "cToC"].includes(transactionMode)
      ? getDefaultCompanies()
      : undefined,
    vendorsCommonAddress: true,
    purchasersCommonAddress: true,
  };
  const baseTraderSchema = {
    uuid: string().uuid(),
    name: string({ required_error: tCommon("errors.required") }).trim(),
    address: object({
      street: string({ required_error: tCommon("errors.required") }).trim(),
      locality: string({ required_error: tCommon("errors.required") }).trim(),
    }),
  };
  const personSchema = object({
    ...baseTraderSchema,
    traderType: literal("person"),
    title: string({ required_error: tCommon("errors.required") })
      .trim()
      .regex(/mr|mrs|miss/gm),
    nationality: string({ required_error: tCommon("errors.required") })
      .trim()
      .regex(/mauritian|nonMauritian/gm),
    id: string({ required_error: tCommon("errors.required") }).trim(),
  });
  const companySchema = object({
    ...baseTraderSchema,
    traderType: literal("company"),
    brn: string({ required_error: tCommon("errors.required") }).trim(),
  });
  const schema = object({
    saleDate: z.coerce
      .date({
        errorMap: (issue, { defaultError }) => ({
          message:
            issue.code === "invalid_date"
              ? tCommon("errors.required")
              : defaultError,
        }),
      })
      .optional(),
    vehicleFirstRegDate: z.coerce.date({
      errorMap: (issue, { defaultError }) => ({
        message:
          issue.code === "invalid_date"
            ? tCommon("errors.required")
            : defaultError,
      }),
    }),
    vehicleRegMark: string({
      required_error: tCommon("errors.required"),
    }).trim(),
    vehicleMake: string({ required_error: tCommon("errors.required") }).trim(),
    vehicleModel: string({ required_error: tCommon("errors.required") }).trim(),
    vehicleEngineDisplacement: string({
      required_error: tCommon("errors.required"),
    }).trim(),
    vehicleEngineNum: string({
      required_error: tCommon("errors.required"),
    }).trim(),
    vehicleChassisNum: string({
      required_error: tCommon("errors.required"),
    }).trim(),
    vehiclePrice: number({
      required_error: tCommon("errors.required"),
    })
      .gte(1, tCommon("errors.numberGTE", { count: 1 }))
      .lte(
        9_999_999_999,
        tCommon("errors.numberLTE", { count: 9_999_999_999 }),
      ),
    transactionMode: _enum(TRANSACTION_MODES),
    individualVendors: personSchema
      .array()
      .min(1, tCommon("errors.arrayMin", { count: 1 }))
      .optional(),
    companyVendors: companySchema
      .array()
      .max(1, tCommon("errors.arrayMax", { count: 1 }))
      .optional(),
    individualPurchasers: personSchema
      .array()
      .min(1, tCommon("errors.arrayMin", { count: 1 }))
      .optional(),
    companyPurchasers: companySchema
      .array()
      .max(1, tCommon("errors.arrayMax", { count: 1 }))
      .optional(),
    vendorsCommonAddress: boolean(),
    purchasersCommonAddress: boolean(),
  });

  type Schema = Omit<
    Omit<TypeOf<typeof schema>, "saleDate">,
    "vehicleFirstRegDate"
  > & {
    saleDate: string | number | Date;
    vehicleFirstRegDate: string | number | Date;
  };

  return (
    <PageWrapper<Schema>
      pageTitle={tDocGenVehicle("deedOfSale.title")}
      initialValues={initialValues}
      schema={schema}
      exampleData={EXAMPLE_DATA}
      Fields={Fields}
      Preview={Preview}
    />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    ...TRANSACTION_MODES.map((mode) => ({
      params: {
        slug: [mode],
      },
    })),
    { params: { slug: [] } },
  ];

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  let transactionMode: TransactionMode = "iToI";
  const modeFromSlug = params?.slug?.[0];

  if (modeFromSlug) {
    const isTransactionModeValid = TRANSACTION_MODES.includes(
      modeFromSlug as TransactionMode,
    );

    if (isTransactionModeValid) {
      transactionMode = modeFromSlug as TransactionMode;
    }
  }

  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? DEFAULT_I18N_LOCALE,
        [DEFAULT_I18N_NAMESPACE, "doc-gen-vehicle-page"],
        null,
        [...I18N_LOCALES],
      )),
      transactionMode,
    },
  };
};
