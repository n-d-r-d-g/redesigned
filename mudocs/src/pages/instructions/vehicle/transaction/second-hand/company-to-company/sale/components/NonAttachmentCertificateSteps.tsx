import { useCallback } from "react";
import { useFormikContext } from "formik";
import Checkbox from "@/components/Checkbox/Checkbox";
import TechnicalTerm from "@/components/TechnicalTerm/TechnicalTerm";
import Abbr from "@/components/Abbr/Abbr";
import TypedTrans from "@/components/TypedTrans/TypedTrans";
import { retrieveDirectorRequiredI18nText } from "../../c2c-utils";
import { InitialValues } from "../../types";
import styles from "../../../styles.module.css";

function ConditionalInstructions1() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByCompany1 = values.nonAttachmentIssuer === "company1";
  const isIssuedByCompany1AndCompany2 =
    values.nonAttachmentIssuer === "company1AndCompany2";
  const directorProofIsRequired =
    values.vendorHasStamp === "no" ||
    values.isVehicleRegistrationBookValid === "no";
  const whetherDirectorIsRequired = retrieveDirectorRequiredI18nText(values);

  const Company1Instructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
          i18nKey="nonAttachment.conditionalInstructions1.description"
          components={{
            p: <p className="mt-4" />,
            NLTAAbbr: <Abbr name="nlta" />,
          }}
        />
        <div className="mb-3 mt-2 flex flex-col gap-3">
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-1-requirement-1"
              name="non-attachment"
              value="conditional-1-requirement-1"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany1.requirement1"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-1"
                    className="hover:cursor-pointer"
                  />
                ),
                DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-1-requirement-2"
              name="non-attachment"
              value="conditional-1-requirement-2"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany1.requirement2"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-2"
                    className="hover:cursor-pointer"
                  />
                ),
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-1-requirement-3"
              name="non-attachment"
              value="conditional-1-requirement-3"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany1.requirement3"
              params={{
                numOfCompany1Directors: values.numOfCompany1Directors,
              }}
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-3"
                    className="hover:cursor-pointer"
                  />
                ),
                ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-1-requirement-4"
              name="non-attachment"
              value="conditional-1-requirement-4"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany1.requirement4"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-4"
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
              id="sale-non-attachment-conditional-1-requirement-5"
              name="non-attachment"
              value="conditional-1-requirement-5"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany1.requirement5"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-5"
                    className="hover:cursor-pointer"
                  />
                ),
              }}
            />
          </div>
          {directorProofIsRequired && (
            <div className="flex gap-2">
              <Checkbox
                id="sale-non-attachment-conditional-1-director-proof-requirement"
                name="non-attachment"
                value="conditional-1-director-proof-requirement"
                validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
                className={`${styles.checkbox} mt-2`}
              />
              <TypedTrans
                ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
                i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany1.directorProofRequirement"
                params={{
                  numOfCompany1Directors: values.numOfCompany1Directors,
                  whetherDirectorIsRequired,
                }}
                components={{
                  label: (
                    <label
                      htmlFor="sale-non-attachment-conditional-1-director-proof-requirement"
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
      values.numOfCompany1Directors,
      whetherDirectorIsRequired,
    ],
  );

  const Company1AndCompany2Instructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
          i18nKey="nonAttachment.conditionalInstructions1.description"
          components={{
            p: <p className="mt-4" />,
            NLTAAbbr: <Abbr name="nlta" />,
          }}
        />
        <div className="mb-3 mt-2 flex flex-col gap-3">
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-1-requirement-1"
              name="non-attachment"
              value="conditional-1-requirement-1"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany1AndCompany2.requirement1"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-1"
                    className="hover:cursor-pointer"
                  />
                ),
                DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-1-requirement-2"
              name="non-attachment"
              value="conditional-1-requirement-2"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany1AndCompany2.requirement2"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-2"
                    className="hover:cursor-pointer"
                  />
                ),
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-1-requirement-3"
              name="non-attachment"
              value="conditional-1-requirement-3"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany1AndCompany2.requirement3"
              params={{
                numOfCompany1Directors: values.numOfCompany1Directors,
              }}
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-3"
                    className="hover:cursor-pointer"
                  />
                ),
                ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-1-requirement-4"
              name="non-attachment"
              value="conditional-1-requirement-4"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany1AndCompany2.requirement4"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-4"
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
              id="sale-non-attachment-conditional-1-requirement-5"
              name="non-attachment"
              value="conditional-1-requirement-5"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany1AndCompany2.requirement5"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-5"
                    className="hover:cursor-pointer"
                  />
                ),
              }}
            />
          </div>
          {directorProofIsRequired && (
            <div className="flex gap-2">
              <Checkbox
                id="sale-non-attachment-conditional-1-director-proof-requirement"
                name="non-attachment"
                value="conditional-1-director-proof-requirement"
                validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
                className={`${styles.checkbox} mt-2`}
              />
              <TypedTrans
                ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
                i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany1AndCompany2.directorProofRequirement"
                params={{
                  numOfCompany1Directors: values.numOfCompany1Directors,
                  whetherDirectorIsRequired,
                }}
                components={{
                  label: (
                    <label
                      htmlFor="sale-non-attachment-conditional-1-director-proof-requirement"
                      className="hover:cursor-pointer"
                    />
                  ),
                }}
              />
            </div>
          )}
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-1-requirement-6"
              name="non-attachment"
              value="conditional-1-requirement-6"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany1AndCompany2.requirement6"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-6"
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
      values.numOfCompany1Directors,
      whetherDirectorIsRequired,
    ],
  );

  if (isIssuedByCompany1) return <Company1Instructions />;
  if (isIssuedByCompany1AndCompany2) return <Company1AndCompany2Instructions />;
  return null;
}

