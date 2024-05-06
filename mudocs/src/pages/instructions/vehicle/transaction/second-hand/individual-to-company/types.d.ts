export type InitialValues = {
  numOfVendors: "singleVendor" | "multipleVendors";
  numOfDirectors: "singleDirector" | "multipleDirectors";
  documentsPreparer: "vendor" | "company";
  directorHasOriginalID: "yes" | "no";
  vendorNameMatches: "yes" | "no";
  nonAttachmentIssuer: "vendor" | "company" | "vendorAndCompany";
  paymentMethod: "cash" | "notCash";
};
