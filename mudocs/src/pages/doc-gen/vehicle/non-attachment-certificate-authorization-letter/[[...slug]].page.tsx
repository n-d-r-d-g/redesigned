import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TypeOf, enum as _enum, literal, object, string, z } from "zod";
import { FormikValues, useFormikContext } from "formik";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "next-i18next";
import PageWrapper from "@/components/DocGenVehiclePageWrapper/DocGenVehiclePageWrapper";
import FormDatePicker from "@/components/forms/FormDatePicker/FormDatePicker";
import FormTextInput from "@/components/forms/FormTextInput/FormTextInput";
import FormTraders from "@/components/forms/FormTraders/FormTraders";
import FormSelect from "@/components/forms/FormSelect/FormSelect";
import SignatureBlock, {
  SignatureBlockProps,
} from "@/components/SignatureBlock/SignatureBlock";
import {
  formattedDate,
  namesWithId,
  silentlyUpdateURL,
} from "@/utils/functions";
import { Company, Person } from "@/types";
import { ChangeEvent, useCallback } from "react";
import FormTrader from "@/components/forms/FormTrader/FormTrader";
import FormFieldSet from "@/components/forms/FormFieldSet/FormFieldSet";
import TypedTrans from "@/components/TypedTrans/TypedTrans";
import {
  DEFAULT_I18N_LOCALE,
  DEFAULT_I18N_NAMESPACE,
  I18N_LOCALES,
} from "../../../../../constants";

type CompanyWithRepresentingDirector = Company & {
  representingDirectorUUID: string;
};

const authorizationModes = [
  "i1ToI2",
  "i1ToD2",
  "i1ToR2",
  "c1ToD1",
  "c1ToR1",
  "c1ToI2",
  "c1ToD2",
  "c1ToR2",
] as const;

const getDefaultIndividuals = () => [
  {
    uuid: uuidv4(),
    traderType: "person" as const,
    title: "mr" as const,
    name: "",
    nationality: "mauritian" as const,
    id: "",
  },
];

const getCompanyDirectors = (representingDirectorUUID?: string) => [
  {
    uuid: representingDirectorUUID ?? uuidv4(),
    title: "mr" as const,
    name: "",
    nationality: "mauritian" as const,
    id: "",
  },
];

const getCompanyRepresentative = () => ({
  uuid: uuidv4(),
  title: "mr" as const,
  name: "",
  nationality: "mauritian" as const,
  id: "",
  role: "",
});

const getDefaultCompanies = ({
  withDirectors,
  withRepresentative,
}: { withDirectors?: boolean; withRepresentative?: boolean } = {}) => {
  const directorUUID = uuidv4();

  return [
    {
      uuid: uuidv4(),
      name: "",
      traderType: "company" as const,
      brn: "",
      representingDirectorUUID: directorUUID,
      directors: withDirectors ? getCompanyDirectors(directorUUID) : undefined,
      representative: withRepresentative
        ? getCompanyRepresentative()
        : undefined,
    },
  ];
};

type AuthorizationMode = (typeof authorizationModes)[number];

type Props = {
  authorizationMode: AuthorizationMode;
};

