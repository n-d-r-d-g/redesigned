import { InitialValues } from "./types";

export const initialValues: InitialValues = {
  numOfCompany1Directors: "singleCompany1Director",
  numOfCompany2Directors: "singleCompany2Director",
  documentsPreparer: "company1",
  vendorHasStamp: "yes",
  isVehicleRegistrationBookValid: "yes",
  nonAttachmentIssuer: "company1AndCompany2",
  paymentMethod: "cash",
};

export function isDirectorRequired({
  numOfCompany1Directors,
  vendorHasStamp,
  isVehicleRegistrationBookValid,
}: InitialValues) {
  const vendorHasMultipleDirectors =
    numOfCompany1Directors === "multipleCompany1Directors";
  const vendorHaveStamp = vendorHasStamp === "no";
  const vehicleRegistrationBookIsValid =
    isVehicleRegistrationBookValid === "no";
  const directorIsRequired =
    vendorHasMultipleDirectors ||
    vendorHaveStamp ||
    vehicleRegistrationBookIsValid;

  return directorIsRequired;
}

export function retrieveDirectorRequiredI18nText(values: InitialValues) {
  return isDirectorRequired(values)
    ? "directorRequired"
    : "directorNotRequired";
}
