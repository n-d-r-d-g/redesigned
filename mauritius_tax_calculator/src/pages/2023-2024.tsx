import { Key, useCallback, useEffect, useRef, useState } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Formik, FormikProps, useFormikContext } from "formik";
import Joi from "joi";
import Decimal from "decimal.js";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  SelectItem,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
  getKeyValue,
} from "@nextui-org/react";
import { MdOutlineRefresh as MdOutlineRefreshIcon } from "react-icons/md";
import FormNumberInput from "@/components/form/FormNumberInput/FormNumberInput";
import FormSelect from "@/components/form/FormSelect/FormSelect";
import { joiFormikAdapter } from "@/utils/adapters/joi-formik-adapter";
import { decimalToString, noop } from "@/utils/functions";
import { DEFAULT_I18N_LOCALE, DEFAULT_I18N_NAMESPACE } from "../../constants";

interface MonthlyFormValues {
  baseSalary: number;
  travelingAllowance: number;
  internetAllowance: number;
  performanceBonus: number;
  otherTaxableIncome: number;
}

interface YearlyFormValues {
  baseSalary: number;
  eoyBonus: number;
  travelingAllowance: number;
  internetAllowance: number;
  performanceBonus: number;
  otherTaxableIncome: number;
  numOfDependents: "0" | "1" | "2" | "3" | "4";
  housingLoanInterest: number;
  medicalInsurance: number;
  otherTaxDeductions: number;
}

interface TaxCalcRow {
  key: string;
  taxableLimit: string;
  taxableAmount: string;
  taxRate: null | string;
  taxCharged: string;
}

const minAmount = 0;
const maxAmount = 999_999_999_999;
const mraMonthlyMaxNonTaxableTravelingAllowance = new Decimal(20_000);
const mraYearlyMaxNonTaxableTravelingAllowance =
  mraMonthlyMaxNonTaxableTravelingAllowance.mul(12);
const initialMonthlyTaxableBrackets = [
  {
    key: "1",
    limit: new Decimal(30_000),
    rate: new Decimal(0),
  },
  {
    key: "2",
    limit: new Decimal(3_077),
    rate: new Decimal(0.02),
  },
  {
    key: "3",
    limit: new Decimal(3_077),
    rate: new Decimal(0.04),
  },
  {
    key: "4",
    limit: new Decimal(4_615),
    rate: new Decimal(0.06),
  },
  {
    key: "5",
    limit: new Decimal(4_615),
    rate: new Decimal(0.08),
  },
  {
    key: "6",
    limit: new Decimal(23_077),
    rate: new Decimal(0.1),
  },
  {
    key: "7",
    limit: new Decimal(23_077),
    rate: new Decimal(0.12),
  },
  {
    key: "8",
    limit: new Decimal(23_077),
    rate: new Decimal(0.14),
  },
  {
    key: "9",
    limit: new Decimal(30_769),
    rate: new Decimal(0.16),
  },
  {
    key: "10",
    limit: new Decimal(38_462),
    rate: new Decimal(0.18),
  },
  {
    key: "11",
    rate: new Decimal(0.2),
  },
];
const initialYearlyTaxableBrackets = [
  {
    key: "1",
    limit: new Decimal(390_000),
    rate: new Decimal(0),
  },
  {
    key: "2",
    limit: new Decimal(40_000),
    rate: new Decimal(0.02),
  },
  {
    key: "3",
    limit: new Decimal(40_000),
    rate: new Decimal(0.04),
  },
  {
    key: "4",
    limit: new Decimal(60_000),
    rate: new Decimal(0.06),
  },
  {
    key: "5",
    limit: new Decimal(60_000),
    rate: new Decimal(0.08),
  },
  {
    key: "6",
    limit: new Decimal(300_000),
    rate: new Decimal(0.1),
  },
  {
    key: "7",
    limit: new Decimal(300_000),
    rate: new Decimal(0.12),
  },
  {
    key: "8",
    limit: new Decimal(300_000),
    rate: new Decimal(0.14),
  },
  {
    key: "9",
    limit: new Decimal(400_000),
    rate: new Decimal(0.16),
  },
  {
    key: "10",
    limit: new Decimal(500_000),
    rate: new Decimal(0.18),
  },
  {
    key: "11",
    rate: new Decimal(0.2),
  },
];
const ietDependentDeductions = {
  0: new Decimal(0),
  1: new Decimal(110_000),
  2: new Decimal(190_000),
  3: new Decimal(275_000),
  4: new Decimal(355_000),
};

type TabKey = "month" | "year";

function ResetButton() {
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
    >
      {tCommon("reset")}
    </Button>
  );
}