function AuthorizationModeField({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);

  return (
    <>
      <div className="2xl:hidden">
        <FormSelect
          name="authorizationMode"
          label={`${tCommon("authorizationMode")} *`}
          aria-required="true"
          className="w-full"
          onChange={onChange}
        >
          <option value="" disabled>
            {tCommon("none")}
          </option>
          <option value="i1ToI2" className="2xl:hidden">
            {tCommon("authorizationModes.i1ToI2.short")}
          </option>
          <option value="i1ToD2" className="2xl:hidden">
            {tCommon("authorizationModes.i1ToD2.short")}
          </option>
          <option value="i1ToR2" className="2xl:hidden">
            {tCommon("authorizationModes.i1ToR2.short")}
          </option>
          <option value="c1ToD1" className="2xl:hidden">
            {tCommon("authorizationModes.c1ToD1.short")}
          </option>
          <option value="c1ToR1" className="2xl:hidden">
            {tCommon("authorizationModes.c1ToR1.short")}
          </option>
          <option value="c1ToI2" className="2xl:hidden">
            {tCommon("authorizationModes.c1ToI2.short")}
          </option>
          <option value="c1ToD2" className="2xl:hidden">
            {tCommon("authorizationModes.c1ToD2.short")}
          </option>
          <option value="c1ToR2" className="2xl:hidden">
            {tCommon("authorizationModes.c1ToR2.short")}
          </option>
        </FormSelect>
        <dl className="mt-1.5 grid grid-cols-[auto_auto_1fr] px-2 text-sm leading-6">
          <dt>
            <em className="font-bold not-italic leading-6">
              {tCommon("authorizationModeAcronyms.individual.acronym")}
            </em>
          </dt>
          <span className="me-2 ms-0.5">:</span>
          <dd>{tCommon("authorizationModeAcronyms.individual.meaning")}</dd>
          <dt>
            <em className="font-bold not-italic leading-6">
              {tCommon("authorizationModeAcronyms.company.acronym")}
            </em>
          </dt>
          <span className="me-2 ms-0.5">:</span>
          <dd>{tCommon("authorizationModeAcronyms.company.meaning")}</dd>
          <dt>
            <em className="font-bold not-italic leading-6">
              {tCommon("authorizationModeAcronyms.director.acronym")}
            </em>
          </dt>
          <span className="me-2 ms-0.5">:</span>
          <dd>{tCommon("authorizationModeAcronyms.director.meaning")}</dd>
          <dt>
            <em className="font-bold not-italic leading-6">
              {tCommon("authorizationModeAcronyms.representative.acronym")}
            </em>
          </dt>
          <span className="me-2 ms-0.5">:</span>
          <dd>{tCommon("authorizationModeAcronyms.representative.meaning")}</dd>
          <dt>
            <em className="font-bold not-italic leading-6">
              {tCommon("authorizationModeAcronyms.vendor.acronym")}
            </em>
          </dt>
          <span className="me-2 ms-0.5">:</span>
          <dd>{tCommon("authorizationModeAcronyms.vendor.meaning")}</dd>
          <dt>
            <em className="font-bold not-italic leading-6">
              {tCommon("authorizationModeAcronyms.purchaser.acronym")}
            </em>
          </dt>
          <span className="me-2 ms-0.5">:</span>
          <dd>{tCommon("authorizationModeAcronyms.purchaser.meaning")}</dd>
        </dl>
      </div>
      <div className="hidden 2xl:block">
        <FormSelect
          name="authorizationMode"
          label={`${tCommon("authorizationMode")} *`}
          aria-required="true"
          className="w-full"
          onChange={onChange}
        >
          <option value="" disabled>
            {tCommon("none")}
          </option>
          <option value="i1ToI2" className="hidden 2xl:block">
            {tCommon("authorizationModes.i1ToI2.long")}
          </option>
          <option value="i1ToD2" className="hidden 2xl:block">
            {tCommon("authorizationModes.i1ToD2.long")}
          </option>
          <option value="i1ToR2" className="hidden 2xl:block">
            {tCommon("authorizationModes.i1ToR2.long")}
          </option>
          <option value="c1ToD1" className="hidden 2xl:block">
            {tCommon("authorizationModes.c1ToD1.long")}
          </option>
          <option value="c1ToR1" className="hidden 2xl:block">
            {tCommon("authorizationModes.c1ToR1.long")}
          </option>
          <option value="c1ToI2" className="hidden 2xl:block">
            {tCommon("authorizationModes.c1ToI2.long")}
          </option>
          <option value="c1ToD2" className="hidden 2xl:block">
            {tCommon("authorizationModes.c1ToD2.long")}
          </option>
          <option value="c1ToR2" className="hidden 2xl:block">
            {tCommon("authorizationModes.c1ToR2.long")}
          </option>
        </FormSelect>
      </div>
    </>
  );
}

function AuthorizersField() {
  const { values } = useFormikContext<FormikValues>();
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);

  if (
    (["i1ToI2", "i1ToD2", "i1ToR2"] as Array<AuthorizationMode>).includes(
      values.authorizationMode,
    )
  ) {
    return (
      <FormTraders
        name="individualAuthorizers"
        label={`${tCommon("authorizer")} *`}
        newTraderType="person"
        showAddress={false}
        containerClassName="lg:row-start-5"
      />
    );
  }

  return (
    <FormFieldSet
      name="companyAuthorizers"
      label={`${tCommon("authorizer")} *`}
      containerClassName="lg:row-start-5"
      className="flex flex-col items-center gap-8 px-2"
      legendClassName="mb-3"
    >
      <FormTrader
        name="companyAuthorizers"
        index={0}
        showRepresentative={values.authorizationMode === "c1ToR1"}
        showRepresentingDirector={values.authorizationMode === "c1ToD1"}
        showDirectors
      />
    </FormFieldSet>
  );
}

function AuthorizedField() {
  const { values } = useFormikContext<FormikValues>();
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);

  if (
    (["i1ToI2", "c1ToI2"] as Array<AuthorizationMode>).includes(
      values.authorizationMode,
    )
  ) {
    return (
      <FormFieldSet
        name="authorizedIndividuals"
        label={`${tCommon("authorized")} *`}
        containerClassName="lg:row-start-5"
        className="flex flex-col items-center gap-8 px-2"
        legendClassName="mb-3"
      >
        <FormTrader name="authorizedIndividuals" index={0} />
      </FormFieldSet>
    );
  }

  if (
    (
      ["i1ToD2", "i1ToR2", "c1ToD2", "c1ToR2"] as Array<AuthorizationMode>
    ).includes(values.authorizationMode)
  ) {
    return (
      <FormFieldSet
        name="authorizedCompanies"
        label={`${tCommon("authorized")} *`}
        containerClassName="lg:row-start-5"
        className="flex flex-col items-center gap-8 px-2"
        legendClassName="mb-3"
      >
        <FormTrader
          name="authorizedCompanies"
          index={0}
          showRepresentingDirector={(
            ["i1ToD2", "c1ToD2"] as Array<AuthorizationMode>
          ).includes(values.authorizationMode)}
          showRepresentative={(
            ["i1ToR2", "c1ToR2"] as Array<AuthorizationMode>
          ).includes(values.authorizationMode)}
          showDirectors
        />
      </FormFieldSet>
    );
  }

  return null;
}

