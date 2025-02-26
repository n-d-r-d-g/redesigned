import { useCallback } from "react";
import { useFormikContext } from "formik";
import { useTranslation } from "next-i18next";
import { Button, ButtonProps } from "@heroui/react";
import { MdOutlineRefresh as MdOutlineRefreshIcon } from "react-icons/md";

export default function ResetButton({ children, ...props }: ButtonProps) {
  const { t: tCommon } = useTranslation("common");
  const { resetForm } = useFormikContext();

  const handleResetForm = useCallback(() => resetForm(), [resetForm]);

  return (
    <Button
      type="button"
      variant="bordered"
      color="danger"
      size="md"
      radius="sm"
      className="self-end px-4 border-1"
      startContent={<MdOutlineRefreshIcon size={18} />}
      onPress={handleResetForm}
      {...props}
    >
      {children ?? tCommon("reset")}
    </Button>
  );
}
