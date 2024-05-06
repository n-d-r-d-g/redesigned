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
  const isIssuedByVendor = values.nonAttachmentIssuer === "vendor";
  const isIssuedByVendorAndPurchaser =
    values.nonAttachmentIssuer === "vendorAndPurchaser";
  const isIssuedByVendorDelegate =
    values.nonAttachmentIssuer === "vendorDelegate";
  const whetherVendorNameProofIsRequired =
    values.vendorNameMatches === "no"
      ? "vendorNameProofRequired"
      : "vendorNameProofNotRequired";

  const VendorInstructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
          i18nKey="nonAttachment.conditionalInstructions1.issuedByVendor.description"
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendor.requirement1"
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendor.requirement2"
              params={{ numOfPurchasers: values.numOfPurchasers }}
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-2"
                    className="hover:cursor-pointer"
                  />
                ),
                ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendor.requirement3"
              params={{
                numOfVendors: values.numOfVendors,
                whetherVendorNameProofIsRequired,
              }}
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-3"
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
              id="sale-non-attachment-conditional-1-requirement-4"
              name="non-attachment"
              value="conditional-1-requirement-4"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendor.requirement4"
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendor.requirement5"
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
        </div>
      </>
    ),
    [
      values.numOfPurchasers,
      values.numOfVendors,
      whetherVendorNameProofIsRequired,
    ],
  );

  const VendorAndPurchaserInstructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
          i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorAndPurchaser.description"
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorAndPurchaser.requirement1"
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorAndPurchaser.requirement2"
              params={{
                numOfVendors: values.numOfVendors,
                whetherVendorNameProofIsRequired,
              }}
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-2"
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
              id="sale-non-attachment-conditional-1-requirement-3"
              name="non-attachment"
              value="conditional-1-requirement-3"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorAndPurchaser.requirement3"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-3"
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
              id="sale-non-attachment-conditional-1-requirement-4"
              name="non-attachment"
              value="conditional-1-requirement-4"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorAndPurchaser.requirement4"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-4"
                    className="hover:cursor-pointer"
                  />
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorAndPurchaser.requirement5"
              params={{ numOfPurchasers: values.numOfPurchasers }}
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-5"
                    className="hover:cursor-pointer"
                  />
                ),
                ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-1-requirement-6"
              name="non-attachment"
              value="conditional-1-requirement-6"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorAndPurchaser.requirement6"
              params={{ numOfPurchasers: values.numOfPurchasers }}
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
      values.numOfPurchasers,
      values.numOfVendors,
      whetherVendorNameProofIsRequired,
    ],
  );

  const VendorDelegateInstructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
          i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorDelegate.description"
          components={{
            p: <p className="mt-4" />,
            NLTAAbbr: <Abbr name="nlta" />,
            PowerOfAttorney: <TechnicalTerm name="powerOfAttorney" />,
            NonAttachmentCertificate: (
              <TechnicalTerm name="nonAttachmentCertificate" />
            ),
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorDelegate.requirement1"
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorDelegate.requirement2"
              params={{ numOfPurchasers: values.numOfPurchasers }}
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-2"
                    className="hover:cursor-pointer"
                  />
                ),
                ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorDelegate.requirement3"
              params={{ numOfVendors: values.numOfVendors }}
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorDelegate.requirement4"
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorDelegate.requirement5"
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
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-1-requirement-6"
              name="non-attachment"
              value="conditional-1-requirement-6"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorDelegate.requirement6"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-6"
                    className="hover:cursor-pointer"
                  />
                ),
                PowerOfAttorney: <TechnicalTerm name="powerOfAttorney" />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-1-requirement-7"
              name="non-attachment"
              value="conditional-1-requirement-7"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorDelegate.requirement7"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-7"
                    className="hover:cursor-pointer"
                  />
                ),
                PowerOfAttorney: <TechnicalTerm name="powerOfAttorney" />,
              }}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-1-requirement-8"
              name="non-attachment"
              value="conditional-1-requirement-8"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions1.issuedByVendorDelegate.requirement8"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-1-requirement-8"
                    className="hover:cursor-pointer"
                  />
                ),
                ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
              }}
            />
          </div>
        </div>
      </>
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  if (isIssuedByVendor) return <VendorInstructions />;
  if (isIssuedByVendorAndPurchaser) return <VendorAndPurchaserInstructions />;
  if (isIssuedByVendorDelegate) return <VendorDelegateInstructions />;
  return null;
}