function Fields() {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const router = useRouter();
  const { values, setValues } = useFormikContext<FormikValues>();

  const shallowUpdateURL = useCallback(
    (authorizationMode: string) =>
      silentlyUpdateURL(
        `/doc-gen/vehicle/non-attachment-certificate-authorization-letter/${authorizationMode}`,
        router,
      ),
    [router],
  );

  const handleAuthorizationModeChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const newAuthorizationMode = e.target.value as AuthorizationMode;

      const newIndividualAuthorizers = (
        ["i1ToI2", "i1ToD2", "i1ToR2"] as Array<AuthorizationMode>
      ).includes(newAuthorizationMode)
        ? values.individualAuthorizers ?? getDefaultIndividuals()
        : undefined;

      const newCompanyAuthorizers = (
        [
          "c1ToI2",
          "c1ToD1",
          "c1ToR1",
          "c1ToD2",
          "c1ToR2",
        ] as Array<AuthorizationMode>
      ).includes(newAuthorizationMode)
        ? values.companyAuthorizers?.map((company: Company) => ({
            ...company,
            directors: company.directors ?? getCompanyDirectors(),
            representative:
              newAuthorizationMode === "c1ToR1"
                ? company.representative ?? getCompanyRepresentative()
                : undefined,
          })) ??
          getDefaultCompanies({
            withDirectors: true,
            withRepresentative: newAuthorizationMode === "c1ToR1",
          })
        : undefined;

      const newAuthorizedIndividuals = (
        ["i1ToI2", "c1ToI2"] as Array<AuthorizationMode>
      ).includes(newAuthorizationMode)
        ? values.authorizedIndividuals ?? getDefaultIndividuals()
        : undefined;

      const representingDirectorUUID = uuidv4();
      const newAuthorizedCompanies = (
        ["i1ToD2", "i1ToR2", "c1ToD2", "c1ToR2"] as Array<AuthorizationMode>
      ).includes(newAuthorizationMode)
        ? values.authorizedCompanies?.map(
            (company: CompanyWithRepresentingDirector) => ({
              ...company,
              representingDirectorUUID:
                company.representingDirectorUUID ?? representingDirectorUUID,
              directors:
                company.directors ??
                getCompanyDirectors(
                  company.representingDirectorUUID ?? representingDirectorUUID,
                ),
              representative: (
                ["i1ToR2", "c1ToR2"] as Array<AuthorizationMode>
              ).includes(newAuthorizationMode)
                ? company.representative ?? getCompanyRepresentative()
                : undefined,
            }),
          ) ??
          getDefaultCompanies({
            withDirectors: true,
            withRepresentative: (
              ["i1ToR2", "c1ToR2"] as Array<AuthorizationMode>
            ).includes(newAuthorizationMode),
          })
        : undefined;

      setValues(
        {
          ...values,
          authorizationMode: newAuthorizationMode,
          individualAuthorizers: newIndividualAuthorizers,
          companyAuthorizers: newCompanyAuthorizers,
          authorizedIndividuals: newAuthorizedIndividuals,
          authorizedCompanies: newAuthorizedCompanies,
        },
        true,
      );

      shallowUpdateURL(newAuthorizationMode);
    },
    [setValues, shallowUpdateURL, values],
  );

  return (
    <>
      <FormDatePicker
        name="date"
        label={tCommon("date")}
        aria-required="false"
      />
      <FormTextInput
        name="vehicleMake"
        label={`${tCommon("vehicleMake")} *`}
        placeholder={tCommon("vehicleMakePlaceholder")}
        aria-required="true"
      />
      <FormTextInput
        name="vehicleRegNum"
        label={`${tCommon("vehicleRegNum")} *`}
        placeholder={tCommon("vehicleRegNumPlaceholder")}
        aria-required="true"
      />
      <AuthorizationModeField onChange={handleAuthorizationModeChange} />
      <AuthorizersField />
      <AuthorizedField />
    </>
  );
}

