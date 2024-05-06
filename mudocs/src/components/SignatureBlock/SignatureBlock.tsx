import { useCallback } from "react";
import { TFunction, useTranslation } from "next-i18next";
import { formattedDate, nameWithTitle } from "@/utils/functions";
import { Nationality, PersonTitle } from "@/types";
import { DEFAULT_I18N_NAMESPACE } from "../../../constants";

export type SignatureBlockProps = {
  title: PersonTitle | "";
  responsibility: "vendor" | "purchaser" | "director" | "representative";
  name: string;
  nationality: Nationality;
  id: string;
  date?: string;
  showDate?: boolean;
  translateFn?: TFunction;
};

export default function SignatureBlock({
  title,
  name,
  responsibility,
  nationality,
  id,
  date,
  showDate = false,
  translateFn,
}: SignatureBlockProps) {
  const { i18n } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const tENCommon = i18n.getFixedT("en", DEFAULT_I18N_NAMESPACE);
  const t = translateFn || tENCommon;

  const renderID = useCallback(
    () => (
      <p className="leading-5">
        {t(nationality === "mauritian" ? "idNo" : "passportNo")}: {id}
      </p>
    ),
    [id, nationality, t],
  );

  const renderDate = useCallback(
    () =>
      showDate && (
        <p className="grid w-[calc(13*var(--font-size))] min-w-[calc(10*var(--font-size))] grid-cols-[auto_1fr] leading-5">
          {`${t("date")}: `}
          {date ? (
            formattedDate(date, undefined, undefined, "long")
          ) : (
            <span className="inline-block max-w-full border-b-2 border-dotted border-black"></span>
          )}
        </p>
      ),
    [date, showDate, t],
  );

  return (
    <div className="grid place-items-start">
      <p className="leading-5">
        {t(`signatureByResponsibility.${responsibility}`)}:
      </p>
      <div
        className="mb-[calc(0.25*var(--font-size))] h-[calc(2.5*var(--font-size))] w-[calc(13*var(--font-size))] min-w-[calc(10*var(--font-size))] max-w-full cursor-[no-drop] border-x-0 border-b-2 border-t-0 border-dotted border-black"
        title={tENCommon("handwrittenSignature")}
      />
      <p className="leading-5">{nameWithTitle(title, name, t)}</p>
      {renderID()}
      {renderDate()}
    </div>
  );
}
