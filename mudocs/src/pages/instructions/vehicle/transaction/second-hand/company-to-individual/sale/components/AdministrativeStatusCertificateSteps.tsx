import { useCallback } from "react";
import { useFormikContext } from "formik";
import Checkbox from "@/components/Checkbox/Checkbox";
import TechnicalTerm from "@/components/TechnicalTerm/TechnicalTerm";
import Abbr from "@/components/Abbr/Abbr";
import TypedTrans from "@/components/TypedTrans/TypedTrans";
import { retrieveDirectorRequiredI18nText } from "../../c2i-utils";
import { InitialValues } from "../../types";
import styles from "../../../styles.module.css";

function ConditionalInstructions1() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByCompany =
    values.administrativeStatusCertificateIssuer === "company";
  const isIssuedByCompanyAndPurchaser =
    values.administrativeStatusCertificateIssuer === "companyAndPurchaser";
  const directorProofIsRequired =
    values.vendorHasStamp === "no" ||
    values.isVehicleRegistrationBookValid === "no";
  const whetherDirectorIsRequired = retrieveDirectorRequiredI18nText(values);

  const CompanyInstructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
          i18nKey="administrativeStatusCertificate.conditionalInstructions1.description"
          components={{
            p: <p className="mt-4" />,
            NLTAAbbr: <Abbr name="nlta" />,
          }}
        />
        <div className="mb-3 mt-2 flex flex-col gap-3">
          <div className="flex gap-2">
            <Checkbox
              id="sale-administrative-status-certificate-conditional-1-requirement-1"
              name="administrative-status-certificate"
              value="conditional-1-requirement-1"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions1.issuedByCompany.requirement1"
              components={{
                label: (
                  <label
                    htmlFor="sale-administrative-status-certificate-conditional-1-requirement-1"
                    className="hover:cursor-pointer"
                  />
                ),
                DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-administrative-status-certificate-conditional-1-requirement-2"
              name="administrative-status-certificate"
              value="conditional-1-requirement-2"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions1.issuedByCompany.requirement2"
              components={{
                label: (
                  <label
                    htmlFor="sale-administrative-status-certificate-conditional-1-requirement-2"
                    className="hover:cursor-pointer"
                  />
                ),
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-administrative-status-certificate-conditional-1-requirement-3"
              name="administrative-status-certificate"
              value="conditional-1-requirement-3"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions1.issuedByCompany.requirement3"
              params={{
                numOfDirectors: values.numOfDirectors,
              }}
              components={{
                label: (
                  <label
                    htmlFor="sale-administrative-status-certificate-conditional-1-requirement-3"
                    className="hover:cursor-pointer"
                  />
                ),
                ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-administrative-status-certificate-conditional-1-requirement-4"
              name="administrative-status-certificate"
              value="conditional-1-requirement-4"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions1.issuedByCompany.requirement4"
              components={{
                label: (
                  <label
                    htmlFor="sale-administrative-status-certificate-conditional-1-requirement-4"
                    className="hover:cursor-pointer"
                  />
                ),
                VehicleRegistrationBook: (
                  <TechnicalTerm name="vehicleRegistrationBook" />
                ),
              }}
            />
          </div>
          {directorProofIsRequired && (
            <div className="flex gap-2">
              <Checkbox
                id="sale-administrative-status-certificate-conditional-1-director-proof-requirement"
                name="administrative-status-certificate"
                value="conditional-1-director-proof-requirement"
                validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
                className={`${styles.checkbox} mt-2`}
              />
              <TypedTrans
                ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
                i18nKey="administrativeStatusCertificate.conditionalInstructions1.issuedByCompany.directorProofRequirement"
                params={{
                  numOfDirectors: values.numOfDirectors,
                  whetherDirectorIsRequired,
                }}
                components={{
                  label: (
                    <label
                      htmlFor="sale-administrative-status-certificate-conditional-1-director-proof-requirement"
                      className="hover:cursor-pointer"
                    />
                  ),
                }}
              />
            </div>
          )}
        </div>
      </>
    ),
    [directorProofIsRequired, values.numOfDirectors, whetherDirectorIsRequired],
  );

  const CompanyAndPurchaserInstructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
          i18nKey="administrativeStatusCertificate.conditionalInstructions1.description"
          components={{
            p: <p className="mt-4" />,
            NLTAAbbr: <Abbr name="nlta" />,
          }}
        />
        <div className="mb-3 mt-2 flex flex-col gap-3">
          <div className="flex gap-2">
            <Checkbox
              id="sale-administrative-status-certificate-conditional-1-requirement-1"
              name="administrative-status-certificate"
              value="conditional-1-requirement-1"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions1.issuedByCompanyAndPurchaser.requirement1"
              components={{
                label: (
                  <label
                    htmlFor="sale-administrative-status-certificate-conditional-1-requirement-1"
                    className="hover:cursor-pointer"
                  />
                ),
                DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-administrative-status-certificate-conditional-1-requirement-2"
              name="administrative-status-certificate"
              value="conditional-1-requirement-2"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions1.issuedByCompanyAndPurchaser.requirement2"
              components={{
                label: (
                  <label
                    htmlFor="sale-administrative-status-certificate-conditional-1-requirement-2"
                    className="hover:cursor-pointer"
                  />
                ),
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-administrative-status-certificate-conditional-1-requirement-3"
              name="administrative-status-certificate"
              value="conditional-1-requirement-3"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions1.issuedByCompanyAndPurchaser.requirement3"
              params={{
                numOfDirectors: values.numOfDirectors,
              }}
              components={{
                label: (
                  <label
                    htmlFor="sale-administrative-status-certificate-conditional-1-requirement-3"
                    className="hover:cursor-pointer"
                  />
                ),
                ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-administrative-status-certificate-conditional-1-requirement-4"
              name="administrative-status-certificate"
              value="conditional-1-requirement-4"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions1.issuedByCompanyAndPurchaser.requirement4"
              components={{
                label: (
                  <label
                    htmlFor="sale-administrative-status-certificate-conditional-1-requirement-4"
                    className="hover:cursor-pointer"
                  />
                ),
                VehicleRegistrationBook: (
                  <TechnicalTerm name="vehicleRegistrationBook" />
                ),
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-administrative-status-certificate-conditional-1-requirement-5"
              name="administrative-status-certificate"
              value="conditional-1-requirement-5"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions1.issuedByCompanyAndPurchaser.requirement5"
              components={{
                label: (
                  <label
                    htmlFor="sale-administrative-status-certificate-conditional-1-requirement-5"
                    className="hover:cursor-pointer"
                  />
                ),
              }}
            />
          </div>
          {directorProofIsRequired && (
            <div className="flex gap-2">
              <Checkbox
                id="sale-administrative-status-certificate-conditional-1-director-proof-requirement"
                name="administrative-status-certificate"
                value="conditional-1-director-proof-requirement"
                validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
                className={`${styles.checkbox} mt-2`}
              />
              <TypedTrans
                ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
                i18nKey="administrativeStatusCertificate.conditionalInstructions1.issuedByCompanyAndPurchaser.directorProofRequirement"
                params={{
                  numOfDirectors: values.numOfDirectors,
                  whetherDirectorIsRequired,
                }}
                components={{
                  label: (
                    <label
                      htmlFor="sale-administrative-status-certificate-conditional-1-director-proof-requirement"
                      className="hover:cursor-pointer"
                    />
                  ),
                }}
              />
            </div>
          )}
          <div className="flex gap-2">
            <Checkbox
              id="sale-administrative-status-certificate-conditional-1-requirement-6"
              name="administrative-status-certificate"
              value="conditional-1-requirement-6"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions1.issuedByCompanyAndPurchaser.requirement6"
              params={{ numOfPurchasers: values.numOfPurchasers }}
              components={{
                label: (
                  <label
                    htmlFor="sale-administrative-status-certificate-conditional-1-requirement-6"
                    className="hover:cursor-pointer"
                  />
                ),
                DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
              }}
            />
          </div>
        </div>
      </>
    ),
    [
      directorProofIsRequired,
      values.numOfDirectors,
      values.numOfPurchasers,
      whetherDirectorIsRequired,
    ],
  );

  if (isIssuedByCompany) return <CompanyInstructions />;
  if (isIssuedByCompanyAndPurchaser) return <CompanyAndPurchaserInstructions />;
  return null;
}

function ConditionalInstructions2() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByCompany =
    values.administrativeStatusCertificateIssuer === "company";
  const isIssuedByCompanyAndPurchaser =
    values.administrativeStatusCertificateIssuer === "companyAndPurchaser";
  const directorProofIsRequired =
    values.vendorHasStamp === "no" ||
    values.isVehicleRegistrationBookValid === "no";
  const whetherDirectorIsRequired = retrieveDirectorRequiredI18nText(values);

  const CompanyInstructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
          i18nKey="administrativeStatusCertificate.conditionalInstructions2.description"
          components={{
            p: <p className="mt-4" />,
            NLTAAbbr: <Abbr name="nlta" />,
          }}
        />
        <ul>
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="administrativeStatusCertificate.conditionalInstructions2.issuedByCompany.item1"
            components={{
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="administrativeStatusCertificate.conditionalInstructions2.issuedByCompany.item2"
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="administrativeStatusCertificate.conditionalInstructions2.issuedByCompany.item3"
            params={{
              numOfDirectors: values.numOfDirectors,
              whetherDirectorIsRequired,
            }}
            components={{
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="administrativeStatusCertificate.conditionalInstructions2.issuedByCompany.item4"
            components={{
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="administrativeStatusCertificate.conditionalInstructions2.issuedByCompany.item5"
            components={{
              AdministrativeStatusCertificate: (
                <TechnicalTerm name="administrativeStatusCertificate" />
              ),
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="administrativeStatusCertificate.conditionalInstructions2.issuedByCompany.item6"
            components={{
              AdministrativeStatusCertificate: (
                <TechnicalTerm name="administrativeStatusCertificate" />
              ),
            }}
          />
          {directorProofIsRequired && (
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions2.issuedByCompany.directorProofItem"
              params={{
                numOfDirectors: values.numOfDirectors,
                whetherDirectorIsRequired,
              }}
            />
          )}
        </ul>
      </>
    ),
    [directorProofIsRequired, values.numOfDirectors, whetherDirectorIsRequired],
  );

  const CompanyAndPurchaserInstructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
          i18nKey="administrativeStatusCertificate.conditionalInstructions2.description"
          components={{
            p: <p className="mt-4" />,
            NLTAAbbr: <Abbr name="nlta" />,
          }}
        />
        <ul>
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="administrativeStatusCertificate.conditionalInstructions2.issuedByCompanyAndPurchaser.item1"
            components={{
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="administrativeStatusCertificate.conditionalInstructions2.issuedByCompanyAndPurchaser.item2"
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="administrativeStatusCertificate.conditionalInstructions2.issuedByCompanyAndPurchaser.item3"
            params={{
              numOfDirectors: values.numOfDirectors,
              whetherDirectorIsRequired,
            }}
            components={{
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="administrativeStatusCertificate.conditionalInstructions2.issuedByCompanyAndPurchaser.item4"
            components={{
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="administrativeStatusCertificate.conditionalInstructions2.issuedByCompanyAndPurchaser.item5"
            components={{
              AdministrativeStatusCertificate: (
                <TechnicalTerm name="administrativeStatusCertificate" />
              ),
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="administrativeStatusCertificate.conditionalInstructions2.issuedByCompanyAndPurchaser.item6"
            components={{
              AdministrativeStatusCertificate: (
                <TechnicalTerm name="administrativeStatusCertificate" />
              ),
            }}
          />
          {directorProofIsRequired && (
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions2.issuedByCompanyAndPurchaser.directorProofItem"
              params={{
                numOfDirectors: values.numOfDirectors,
                whetherDirectorIsRequired,
              }}
            />
          )}
        </ul>
      </>
    ),
    [directorProofIsRequired, values.numOfDirectors, whetherDirectorIsRequired],
  );

  if (isIssuedByCompany) return <CompanyInstructions />;
  if (isIssuedByCompanyAndPurchaser) return <CompanyAndPurchaserInstructions />;
  return null;
}

function ConditionalInstructions3() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByCompany =
    values.administrativeStatusCertificateIssuer === "company";
  const isIssuedByCompanyAndPurchaser =
    values.administrativeStatusCertificateIssuer === "companyAndPurchaser";
  const directorProofIsRequired =
    values.vendorHasStamp === "no" ||
    values.isVehicleRegistrationBookValid === "no";
  const whetherDirectorIsRequired = retrieveDirectorRequiredI18nText(values);

  const CompanyInstructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
          i18nKey="administrativeStatusCertificate.conditionalInstructions3.issuedByCompany.description"
          params={{ numOfPurchasers: values.numOfPurchasers }}
          components={{
            p: <p className="mt-4" />,
            DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
          }}
        />
        <div className="mb-3 mt-2 flex flex-col gap-3">
          <div className="flex gap-2">
            <Checkbox
              id="sale-administrative-status-certificate-conditional-3-step-1"
              name="administrative-status-certificate"
              value="conditional-3-step-1"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions3.issuedByCompany.step1"
              params={{ numOfPurchasers: values.numOfPurchasers }}
              components={{
                label: (
                  <label
                    htmlFor="sale-administrative-status-certificate-conditional-3-step-1"
                    className="hover:cursor-pointer"
                  />
                ),
                DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-administrative-status-certificate-conditional-3-step-2"
              name="administrative-status-certificate"
              value="conditional-3-step-2"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions3.issuedByCompany.step2"
              params={{ numOfPurchasers: values.numOfPurchasers }}
              components={{
                label: (
                  <label
                    htmlFor="sale-administrative-status-certificate-conditional-3-step-2"
                    className="hover:cursor-pointer"
                  />
                ),
                DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-administrative-status-certificate-conditional-3-step-3"
              name="administrative-status-certificate"
              value="conditional-3-step-3"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions3.issuedByCompany.step3"
              params={{ numOfPurchasers: values.numOfPurchasers }}
              components={{
                label: (
                  <label
                    htmlFor="sale-administrative-status-certificate-conditional-3-step-3"
                    className="hover:cursor-pointer"
                  />
                ),
                VehicleRegistrationBook: (
                  <TechnicalTerm name="vehicleRegistrationBook" />
                ),
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-administrative-status-certificate-conditional-3-step-4"
              name="administrative-status-certificate"
              value="conditional-3-step-4"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions3.issuedByCompany.step4"
              params={{ numOfPurchasers: values.numOfPurchasers }}
              components={{
                label: (
                  <label
                    htmlFor="sale-administrative-status-certificate-conditional-3-step-4"
                    className="hover:cursor-pointer"
                  />
                ),
                AdministrativeStatusCertificate: (
                  <TechnicalTerm name="administrativeStatusCertificate" />
                ),
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-administrative-status-certificate-conditional-3-step-5"
              name="administrative-status-certificate"
              value="conditional-3-step-5"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions3.issuedByCompany.step5"
              params={{
                numOfDirectors: values.numOfDirectors,
              }}
              components={{
                label: (
                  <label
                    htmlFor="sale-administrative-status-certificate-conditional-3-step-5"
                    className="hover:cursor-pointer"
                  />
                ),
                ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-administrative-status-certificate-conditional-3-step-6"
              name="administrative-status-certificate"
              value="conditional-3-step-6"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions3.issuedByCompany.step6"
              components={{
                label: (
                  <label
                    htmlFor="sale-administrative-status-certificate-conditional-3-step-6"
                    className="hover:cursor-pointer"
                  />
                ),
                AdministrativeStatusCertificate: (
                  <TechnicalTerm name="administrativeStatusCertificate" />
                ),
              }}
            />
          </div>
          {directorProofIsRequired && (
            <div className="flex gap-2">
              <Checkbox
                id="sale-administrative-status-certificate-conditional-3-director-proof-step"
                name="administrative-status-certificate"
                value="conditional-3-director-proof-step"
                validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
                className={`${styles.checkbox} mt-2`}
              />
              <TypedTrans
                ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
                i18nKey="administrativeStatusCertificate.conditionalInstructions3.issuedByCompany.directorProofStep"
                params={{
                  numOfDirectors: values.numOfDirectors,
                  whetherDirectorIsRequired,
                }}
                components={{
                  label: (
                    <label
                      htmlFor="sale-administrative-status-certificate-conditional-3-director-proof-step"
                      className="hover:cursor-pointer"
                    />
                  ),
                }}
              />
            </div>
          )}
        </div>
      </>
    ),
    [
      directorProofIsRequired,
      values.numOfDirectors,
      values.numOfPurchasers,
      whetherDirectorIsRequired,
    ],
  );

  const CompanyAndPurchaserInstructions = useCallback(
    () => (
      <div className="mb-3 mt-2 flex flex-col gap-3">
        <div className="flex gap-2">
          <Checkbox
            id="sale-administrative-status-certificate-conditional-3-step-1"
            name="administrative-status-certificate"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="administrativeStatusCertificate.conditionalInstructions3.issuedByCompanyAndPurchaser.step1"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              label: (
                <label
                  htmlFor="sale-administrative-status-certificate-conditional-3-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-administrative-status-certificate-conditional-3-step-2"
            name="administrative-status-certificate"
            value="conditional-3-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="administrativeStatusCertificate.conditionalInstructions3.issuedByCompanyAndPurchaser.step2"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              label: (
                <label
                  htmlFor="sale-administrative-status-certificate-conditional-3-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-administrative-status-certificate-conditional-3-step-3"
            name="administrative-status-certificate"
            value="conditional-3-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="administrativeStatusCertificate.conditionalInstructions3.issuedByCompanyAndPurchaser.step3"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              label: (
                <label
                  htmlFor="sale-administrative-status-certificate-conditional-3-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-administrative-status-certificate-conditional-3-step-4"
            name="administrative-status-certificate"
            value="conditional-3-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="administrativeStatusCertificate.conditionalInstructions3.issuedByCompanyAndPurchaser.step4"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              label: (
                <label
                  htmlFor="sale-administrative-status-certificate-conditional-3-step-4"
                  className="hover:cursor-pointer"
                />
              ),
              AdministrativeStatusCertificate: (
                <TechnicalTerm name="administrativeStatusCertificate" />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-administrative-status-certificate-conditional-3-step-5"
            name="administrative-status-certificate"
            value="conditional-3-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="administrativeStatusCertificate.conditionalInstructions3.issuedByCompanyAndPurchaser.step5"
            params={{
              numOfDirectors: values.numOfDirectors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-administrative-status-certificate-conditional-3-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-administrative-status-certificate-conditional-3-step-6"
            name="administrative-status-certificate"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
            i18nKey="administrativeStatusCertificate.conditionalInstructions3.issuedByCompanyAndPurchaser.step6"
            components={{
              label: (
                <label
                  htmlFor="sale-administrative-status-certificate-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              AdministrativeStatusCertificate: (
                <TechnicalTerm name="administrativeStatusCertificate" />
              ),
            }}
          />
        </div>
        {directorProofIsRequired && (
          <div className="flex gap-2">
            <Checkbox
              id="sale-administrative-status-certificate-conditional-3-director-proof-step"
              name="administrative-status-certificate"
              value="conditional-3-director-proof-step"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2i-sale-page"
              i18nKey="administrativeStatusCertificate.conditionalInstructions3.issuedByCompanyAndPurchaser.directorProofStep"
              params={{
                numOfDirectors: values.numOfDirectors,
                whetherDirectorIsRequired,
              }}
              components={{
                label: (
                  <label
                    htmlFor="sale-administrative-status-certificate-conditional-3-director-proof-step"
                    className="hover:cursor-pointer"
                  />
                ),
              }}
            />
          </div>
        )}
      </div>
    ),
    [
      directorProofIsRequired,
      values.numOfDirectors,
      values.numOfPurchasers,
      whetherDirectorIsRequired,
    ],
  );

  if (isIssuedByCompany) return <CompanyInstructions />;
  if (isIssuedByCompanyAndPurchaser) return <CompanyAndPurchaserInstructions />;
  return null;
}

export function AdministrativeStatusCertificateSteps() {
  return (
    <>
      <ConditionalInstructions1 />
      <ConditionalInstructions2 />
      <ConditionalInstructions3 />
    </>
  );
}