function MonthlyCalculations() {
  const { t: tCommon } = useTranslation("common");
  const { t: t2023To2024 } = useTranslation("2023-2024");
  const { values, isValid } = useFormikContext<MonthlyFormValues>();
  const [baseSalary, setBaseSalary] = useState(new Decimal(0));
  const [travelingAllowance, setTravelingAllowance] = useState(new Decimal(0));
  const [maxNonTaxableTravelingAllowance, setMaxNonTaxableTravelingAllowance] =
    useState(new Decimal(0));
  const [taxableTravelingAllowance, setTaxableTravelingAllowance] = useState(
    new Decimal(0)
  );
  const [internetAllowance, setInternetAllowance] = useState(new Decimal(0));
  const [performanceBonus, setPerformanceBonus] = useState(new Decimal(0));
  const [otherTaxableIncome, setOtherTaxableIncome] = useState(new Decimal(0));
  const [chargeableIncome, setChargeableIncome] = useState(new Decimal(0));
  const [taxCharged, setTaxCharged] = useState(new Decimal(0));
  const [monthlyTaxChargedCalcRows, setMonthlyTaxChargedCalcRows] = useState<
    Array<TaxCalcRow>
  >([]);

  useEffect(() => {
    if (isValid) {
      try {
        const newBaseSalary = new Decimal(values.baseSalary);
        const newTravelingAllowance = new Decimal(values.travelingAllowance);
        const baseSalaryTimes25Percent = newBaseSalary.dividedBy(4);
        const newMaxNonTaxableTravelingAllowance = Decimal.min(
          mraMonthlyMaxNonTaxableTravelingAllowance,
          baseSalaryTimes25Percent
        );
        const newTaxableTravelingAllowance =
          newTravelingAllowance.lessThanOrEqualTo(
            newMaxNonTaxableTravelingAllowance
          )
            ? new Decimal(0)
            : newTravelingAllowance.sub(newMaxNonTaxableTravelingAllowance);
        const newInternetAllowance = new Decimal(values.internetAllowance);
        const newPerformanceBonus = new Decimal(values.performanceBonus);
        const newOtherTaxableIncome = new Decimal(values.otherTaxableIncome);
        const newChargeableIncome = newBaseSalary
          .add(newTaxableTravelingAllowance)
          .add(newInternetAllowance)
          .add(newPerformanceBonus)
          .add(newOtherTaxableIncome);
        let remainder = newChargeableIncome;
        let newTotalTaxCharged = new Decimal(0);
        const newMonthlyTaxChargedCalcRows = [
          ...initialMonthlyTaxableBrackets.map((bracket, index) => {
            if (!bracket.limit || remainder.lessThan(bracket.limit)) {
              const taxableAmount = remainder;
              const taxCharged = taxableAmount.mul(bracket.rate);
              newTotalTaxCharged = newTotalTaxCharged.add(taxCharged);
              remainder = remainder.sub(remainder);

              return {
                key: String(index),
                taxableLimit: bracket.limit
                  ? decimalToString(bracket.limit)
                  : t2023To2024(
                      "month.output.taxCharged.table.taxableLimits.remainder"
                    ),
                taxableAmount: decimalToString(taxableAmount, 2),
                taxRate: decimalToString(bracket.rate.mul(100)),
                taxCharged: decimalToString(taxCharged, 2),
              };
            }

            const taxableAmount = bracket.limit;
            const taxCharged = taxableAmount.mul(bracket.rate);
            newTotalTaxCharged = newTotalTaxCharged.add(taxCharged);
            remainder = remainder.sub(bracket.limit);

            return {
              key: String(index),
              taxableLimit: decimalToString(bracket.limit),
              taxableAmount: decimalToString(taxableAmount, 2),
              taxRate: decimalToString(bracket.rate.mul(100)),
              taxCharged: decimalToString(taxCharged, 2),
            };
          }),
          {
            key: "aggregations",
            taxableLimit: t2023To2024(
              "month.output.taxCharged.table.taxableLimits.taxCharged"
            ),
            taxableAmount: decimalToString(newChargeableIncome, 2),
            taxRate: null,
            taxCharged: decimalToString(newTotalTaxCharged, 2),
          },
        ];

        setBaseSalary(newBaseSalary);
        setTravelingAllowance(newTravelingAllowance);
        setMaxNonTaxableTravelingAllowance(newMaxNonTaxableTravelingAllowance);
        setTaxableTravelingAllowance(newTaxableTravelingAllowance);
        setInternetAllowance(newInternetAllowance);
        setPerformanceBonus(newPerformanceBonus);
        setOtherTaxableIncome(newOtherTaxableIncome);
        setChargeableIncome(newChargeableIncome);
        setTaxCharged(newTotalTaxCharged);
        setMonthlyTaxChargedCalcRows(newMonthlyTaxChargedCalcRows);
      } catch {
        // There are scenarios where isValid hasn't changed to false yet but the values containing errors are being used for calculations
      }
    }
  }, [
    isValid,
    t2023To2024,
    values.baseSalary,
    values.internetAllowance,
    values.otherTaxableIncome,
    values.performanceBonus,
    values.travelingAllowance,
  ]);

  if (!isValid)
    return (
      <p className="text-sm text-center text-default-600">
        {tCommon("errors.formContainsErrors")}
      </p>
    );

  return (
    <Accordion selectionMode="multiple" variant="splitted" className="px-0">
      <AccordionItem
        key="chargeableIncome"
        aria-label={`Rs ${decimalToString(chargeableIncome, 2)}`}
        title={`Rs ${decimalToString(chargeableIncome, 2)}`}
        subtitle={t2023To2024("month.output.chargeableIncome.subtitle")}
        classNames={{
          heading: "m-0 py-2",
          content: "pb-4",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
        isCompact
      >
        <Table
          aria-label={t2023To2024("month.output.chargeableIncome.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn className="uppercase">
              {t2023To2024(
                "month.output.chargeableIncome.table.headers.incomeDescription"
              )}
            </TableColumn>
            <TableColumn align="end" className="uppercase">
              {t2023To2024(
                "month.output.chargeableIncome.table.headers.subAmount"
              )}
            </TableColumn>
            <TableColumn align="end" className="uppercase">
              {t2023To2024(
                "month.output.chargeableIncome.table.headers.amount"
              )}
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="baseSalary">
              <TableCell>
                {t2023To2024(
                  "month.output.chargeableIncome.table.incomeDescription.baseSalary"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end">
                {decimalToString(baseSalary, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="travelingAllowance">
              <TableCell>
                {t2023To2024(
                  "month.output.chargeableIncome.table.incomeDescription.travelingAllowance"
                )}
              </TableCell>
              <TableCell className="text-end">
                {decimalToString(travelingAllowance, 2)}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
            </TableRow>
            <TableRow key="maxNonTaxableTravelingAllowance">
              <TableCell>
                {t2023To2024(
                  "month.output.chargeableIncome.table.incomeDescription.maxNonTaxableTravelingAllowance",
                  {
                    maxAllowance: `Rs ${decimalToString(
                      mraMonthlyMaxNonTaxableTravelingAllowance
                    )}`,
                  }
                )}
              </TableCell>
              <TableCell className="text-end">
                {decimalToString(maxNonTaxableTravelingAllowance, 2)}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
            </TableRow>
            <TableRow key="taxableTravelingAllowance">
              <TableCell>
                {t2023To2024(
                  "month.output.chargeableIncome.table.incomeDescription.taxableTravelingAllowance"
                )}
              </TableCell>
              <TableCell className="text-end border-t-1 border-default-500">
                {decimalToString(taxableTravelingAllowance, 2)}
              </TableCell>
              <TableCell className="text-end">
                {decimalToString(taxableTravelingAllowance, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="internetAllowance">
              <TableCell>
                {t2023To2024(
                  "month.output.chargeableIncome.table.incomeDescription.internetAllowance"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end">
                {decimalToString(internetAllowance, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="performanceBonus">
              <TableCell>
                {t2023To2024(
                  "month.output.chargeableIncome.table.incomeDescription.performanceBonus"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end">
                {decimalToString(performanceBonus, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="otherTaxableIncome">
              <TableCell>
                {t2023To2024(
                  "month.output.chargeableIncome.table.incomeDescription.otherTaxableIncome"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end">
                {decimalToString(otherTaxableIncome, 2)}
              </TableCell>
            </TableRow>
            <TableRow
              key="chargeableIncome"
              className="border-t-1 border-default-500"
            >
              <TableCell className="font-bold">
                {t2023To2024(
                  "month.output.chargeableIncome.table.incomeDescription.chargeableIncome"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end font-bold border-b-4 border-double border-default-500">
                {decimalToString(chargeableIncome, 2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </AccordionItem>
      <AccordionItem
        key="taxCharged"
        aria-label={`Rs ${decimalToString(taxCharged)}`}
        title={`Rs ${decimalToString(taxCharged)}`}
        subtitle={t2023To2024("month.output.taxCharged.subtitle")}
        classNames={{
          heading: "m-0",
          title: "text-3xl text-success-700 dark:text-success",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
      >
        <p className="text-sm mb-1">
          {t2023To2024("month.output.taxCharged.calculationDescription")}
        </p>
        <Trans
          t={t2023To2024}
          i18nKey="month.output.taxCharged.calculationSteps"
          components={{
            ul: <ul className="text-sm leading-6" />,
          }}
        />
        <Table
          aria-label={t2023To2024("month.output.taxCharged.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn
              key="taxableLimit"
              align="end"
              className="uppercase text-end"
            >
              {t2023To2024(
                "month.output.taxCharged.table.headers.taxableLimit"
              )}
            </TableColumn>
            <TableColumn
              key="taxableAmount"
              align="end"
              className="uppercase text-end"
            >
              {t2023To2024(
                "month.output.taxCharged.table.headers.taxableAmount"
              )}
            </TableColumn>
            <TableColumn
              key="taxRate"
              align="end"
              className="uppercase text-end"
            >
              {t2023To2024("month.output.taxCharged.table.headers.taxRate")}
            </TableColumn>
            <TableColumn
              key="taxCharged"
              align="end"
              className="uppercase text-end"
            >
              {t2023To2024("month.output.taxCharged.table.headers.taxCharged")}
            </TableColumn>
          </TableHeader>
          <TableBody items={monthlyTaxChargedCalcRows}>
            {(row) => (
              <TableRow
                key={row.key}
                className={
                  row.key === "aggregations"
                    ? "border-t-1 border-default-500"
                    : ""
                }
              >
                {(columnKey) => (
                  <TableCell
                    className={`text-end ${
                      row.key === "aggregations" &&
                      columnKey !== "taxableAmount" &&
                      "font-bold"
                    } ${
                      row.key === "aggregations" &&
                      columnKey === "taxCharged" &&
                      "border-b-4 border-double border-default-500"
                    }`}
                  >
                    {getKeyValue(row, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </AccordionItem>
    </Accordion>
  );
}

function YearlyCalculations() {
  const { t: tCommon } = useTranslation("common");
  const { t: t2023To2024 } = useTranslation("2023-2024");
  const { values, isValid } = useFormikContext<YearlyFormValues>();
  const [baseSalary, setBaseSalary] = useState(new Decimal(0));
  const [eoyBonus, setEOYBonus] = useState(new Decimal(0));
  const [travelingAllowance, setTravelingAllowance] = useState(new Decimal(0));
  const [maxNonTaxableTravelingAllowance, setMaxNonTaxableTravelingAllowance] =
    useState(new Decimal(0));
  const [taxableTravelingAllowance, setTaxableTravelingAllowance] = useState(
    new Decimal(0)
  );
  const [internetAllowance, setInternetAllowance] = useState(new Decimal(0));
  const [performanceBonus, setPerformanceBonus] = useState(new Decimal(0));
  const [otherTaxableIncome, setOtherTaxableIncome] = useState(new Decimal(0));
  const [totalIncome, setTotalIncome] = useState(new Decimal(0));
  const [ietDeductions, setIETDeductions] = useState(new Decimal(0));
  const [medicalInsurance, setMedicalInsurance] = useState(new Decimal(0));
  const [housingLoanInterest, setHousingLoanInterest] = useState(
    new Decimal(0)
  );
  const [otherTaxDeductions, setOtherTaxDeductions] = useState(new Decimal(0));
  const [totalDeductions, setTotalDeductions] = useState(new Decimal(0));
  const [chargeableIncome, setChargeableIncome] = useState(new Decimal(0));
  const [taxCharged, setTaxCharged] = useState(new Decimal(0));
  const [yearlyTaxChargedCalcRows, setYearlyTaxChargedCalcRows] = useState<
    Array<TaxCalcRow>
  >([]);

  useEffect(() => {
    if (isValid) {
      try {
        const newBaseSalary = new Decimal(values.baseSalary);
        const newEOYBonus = new Decimal(values.eoyBonus);
        const newTravelingAllowance = new Decimal(values.travelingAllowance);
        const baseSalaryTimes25Percent = newBaseSalary.dividedBy(4);
        const newMaxNonTaxableTravelingAllowance = Decimal.min(
          mraYearlyMaxNonTaxableTravelingAllowance,
          baseSalaryTimes25Percent
        );
        const newTaxableTravelingAllowance =
          newTravelingAllowance.lessThanOrEqualTo(
            newMaxNonTaxableTravelingAllowance
          )
            ? new Decimal(0)
            : newTravelingAllowance.sub(newMaxNonTaxableTravelingAllowance);
        const newInternetAllowance = new Decimal(values.internetAllowance);
        const newPerformanceBonus = new Decimal(values.performanceBonus);
        const newOtherTaxableIncome = new Decimal(values.otherTaxableIncome);
        const newTotalIncome = newBaseSalary
          .add(newEOYBonus)
          .add(newTaxableTravelingAllowance)
          .add(newInternetAllowance)
          .add(newPerformanceBonus)
          .add(newOtherTaxableIncome);
        const newIETDeductions = ietDependentDeductions[values.numOfDependents];
        const newMedicalInsurance = new Decimal(values.medicalInsurance);
        const newHousingLoanInterest = new Decimal(values.housingLoanInterest);
        const newOtherTaxDeductions = new Decimal(values.otherTaxDeductions);
        const newTotalDeductions = newIETDeductions
          .add(newMedicalInsurance)
          .add(newHousingLoanInterest)
          .add(newOtherTaxDeductions);
        const newChargeableIncome = newTotalIncome.sub(newTotalDeductions);
        let remainder = newChargeableIncome;
        let newTotalTaxCharged = new Decimal(0);
        const newYearlyTaxChargedCalcRows = [
          ...initialYearlyTaxableBrackets.map((bracket, index) => {
            if (!bracket.limit || remainder.lessThan(bracket.limit)) {
              const taxableAmount = remainder;
              const taxCharged = taxableAmount.mul(bracket.rate);
              newTotalTaxCharged = newTotalTaxCharged.add(taxCharged);
              remainder = remainder.sub(remainder);

              return {
                key: String(index),
                taxableLimit: bracket.limit
                  ? decimalToString(bracket.limit)
                  : t2023To2024(
                      "month.output.taxCharged.table.taxableLimits.remainder"
                    ),
                taxableAmount: decimalToString(taxableAmount, 2),
                taxRate: decimalToString(bracket.rate.mul(100)),
                taxCharged: decimalToString(taxCharged, 2),
              };
            }

            const taxableAmount = bracket.limit;
            const taxCharged = taxableAmount.mul(bracket.rate);
            newTotalTaxCharged = newTotalTaxCharged.add(taxCharged);
            remainder = remainder.sub(bracket.limit);

            return {
              key: String(index),
              taxableLimit: decimalToString(bracket.limit),
              taxableAmount: decimalToString(taxableAmount, 2),
              taxRate: decimalToString(bracket.rate.mul(100)),
              taxCharged: decimalToString(taxCharged, 2),
            };
          }),
          {
            key: "aggregations",
            taxableLimit: t2023To2024(
              "month.output.taxCharged.table.taxableLimits.taxCharged"
            ),
            taxableAmount: decimalToString(newChargeableIncome, 2),
            taxRate: null,
            taxCharged: decimalToString(newTotalTaxCharged, 2),
          },
        ];

        setBaseSalary(newBaseSalary);
        setEOYBonus(newEOYBonus);
        setTravelingAllowance(newTravelingAllowance);
        setMaxNonTaxableTravelingAllowance(newMaxNonTaxableTravelingAllowance);
        setTaxableTravelingAllowance(newTaxableTravelingAllowance);
        setInternetAllowance(newInternetAllowance);
        setPerformanceBonus(newPerformanceBonus);
        setOtherTaxableIncome(newOtherTaxableIncome);
        setTotalIncome(newTotalIncome);
        setIETDeductions(newIETDeductions);
        setMedicalInsurance(newMedicalInsurance);
        setHousingLoanInterest(newHousingLoanInterest);
        setOtherTaxDeductions(newOtherTaxDeductions);
        setTotalDeductions(newTotalDeductions);
        setChargeableIncome(newChargeableIncome);
        setTaxCharged(newTotalTaxCharged);
        setYearlyTaxChargedCalcRows(newYearlyTaxChargedCalcRows);
      } catch {
        // There are scenarios where isValid hasn't changed to false yet but the values containing errors are being used for calculations
      }
    }
  }, [
    isValid,
    t2023To2024,
    values.baseSalary,
    values.eoyBonus,
    values.housingLoanInterest,
    values.internetAllowance,
    values.medicalInsurance,
    values.numOfDependents,
    values.otherTaxDeductions,
    values.otherTaxableIncome,
    values.performanceBonus,
    values.travelingAllowance,
  ]);

  if (!isValid)
    return (
      <p className="text-sm text-center text-default-600">
        {tCommon("errors.formContainsErrors")}
      </p>
    );

  return (
    <Accordion selectionMode="multiple" variant="splitted" className="px-0">
      <AccordionItem
        key="chargeableIncome"
        aria-label={`Rs ${decimalToString(chargeableIncome, 2)}`}
        title={`Rs ${decimalToString(chargeableIncome, 2)}`}
        subtitle={t2023To2024("year.output.chargeableIncome.subtitle")}
        classNames={{
          heading: "m-0 py-2",
          content: "pb-4",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
        isCompact
      >
        <Table
          aria-label={t2023To2024("year.output.chargeableIncome.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn className="uppercase">
              {t2023To2024(
                "year.output.chargeableIncome.table.headers.description"
              )}
            </TableColumn>
            <TableColumn align="end" className="uppercase">
              {t2023To2024(
                "year.output.chargeableIncome.table.headers.subAmount"
              )}
            </TableColumn>
            <TableColumn align="end" className="uppercase">
              {t2023To2024("year.output.chargeableIncome.table.headers.amount")}
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="baseSalary">
              <TableCell>
                {t2023To2024(
                  "year.output.chargeableIncome.table.description.baseSalary"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end">
                {decimalToString(baseSalary, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="eoyBonus">
              <TableCell>
                {t2023To2024(
                  "year.output.chargeableIncome.table.description.eoyBonus"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end">
                {decimalToString(eoyBonus, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="travelingAllowance">
              <TableCell>
                {t2023To2024(
                  "year.output.chargeableIncome.table.description.travelingAllowance"
                )}
              </TableCell>
              <TableCell className="text-end">
                {decimalToString(travelingAllowance, 2)}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
            </TableRow>
            <TableRow key="maxNonTaxableTravelingAllowance">
              <TableCell>
                {t2023To2024(
                  "year.output.chargeableIncome.table.description.maxNonTaxableTravelingAllowance",
                  {
                    maxAllowance: `Rs ${decimalToString(
                      mraYearlyMaxNonTaxableTravelingAllowance
                    )}`,
                  }
                )}
              </TableCell>
              <TableCell className="text-end">
                {decimalToString(maxNonTaxableTravelingAllowance, 2)}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
            </TableRow>
            <TableRow key="taxableTravelingAllowance">
              <TableCell>
                {t2023To2024(
                  "year.output.chargeableIncome.table.description.taxableTravelingAllowance"
                )}
              </TableCell>
              <TableCell className="text-end border-t-1 border-default-500">
                {decimalToString(taxableTravelingAllowance, 2)}
              </TableCell>
              <TableCell className="text-end">
                {decimalToString(taxableTravelingAllowance, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="internetAllowance">
              <TableCell>
                {t2023To2024(
                  "year.output.chargeableIncome.table.description.internetAllowance"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end">
                {decimalToString(internetAllowance, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="performanceBonus">
              <TableCell>
                {t2023To2024(
                  "year.output.chargeableIncome.table.description.performanceBonus"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end">
                {decimalToString(performanceBonus, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="otherTaxableIncome">
              <TableCell>
                {t2023To2024(
                  "year.output.chargeableIncome.table.description.otherTaxableIncome"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end">
                {decimalToString(otherTaxableIncome, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="totalIncome">
              <TableCell className="font-bold italic">
                {t2023To2024(
                  "year.output.chargeableIncome.table.description.totalIncome"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end font-bold border-t-1 border-default-500">
                {decimalToString(totalIncome, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="ietDeductions">
              <TableCell>
                {t2023To2024(
                  "year.output.chargeableIncome.table.description.ietDeductions"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end">
                {decimalToString(ietDeductions, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="medicalInsurance">
              <TableCell>
                {t2023To2024(
                  "year.output.chargeableIncome.table.description.medicalInsurance"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end">
                {decimalToString(medicalInsurance, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="housingLoanInterest">
              <TableCell>
                {t2023To2024(
                  "year.output.chargeableIncome.table.description.housingLoanInterest"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end">
                {decimalToString(housingLoanInterest, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="otherTaxDeductions">
              <TableCell>
                {t2023To2024(
                  "year.output.chargeableIncome.table.description.otherTaxDeductions"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end">
                {decimalToString(otherTaxDeductions, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="totalDeductions">
              <TableCell className="font-bold italic">
                {t2023To2024(
                  "year.output.chargeableIncome.table.description.totalDeductions"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end font-bold border-t-1 border-default-500">
                {decimalToString(totalDeductions, 2)}
              </TableCell>
            </TableRow>
            <TableRow
              key="chargeableIncome"
              className="border-t-1 border-default-500"
            >
              <TableCell className="font-bold">
                {t2023To2024(
                  "year.output.chargeableIncome.table.description.chargeableIncome"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end font-bold border-b-4 border-double border-default-500">
                {decimalToString(chargeableIncome, 2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </AccordionItem>
      <AccordionItem
        key="taxCharged"
        aria-label={`Rs ${decimalToString(taxCharged)}`}
        title={`Rs ${decimalToString(taxCharged)}`}
        subtitle={t2023To2024("year.output.taxCharged.subtitle")}
        classNames={{
          heading: "m-0",
          title: "text-3xl text-success-700 dark:text-success",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
      >
        <p className="text-sm mb-1">
          {t2023To2024("year.output.taxCharged.calculationDescription")}
        </p>
        <Trans
          t={t2023To2024}
          i18nKey="year.output.taxCharged.calculationSteps"
          components={{
            ul: <ul className="text-sm leading-6" />,
          }}
        />
        <Table
          aria-label={t2023To2024("year.output.taxCharged.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn
              key="taxableLimit"
              align="end"
              className="uppercase text-end"
            >
              {t2023To2024("year.output.taxCharged.table.headers.taxableLimit")}
            </TableColumn>
            <TableColumn
              key="taxableAmount"
              align="end"
              className="uppercase text-end"
            >
              {t2023To2024(
                "year.output.taxCharged.table.headers.taxableAmount"
              )}
            </TableColumn>
            <TableColumn
              key="taxRate"
              align="end"
              className="uppercase text-end"
            >
              {t2023To2024("year.output.taxCharged.table.headers.taxRate")}
            </TableColumn>
            <TableColumn
              key="taxCharged"
              align="end"
              className="uppercase text-end"
            >
              {t2023To2024("year.output.taxCharged.table.headers.taxCharged")}
            </TableColumn>
          </TableHeader>
          <TableBody items={yearlyTaxChargedCalcRows}>
            {(row) => (
              <TableRow
                key={row.key}
                className={
                  row.key === "aggregations"
                    ? "border-t-1 border-default-500"
                    : ""
                }
              >
                {(columnKey) => (
                  <TableCell
                    className={`text-end ${
                      row.key === "aggregations" &&
                      columnKey !== "taxableAmount" &&
                      "font-bold"
                    } ${
                      row.key === "aggregations" &&
                      columnKey === "taxCharged" &&
                      "border-b-4 border-double border-default-500"
                    }`}
                  >
                    {getKeyValue(row, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </AccordionItem>
    </Accordion>
  );
}

export default function FinancialYear2023To2024() {
  const { t: tCommon } = useTranslation("common");
  const { t: t2023To2024 } = useTranslation("2023-2024");
  const [selectedTab, setSelectedTab] = useState<TabKey>("month");
  const monthlySchema = Joi.object({
    baseSalary: Joi.number().required().min(minAmount).max(maxAmount),
    travelingAllowance: Joi.number().required().min(minAmount).max(maxAmount),
    internetAllowance: Joi.number().required().min(minAmount).max(maxAmount),
    performanceBonus: Joi.number().required().min(minAmount).max(maxAmount),
    otherTaxableIncome: Joi.number().required().min(minAmount).max(maxAmount),
  }).messages({
    "any.required": tCommon("errors.required"),
    "number.base": tCommon("errors.numberInvalid"),
    "number.min": tCommon("errors.numberGTE", { count: minAmount }),
    "number.max": tCommon("errors.numberLTE", { count: maxAmount }),
  });
  const yearlySchema = Joi.object({
    baseSalary: Joi.number().required().min(minAmount).max(maxAmount),
    eoyBonus: Joi.number().required().min(minAmount).max(maxAmount),
    travelingAllowance: Joi.number().required().min(minAmount).max(maxAmount),
    internetAllowance: Joi.number().required().min(minAmount).max(maxAmount),
    performanceBonus: Joi.number().required().min(minAmount).max(maxAmount),
    otherTaxableIncome: Joi.number().required().min(minAmount).max(maxAmount),
    numOfDependents: Joi.string().required(),
    housingLoanInterest: Joi.number().required().min(minAmount).max(maxAmount),
    medicalInsurance: Joi.number().required().min(minAmount).max(maxAmount),
    otherTaxDeductions: Joi.number().required().min(minAmount).max(maxAmount),
  }).messages({
    "any.required": tCommon("errors.required"),
    "number.base": tCommon("errors.numberInvalid"),
    "number.min": tCommon("errors.numberGTE", { count: minAmount }),
    "number.max": tCommon("errors.numberLTE", { count: maxAmount }),
  });
  const [monthlyFormikValues, setMonthlyFormikValues] =
    useState<MonthlyFormValues>({
      baseSalary: 0,
      travelingAllowance: 0,
      internetAllowance: 0,
      performanceBonus: 0,
      otherTaxableIncome: 0,
    });
  const [yearlyFormikValues, setYearlyFormikValues] =
    useState<YearlyFormValues>({
      baseSalary: 0,
      eoyBonus: 0,
      travelingAllowance: 0,
      internetAllowance: 0,
      performanceBonus: 0,
      otherTaxableIncome: 0,
      numOfDependents: "0",
      housingLoanInterest: 0,
      medicalInsurance: 0,
      otherTaxDeductions: 0,
    });
  const monthlyFormikRef = useRef<FormikProps<MonthlyFormValues>>(null);
  const yearlyFormikRef = useRef<FormikProps<YearlyFormValues>>(null);

  const handleSelectedTabChange = useCallback((newTab: Key) => {
    if (newTab === "month") {
      setYearlyFormikValues(
        (prevValues) => yearlyFormikRef.current?.values ?? prevValues
      );
    } else {
      setMonthlyFormikValues(
        (prevValues) => monthlyFormikRef.current?.values ?? prevValues
      );
    }

    setSelectedTab(newTab as TabKey);
  }, []);

  return (
    <>
      <h1>{tCommon("websiteTitle")}</h1>
      <p className="text-center one-col-text">
        {tCommon("websiteDescription")}
      </p>
      <div className="w-[80rem] max-w-full flex flex-col items-center pb-24 mx-auto">
        <Tabs
          aria-label={tCommon("calculationPeriodLabel")}
          radius="sm"
          selectedKey={selectedTab}
          onSelectionChange={handleSelectedTabChange}
          className="mt-8 mb-2 mx-auto"
        >
          <Tab
            key="month"
            title={tCommon("calculationPeriods.month")}
            className="w-full flex flex-col lg:flex-row lg:items-start gap-x-3 gap-y-5"
          >
            <Formik
              innerRef={monthlyFormikRef}
              initialValues={monthlyFormikValues}
              onSubmit={noop}
              validationSchema={joiFormikAdapter(monthlySchema)}
              enableReinitialize
              validateOnMount
            >
              <>
                <Card
                  radius="sm"
                  shadow="sm"
                  className="lg:basis-1/3 lg:shrink-0"
                >
                  <CardBody>
                    <form className="flex flex-col gap-y-5 pb-1">
                      <p>{t2023To2024("month.description")}</p>
                      <ResetButton />
                      <FormNumberInput
                        name="baseSalary"
                        label={t2023To2024("month.form.baseSalary.label")}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        name="travelingAllowance"
                        label={t2023To2024(
                          "month.form.travelingAllowance.label"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        name="internetAllowance"
                        label={t2023To2024(
                          "month.form.internetAllowance.label"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        name="performanceBonus"
                        label={t2023To2024("month.form.performanceBonus.label")}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        name="otherTaxableIncome"
                        label={t2023To2024(
                          "month.form.otherTaxableIncome.label"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
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
              innerRef={yearlyFormikRef}
              initialValues={yearlyFormikValues}
              onSubmit={noop}
              validationSchema={joiFormikAdapter(yearlySchema)}
              enableReinitialize
              validateOnMount
            >
              <>
                <Card
                  radius="sm"
                  shadow="sm"
                  className="lg:basis-1/3 lg:shrink-0"
                >
                  <CardBody>
                    <form className="flex flex-col gap-y-4 pb-1">
                      <Trans
                        t={t2023To2024}
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
                        name="baseSalary"
                        label={t2023To2024("year.form.baseSalary.label")}
                        description={t2023To2024(
                          "year.form.baseSalary.description"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        name="eoyBonus"
                        label={t2023To2024("year.form.eoyBonus.label")}
                        description={t2023To2024(
                          "year.form.eoyBonus.description"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        name="travelingAllowance"
                        label={t2023To2024(
                          "year.form.travelingAllowance.label"
                        )}
                        description={t2023To2024(
                          "year.form.travelingAllowance.description"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        name="internetAllowance"
                        label={t2023To2024("year.form.internetAllowance.label")}
                        description={t2023To2024(
                          "year.form.internetAllowance.description"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        name="performanceBonus"
                        label={t2023To2024("year.form.performanceBonus.label")}
                        description={t2023To2024(
                          "year.form.performanceBonus.description"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        name="otherTaxableIncome"
                        label={t2023To2024(
                          "year.form.otherTaxableIncome.label"
                        )}
                        description={t2023To2024(
                          "year.form.otherTaxableIncome.description"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormSelect
                        name="numOfDependents"
                        label={t2023To2024("year.form.numOfDependents.label")}
                        placeholder="0"
                      >
                        <SelectItem key="0" value="0">
                          {t2023To2024("year.form.numOfDependents.items.0")}
                        </SelectItem>
                        <SelectItem key="1" value="1">
                          {t2023To2024("year.form.numOfDependents.items.1")}
                        </SelectItem>
                        <SelectItem key="2" value="2">
                          {t2023To2024("year.form.numOfDependents.items.2")}
                        </SelectItem>
                        <SelectItem key="3" value="3">
                          {t2023To2024("year.form.numOfDependents.items.3")}
                        </SelectItem>
                        <SelectItem key="4" value="4">
                          {t2023To2024("year.form.numOfDependents.items.4")}
                        </SelectItem>
                      </FormSelect>
                      <FormNumberInput
                        name="medicalInsurance"
                        label={t2023To2024("year.form.medicalInsurance.label")}
                        description={t2023To2024(
                          "year.form.medicalInsurance.description"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        name="housingLoanInterest"
                        label={t2023To2024(
                          "year.form.housingLoanInterest.label"
                        )}
                        description={t2023To2024(
                          "year.form.housingLoanInterest.description"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
                      <FormNumberInput
                        name="otherTaxDeductions"
                        label={t2023To2024(
                          "year.form.otherTaxDeductions.label"
                        )}
                        description={t2023To2024(
                          "year.form.otherTaxDeductions.description"
                        )}
                        placeholder="0"
                        currency="Rs"
                        min={0}
                      />
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
        "2023-2024",
      ])),
    },
  };
};