function ConditionalInstructions2() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByCompany1 = values.nonAttachmentIssuer === "company1";
  const isIssuedByCompany1AndCompany2 =
    values.nonAttachmentIssuer === "company1AndCompany2";
  const directorProofIsRequired =
    values.vendorHasStamp === "no" ||
    values.isVehicleRegistrationBookValid === "no";
  const whetherDirectorIsRequired = retrieveDirectorRequiredI18nText(values);

  const Company1Instructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
          i18nKey="nonAttachment.conditionalInstructions2.description"
          components={{
            p: <p className="mt-4" />,
            NLTAAbbr: <Abbr name="nlta" />,
          }}
        />
        <ul>
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany1.item1"
            components={{
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany1.item2"
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany1.item3"
            params={{
              numOfCompany1Directors: values.numOfCompany1Directors,
            }}
            components={{
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany1.item4"
            components={{
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany1.item5"
            components={{
              NonAttachmentCertificate: (
                <TechnicalTerm name="nonAttachmentCertificate" />
              ),
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany1.item5"
            components={{
              NonAttachmentCertificate: (
                <TechnicalTerm name="nonAttachmentCertificate" />
              ),
            }}
          />
          {directorProofIsRequired && (
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany1.directorProofItem"
              params={{
                numOfCompany1Directors: values.numOfCompany1Directors,
                whetherDirectorIsRequired,
              }}
            />
          )}
        </ul>
      </>
    ),
    [
      directorProofIsRequired,
      values.numOfCompany1Directors,
      whetherDirectorIsRequired,
    ],
  );

  const Company1AndCompany2Instructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
          i18nKey="nonAttachment.conditionalInstructions2.description"
          components={{
            p: <p className="mt-4" />,
            NLTAAbbr: <Abbr name="nlta" />,
          }}
        />
        <ul>
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany1AndCompany2.item1"
            components={{
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany1AndCompany2.item2"
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany1AndCompany2.item3"
            params={{
              numOfCompany1Directors: values.numOfCompany1Directors,
            }}
            components={{
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany1AndCompany2.item4"
            components={{
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany1AndCompany2.item5"
            components={{
              NonAttachmentCertificate: (
                <TechnicalTerm name="nonAttachmentCertificate" />
              ),
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany1AndCompany2.item6"
            components={{
              NonAttachmentCertificate: (
                <TechnicalTerm name="nonAttachmentCertificate" />
              ),
            }}
          />
          {directorProofIsRequired && (
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany1AndCompany2.directorProofItem"
              params={{
                numOfCompany1Directors: values.numOfCompany1Directors,
                whetherDirectorIsRequired,
              }}
            />
          )}
        </ul>
      </>
    ),
    [
      directorProofIsRequired,
      values.numOfCompany1Directors,
      whetherDirectorIsRequired,
    ],
  );

  if (isIssuedByCompany1) return <Company1Instructions />;
  if (isIssuedByCompany1AndCompany2) return <Company1AndCompany2Instructions />;
  return null;
}

function ConditionalInstructions3() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByCompany1 = values.nonAttachmentIssuer === "company1";
  const isIssuedByCompany1AndCompany2 =
    values.nonAttachmentIssuer === "company1AndCompany2";
  const directorProofIsRequired =
    values.vendorHasStamp === "no" ||
    values.isVehicleRegistrationBookValid === "no";
  const whetherDirectorIsRequired = retrieveDirectorRequiredI18nText(values);

  const Company1Instructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
          i18nKey="nonAttachment.conditionalInstructions3.issuedByCompany1.description"
          components={{
            p: <p className="mt-4" />,
            DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
          }}
        />
        <div className="mb-3 mt-2 flex flex-col gap-3">
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-3-step-1"
              name="non-attachment"
              value="conditional-3-step-1"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByCompany1.step1"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-3-step-1"
                    className="hover:cursor-pointer"
                  />
                ),
                DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-3-step-2"
              name="non-attachment"
              value="conditional-3-step-2"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByCompany1.step2"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-3-step-2"
                    className="hover:cursor-pointer"
                  />
                ),
                DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-3-step-3"
              name="non-attachment"
              value="conditional-3-step-3"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByCompany1.step3"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-3-step-3"
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
              id="sale-non-attachment-conditional-3-step-4"
              name="non-attachment"
              value="conditional-3-step-4"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByCompany1.step4"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-3-step-4"
                    className="hover:cursor-pointer"
                  />
                ),
                NonAttachmentCertificate: (
                  <TechnicalTerm name="nonAttachmentCertificate" />
                ),
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-3-step-5"
              name="non-attachment"
              value="conditional-3-step-5"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByCompany1.step5"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-3-step-5"
                    className="hover:cursor-pointer"
                  />
                ),
                NonAttachmentCertificate: (
                  <TechnicalTerm name="nonAttachmentCertificate" />
                ),
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-3-step-6"
              name="non-attachment"
              value="conditional-3-step-6"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByCompany1.step6"
              params={{
                numOfCompany1Directors: values.numOfCompany1Directors,
              }}
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-3-step-6"
                    className="hover:cursor-pointer"
                  />
                ),
                ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
              }}
            />
          </div>
          {directorProofIsRequired && (
            <div className="flex gap-2">
              <Checkbox
                id="sale-non-attachment-conditional-3-director-proof-step"
                name="non-attachment"
                value="conditional-3-director-proof-step"
                validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
                className={`${styles.checkbox} mt-2`}
              />
              <TypedTrans
                ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
                i18nKey="nonAttachment.conditionalInstructions3.issuedByCompany1.directorProofStep"
                params={{
                  numOfCompany1Directors: values.numOfCompany1Directors,
                  whetherDirectorIsRequired,
                }}
                components={{
                  label: (
                    <label
                      htmlFor="sale-non-attachment-conditional-3-director-proof-step"
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
      values.numOfCompany1Directors,
      whetherDirectorIsRequired,
    ],
  );

  const Company1AndCompany2Instructions = useCallback(
    () => (
      <div className="mb-3 mt-2 flex flex-col gap-3">
        <div className="flex gap-2">
          <Checkbox
            id="sale-non-attachment-conditional-3-step-1"
            name="non-attachment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByCompany1AndCompany2.step1"
            components={{
              label: (
                <label
                  htmlFor="sale-non-attachment-conditional-3-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-non-attachment-conditional-3-step-2"
            name="non-attachment"
            value="conditional-3-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByCompany1AndCompany2.step2"
            components={{
              label: (
                <label
                  htmlFor="sale-non-attachment-conditional-3-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-non-attachment-conditional-3-step-3"
            name="non-attachment"
            value="conditional-3-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByCompany1AndCompany2.step3"
            components={{
              label: (
                <label
                  htmlFor="sale-non-attachment-conditional-3-step-3"
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
            id="sale-non-attachment-conditional-3-step-4"
            name="non-attachment"
            value="conditional-3-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByCompany1AndCompany2.step4"
            components={{
              label: (
                <label
                  htmlFor="sale-non-attachment-conditional-3-step-4"
                  className="hover:cursor-pointer"
                />
              ),
              NonAttachmentCertificate: (
                <TechnicalTerm name="nonAttachmentCertificate" />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-non-attachment-conditional-3-step-5"
            name="non-attachment"
            value="conditional-3-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByCompany1AndCompany2.step5"
            components={{
              label: (
                <label
                  htmlFor="sale-non-attachment-conditional-3-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              NonAttachmentCertificate: (
                <TechnicalTerm name="nonAttachmentCertificate" />
              ),
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="sale-non-attachment-conditional-3-step-6"
            name="non-attachment"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByCompany1AndCompany2.step6"
            params={{
              numOfCompany1Directors: values.numOfCompany1Directors,
            }}
            components={{
              label: (
                <label
                  htmlFor="sale-non-attachment-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        {directorProofIsRequired && (
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-3-director-proof-step"
              name="non-attachment"
              value="conditional-3-director-proof-step"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-c2c-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByCompany1AndCompany2.directorProofStep"
              params={{
                numOfCompany1Directors: values.numOfCompany1Directors,
                whetherDirectorIsRequired,
              }}
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-3-director-proof-step"
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
      values.numOfCompany1Directors,
      whetherDirectorIsRequired,
    ],
  );

  if (isIssuedByCompany1) return <Company1Instructions />;
  if (isIssuedByCompany1AndCompany2) return <Company1AndCompany2Instructions />;
  return null;
}

export function NonAttachmentCertificateSteps() {
  return (
    <>
      <ConditionalInstructions1 />
      <ConditionalInstructions2 />
      <ConditionalInstructions3 />
    </>
  );
}
