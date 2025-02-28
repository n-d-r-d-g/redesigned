import { Button } from "@heroui/react";
import { useFormikContext } from "formik";
import { useTranslation } from "next-i18next";
import { useCallback } from "react";
import { DEFAULT_I18N_NAMESPACE } from "../../../../constants";

type FormLoadDataProps = {
  data: unknown;
};

export default function FormLoadData({ data }: FormLoadDataProps) {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { isSubmitting, setValues } = useFormikContext();
  const isDisabled = isSubmitting;

  const handleLoadExampleData = useCallback(() => {
    setValues(data);
  }, [data, setValues]);

  return (
    <Button
      variant="flat"
      size="md"
      radius="sm"
      className="grow bg-gray-200/70 xs:grow-0 dark:bg-slate-800"
      isDisabled={isDisabled}
      onPress={handleLoadExampleData}
    >
      {tCommon("loadExampleData")}
    </Button>
  );
}
