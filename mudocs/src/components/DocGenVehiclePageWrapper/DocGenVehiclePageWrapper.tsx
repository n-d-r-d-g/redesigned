import { useCallback } from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import FormSaveOrPrint from "@/components/forms/FormSaveOrPrint/FormSaveOrPrint";
import { ZodType, ZodTypeDef } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { DEFAULT_I18N_NAMESPACE } from "../../../constants";
import Styles from "./Styles";
import { generateDocumentTitle } from "@/utils/functions";

type Props<T> = {
  pageTitle: string;
  initialValues: T;
  schema: ZodType<unknown, ZodTypeDef, unknown>;
  Fields: () => JSX.Element;
  Preview: () => JSX.Element;
};

export default function DocGenVehiclePageWrapper<T extends FormikValues>({
  pageTitle,
  initialValues,
  schema,
  Fields,
  Preview,
}: Props<T>) {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const documentTitle = generateDocumentTitle(pageTitle);

  const handleSubmit = useCallback(
    (_: T, { setSubmitting }: FormikHelpers<T>) => {
      const isPrintingSupported = typeof window && "print" in window;

      if (isPrintingSupported) {
        window.print();
      } else {
        alert(tCommon("printingNotSupported"));
      }

      setSubmitting(false);
    },
    [tCommon],
  );

  return (
    <>
      <Head>
        <title>{documentTitle}</title>
      </Head>
      <Styles />
      <h1 className="hide-on-print text-center">{pageTitle}</h1>
      <Formik<T>
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={toFormikValidationSchema(schema)}
        enableReinitialize
        validateOnMount
      >
        <Form className="my-[4rem] print:my-0">
          <div className="hide-on-print mx-auto mb-[2rem] grid w-[95rem] max-w-full grid-cols-1 gap-x-8 gap-y-5 rounded-md border border-gray-200 bg-gray-50 p-4 lg:grid-cols-3 dark:border-slate-800 dark:bg-slate-900">
            <p className="col-span-1 text-sm font-bold italic lg:col-span-3">
              {tCommon("requiredInfoLegend")}
            </p>
            <hr className="col-span-1 border-gray-200 lg:col-span-3 dark:border-slate-800" />
            <Fields />
          </div>
          <div className="relative max-w-full overflow-x-auto pb-7">
            <h2 className="hide-on-print sticky left-0 top-0 mx-auto mb-2 block w-[210mm] max-w-full text-xl font-semibold">
              {tCommon("printPreview")}
            </h2>
            <Preview />
            <FormSaveOrPrint />
          </div>
        </Form>
      </Formik>
    </>
  );
}
