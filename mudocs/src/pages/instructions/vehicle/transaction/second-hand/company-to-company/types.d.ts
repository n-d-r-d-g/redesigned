export type InitialValues = {
  numOfCompany1Directors:
    | "singleCompany1Director"
    | "multipleCompany1Directors";
  numOfCompany2Directors:
    | "singleCompany2Director"
    | "multipleCompany2Directors";
  documentsPreparer: "company1" | "company2";
  vendorHasStamp: "yes" | "no";
  isVehicleRegistrationBookValid: "yes" | "no";
  nonAttachmentIssuer: "company1" | "company1AndCompany2";
  paymentMethod: "cash" | "notCash";
};
