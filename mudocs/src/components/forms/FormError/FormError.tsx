import { useField } from "formik";
import { useTranslation } from "next-i18next";
import { clx } from "@/utils/functions";
import { DEFAULT_I18N_NAMESPACE } from "../../../../constants";

type Props = {
  name: string;
  className?: string;
  isFieldSet?: boolean;
  isFieldSetValid?: boolean;
};

export default function FormError({
  name,
  className,
  isFieldSet = false,
  isFieldSetValid = true,
}: Props) {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const [_field, meta] = useField(name);
  const isValid = !(meta.touched && meta.error);
  const isStrError = typeof meta.error === "string"; // For nested formik fields, only the parent's errors will be displayed
  const errorClassName = clx(
    "mt-1.5 px-2.5 text-xs text-red-700 dark:text-red-400",
    className,
  );

  return (
    <>
      {!isValid && isStrError && <p className={errorClassName}>{meta.error}</p>}
      {!isValid && isFieldSet && !isFieldSetValid && (
        <p className={errorClassName}>
          {tCommon("errors.fieldSetContainsErrors")}
        </p>
      )}
    </>
  );
}
