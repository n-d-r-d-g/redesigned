import { InitialValues } from "./types";

export const initialValues: InitialValues = {
  numOfDirectors: "singleDirector",
  numOfPurchasers: "singlePurchaser",
  documentsPreparer: "company",
  vendorHasStamp: "yes",
  isVehicleRegistrationBookValid: "yes",
  nonAttachmentIssuer: "companyAndPurchaser",
  paymentMethod: "cash",
};

export function isDirectorRequired({
  numOfDirectors,
  vendorHasStamp,
  isVehicleRegistrationBookValid,
}: InitialValues) {
  const vendorHasMultipleDirectors = numOfDirectors === "multipleDirectors";
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