function ConditionalInstructions2() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByVendor = values.nonAttachmentIssuer === "vendor";
  const isIssuedByVendorAndPurchaser =
    values.nonAttachmentIssuer === "vendorAndPurchaser";
  const whetherVendorNameProofIsRequired =
    values.vendorNameMatches === "no"
      ? "vendorNameProofRequired"
      : "vendorNameProofNotRequired";

  const VendorInstructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
          i18nKey="nonAttachment.conditionalInstructions2.description"
          components={{
            p: <p className="mt-4" />,
            NLTAAbbr: <Abbr name="nlta" />,
          }}
        />
        <ul>
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByVendor.item1"
            components={{
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByVendor.item2"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByVendor.item3"
            params={{
              numOfVendors: values.numOfVendors,
              whetherVendorNameProofIsRequired,
            }}
            components={{
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByVendor.item4"
            components={{
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByVendor.item5"
            components={{
              NonAttachmentCertificate: (
                <TechnicalTerm name="nonAttachmentCertificate" />
              ),
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByVendor.item6"
            components={{
              NonAttachmentCertificate: (
                <TechnicalTerm name="nonAttachmentCertificate" />
              ),
            }}
          />
        </ul>
      </>
    ),
    [
      values.numOfPurchasers,
      values.numOfVendors,
      whetherVendorNameProofIsRequired,
    ],
  );

  const VendorAndPurchaserInstructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
          i18nKey="nonAttachment.conditionalInstructions2.description"
          components={{
            p: <p className="mt-4" />,
            NLTAAbbr: <Abbr name="nlta" />,
          }}
        />
        <ul>
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByVendorAndPurchaser.item1"
            components={{
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByVendorAndPurchaser.item2"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByVendorAndPurchaser.item3"
            params={{
              numOfVendors: values.numOfVendors,
              whetherVendorNameProofIsRequired,
            }}
            components={{
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByVendorAndPurchaser.item4"
            components={{
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByVendorAndPurchaser.item5"
            components={{
              NonAttachmentCertificate: (
                <TechnicalTerm name="nonAttachmentCertificate" />
              ),
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions2.issuedByVendorAndPurchaser.item6"
            components={{
              NonAttachmentCertificate: (
                <TechnicalTerm name="nonAttachmentCertificate" />
              ),
            }}
          />
        </ul>
      </>
    ),
    [
      values.numOfPurchasers,
      values.numOfVendors,
      whetherVendorNameProofIsRequired,
    ],
  );

  if (isIssuedByVendor) return <VendorInstructions />;
  if (isIssuedByVendorAndPurchaser) return <VendorAndPurchaserInstructions />;
  return null;
}

function ConditionalInstructions3() {
  const { values } = useFormikContext<InitialValues>();
  const isIssuedByVendor = values.nonAttachmentIssuer === "vendor";
  const isIssuedByPurchaser = values.nonAttachmentIssuer === "purchaser";
  const isIssuedByVendorAndPurchaser =
    values.nonAttachmentIssuer === "vendorAndPurchaser";
  const isIssuedByVendorDelegate =
    values.nonAttachmentIssuer === "vendorDelegate";
  const isIssuedByPurchaserDelegate =
    values.nonAttachmentIssuer === "purchaserDelegate";
  const whetherVendorNameProofIsRequired =
    values.vendorNameMatches === "no"
      ? "vendorNameProofRequired"
      : "vendorNameProofNotRequired";

  const VendorInstructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
          i18nKey="nonAttachment.conditionalInstructions3.issuedByVendor.description"
          params={{ numOfPurchasers: values.numOfPurchasers }}
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByVendor.step1"
              params={{ numOfPurchasers: values.numOfPurchasers }}
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByVendor.step2"
              params={{ numOfPurchasers: values.numOfPurchasers }}
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByVendor.step3"
              params={{ numOfPurchasers: values.numOfPurchasers }}
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-3-step-3"
                    className="hover:cursor-pointer"
                  />
                ),
                ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByVendor.step4"
              params={{ numOfPurchasers: values.numOfPurchasers }}
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-3-step-4"
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
              id="sale-non-attachment-conditional-3-step-5"
              name="non-attachment"
              value="conditional-3-step-5"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByVendor.step5"
              params={{ numOfPurchasers: values.numOfPurchasers }}
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByVendor.step6"
              params={{
                numOfVendors: values.numOfVendors,
                whetherVendorNameProofIsRequired,
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
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-3-step-7"
              name="non-attachment"
              value="conditional-3-step-7"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByVendor.step7"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-3-step-7"
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
    [
      values.numOfPurchasers,
      values.numOfVendors,
      whetherVendorNameProofIsRequired,
    ],
  );

  const PurchaserInstructions = useCallback(
    () => (
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
        i18nKey="nonAttachment.conditionalInstructions3.issuedByPurchaser.step1"
        params={{
          numOfVendors: values.numOfVendors,
          numOfPurchasers: values.numOfPurchasers,
        }}
        components={{
          p: <p className="mt-4" />,
          ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
        }}
      />
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  const VendorAndPurchaserInstructions = useCallback(
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorAndPurchaser.step1"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorAndPurchaser.step2"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorAndPurchaser.step3"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              label: (
                <label
                  htmlFor="sale-non-attachment-conditional-3-step-3"
                  className="hover:cursor-pointer"
                />
              ),
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorAndPurchaser.step4"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              label: (
                <label
                  htmlFor="sale-non-attachment-conditional-3-step-4"
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
            id="sale-non-attachment-conditional-3-step-5"
            name="non-attachment"
            value="conditional-3-step-5"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorAndPurchaser.step5"
            params={{ numOfPurchasers: values.numOfPurchasers }}
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
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorAndPurchaser.step6"
            params={{
              numOfVendors: values.numOfVendors,
              whetherVendorNameProofIsRequired,
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
        <div className="flex gap-2">
          <Checkbox
            id="sale-non-attachment-conditional-3-step-7"
            name="non-attachment"
            value="conditional-3-step-7"
            validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
            className={`${styles.checkbox} mt-2`}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorAndPurchaser.step7"
            components={{
              label: (
                <label
                  htmlFor="sale-non-attachment-conditional-3-step-7"
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
    [
      values.numOfPurchasers,
      values.numOfVendors,
      whetherVendorNameProofIsRequired,
    ],
  );

  const VendorDelegateInstructions = useCallback(
    () => (
      <>
        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
          i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorDelegate.description1"
          components={{
            p: <p className="mt-4" />,
            NonAttachmentCertificate: (
              <TechnicalTerm name="nonAttachmentCertificate" />
            ),
          }}
        />
        <ul>
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorDelegate.item1"
            components={{
              DeedsOfSale: <TechnicalTerm name="deedOfSale" count={2} />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorDelegate.item2"
            params={{ numOfPurchasers: values.numOfPurchasers }}
            components={{
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorDelegate.item3"
            params={{ numOfVendors: values.numOfVendors }}
            components={{
              ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorDelegate.item4"
            components={{
              VehicleRegistrationBook: (
                <TechnicalTerm name="vehicleRegistrationBook" />
              ),
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorDelegate.item5"
            components={{
              NonAttachmentCertificate: (
                <TechnicalTerm name="nonAttachmentCertificate" />
              ),
            }}
          />
          <TypedTrans
            ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
            i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorDelegate.item6"
            components={{
              NonAttachmentCertificate: (
                <TechnicalTerm name="nonAttachmentCertificate" />
              ),
            }}
          />
        </ul>

        <TypedTrans
          ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
          i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorDelegate.description2"
          params={{ numOfPurchasers: values.numOfPurchasers }}
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorDelegate.step1"
              params={{ numOfPurchasers: values.numOfPurchasers }}
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorDelegate.step2"
              params={{ numOfPurchasers: values.numOfPurchasers }}
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorDelegate.step3"
              params={{ numOfPurchasers: values.numOfPurchasers }}
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-3-step-3"
                    className="hover:cursor-pointer"
                  />
                ),
                ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorDelegate.step4"
              params={{ numOfPurchasers: values.numOfPurchasers }}
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-3-step-4"
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
              id="sale-non-attachment-conditional-3-step-5"
              name="non-attachment"
              value="conditional-3-step-5"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorDelegate.step5"
              params={{ numOfPurchasers: values.numOfPurchasers }}
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
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorDelegate.step6"
              params={{ numOfVendors: values.numOfVendors }}
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
          <div className="flex gap-2">
            <Checkbox
              id="sale-non-attachment-conditional-3-step-7"
              name="non-attachment"
              value="conditional-3-step-7"
              validClassName="text-green-500 focus-visible:ring-green-500 dark:focus-visible:ring-green-500"
              className={`${styles.checkbox} mt-2`}
            />
            <TypedTrans
              ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
              i18nKey="nonAttachment.conditionalInstructions3.issuedByVendorDelegate.step7"
              components={{
                label: (
                  <label
                    htmlFor="sale-non-attachment-conditional-3-step-7"
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
    [values.numOfPurchasers, values.numOfVendors],
  );

  const PurchaserDelegateInstructions = useCallback(
    () => (
      <TypedTrans
        ns="instructions-vehicle-transaction-2nd-hand-i2i-sale-page"
        i18nKey="nonAttachment.conditionalInstructions3.issuedByPurchaserDelegate.step1"
        params={{
          numOfVendors: values.numOfVendors,
          numOfPurchasers: values.numOfPurchasers,
        }}
        components={{
          p: <p className="mt-4" />,
          ProofOfIdentity: <TechnicalTerm name="proofOfIdentity" />,
        }}
      />
    ),
    [values.numOfPurchasers, values.numOfVendors],
  );

  if (isIssuedByVendor) return <VendorInstructions />;
  if (isIssuedByPurchaser) return <PurchaserInstructions />;
  if (isIssuedByVendorAndPurchaser) return <VendorAndPurchaserInstructions />;
  if (isIssuedByVendorDelegate) return <VendorDelegateInstructions />;
  if (isIssuedByPurchaserDelegate) return <PurchaserDelegateInstructions />;
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