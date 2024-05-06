import { useTranslation } from "next-i18next";
import { DEFAULT_I18N_NAMESPACE } from "../../../../constants";
import { useFormikContext } from "formik";

export default function FormSaveOrPrint() {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const { isSubmitting, isValid } = useFormikContext();
  const isDisabled = isSubmitting || !isValid;

  return (
    <button
      type="submit"
      disabled={isDisabled}
      title={tCommon("saveOrPrint")}
      className="hide-on-print fixed bottom-4 right-4 inline-flex items-center rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-2.5 text-center text-sm font-medium text-white shadow-lg shadow-green-500/50 outline-none hover:bg-gradient-to-br focus-visible:ring-4 focus-visible:ring-green-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white disabled:from-slate-500 disabled:to-slate-500 disabled:shadow-none dark:shadow-lg dark:shadow-green-800/80 dark:focus-visible:ring-green-400 dark:focus-visible:ring-offset-slate-900"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>

      <span className="sr-only">{tCommon("saveOrPrint")}</span>
    </button>
  );
}
