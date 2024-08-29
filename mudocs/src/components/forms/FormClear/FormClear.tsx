import { useTranslation } from "next-i18next";
import { DEFAULT_I18N_NAMESPACE } from "../../../../constants";
import { useFormikContext } from "formik";
import { Button } from "@nextui-org/react";
import { useCallback, useEffect, useRef } from "react";

export default function FormClear() {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { isSubmitting, resetForm, validateForm } = useFormikContext();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const isDisabled = isSubmitting;

  const handleResetForm = useCallback(() => {
    resetForm();
    timeoutRef.current = setTimeout(validateForm);
  }, [resetForm, validateForm]);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <Button
      color="danger"
      variant="flat"
      size="md"
      radius="sm"
      className="grow bg-gray-200/70 text-red-900 xs:grow-0 dark:bg-slate-800 dark:text-red-300"
      isDisabled={isDisabled}
      onPress={handleResetForm}
    >
      {tCommon("clearForm")}
    </Button>
  );
}
