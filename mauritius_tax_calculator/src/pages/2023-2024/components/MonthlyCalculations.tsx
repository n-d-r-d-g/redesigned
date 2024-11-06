import { useEffect, useState } from "react";
import { Trans, useTranslation } from "next-i18next";
import { useFormikContext } from "formik";
import Decimal from "decimal.js";
import {
  Accordion,
  AccordionItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { decimalToString } from "@/utils/functions";
import {
  INITIAL_MONTHLY_TAXABLE_BRACKETS,
  MRA_MONTHLY_MAX_NON_TAXABLE_TRAVELING_ALLOWANCE,
} from "../reusables";
import { MonthlyFormValues, TaxCalcRow } from "../types";

export default function MonthlyCalculations() {
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
  const [incomeAfterTaxes, setIncomeAfterTaxes] = useState(new Decimal(0));
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
          MRA_MONTHLY_MAX_NON_TAXABLE_TRAVELING_ALLOWANCE,
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
        let newIncomeAfterTaxes = newBaseSalary
          .add(newTaxableTravelingAllowance)
          .add(newInternetAllowance)
          .add(newPerformanceBonus)
          .add(newOtherTaxableIncome);
        let remainder = newChargeableIncome;
        let newTotalTaxCharged = new Decimal(0);
        const newMonthlyTaxChargedCalcRows = [
          ...INITIAL_MONTHLY_TAXABLE_BRACKETS.map((bracket, index) => {
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
        newIncomeAfterTaxes = newIncomeAfterTaxes.sub(newTotalTaxCharged);

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
        setIncomeAfterTaxes(newIncomeAfterTaxes);
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
                      MRA_MONTHLY_MAX_NON_TAXABLE_TRAVELING_ALLOWANCE
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
      <AccordionItem
        key="incomeAfterTaxes"
        aria-label={`Rs ${decimalToString(incomeAfterTaxes)}`}
        title={`Rs ${decimalToString(incomeAfterTaxes)}`}
        subtitle={t2023To2024("month.output.incomeAfterTaxes.subtitle")}
        classNames={{
          heading: "m-0 py-2",
          content: "pb-4",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
        isCompact
      >
        <p className="text-sm mb-1">
          {t2023To2024("month.output.incomeAfterTaxes.description")}
        </p>
        <p className="text-sm">
          = {`Rs ${decimalToString(incomeAfterTaxes, 2)}`}
        </p>
      </AccordionItem>
    </Accordion>
  );
}
