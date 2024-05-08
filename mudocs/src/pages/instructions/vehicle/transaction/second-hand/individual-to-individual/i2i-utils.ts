import { InitialValues } from "./types";

export const initialValues: InitialValues = {
  numOfVendors: "singleVendor",
  numOfPurchasers: "singlePurchaser",
  documentsPreparer: "vendor",
  purchaserHasOriginalID: "yes",
  vendorAndPurchaserAreRelated: "no",
  vendorNameMatches: "yes",
  administrativeStatusCertificateIssuer: "vendorAndPurchaser",
  paymentMethod: "cash",
};

export function isVendorRequired(values: InitialValues) {
  const noPurchaserOriginalID = values.purchaserHasOriginalID === "no";
  const vendorAndPurchaserAreRelated =
    values.vendorAndPurchaserAreRelated === "yes";
  const vendorNameHasChanged = values.vendorNameMatches === "no";
  const vendorIsRequired =
    noPurchaserOriginalID ||
    vendorAndPurchaserAreRelated ||
    vendorNameHasChanged;

  return vendorIsRequired;
}
