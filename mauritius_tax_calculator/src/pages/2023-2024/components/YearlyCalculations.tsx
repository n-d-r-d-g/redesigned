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
  IET_DEPENDENT_DEDUCTIONS,
  INITIAL_YEARLY_TAXABLE_BRACKETS,
  MRA_YEARLY_MAX_NON_TAXABLE_TRAVELING_ALLOWANCE,
} from "../reusables";
import { TaxCalcRow, YearlyFormValues } from "../types";

export default function YearlyCalculations() {
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
          MRA_YEARLY_MAX_NON_TAXABLE_TRAVELING_ALLOWANCE,
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
        const newIETDeductions =
          IET_DEPENDENT_DEDUCTIONS[values.numOfDependents];
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
          ...INITIAL_YEARLY_TAXABLE_BRACKETS.map((bracket, index) => {
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
                      "month.output.paye.table.taxableLimits.remainder"
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
              "month.output.paye.table.taxableLimits.taxCharged"
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
                      MRA_YEARLY_MAX_NON_TAXABLE_TRAVELING_ALLOWANCE
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
