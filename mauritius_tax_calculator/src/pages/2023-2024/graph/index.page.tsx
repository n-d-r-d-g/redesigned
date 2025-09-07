import FormCheckbox from "@/components/form/FormCheckbox/FormCheckbox";
import FormSelect from "@/components/form/FormSelect/FormSelect";
import { joiFormikAdapter } from "@/utils/adapters/joi-formik-adapter";
import { noop, retrieveFinancialPeriod } from "@/utils/functions";
import {
  BreadcrumbItem,
  Card,
  CardBody,
  SelectItem,
  Tab,
  Tabs,
} from "@heroui/react";
import { Formik } from "formik";
import Joi from "joi";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useMemo } from "react";
import { MonthGraph } from "./components/MonthGraph";
import {
  DEFAULT_I18N_LOCALE,
  DEFAULT_I18N_NAMESPACE,
} from "../../../../constants";
import {
  CURRENT_FINANCIAL_YEAR_END,
  CURRENT_FINANCIAL_YEAR_NAMESPACE,
  CURRENT_FINANCIAL_YEAR_START,
  DEFAULT_MONTHLY_INITIAL_VALUES,
  DEFAULT_YEARLY_INITIAL_VALUES,
  MAX_MONETARY_AMOUNT,
  MIN_MONETARY_AMOUNT,
} from "../reusables";
import { YearGraph } from "./components/YearGraph";
import { StyledBreadcrumbs } from "@/components/StyledBreadcrumbs/StyledBreadcrumbs";

