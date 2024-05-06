export type InitialValues = {
  numOfVendors: "singleVendor" | "multipleVendors";
  numOfPurchasers: "singlePurchaser" | "multiplePurchasers";
  documentsPreparer: "vendor" | "purchaser";
  purchaserHasOriginalID: "yes" | "no";
  vendorAndPurchaserAreRelated: "yes" | "no";
  vendorNameMatches: "yes" | "no";
  nonAttachmentIssuer:
    | "vendor"
    | "purchaser"
    | "vendorAndPurchaser"
    | "vendorDelegate"
    | "purchaserDelegate";
  paymentMethod: "cash" | "notCash";
};
