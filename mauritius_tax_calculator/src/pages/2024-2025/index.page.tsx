import FormCheckbox from "@/components/form/FormCheckbox/FormCheckbox";
import FormNumberInput from "@/components/form/FormNumberInput/FormNumberInput";
import FormSelect from "@/components/form/FormSelect/FormSelect";
import ResetButton from "@/components/form/ResetButton/ResetButton";
import { joiFormikAdapter } from "@/utils/adapters/joi-formik-adapter";
import { noop, retrieveFinancialPeriod } from "@/utils/functions";
import { Card, CardBody, SelectItem, Tab, Tabs } from "@nextui-org/react";
import { Formik } from "formik";
import Joi from "joi";
import { GetStaticProps } from "next";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useMemo } from "react";
import {
  DEFAULT_I18N_LOCALE,
  DEFAULT_I18N_NAMESPACE,
} from "../../../constants";
import MonthlyCalculations from "./components/MonthlyCalculations";
import YearlyCalculations from "./components/YearlyCalculations";
import {
  DEFAULT_MONTHLY_INITIAL_VALUES,
  DEFAULT_YEARLY_INITIAL_VALUES,
  MAX_MONETARY_AMOUNT,
  MIN_MONETARY_AMOUNT,
} from "./reusables";

export default function FinancialYear2024To2025() {
  const { i18n, t: tCommon } = useTranslation("common");
  const { t: t2024To2025 } = useTranslation("2024-2025");
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
    () => retrieveFinancialPeriod(i18n.language, 2024, 2025),
    [i18n.language]
  );

  return (
    <>
      <h1>{tCommon("websiteTitle")}</h1>
      <p className="text-center text-lg font-bold one-col-text mb-4">
        {financialPeriod.start} - {financialPeriod.end}
      </p>
      <p className="text-center one-col-text">
        {tCommon("websiteDescription")}
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
            className="w-full flex flex-col lg:flex-row lg:items-start gap-x-3 gap-y-5"
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
                      <p>{t2024To2025("month.description")}</p>
                      <ResetButton />
                      <FormNumberInput
                        key="monthlyBaseSalary"
                        name="baseSalary"
                        label={t2024To2025("month.form.baseSalary.label")}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        key="monthlyTravelingAllowance"
                        name="travelingAllowance"
                        label={t2024To2025(
                          "month.form.travelingAllowance.label"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        key="monthlyPerformanceBonus"
                        name="performanceBonus"
                        label={t2024To2025("month.form.performanceBonus.label")}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        key="monthlyOtherTaxableIncome"
                        name="otherTaxableIncome"
                        label={t2024To2025(
                          "month.form.otherTaxableIncome.label"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormSelect
                        key="monthlyNumOfDependents"
                        name="numOfDependents"
                        label={t2024To2025("month.form.numOfDependents.label")}
                        placeholder="0"
                      >
                        <SelectItem key="0" value="0">
                          {t2024To2025("month.form.numOfDependents.items.0")}
                        </SelectItem>
                        <SelectItem key="1" value="1">
                          {t2024To2025("month.form.numOfDependents.items.1")}
                        </SelectItem>
                        <SelectItem key="2" value="2">
                          {t2024To2025("month.form.numOfDependents.items.2")}
                        </SelectItem>
                        <SelectItem key="3" value="3">
                          {t2024To2025("month.form.numOfDependents.items.3")}
                        </SelectItem>
                        <SelectItem key="4" value="4">
                          {t2024To2025("month.form.numOfDependents.items.4")}
                        </SelectItem>
                      </FormSelect>
                      <FormNumberInput
                        key="monthlyOtherTaxDeductions"
                        name="otherTaxDeductions"
                        label={t2024To2025(
                          "month.form.otherTaxDeductions.label"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormSelect
                        key="monthlyAge"
                        name="age"
                        label={t2024To2025("month.form.age.label")}
                      >
                        <SelectItem key="under18" value="under18">
                          {t2024To2025("month.form.age.items.under18")}
                        </SelectItem>
                        <SelectItem key="18To64" value="18To64">
                          {t2024To2025("month.form.age.items.18To64")}
                        </SelectItem>
                        <SelectItem key="65To69" value="65To69">
                          {t2024To2025("month.form.age.items.65To69")}
                        </SelectItem>
                        <SelectItem key="70AndOver" value="70AndOver">
                          {t2024To2025("month.form.age.items.70AndOver")}
                        </SelectItem>
                      </FormSelect>
                      <FormCheckbox name="isCitizen">
                        {t2024To2025("month.form.isCitizen.label")}
                      </FormCheckbox>
                      <FormCheckbox name="isResident">
                        {t2024To2025("month.form.isResident.label")}
                      </FormCheckbox>
                      <FormCheckbox name="isPublicSector">
                        {t2024To2025("month.form.isPublicSector.label")}
                      </FormCheckbox>
                      <FormCheckbox name="isPRB">
                        {t2024To2025("month.form.isPRB.label")}
                      </FormCheckbox>
                      <FormCheckbox name="isInDomesticService">
                        {t2024To2025("month.form.isInDomesticService.label")}
                      </FormCheckbox>
                    </form>
                  </CardBody>
                </Card>
                <Card radius="sm" className="lg:grow">
                  <CardBody>
                    <MonthlyCalculations />
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
                      className="flex flex-col gap-y-4 pb-1"
                    >
                      <Trans
                        t={t2024To2025}
                        i18nKey="year.description"
                        components={{
                          MRAExemptIncomeLink: (
                            <Link
                              href="https://www.mra.mu/index.php/individuals/exempt-income"
                              target="_blank"
                              rel="noreferrer noopener nofollow"
                            />
                          ),
                          MRADeductionsLink: (
                            <Link
                              href="https://www.mra.mu/index.php/individuals/reliefs-deductions-allowances"
                              target="_blank"
                              rel="noreferrer noopener nofollow"
                            />
                          ),
                        }}
                      />
                      <ResetButton />
                      <FormNumberInput
                        key="yearlyMonthlyBaseSalary"
                        name="monthlyBaseSalary"
                        label={t2024To2025("year.form.monthlyBaseSalary.label")}
                        description={t2024To2025(
                          "year.form.monthlyBaseSalary.description"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        key="yearlyTotalBaseSalary"
                        name="totalBaseSalary"
                        label={t2024To2025("year.form.totalBaseSalary.label")}
                        description={t2024To2025(
                          "year.form.totalBaseSalary.description"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        key="yearlyEoyBonus"
                        name="eoyBonus"
                        label={t2024To2025("year.form.eoyBonus.label")}
                        description={t2024To2025(
                          "year.form.eoyBonus.description"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        key="yearlyTravelingAllowance"
                        name="travelingAllowance"
                        label={t2024To2025(
                          "year.form.travelingAllowance.label"
                        )}
                        description={t2024To2025(
                          "year.form.travelingAllowance.description"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        key="yearlyPerformanceBonus"
                        name="performanceBonus"
                        label={t2024To2025("year.form.performanceBonus.label")}
                        description={t2024To2025(
                          "year.form.performanceBonus.description"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        key="yearlyOtherTaxableIncome"
                        name="otherTaxableIncome"
                        label={t2024To2025(
                          "year.form.otherTaxableIncome.label"
                        )}
                        description={t2024To2025(
                          "year.form.otherTaxableIncome.description"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormSelect
                        key="yearlyNumOfDependents"
                        name="numOfDependents"
                        label={t2024To2025("year.form.numOfDependents.label")}
                        placeholder="0"
                      >
                        <SelectItem key="0" value="0">
                          {t2024To2025("year.form.numOfDependents.items.0")}
                        </SelectItem>
                        <SelectItem key="1" value="1">
                          {t2024To2025("year.form.numOfDependents.items.1")}
                        </SelectItem>
                        <SelectItem key="2" value="2">
                          {t2024To2025("year.form.numOfDependents.items.2")}
                        </SelectItem>
                        <SelectItem key="3" value="3">
                          {t2024To2025("year.form.numOfDependents.items.3")}
                        </SelectItem>
                        <SelectItem key="4" value="4">
                          {t2024To2025("year.form.numOfDependents.items.4")}
                        </SelectItem>
                      </FormSelect>
                      <FormNumberInput
                        key="yearlyOtherTaxDeductions"
                        name="otherTaxDeductions"
                        label={t2024To2025(
                          "year.form.otherTaxDeductions.label"
                        )}
                        description={t2024To2025(
                          "year.form.otherTaxDeductions.description"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormSelect
                        key="yearlyAge"
                        name="age"
                        label={t2024To2025("year.form.age.label")}
                      >
                        <SelectItem key="under18" value="under18">
                          {t2024To2025("year.form.age.items.under18")}
                        </SelectItem>
                        <SelectItem key="18To64" value="18To64">
                          {t2024To2025("year.form.age.items.18To64")}
                        </SelectItem>
                        <SelectItem key="65To69" value="65To69">
                          {t2024To2025("year.form.age.items.65To69")}
                        </SelectItem>
                        <SelectItem key="70AndOver" value="70AndOver">
                          {t2024To2025("year.form.age.items.70AndOver")}
                        </SelectItem>
                      </FormSelect>
                      <FormCheckbox name="isCitizen">
                        {t2024To2025("year.form.isCitizen.label")}
                      </FormCheckbox>
                      <FormCheckbox name="isResident">
                        {t2024To2025("year.form.isResident.label")}
                      </FormCheckbox>
                      <FormCheckbox name="isPublicSector">
                        {t2024To2025("year.form.isPublicSector.label")}
                      </FormCheckbox>
                      <FormCheckbox name="isPRB">
                        {t2024To2025("year.form.isPRB.label")}
                      </FormCheckbox>
                      <FormCheckbox name="isInDomesticService">
                        {t2024To2025("year.form.isInDomesticService.label")}
                      </FormCheckbox>
                    </form>
                  </CardBody>
                </Card>
                <Card radius="sm" className="lg:grow">
                  <CardBody>
                    <YearlyCalculations />
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
        "2024-2025",
      ])),
    },
  };
};