function Preview() {
  const { values, isValid } = useFormikContext<FormikValues>();
  const { t: tCommon, i18n } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const tENCommon = i18n.getFixedT("en", DEFAULT_I18N_NAMESPACE);
  const tENDocGenVehicle = i18n.getFixedT("en", "doc-gen-vehicle-page");

  const renderBody = useCallback(() => {
    const commonTypedTransProps = {
      ns: "doc-gen-vehicle-page",
      t: tENDocGenVehicle,
    } as const;
    const i18nKey = <Mode extends string>(mode: Mode) =>
      `nonAttachmentCertificateAuthorizationLetter.pagePreviewBody.${mode}` as const;

    if (values.authorizationMode === "i1ToI2") {
      return (
        <TypedTrans
          {...commonTypedTransProps}
          i18nKey={i18nKey("i1ToI2")}
          params={{
            ownerCount: values.individualAuthorizers?.length ?? 0,
            ownerNamesWithId: namesWithId(
              values.individualAuthorizers ?? [],
              tENCommon,
            ),
            purchaserNamesWithId: namesWithId(
              values.authorizedIndividuals ?? [],
              tENCommon,
            ),
            vehicleRegNum: values.vehicleRegNum.toUpperCase(),
            vehicleMake: values.vehicleMake?.toUpperCase(),
          }}
        />
      );
    }

    if (values.authorizationMode === "i1ToD2") {
      return (
        <TypedTrans
          {...commonTypedTransProps}
          i18nKey={i18nKey("i1ToD2")}
          params={{
            ownerCount: values.individualAuthorizers?.length ?? 0,
            ownerNamesWithId: namesWithId(
              values.individualAuthorizers ?? [],
              tENCommon,
            ),
            directorNameWithId: namesWithId(
              (
                (values.authorizedCompanies?.[0]?.directors ??
                  []) as Array<Person>
              ).filter(
                (director) =>
                  director.uuid ===
                  values.authorizedCompanies?.[0]?.representingDirectorUUID,
              ),
              tENCommon,
            ),
            companyName: values.authorizedCompanies?.[0]?.name,
            companyBRN: values.authorizedCompanies?.[0]?.brn,
            vehicleRegNum: values.vehicleRegNum.toUpperCase(),
            vehicleMake: values.vehicleMake?.toUpperCase(),
          }}
        />
      );
    }

    if (values.authorizationMode === "i1ToR2") {
      return (
        <TypedTrans
          {...commonTypedTransProps}
          i18nKey={i18nKey("i1ToR2")}
          params={{
            ownerCount: values.individualAuthorizers?.length ?? 0,
            ownerNamesWithId: namesWithId(
              values.individualAuthorizers ?? [],
              tENCommon,
            ),
            representativeNameWithId: namesWithId(
              values.authorizedCompanies?.[0]?.representative
                ? [values.authorizedCompanies?.[0].representative]
                : [],
              tENCommon,
            ),
            representativeRole:
              values.authorizedCompanies?.[0]?.representative?.role,
            companyName: values.authorizedCompanies?.[0]?.name,
            companyBRN: values.authorizedCompanies?.[0]?.brn,
            vehicleRegNum: values.vehicleRegNum.toUpperCase(),
            vehicleMake: values.vehicleMake?.toUpperCase(),
          }}
        />
      );
    }

    if (values.authorizationMode === "c1ToD1") {
      const numOfDirectors =
        values.companyAuthorizers?.[0]?.directors?.length ?? 0;

      if (numOfDirectors === 1) {
        return (
          <TypedTrans
            {...commonTypedTransProps}
            i18nKey={i18nKey("c1ToD1Single")}
            params={{
              directorNameWithId: namesWithId(
                values.companyAuthorizers?.[0]?.directors ?? [],
                tENCommon,
              ),
              companyName: values.companyAuthorizers?.[0]?.name,
              companyBRN: values.companyAuthorizers?.[0]?.brn,
              vehicleRegNum: values.vehicleRegNum.toUpperCase(),
              vehicleMake: values.vehicleMake?.toUpperCase(),
            }}
          />
        );
      }

      if (numOfDirectors > 1) {
        const representingDirector = (
          (values.companyAuthorizers?.[0]?.directors ?? []) as Array<Person>
        ).filter(
          (director) =>
            director.uuid ===
            values.companyAuthorizers?.[0]?.representingDirectorUUID,
        );
        const nonRepresentingDirectors = (
          (values.companyAuthorizers?.[0]?.directors ?? []) as Array<Person>
        ).filter(
          (director) =>
            director.uuid !==
            values.companyAuthorizers?.[0]?.representingDirectorUUID,
        );

        return (
          <TypedTrans
            {...commonTypedTransProps}
            i18nKey={i18nKey("c1ToD1Multiple")}
            params={{
              nonRepresentingDirectorCount: nonRepresentingDirectors.length,
              nonRepresentingDirectorNamesWithId: namesWithId(
                nonRepresentingDirectors,
                tENCommon,
              ),
              representingDirectorNameWithId: namesWithId(
                representingDirector,
                tENCommon,
              ),
              companyName: values.companyAuthorizers?.[0]?.name,
              companyBRN: values.companyAuthorizers?.[0]?.brn,
              vehicleRegNum: values.vehicleRegNum.toUpperCase(),
              vehicleMake: values.vehicleMake?.toUpperCase(),
            }}
          />
        );
      }
    }

    if (values.authorizationMode === "c1ToR1") {
      return (
        <TypedTrans
          {...commonTypedTransProps}
          i18nKey={i18nKey("c1ToR1")}
          params={{
            directorCount:
              values.companyAuthorizers?.[0]?.directors?.length ?? 0,
            directorNamesWithId: namesWithId(
              values.companyAuthorizers?.[0]?.directors ?? [],
              tENCommon,
            ),
            representativeNameWithId: namesWithId(
              values.companyAuthorizers?.[0]?.representative
                ? [values.companyAuthorizers?.[0].representative]
                : [],
              tENCommon,
            ),
            representativeRole:
              values.companyAuthorizers?.[0]?.representative?.role,
            companyName: values.companyAuthorizers?.[0]?.name,
            companyBRN: values.companyAuthorizers?.[0]?.brn,
            vehicleRegNum: values.vehicleRegNum.toUpperCase(),
            vehicleMake: values.vehicleMake?.toUpperCase(),
          }}
        />
      );
    }

    if (values.authorizationMode === "c1ToI2") {
      return (
        <TypedTrans
          {...commonTypedTransProps}
          i18nKey={i18nKey("c1ToI2")}
          params={{
            directorCount:
              values.companyAuthorizers?.[0]?.directors?.length ?? 0,
            directorNamesWithId: namesWithId(
              values.companyAuthorizers?.[0]?.directors ?? [],
              tENCommon,
            ),
            purchaserNameWithId: namesWithId(
              values.authorizedIndividuals,
              tENCommon,
            ),
            companyName: values.companyAuthorizers?.[0]?.name,
            companyBRN: values.companyAuthorizers?.[0]?.brn,
            vehicleRegNum: values.vehicleRegNum.toUpperCase(),
            vehicleMake: values.vehicleMake?.toUpperCase(),
          }}
        />
      );
    }

    if (values.authorizationMode === "c1ToD2") {
      return (
        <TypedTrans
          {...commonTypedTransProps}
          i18nKey={i18nKey("c1ToD2")}
          params={{
            vendorCompanyDirectorCount:
              values.companyAuthorizers?.[0]?.directors?.length ?? 0,
            vendorCompanyDirectorNamesWithId: namesWithId(
              values.companyAuthorizers?.[0]?.directors ?? [],
              tENCommon,
            ),
            purchaserCompanyDirectorNameWithId: namesWithId(
              (
                (values.authorizedCompanies?.[0]?.directors ??
                  []) as Array<Person>
              ).filter(
                (director) =>
                  director.uuid ===
                  values.authorizedCompanies?.[0]?.representingDirectorUUID,
              ),
              tENCommon,
            ),
            vendorCompanyName: values.companyAuthorizers?.[0]?.name,
            vendorCompanyBRN: values.companyAuthorizers?.[0]?.brn,
            purchaserCompanyName: values.authorizedCompanies?.[0]?.name,
            purchaserCompanyBRN: values.authorizedCompanies?.[0]?.brn,
            vehicleRegNum: values.vehicleRegNum.toUpperCase(),
            vehicleMake: values.vehicleMake?.toUpperCase(),
          }}
        />
      );
    }

    if (values.authorizationMode === "c1ToR2") {
      return (
        <TypedTrans
          {...commonTypedTransProps}
          i18nKey={i18nKey("c1ToR2")}
          params={{
            vendorCompanyDirectorCount:
              values.companyAuthorizers?.[0]?.directors?.length ?? 0,
            vendorCompanyDirectorNamesWithId: namesWithId(
              values.companyAuthorizers?.[0]?.directors ?? [],
              tENCommon,
            ),
            purchaserCompanyRepresentativeNameWithId: namesWithId(
              values.authorizedCompanies?.[0]?.representative
                ? [values.authorizedCompanies?.[0].representative]
                : [],
              tENCommon,
            ),
            purchaserCompanyRepresentativeRole:
              values.authorizedCompanies?.[0]?.representative?.role,
            vendorCompanyName: values.companyAuthorizers?.[0]?.name,
            vendorCompanyBRN: values.companyAuthorizers?.[0]?.brn,
            purchaserCompanyName: values.authorizedCompanies?.[0]?.name,
            purchaserCompanyBRN: values.authorizedCompanies?.[0]?.brn,
            vehicleRegNum: values.vehicleRegNum.toUpperCase(),
            vehicleMake: values.vehicleMake?.toUpperCase(),
          }}
        />
      );
    }

    return null;
  }, [
    tENCommon,
    tENDocGenVehicle,
    values.authorizationMode,
    values.authorizedCompanies,
    values.authorizedIndividuals,
    values.companyAuthorizers,
    values.individualAuthorizers,
    values.vehicleMake,
    values.vehicleRegNum,
  ]);

  const renderSignatureBlocks = useCallback(
    (
      traders: FormikValues[string],
      responsibility: SignatureBlockProps["responsibility"],
      otherProps?: Pick<SignatureBlockProps, "showDate" | "date">,
    ) => {
      return traders.map((trader: Person | Company) => {
        let signatureBlockProps: SignatureBlockProps = {
          translateFn: tENCommon,
          responsibility,
          title: "",
          name: "",
          nationality: "mauritian",
          id: "",
          ...otherProps,
        };

        const typedTrader = trader as Person;

        if (!typedTrader) return null;

        signatureBlockProps = {
          ...signatureBlockProps,
          title: typedTrader.title,
          name: typedTrader.name,
          nationality: typedTrader.nationality,
          id: typedTrader.id,
        };

        return (
          <div key={trader.uuid} className="relative">
            <SignatureBlock {...signatureBlockProps} />
            {["director", "representative"].includes(responsibility) && (
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

  const renderAuthorizerSignatureBlocks = useCallback(() => {
    const isIndividualAuthorizer = (
      ["i1ToI2", "i1ToD2", "i1ToR2"] as Array<AuthorizationMode>
    ).includes(values.authorizationMode);
    const responsibility: Extract<
      SignatureBlockProps["responsibility"],
      "vendor" | "director"
    > = isIndividualAuthorizer ? "vendor" : "director";
    let traders;

    if (isIndividualAuthorizer) {
      traders = values.individualAuthorizers;
    } else {
      const isAuthorizingOwnDirector = values.authorizationMode === "c1ToD1";
      const numOfDirectors = (values.companyAuthorizers?.[0]?.directors ?? [])
        .length;

      if (isAuthorizingOwnDirector && numOfDirectors > 1) {
        traders = (
          values.companyAuthorizers[0].directors as Array<Person>
        ).filter(
          (director) =>
            values.companyAuthorizers[0].representingDirectorUUID !==
            director.uuid,
        );
      } else {
        traders = values.companyAuthorizers[0].directors;
      }
    }

    return traders ? renderSignatureBlocks(traders, responsibility) : null;
  }, [
    renderSignatureBlocks,
    values.authorizationMode,
    values.companyAuthorizers,
    values.individualAuthorizers,
  ]);

  const renderAuthorizedSignatureBlocks = useCallback(() => {
    const showVendorIndividual = (
      ["i1ToI2", "c1ToI2"] as Array<AuthorizationMode>
    ).includes(values.authorizationMode);
    const showVendorDirector = values.authorizationMode === "c1ToD1";
    const showVendorRepresentative = values.authorizationMode === "c1ToR1";
    const showPurchaserDirectors = (
      ["i1ToD2", "c1ToD2"] as Array<AuthorizationMode>
    ).includes(values.authorizationMode);
    const showPurchaserDirectorsAndRepresentative = (
      ["i1ToR2", "c1ToR2"] as Array<AuthorizationMode>
    ).includes(values.authorizationMode);

    if (showVendorIndividual) {
      return renderSignatureBlocks(values.authorizedIndividuals, "purchaser");
    }

    if (showVendorDirector) {
      const numOfDirectors = (values.companyAuthorizers?.[0]?.directors ?? [])
        .length;

      if (numOfDirectors > 1) {
        const directors = (
          values.companyAuthorizers[0].directors as Array<Person>
        ).filter(
          (director) =>
            values.companyAuthorizers[0].representingDirectorUUID ===
            director.uuid,
        );

        return renderSignatureBlocks(directors, "director");
      }

      return null;
    }

    if (showVendorRepresentative) {
      return renderSignatureBlocks(
        values.companyAuthorizers?.[0]?.representative
          ? [values.companyAuthorizers?.[0].representative]
          : [],
        "representative",
      );
    }

    if (showPurchaserDirectors) {
      return renderSignatureBlocks(
        values.authorizedCompanies?.[0]?.directors ?? [],
        "director",
      );
    }

    if (showPurchaserDirectorsAndRepresentative) {
      return (
        <>
          {renderSignatureBlocks(
            values.authorizedCompanies?.[0]?.directors ?? [],
            "director",
          )}
          {renderSignatureBlocks(
            values.authorizedCompanies?.[0]?.representative
              ? [values.authorizedCompanies[0]?.representative]
              : [],
            "representative",
          )}
        </>
      );
    }

    return null;
  }, [
    renderSignatureBlocks,
    values.authorizationMode,
    values.authorizedCompanies,
    values.authorizedIndividuals,
    values.companyAuthorizers,
  ]);

  return (
    <div className="a4-page mx-auto flex flex-col items-end rounded-lg font-[Arial] text-[11pt] leading-[1.5] text-black">
      {isValid ? (
        <>
          <header className="mb-[calc(3*var(--print-preview-font-size))] flex w-full flex-col gap-[calc(2*var(--print-preview-font-size))]">
            <dl
              className={`flex flex-row justify-end ${
                values.date ? "items-center" : "items-baseline"
              }`}
            >
              <dt className="with-colon">{tENCommon("date")}</dt>
              <dd
                className={`${
                  values.date
                    ? ""
                    : "w-[calc(8*var(--font-size))] max-w-full border-b-2 border-dotted border-black"
                }`}
              >
                {!!values.date && (
                  <time dateTime={formattedDate(values.date, "sv-SE") ?? ""}>
                    {formattedDate(values.date)}
                  </time>
                )}
              </dd>
            </dl>
            <dl className="flex flex-row">
              <dt className="with-colon leading-[1.5]">{tENCommon("to")}</dt>
              <dd>
                <p className="leading-[1.5]">
                  {tENCommon("theOfficerInCharge")}
                </p>
                <p className="leading-[1.5]">{tENCommon("nltaFull")}</p>
                <p className="leading-[1.5]">
                  {tENCommon("roadTransportDivision")}
                </p>
                <p className="leading-[1.5]">{tENCommon("nltaTown")}</p>
              </dd>
            </dl>
          </header>
          <div className="main-content w-full">
            <p>{tENCommon("dearSirOrMadam")}</p>
            <br />
            <p className="text-justify indent-[4.3ch] leading-[1.5]">
              {renderBody()}
            </p>
            <br />
            <p>{tENCommon("thankingInAnticipation")}</p>
            <br />
          </div>
          <footer className="w-full">
            <p>{tENCommon("yoursTruly")}</p>
            <br />
            <aside className="grid grid-cols-[auto_auto] justify-between gap-[calc(2*var(--print-preview-font-size))]">
              <div className="flex flex-col gap-4">
                {renderAuthorizerSignatureBlocks()}
              </div>
              <div className="flex flex-col gap-4">
                {renderAuthorizedSignatureBlocks()}
              </div>
            </aside>
          </footer>
        </>
      ) : (
        <p className="w-full text-center">
          {tCommon("fillInfoToViewPagePreview")}
        </p>
      )}
    </div>
  );
}

export default function NonAttachmentCertificateAuthorizationLetter({
  authorizationMode,
}: Props) {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { t: tDocGenVehicle } = useTranslation("doc-gen-vehicle-page");
  const initialValues = {
    date: Intl.DateTimeFormat("sv-SE").format(new Date()), // YYYY-MM-DD
    vehicleRegNum: "",
    vehicleMake: "",
    authorizationMode,
    individualAuthorizers: (
      ["i1ToI2", "i1ToD2", "i1ToR2"] as Array<AuthorizationMode>
    ).includes(authorizationMode)
      ? getDefaultIndividuals()
      : undefined,
    companyAuthorizers: (
      [
        "c1ToI2",
        "c1ToD1",
        "c1ToR1",
        "c1ToD2",
        "c1ToR2",
      ] as Array<AuthorizationMode>
    ).includes(authorizationMode)
      ? getDefaultCompanies({
          withDirectors: true,
          withRepresentative: authorizationMode === "c1ToR1",
        })
      : undefined,
    authorizedIndividuals: (
      ["i1ToI2", "c1ToI2"] as Array<AuthorizationMode>
    ).includes(authorizationMode)
      ? getDefaultIndividuals()
      : undefined,
    authorizedCompanies: (
      ["i1ToD2", "i1ToR2", "c1ToD2", "c1ToR2"] as Array<AuthorizationMode>
    ).includes(authorizationMode)
      ? getDefaultCompanies({
          withDirectors: true,
          withRepresentative: (
            ["i1ToR2", "c1ToR2"] as Array<AuthorizationMode>
          ).includes(authorizationMode),
        })
      : undefined,
    // date: Intl.DateTimeFormat("sv-SE").format(new Date()), // YYYY-MM-DD
    // vehicleRegNum: "1234JN12",
    // vehicleMake: "TOYOTA",
    // authorizationMode,
    // individualAuthorizers: (
    //   ["i1ToI2", "i1ToD2", "i1ToR2"] as Array<AuthorizationMode>
    // ).includes(authorizationMode)
    //   ? [
    //       {
    //         uuid: uuidv4(),
    //         traderType: "person" as const,
    //         title: "mr" as const,
    //         name: "ALAN SMITH",
    //         nationality: "mauritian" as const,
    //         id: "AS111111111111",
    //       },
    //       {
    //         uuid: uuidv4(),
    //         traderType: "person" as const,
    //         title: "mrs" as const,
    //         name: "ALICE SMITH",
    //         nationality: "mauritian" as const,
    //         id: "AS222222222222",
    //       },
    //     ]
    //   : undefined,
    // companyAuthorizers: (
    //   [
    //     "c1ToI2",
    //     "c1ToD1",
    //     "c1ToR1",
    //     "c1ToD2",
    //     "c1ToR2",
    //   ] as Array<AuthorizationMode>
    // ).includes(authorizationMode)
    //   ? [
    //       {
    //         uuid: uuidv4(),
    //         name: "ABCD LTD",
    //         traderType: "company" as const,
    //         brn: "A88888888888888",
    //         representingDirectorUUID: "dac57f52-efbc-4561-9a6f-4585b9acb3de",
    //         directors: [
    //           {
    //             uuid: "dac57f52-efbc-4561-9a6f-4585b9acb3de",
    //             title: "mr" as const,
    //             name: "CARL CRUISE",
    //             nationality: "mauritian" as const,
    //             id: "C3333333333333",
    //           },
    //           {
    //             uuid: uuidv4(),
    //             title: "miss" as const,
    //             name: "CHRISTY JAMES",
    //             nationality: "mauritian" as const,
    //             id: "C444444444444",
    //           },
    //         ],
    //         representative:
    //           authorizationMode === "c1ToR1"
    //             ? {
    //                 uuid: uuidv4(),
    //                 title: "mr" as const,
    //                 name: "DAN ROE",
    //                 nationality: "mauritian" as const,
    //                 id: "D55555555555",
    //                 role: "Manager",
    //               }
    //             : undefined,
    //       },
    //     ]
    //   : undefined,
    // authorizedIndividuals: (
    //   ["i1ToI2", "c1ToI2"] as Array<AuthorizationMode>
    // ).includes(authorizationMode)
    //   ? [
    //       {
    //         uuid: uuidv4(),
    //         traderType: "person" as const,
    //         title: "mr" as const,
    //         name: "BOB MARLEY",
    //         nationality: "mauritian" as const,
    //         id: "BM333333333333333",
    //       },
    //     ]
    //   : undefined,
    // authorizedCompanies: (
    //   ["i1ToD2", "i1ToR2", "c1ToD2", "c1ToR2"] as Array<AuthorizationMode>
    // ).includes(authorizationMode)
    //   ? [
    //       {
    //         uuid: uuidv4(),
    //         name: "WXYZ LTD",
    //         traderType: "company" as const,
    //         brn: "W9999999999999",
    //         representingDirectorUUID: "e2356334-1385-4b24-8f47-1c42d8b97809",
    //         directors: [
    //           {
    //             uuid: uuidv4(),
    //             title: "mr" as const,
    //             name: "EARL PITT",
    //             nationality: "mauritian" as const,
    //             id: "E66666666666",
    //           },
    //           {
    //             uuid: "e2356334-1385-4b24-8f47-1c42d8b97809",
    //             title: "miss" as const,
    //             name: "EMMA CHAMBERS",
    //             nationality: "mauritian" as const,
    //             id: "E77777777777",
    //           },
    //         ],
    //         representative: (
    //           ["i1ToR2", "c1ToR2"] as Array<AuthorizationMode>
    //         ).includes(authorizationMode)
    //           ? {
    //               uuid: uuidv4(),
    //               title: "mrs" as const,
    //               name: "FIONA LEE",
    //               nationality: "mauritian" as const,
    //               id: "F888888888888",
    //               role: "HR Manager",
    //             }
    //           : undefined,
    //       },
    //     ]
    //   : undefined,
  };

  const baseTraderSchema = {
    uuid: string().uuid(),
    name: string({ required_error: tCommon("errors.required") })
      .trim()
      .nonempty(tCommon("errors.required")),
  };
  const personSchema = object({
    ...baseTraderSchema,
    traderType: literal("person"),
    title: _enum(["mr", "mrs", "miss"]),
    nationality: _enum(["mauritian", "nonMauritian"]),
    id: string({ required_error: tCommon("errors.required") })
      .trim()
      .nonempty(tCommon("errors.required")),
  });
  const companySchema = object({
    ...baseTraderSchema,
    traderType: literal("company"),
    brn: string({ required_error: tCommon("errors.required") })
      .trim()
      .nonempty(tCommon("errors.required")),
    representingDirectorUUID: string().optional(),
    directors: object({
      uuid: string().uuid(),
      title: _enum(["mr", "mrs", "miss"]),
      name: string({ required_error: tCommon("errors.required") })
        .trim()
        .nonempty(tCommon("errors.required")),
      nationality: _enum(["mauritian", "nonMauritian"]),
      id: string({ required_error: tCommon("errors.required") })
        .trim()
        .nonempty(tCommon("errors.required")),
    })
      .array()
      .min(1, tCommon("errors.arrayMin", { count: 1 }))
      .optional(),
    representative: object({
      uuid: string().uuid(),
      title: _enum(["mr", "mrs", "miss"]),
      name: string({ required_error: tCommon("errors.required") })
        .trim()
        .nonempty(tCommon("errors.required")),
      nationality: _enum(["mauritian", "nonMauritian"]),
      id: string({ required_error: tCommon("errors.required") })
        .trim()
        .nonempty(tCommon("errors.required")),
      role: string({ required_error: tCommon("errors.required") })
        .trim()
        .nonempty(tCommon("errors.required")),
    }).optional(),
  });

  const schema = object({
    date: z.coerce
      .date({
        errorMap: (issue, { defaultError }) => ({
          message:
            issue.code === "invalid_date"
              ? tCommon("errors.required")
              : defaultError,
        }),
      })
      .optional(),
    vehicleRegNum: string({
      required_error: tCommon("errors.required"),
    }).trim(),
    vehicleMake: string({
      required_error: tCommon("errors.required"),
    }).trim(),
    authorizationMode: _enum(authorizationModes),
    individualAuthorizers: personSchema
      .array()
      .min(1, tCommon("errors.arrayMin", { count: 1 }))
      .optional(),
    companyAuthorizers: companySchema
      .array()
      .max(1, tCommon("errors.arrayMax", { count: 1 }))
      .optional(),
    authorizedIndividuals: personSchema
      .array()
      .min(1, tCommon("errors.arrayMin", { count: 1 }))
      .optional(),
    authorizedCompanies: companySchema
      .array()
      .max(1, tCommon("errors.arrayMax", { count: 1 }))
      .optional(),
  });

  type Schema = Omit<TypeOf<typeof schema>, "date"> & {
    date: string | number | Date;
  };

  return (
    <PageWrapper<Schema>
      pageTitle={tDocGenVehicle(
        "nonAttachmentCertificateAuthorizationLetter.title",
      )}
      initialValues={initialValues}
      schema={schema}
      Fields={Fields}
      Preview={Preview}
    />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    ...authorizationModes.map((mode) => ({
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
  let authorizationMode: AuthorizationMode = "i1ToI2";
  const modeFromSlug = params?.slug?.[0];

  if (modeFromSlug) {
    const isAuthorizationModeValid = authorizationModes.includes(
      modeFromSlug as AuthorizationMode,
    );

    if (isAuthorizationModeValid) {
      authorizationMode = modeFromSlug as AuthorizationMode;
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
      authorizationMode,
    },
  };
};
