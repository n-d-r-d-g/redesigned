export type InitialValues = {
  numOfDirectors: "singleDirector" | "multipleDirectors";
  numOfPurchasers: "singlePurchaser" | "multiplePurchasers";
  documentsPreparer: "company" | "purchaser";
  vendorHasStamp: "yes" | "no";
  isVehicleRegistrationBookValid: "yes" | "no";
  administrativeStatusCertificateIssuer:
    | "company"
    | "purchaser"
    | "companyAndPurchaser";
  paymentMethod: "cash" | "notCash";
};