export default function FinancialYear2025To2026Graph() {
  const { i18n, t: tCommon } = useTranslation("common");
  const { t: tCurrentYear } = useTranslation(CURRENT_FINANCIAL_YEAR_NAMESPACE);
  const monthlySchema = Joi.object({
    baseSalary: Joi.number()
      .required()
      .min(MIN_MONETARY_AMOUNT)
      .max(MAX_MONETARY_AMOUNT),
    travelingAllowance: Joi.number()
      .required()
      .min(MIN_MONETARY_AMOUNT)
      .max(MAX_MONETARY_AMOUNT),
    performanceBonus: Joi.number()
      .required()
      .min(MIN_MONETARY_AMOUNT)
      .max(MAX_MONETARY_AMOUNT),
    otherTaxableIncome: Joi.number()
      .required()
      .min(MIN_MONETARY_AMOUNT)
      .max(MAX_MONETARY_AMOUNT),
    numOfDependents: Joi.string().required(),
    otherTaxDeductions: Joi.number()
      .required()
      .min(MIN_MONETARY_AMOUNT)
      .max(MAX_MONETARY_AMOUNT),
    age: Joi.string().required(),
    isCitizen: Joi.boolean().required(),
    isResident: Joi.boolean().required(),
    isPublicSector: Joi.boolean().required(),
    isPRB: Joi.boolean().required(),
    isInDomesticService: Joi.boolean().required(),
  }).messages({
    "any.required": tCommon("errors.required"),
    "number.base": tCommon("errors.numberInvalid"),
    "number.min": tCommon("errors.numberGTE", { count: MIN_MONETARY_AMOUNT }),
    "number.max": tCommon("errors.numberLTE", { count: MAX_MONETARY_AMOUNT }),
  });
  const yearlySchema = Joi.object({
    monthlyBaseSalary: Joi.number()
      .required()
      .min(MIN_MONETARY_AMOUNT)
      .max(MAX_MONETARY_AMOUNT),
    totalBaseSalary: Joi.number()
      .required()
      .min(MIN_MONETARY_AMOUNT)
      .max(MAX_MONETARY_AMOUNT),
    eoyBonus: Joi.number()
      .required()
      .min(MIN_MONETARY_AMOUNT)
      .max(MAX_MONETARY_AMOUNT),
    travelingAllowance: Joi.number()
      .required()
      .min(MIN_MONETARY_AMOUNT)
      .max(MAX_MONETARY_AMOUNT),
    performanceBonus: Joi.number()
      .required()
      .min(MIN_MONETARY_AMOUNT)
      .max(MAX_MONETARY_AMOUNT),
    otherTaxableIncome: Joi.number()
      .required()
      .min(MIN_MONETARY_AMOUNT)
      .max(MAX_MONETARY_AMOUNT),
    numOfDependents: Joi.string().required(),
    otherTaxDeductions: Joi.number()
      .required()
      .min(MIN_MONETARY_AMOUNT)
      .max(MAX_MONETARY_AMOUNT),
    age: Joi.string().required(),
    isCitizen: Joi.boolean().required(),
    isResident: Joi.boolean().required(),
    isPublicSector: Joi.boolean().required(),
    isPRB: Joi.boolean().required(),
    isInDomesticService: Joi.boolean().required(),
  }).messages({
    "any.required": tCommon("errors.required"),
    "number.base": tCommon("errors.numberInvalid"),
    "number.min": tCommon("errors.numberGTE", { count: MIN_MONETARY_AMOUNT }),
    "number.max": tCommon("errors.numberLTE", { count: MAX_MONETARY_AMOUNT }),
  });

  const financialPeriod = useMemo(
    () =>
      retrieveFinancialPeriod(
        i18n.language,
        CURRENT_FINANCIAL_YEAR_START,
        CURRENT_FINANCIAL_YEAR_END
      ),
    [i18n.language]
  );

  return (
    <>
      <StyledBreadcrumbs>
        <BreadcrumbItem href="/home">
          {tCommon("breadcrumbs.home")}
        </BreadcrumbItem>
        <BreadcrumbItem
          href={`/${CURRENT_FINANCIAL_YEAR_START}-${CURRENT_FINANCIAL_YEAR_END}`}
        >
          {tCommon("breadcrumbs.calculator")} ({CURRENT_FINANCIAL_YEAR_START}-
          {CURRENT_FINANCIAL_YEAR_END})
        </BreadcrumbItem>
        <BreadcrumbItem
          href={`/${CURRENT_FINANCIAL_YEAR_START}-${CURRENT_FINANCIAL_YEAR_END}/graph`}
          isCurrent
        >
          {tCommon("breadcrumbs.graph")} ({CURRENT_FINANCIAL_YEAR_START}-
          {CURRENT_FINANCIAL_YEAR_END})
        </BreadcrumbItem>
      </StyledBreadcrumbs>
      <h1>{tCommon("graph.pageTitle")}</h1>
      <p className="text-center text-lg font-bold one-col-text mb-4">
        {financialPeriod.start} - {financialPeriod.end}
      </p>
      <p className="text-center one-col-text">
        {tCommon("graph.pageDescription")}
      </p>
      <div className="w-[80rem] max-w-full flex flex-col items-center pb-24 mx-auto">
        <Tabs
          aria-label={tCommon("calculationPeriodLabel")}
          radius="sm"
          destroyInactiveTabPanel={false}
          className="mt-8 mb-2 mx-auto"
        >
          <Tab
            key="month"
            title={tCommon("calculationPeriods.month")}
            className="w-full flex flex-col lg:flex-row lg:items-stretch gap-x-3 gap-y-5"
          >
            <Formik
              initialValues={DEFAULT_MONTHLY_INITIAL_VALUES}
              onSubmit={noop}
              validationSchema={joiFormikAdapter(monthlySchema)}
              validateOnMount
            >
              <>
                <Card
                  radius="sm"
                  shadow="sm"
                  className="lg:basis-1/3 lg:shrink-0"
                >
                  <CardBody>
                    <form
                      id="monthlyForm"
                      className="flex flex-col gap-y-5 pb-1"
                    >
                      <FormSelect
                        key="monthlyNumOfDependents"
                        name="numOfDependents"
                        label={tCurrentYear("month.form.numOfDependents.label")}
                        placeholder="0"
                      >
                        <SelectItem
                          key="0"
                          textValue={tCurrentYear(
                            "month.form.numOfDependents.items.0"
                          )}
                        >
                          {tCurrentYear("month.form.numOfDependents.items.0")}
                        </SelectItem>
                        <SelectItem
                          key="1"
                          textValue={tCurrentYear(
                            "month.form.numOfDependents.items.1"
                          )}
                        >
                          {tCurrentYear("month.form.numOfDependents.items.1")}
                        </SelectItem>
                        <SelectItem
                          key="2"
                          textValue={tCurrentYear(
                            "month.form.numOfDependents.items.2"
                          )}
                        >
                          {tCurrentYear("month.form.numOfDependents.items.2")}
                        </SelectItem>
                        <SelectItem
                          key="3"
                          textValue={tCurrentYear(
                            "month.form.numOfDependents.items.3"
                          )}
                        >
                          {tCurrentYear("month.form.numOfDependents.items.3")}
                        </SelectItem>
                        <SelectItem
                          key="4"
                          textValue={tCurrentYear(
                            "month.form.numOfDependents.items.4"
                          )}
                        >
                          {tCurrentYear("month.form.numOfDependents.items.4")}
                        </SelectItem>
                      </FormSelect>
                      <FormSelect
                        key="monthlyAge"
                        name="age"
                        label={tCurrentYear("month.form.age.label")}
                      >
                        <SelectItem
                          key="under18"
                          textValue={tCurrentYear(
                            "month.form.age.items.under18"
                          )}
                        >
                          {tCurrentYear("month.form.age.items.under18")}
                        </SelectItem>
                        <SelectItem
                          key="18To64"
                          textValue={tCurrentYear(
                            "month.form.age.items.18To64"
                          )}
                        >
                          {tCurrentYear("month.form.age.items.18To64")}
                        </SelectItem>
                        <SelectItem
                          key="65To69"
                          textValue={tCurrentYear(
                            "month.form.age.items.65To69"
                          )}
                        >
                          {tCurrentYear("month.form.age.items.65To69")}
                        </SelectItem>
                        <SelectItem
                          key="70AndOver"
                          textValue={tCurrentYear(
                            "month.form.age.items.70AndOver"
                          )}
                        >
                          {tCurrentYear("month.form.age.items.70AndOver")}
                        </SelectItem>
                      </FormSelect>
                      <FormCheckbox name="isCitizen">
                        {tCurrentYear("month.form.isCitizen.label")}
                      </FormCheckbox>
                      <FormCheckbox name="isResident">
                        {tCurrentYear("month.form.isResident.label")}
                      </FormCheckbox>
                      <FormCheckbox name="isPublicSector">
                        {tCurrentYear("month.form.isPublicSector.label")}
                      </FormCheckbox>
                      <FormCheckbox name="isPRB">
                        {tCurrentYear("month.form.isPRB.label")}
                      </FormCheckbox>
                      <FormCheckbox name="isInDomesticService">
                        {tCurrentYear("month.form.isInDomesticService.label")}
                      </FormCheckbox>
                    </form>
                  </CardBody>
                </Card>
                <Card radius="sm" className="lg:grow">
                  <CardBody>
                    <MonthGraph />
                  </CardBody>
                </Card>
              </>
            </Formik>
          </Tab>
          <Tab
            key="year"
            title={tCommon("calculationPeriods.year")}
            className="w-full flex flex-col lg:flex-row lg:items-start gap-x-3 gap-y-5"
          >
            <Formik
              initialValues={DEFAULT_YEARLY_INITIAL_VALUES}
              onSubmit={noop}
              validationSchema={joiFormikAdapter(yearlySchema)}
              validateOnMount
            >
              <>
                <Card
                  radius="sm"
                  shadow="sm"
                  className="lg:basis-1/3 lg:shrink-0"
                >
                  <CardBody>
                    <form
                      id="yearlyForm"
                      className="flex flex-col gap-y-5 pb-1"
                    >
                      <FormSelect
                        key="yearlyNumOfDependents"
                        name="numOfDependents"
                        label={tCurrentYear("year.form.numOfDependents.label")}
                        placeholder="0"
                      >
                        <SelectItem
                          key="0"
                          textValue={tCurrentYear(
                            "year.form.numOfDependents.items.0"
                          )}
                        >
                          {tCurrentYear("year.form.numOfDependents.items.0")}
                        </SelectItem>
                        <SelectItem
                          key="1"
                          textValue={tCurrentYear(
                            "year.form.numOfDependents.items.1"
                          )}
                        >
                          {tCurrentYear("year.form.numOfDependents.items.1")}
                        </SelectItem>
                        <SelectItem
                          key="2"
                          textValue={tCurrentYear(
                            "year.form.numOfDependents.items.2"
                          )}
                        >
                          {tCurrentYear("year.form.numOfDependents.items.2")}
                        </SelectItem>
                        <SelectItem
                          key="3"
                          textValue={tCurrentYear(
                            "year.form.numOfDependents.items.3"
                          )}
                        >
                          {tCurrentYear("year.form.numOfDependents.items.3")}
                        </SelectItem>
                        <SelectItem
                          key="4"
                          textValue={tCurrentYear(
                            "year.form.numOfDependents.items.4"
                          )}
                        >
                          {tCurrentYear("year.form.numOfDependents.items.4")}
                        </SelectItem>
                      </FormSelect>
                      <FormSelect
                        key="yearlyAge"
                        name="age"
                        label={tCurrentYear("year.form.age.label")}
                      >
                        <SelectItem
                          key="under18"
                          textValue={tCurrentYear(
                            "month.form.age.items.under18"
                          )}
                        >
                          {tCurrentYear("year.form.age.items.under18")}
                        </SelectItem>
                        <SelectItem
                          key="18To64"
                          textValue={tCurrentYear("year.form.age.items.18To64")}
                        >
                          {tCurrentYear("year.form.age.items.18To64")}
                        </SelectItem>
                        <SelectItem
                          key="65To69"
                          textValue={tCurrentYear("year.form.age.items.65To69")}
                        >
                          {tCurrentYear("year.form.age.items.65To69")}
                        </SelectItem>
                        <SelectItem
                          key="70AndOver"
                          textValue={tCurrentYear(
                            "year.form.age.items.70AndOver"
                          )}
                        >
                          {tCurrentYear("year.form.age.items.70AndOver")}
                        </SelectItem>
                      </FormSelect>
                      <FormCheckbox name="isCitizen">
                        {tCurrentYear("year.form.isCitizen.label")}
                      </FormCheckbox>
                      <FormCheckbox name="isResident">
                        {tCurrentYear("year.form.isResident.label")}
                      </FormCheckbox>
                      <FormCheckbox name="isPublicSector">
                        {tCurrentYear("year.form.isPublicSector.label")}
                      </FormCheckbox>
                      <FormCheckbox name="isPRB">
                        {tCurrentYear("year.form.isPRB.label")}
                      </FormCheckbox>
                      <FormCheckbox name="isInDomesticService">
                        {tCurrentYear("year.form.isInDomesticService.label")}
                      </FormCheckbox>
                    </form>
                  </CardBody>
                </Card>
                <Card radius="sm" className="lg:grow">
                  <CardBody>
                    <YearGraph />
                  </CardBody>
                </Card>
              </>
            </Formik>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? DEFAULT_I18N_LOCALE, [
        DEFAULT_I18N_NAMESPACE,
        CURRENT_FINANCIAL_YEAR_NAMESPACE,
      ])),
    },
  };
};
