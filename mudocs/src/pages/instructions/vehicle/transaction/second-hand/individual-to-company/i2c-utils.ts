import { InitialValues } from "./types";

export const initialValues: InitialValues = {
  numOfVendors: "singleVendor",
  numOfDirectors: "singleDirector",
  documentsPreparer: "company",
  directorHasOriginalID: "yes",
  vendorNameMatches: "yes",
  nonAttachmentIssuer: "vendorAndCompany",
  paymentMethod: "cash",
};

export function isVendorRequired(values: InitialValues) {
  const noDirectorOriginalID = values.directorHasOriginalID === "no";
  const vendorNameHasChanged = values.vendorNameMatches === "no";
  const vendorIsRequired = noDirectorOriginalID || vendorNameHasChanged;

  return vendorIsRequired;
}
