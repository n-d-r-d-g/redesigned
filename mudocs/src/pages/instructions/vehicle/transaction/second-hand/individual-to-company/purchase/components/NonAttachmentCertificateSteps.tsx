import { useCallback } from "react";
import { useFormikContext } from "formik";
import Checkbox from "@/components/Checkbox/Checkbox";
import TechnicalTerm from "@/components/TechnicalTerm/TechnicalTerm";
import Abbr from "@/components/Abbr/Abbr";
import TypedTrans from "@/components/TypedTrans/TypedTrans";
import { InitialValues } from "../../types";
import styles from "../../../styles.module.css";

function ConditionalInstructions1() {
  const { values } = useFormikContext<InitialValues>();
  const issuedByCompany = values.nonAttachmentIssuer === "company";
  const isIssuedByVendorAndCompany =
    values.nonAttachmentIssuer === "vendorAndCompany";
  const whetherVendorNameProofIsRequired =
    values.vendorNameMatches === "no"
      ? "vendorNameProofRequired"
      : "vendorNameProofNotRequired";

  const CompanyInstructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
          i18nKey="nonAttachment.conditionalInstructions1.description"
          components={{
            p: <p className="mt-4" />,
            NLTAAbbr: <Abbr name="nlta" />,
          }}
        />
        <div className="mb-3 mt-2 flex flex-col gap-3">
          <div className="flex gap-2">
            <Checkbox
              id="purchase-non-attachment-conditional-1-requirement-1"
              name="non-attachment"
              value="conditional-1-requirement-1"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany.requirement1"
              components={{
                label: (
                  <label
                    htmlFor="purchase-non-attachment-conditional-1-requirement-1"
                    className="hover:cursor-pointer"
                  />
                ),
                DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="purchase-non-attachment-conditional-1-requirement-2"
              name="non-attachment"
              value="conditional-1-requirement-2"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany.requirement2"
              components={{
                label: (
                  <label
                    htmlFor="purchase-non-attachment-conditional-1-requirement-2"
                    className="hover:cursor-pointer"
                  />
                ),
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="purchase-non-attachment-conditional-1-requirement-3"
              name="non-attachment"
              value="conditional-1-requirement-3"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany.requirement3"
              params={{ numOfVendors: values.numOfVendors }}
              components={{
                label: (
                  <label
                    htmlFor="purchase-non-attachment-conditional-1-requirement-3"
                    className="hover:cursor-pointer"
                  />
                ),
                ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="purchase-non-attachment-conditional-1-requirement-4"
              name="non-attachment"
              value="conditional-1-requirement-4"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany.requirement4"
              components={{
                label: (
                  <label
                    htmlFor="purchase-non-attachment-conditional-1-requirement-4"
                    className="hover:cursor-pointer"
                  />
                ),
                ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="purchase-non-attachment-conditional-1-requirement-5"
              name="non-attachment"
              value="conditional-1-requirement-5"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany.requirement5"
              components={{
                label: (
                  <label
                    htmlFor="purchase-non-attachment-conditional-1-requirement-5"
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
              id="purchase-non-attachment-conditional-1-requirement-6"
              name="non-attachment"
              value="conditional-1-requirement-6"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByCompany.requirement6"
              components={{
                label: (
                  <label
                    htmlFor="purchase-non-attachment-conditional-1-requirement-6"
                    className="hover:cursor-pointer"
                  />
                ),
              }}
            />
          </div>
        </div>
      </>
    ),
    [values.numOfVendors],
  );

  const VendorAndCompanyInstructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
          i18nKey="nonAttachment.conditionalInstructions1.description"
          components={{
            p: <p className="mt-4" />,
            NLTAAbbr: <Abbr name="nlta" />,
          }}
        />
        <div className="mb-3 mt-2 flex flex-col gap-3">
          <div className="flex gap-2">
            <Checkbox
              id="purchase-non-attachment-conditional-1-requirement-1"
              name="non-attachment"
              value="conditional-1-requirement-1"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorAndCompany.requirement1"
              params={{ numOfVendors: values.numOfVendors }}
              components={{
                label: (
                  <label
                    htmlFor="purchase-non-attachment-conditional-1-requirement-1"
                    className="hover:cursor-pointer"
                  />
                ),
                DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="purchase-non-attachment-conditional-1-requirement-2"
              name="non-attachment"
              value="conditional-1-requirement-2"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorAndCompany.requirement2"
              params={{
                numOfVendors: values.numOfVendors,
                whetherVendorNameProofIsRequired,
              }}
              components={{
                label: (
                  <label
                    htmlFor="purchase-non-attachment-conditional-1-requirement-2"
                    className="hover:cursor-pointer"
                  />
                ),
                ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
                VehicleRegistrationBook: (
                  <TechnicalTerm name="vehicleRegistrationBook" />
                ),
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="purchase-non-attachment-conditional-1-requirement-3"
              name="non-attachment"
              value="conditional-1-requirement-3"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorAndCompany.requirement3"
              params={{ numOfVendors: values.numOfVendors }}
              components={{
                label: (
                  <label
                    htmlFor="purchase-non-attachment-conditional-1-requirement-3"
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
              id="purchase-non-attachment-conditional-1-requirement-4"
              name="non-attachment"
              value="conditional-1-requirement-4"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorAndCompany.requirement4"
              params={{ numOfVendors: values.numOfVendors }}
              components={{
                label: (
                  <label
                    htmlFor="purchase-non-attachment-conditional-1-requirement-4"
                    className="hover:cursor-pointer"
                  />
                ),
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="purchase-non-attachment-conditional-1-requirement-5"
              name="non-attachment"
              value="conditional-1-requirement-5"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorAndCompany.requirement5"
              params={{ numOfVendors: values.numOfVendors }}
              components={{
                label: (
                  <label
                    htmlFor="purchase-non-attachment-conditional-1-requirement-5"
                    className="hover:cursor-pointer"
                  />
                ),
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="purchase-non-attachment-conditional-1-requirement-6"
              name="non-attachment"
              value="conditional-1-requirement-6"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorAndCompany.requirement6"
              components={{
                label: (
                  <label
                    htmlFor="purchase-non-attachment-conditional-1-requirement-6"
                    className="hover:cursor-pointer"
                  />
                ),
                DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
              }}
            />
          </div>
        </div>
      </>
    ),
    [values.numOfVendors, whetherVendorNameProofIsRequired],
  );

  if (issuedByCompany) return <CompanyInstructions />;
  if (isIssuedByVendorAndCompany) return <VendorAndCompanyInstructions />;
  return null;
}

function ConditionalInstructions2() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByCompany = values.nonAttachmentIssuer === "company";
  const isIssuedByVendorAndCompany =
    values.nonAttachmentIssuer === "vendorAndCompany";
  const whetherVendorNameProofIsRequired =
    values.vendorNameMatches === "no"
      ? "vendorNameProofRequired"
      : "vendorNameProofNotRequired";

  const CompanyInstructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
          i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany.description"
          components={{
            p: <p className="mt-4" />,
            NLTAAbbr: <Abbr name="nlta" />,
          }}
        />
        <ul>
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany.item1"
            components={{
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany.item2"
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany.item3"
            params={{
              numOfVendors: values.numOfVendors,
              whetherVendorNameProofIsRequired,
            }}
            components={{
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany.item4"
            components={{
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany.item5"
            components={{
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany.item6"
            components={{
              NonAttachmentCertificate: (
                <TechnicalTerm name="nonAttachmentCertificate" />
              ),
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByCompany.item7"
            components={{
              NonAttachmentCertificate: (
                <TechnicalTerm name="nonAttachmentCertificate" />
              ),
            }}
          />
        </ul>
      </>
    ),
    [values.numOfVendors, whetherVendorNameProofIsRequired],
  );

  const VendorAndCompanyInstructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
          i18nKey="nonAttachment.conditionalInstructions2.issuedByVendorAndCompany.description"
          params={{ numOfVendors: values.numOfVendors }}
          components={{
            p: <p className="mt-4" />,
            NLTAAbbr: <Abbr name="nlta" />,
          }}
        />
        <ul>
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByVendorAndCompany.item1"
            components={{
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByVendorAndCompany.item2"
            params={{
              numOfVendors: values.numOfVendors,
              whetherVendorNameProofIsRequired,
            }}
            components={{
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByVendorAndCompany.item3"
            components={{
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByVendorAndCompany.item4"
            components={{
              NonAttachmentCertificate: (
                <TechnicalTerm name="nonAttachmentCertificate" />
              ),
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByVendorAndCompany.item5"
            components={{
              NonAttachmentCertificate: (
                <TechnicalTerm name="nonAttachmentCertificate" />
              ),
            }}
          />
        </ul>
      </>
    ),
    [values.numOfVendors, whetherVendorNameProofIsRequired],
  );

  if (isIssuedByCompany) return <CompanyInstructions />;
  if (isIssuedByVendorAndCompany) return <VendorAndCompanyInstructions />;
  return null;
}

function ConditionalInstructions3() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByVendor = values.nonAttachmentIssuer === "vendor";
  const isIssuedByCompany = values.nonAttachmentIssuer === "company";
  const isIssuedByVendorAndCompany =
    values.nonAttachmentIssuer === "vendorAndCompany";
  const whetherVendorNameProofIsRequired =
    values.vendorNameMatches === "no"
      ? "vendorNameProofRequired"
      : "vendorNameProofNotRequired";

  const VendorInstructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
          i18nKey="nonAttachment.conditionalInstructions3.issuedByVendor.description"
          params={{ numOfVendors: values.numOfVendors }}
          components={{
            p: <p className="mt-4" />,
            DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
          }}
        />
        <div className="mb-3 mt-2 flex flex-col gap-3">
          <div className="flex gap-2">
            <Checkbox
              id="purchase-non-attachment-conditional-3-step-1"
              name="non-attachment"
              value="conditional-3-step-1"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByVendor.step1"
              params={{ numOfVendors: values.numOfVendors }}
              components={{
                label: (
                  <label
                    htmlFor="purchase-non-attachment-conditional-3-step-1"
                    className="hover:cursor-pointer"
                  />
                ),
                DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="purchase-non-attachment-conditional-3-step-2"
              name="non-attachment"
              value="conditional-3-step-2"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByVendor.step2"
              params={{ numOfVendors: values.numOfVendors }}
              components={{
                label: (
                  <label
                    htmlFor="purchase-non-attachment-conditional-3-step-2"
                    className="hover:cursor-pointer"
                  />
                ),
                DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="purchase-non-attachment-conditional-3-step-3"
              name="non-attachment"
              value="conditional-3-step-3"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByVendor.step3"
              params={{ numOfVendors: values.numOfVendors }}
              components={{
                label: (
                  <label
                    htmlFor="purchase-non-attachment-conditional-3-step-3"
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
              id="purchase-non-attachment-conditional-3-step-4"
              name="non-attachment"
              value="conditional-3-step-4"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByVendor.step4"
              params={{ numOfVendors: values.numOfVendors }}
              components={{
                label: (
                  <label
                    htmlFor="purchase-non-attachment-conditional-3-step-4"
                    className="hover:cursor-pointer"
                  />
                ),
                NonAttachmentCertificate: (
                  <TechnicalTerm name="nonAttachmentCertificate" />
                ),
              }}
            />
          </div>
        </div>
      </>
    ),
    [values.numOfVendors],
  );

  const CompanyInstructions = useCallback(
    () => (
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
        i18nKey="nonAttachment.conditionalInstructions3.issuedByCompany.step1"
        params={{
          numOfVendors: values.numOfVendors,
        }}
        components={{
          p: <p className="mt-4" />,
          ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
        }}
      />
    ),
    [values.numOfVendors],
  );

  const VendorAndCompanyInstructions = useCallback(
    () => (
      <div className="mb-3 mt-4 flex flex-col gap-3">
        <div className="flex gap-2">
          <Checkbox
            id="purchase-non-attachment-conditional-3-step-1"
            name="non-attachment"
            value="conditional-3-step-1"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorAndCompany.step1"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="purchase-non-attachment-conditional-3-step-1"
                  className="hover:cursor-pointer"
                />
              ),
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-non-attachment-conditional-3-step-2"
            name="non-attachment"
            value="conditional-3-step-2"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorAndCompany.step2"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="purchase-non-attachment-conditional-3-step-2"
                  className="hover:cursor-pointer"
                />
              ),
              DeedOfSale: <TechnicalTerm name="deedOfSale" count={1} />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-non-attachment-conditional-3-step-3"
            name="non-attachment"
            value="conditional-3-step-3"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorAndCompany.step3"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="purchase-non-attachment-conditional-3-step-3"
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
            id="purchase-non-attachment-conditional-3-step-4"
            name="non-attachment"
            value="conditional-3-step-4"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorAndCompany.step4"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="purchase-non-attachment-conditional-3-step-4"
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
            id="purchase-non-attachment-conditional-3-step-5"
            name="non-attachment"
            value="conditional-3-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorAndCompany.step5"
            params={{
              numOfVendors: values.numOfVendors,
              whetherVendorNameProofIsRequired,
            }}
            components={{
              label: (
                <label
                  htmlFor="purchase-non-attachment-conditional-3-step-5"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            id="purchase-non-attachment-conditional-3-step-6"
            name="non-attachment"
            value="conditional-3-step-6"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2c-purchase-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorAndCompany.step6"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              label: (
                <label
                  htmlFor="purchase-non-attachment-conditional-3-step-6"
                  className="hover:cursor-pointer"
                />
              ),
              NonAttachmentCertificate: (
                <TechnicalTerm name="nonAttachmentCertificate" />
              ),
            }}
          />
        </div>
      </div>
    ),
    [values.numOfVendors, whetherVendorNameProofIsRequired],
  );

  if (isIssuedByVendor) return <VendorInstructions />;
  if (isIssuedByCompany) return <CompanyInstructions />;
  if (isIssuedByVendorAndCompany) return <VendorAndCompanyInstructions />;
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
