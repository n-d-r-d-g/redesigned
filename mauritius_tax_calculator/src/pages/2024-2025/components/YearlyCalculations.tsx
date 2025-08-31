import { decimalToString } from "@/utils/functions";
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
} from "@heroui/react";
import Decimal from "decimal.js";
import { useFormikContext } from "formik";
import { Trans, useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import {
  CURRENT_FINANCIAL_YEAR_NAMESPACE,
  MRA_YEARLY_MAX_NON_TAXABLE_TRAVELING_ALLOWANCE,
} from "../reusables";
import { TaxCalcRow, YearlyFormValues } from "../types";
import { retrieveYearlyValues } from "../graph/components/reusables";

export default function YearlyCalculations() {
  const { t: tCommon } = useTranslation("common");
  const { t: tCurrentYear } = useTranslation(CURRENT_FINANCIAL_YEAR_NAMESPACE);
  const { values, isValid } = useFormikContext<YearlyFormValues>();
  const [monthlyBaseSalary, setMonthlyBaseSalary] = useState(new Decimal(0));
  const [totalBaseSalary, setTotalBaseSalary] = useState(new Decimal(0));
  const [eoyBonus, setEOYBonus] = useState(new Decimal(0));
  const [travelingAllowance, setTravelingAllowance] = useState(new Decimal(0));
  const [maxNonTaxableTravelingAllowance, setMaxNonTaxableTravelingAllowance] =
    useState(new Decimal(0));
  const [taxableTravelingAllowance, setTaxableTravelingAllowance] = useState(
    new Decimal(0)
  );
  const [performanceBonus, setPerformanceBonus] = useState(new Decimal(0));
  const [otherTaxableIncome, setOtherTaxableIncome] = useState(new Decimal(0));
  const [totalIncome, setTotalIncome] = useState(new Decimal(0));
  const [ietDeductions, setIETDeductions] = useState(new Decimal(0));
  const [otherTaxDeductions, setOtherTaxDeductions] = useState(new Decimal(0));
  const [totalDeductions, setTotalDeductions] = useState(new Decimal(0));
  const [chargeableIncome, setChargeableIncome] = useState(new Decimal(0));
  const [paye, setPAYE] = useState(new Decimal(0));
  const [totalBaseSalaryCSG, setTotalBaseSalaryCSG] = useState(new Decimal(0));
  const [eoyBonusCSG, setEOYBonusCSG] = useState(new Decimal(0));
  const [csg, setCSG] = useState(new Decimal(0));
  const [totalBaseSalaryCSGRate, setTotalBaseSalaryCSGRate] = useState(
    new Decimal(0)
  );
  const [eoyBonusCSGRate, setEOYBonusCSGRate] = useState(new Decimal(0));
  const [nsfRate, setNSFRate] = useState(new Decimal(0));
  const [nsfInsurableSalary, setNSFInsurableSalary] = useState(new Decimal(0));
  const [nsf, setNSF] = useState(new Decimal(0));
  const [totalTaxes, setTotalTaxes] = useState(new Decimal(0));
  const [incomeAfterTaxes, setIncomeAfterTaxes] = useState(new Decimal(0));
  const [yearlyTaxChargedCalcRows, setYearlyTaxChargedCalcRows] = useState<
    Array<TaxCalcRow>
  >([]);

  useEffect(() => {
    if (isValid) {
      try {
        const {
          newMonthlyBaseSalary,
          newTotalBaseSalary,
          newEOYBonus,
          newTravelingAllowance,
          newMaxNonTaxableTravelingAllowance,
          newTaxableTravelingAllowance,
          newPerformanceBonus,
          newOtherTaxableIncome,
          newTotalIncome,
          newIETDeductions,
          newOtherTaxDeductions,
          newTotalDeductions,
          newChargeableIncome,
          newPAYE,
          newTotalBaseSalaryCSGRate,
          newEOYBonusCSGRate,
          newTotalBaseSalaryCSG,
          newEOYBonusCSG,
          newCSG,
          newNSFRate,
          newNSFInsurableSalary,
          newNSF,
          newTotalTaxes,
          newYearlyPAYECalcRows,
          newIncomeAfterTaxes,
        } = retrieveYearlyValues({ values, tCurrentYear });

        setMonthlyBaseSalary(newMonthlyBaseSalary);
        setTotalBaseSalary(newTotalBaseSalary);
        setEOYBonus(newEOYBonus);
        setTravelingAllowance(newTravelingAllowance);
        setMaxNonTaxableTravelingAllowance(newMaxNonTaxableTravelingAllowance);
        setTaxableTravelingAllowance(newTaxableTravelingAllowance);
        setPerformanceBonus(newPerformanceBonus);
        setOtherTaxableIncome(newOtherTaxableIncome);
        setTotalIncome(newTotalIncome);
        setIETDeductions(newIETDeductions);
        setOtherTaxDeductions(newOtherTaxDeductions);
        setTotalDeductions(newTotalDeductions);
        setChargeableIncome(newChargeableIncome);
        setPAYE(newPAYE);
        setTotalBaseSalaryCSGRate(newTotalBaseSalaryCSGRate);
        setEOYBonusCSGRate(newEOYBonusCSGRate);
        setTotalBaseSalaryCSG(newTotalBaseSalaryCSG);
        setEOYBonusCSG(newEOYBonusCSG);
        setCSG(newCSG);
        setNSFRate(newNSFRate);
        setNSFInsurableSalary(newNSFInsurableSalary);
        setNSF(newNSF);
        setTotalTaxes(newTotalTaxes);
        setYearlyTaxChargedCalcRows(newYearlyPAYECalcRows);
        setIncomeAfterTaxes(newIncomeAfterTaxes);
      } catch {
        // There are scenarios where isValid hasn't changed to false yet but the values containing errors are being used for calculations
      }
    }
  }, [
    isValid,
    tCurrentYear,
    values.age,
    values.eoyBonus,
    values.isCitizen,
    values.isInDomesticService,
    values.isPRB,
    values.isPublicSector,
    values.isResident,
    values.monthlyBaseSalary,
    values.numOfDependents,
    values.otherTaxDeductions,
    values.otherTaxableIncome,
    values.performanceBonus,
    values.totalBaseSalary,
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
        subtitle={tCurrentYear("year.output.chargeableIncome.subtitle")}
        classNames={{
          heading: "m-0 py-2",
          content: "pb-4",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
        isCompact
      >
        <Table
          aria-label={tCurrentYear("year.output.chargeableIncome.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn className="uppercase">
              {tCurrentYear(
                "year.output.chargeableIncome.table.headers.description"
              )}
            </TableColumn>
            <TableColumn align="end" className="uppercase">
              {tCurrentYear(
                "year.output.chargeableIncome.table.headers.subAmount"
              )}
            </TableColumn>
            <TableColumn align="end" className="uppercase">
              {tCurrentYear(
                "year.output.chargeableIncome.table.headers.amount"
              )}
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="baseSalary">
              <TableCell>
                {tCurrentYear(
                  "year.output.chargeableIncome.table.description.baseSalary"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end">
                {decimalToString(totalBaseSalary, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="eoyBonus">
              <TableCell>
                {tCurrentYear(
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
                {tCurrentYear(
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
                {tCurrentYear(
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
                {tCurrentYear(
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
            <TableRow key="performanceBonus">
              <TableCell>
                {tCurrentYear(
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
                {tCurrentYear(
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
                {tCurrentYear(
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
                {tCurrentYear(
                  "year.output.chargeableIncome.table.description.ietDeductions"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end">
                {decimalToString(ietDeductions, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="otherTaxDeductions">
              <TableCell>
                {tCurrentYear(
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
                {tCurrentYear(
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
                {tCurrentYear(
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
        key="paye"
        aria-label={`Rs ${decimalToString(paye)}`}
        title={`Rs ${decimalToString(paye)}`}
        subtitle={tCurrentYear("year.output.paye.subtitle")}
        classNames={{
          heading: "m-0 py-2",
          content: "pb-4",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
      >
        <p className="text-sm mb-1">
          {tCurrentYear("year.output.paye.calculationDescription")}
        </p>
        <Trans
          t={tCurrentYear}
          i18nKey="year.output.paye.calculationSteps"
          components={{
            ul: <ul className="text-sm leading-6" />,
          }}
        />
        <Table
          aria-label={tCurrentYear("year.output.paye.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn
              key="taxableLimit"
              align="end"
              className="uppercase text-end"
            >
              {tCurrentYear("year.output.paye.table.headers.taxableLimit")}
            </TableColumn>
            <TableColumn
              key="taxableAmount"
              align="end"
              className="uppercase text-end"
            >
              {tCurrentYear("year.output.paye.table.headers.taxableAmount")}
            </TableColumn>
            <TableColumn
              key="taxRate"
              align="end"
              className="uppercase text-end"
            >
              {tCurrentYear("year.output.paye.table.headers.taxRate")}
            </TableColumn>
            <TableColumn
              key="taxCharged"
              align="end"
              className="uppercase text-end"
            >
              {tCurrentYear("year.output.paye.table.headers.taxCharged")}
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
      <AccordionItem
        key="csg"
        aria-label={`Rs ${decimalToString(csg)}`}
        title={`Rs ${decimalToString(csg)}`}
        subtitle={tCurrentYear("year.output.csg.subtitle")}
        classNames={{
          heading: "m-0 py-2",
          content: "pb-4",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
      >
        <Table
          aria-label={tCurrentYear("year.output.csg.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn className="uppercase">
              {tCurrentYear("year.output.csg.table.headers.description")}
            </TableColumn>
            <TableColumn align="end" className="w-36 uppercase">
              {tCurrentYear("year.output.csg.table.headers.amount")}
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="totalBaseSalaryCSG">
              <TableCell>
                {tCurrentYear(
                  "year.output.csg.table.description.totalBaseSalaryCSG"
                )}{" "}
                (
                {tCurrentYear(
                  "year.output.csg.table.description.totalBaseSalary"
                )}
                {" x "}
                {totalBaseSalaryCSGRate.mul(100).toNumber()}%{" = "}
                {"Rs "}
                {decimalToString(totalBaseSalary, 2)}
                {" x "}
                {totalBaseSalaryCSGRate.mul(100).toNumber()}%)
              </TableCell>
              <TableCell className="text-end">
                {decimalToString(totalBaseSalaryCSG, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="eoyBonusCSG">
              <TableCell>
                {tCurrentYear("year.output.csg.table.description.eoyBonusCSG")}{" "}
                (
                {tCurrentYear(
                  "year.output.csg.table.description.monthlyBaseSalary"
                )}
                {" x "}
                {totalBaseSalaryCSGRate.mul(100).toNumber()}%{" = "}
                {"Rs "}
                {decimalToString(monthlyBaseSalary, 2)}
                {" x "}
                {eoyBonusCSGRate.mul(100).toNumber()}%)
              </TableCell>
              <TableCell className="text-end">
                {decimalToString(eoyBonusCSG, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="csg">
              <TableCell className="font-bold">
                {tCurrentYear("year.output.csg.table.description.csg")}
              </TableCell>
              <TableCell className="text-end font-bold border-t-1 border-b-4 border-double border-default-500">
                {decimalToString(csg, 2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </AccordionItem>
      <AccordionItem
        key="nsf"
        aria-label={`Rs ${decimalToString(nsf)}`}
        title={`Rs ${decimalToString(nsf)}`}
        subtitle={tCurrentYear("year.output.nsf.subtitle")}
        classNames={{
          heading: "m-0 py-2",
          content: "pb-4",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
      >
        <Table
          aria-label={tCurrentYear("year.output.nsf.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn className="uppercase">
              {tCurrentYear("year.output.nsf.table.headers.description")}
            </TableColumn>
            <TableColumn align="end" className="w-36 uppercase">
              {tCurrentYear("year.output.nsf.table.headers.amount")}
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="nsf">
              <TableCell>
                <span className="font-bold">
                  {tCurrentYear("year.output.nsf.table.description.nsf")}
                </span>{" "}
                (*
                {tCurrentYear(
                  "year.output.nsf.table.description.nsfInsurableSalary"
                )}
                {" x "}
                {nsfRate.mul(100).toNumber()}%{" = "}
                {"Rs "}
                {decimalToString(nsfInsurableSalary, 2)}
                {" x "}
                {nsfRate.mul(100).toNumber()}%)
              </TableCell>
              <TableCell className="text-end font-bold border-t-1 border-b-4 border-double border-default-500">
                {decimalToString(nsf, 2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="text-sm">
          *
          <Trans
            ns={CURRENT_FINANCIAL_YEAR_NAMESPACE}
            i18nKey="year.output.nsf.nsfInsurableSalaryExplanation"
            components={{
              Link: (
                <a
                  href={`https://github.com/n-d-r-d-g/redesigned/tree/main/mauritius_tax_calculator/mra-pdfs/${CURRENT_FINANCIAL_YEAR_NAMESPACE}/nsf-employers-guide.pdf`}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                />
              ),
            }}
          />
        </p>
      </AccordionItem>
      <AccordionItem
        key="incomeAfterTaxes"
        aria-label={`Rs ${decimalToString(new Decimal(incomeAfterTaxes.isNegative() ? 0 : incomeAfterTaxes))}`}
        title={`Rs ${decimalToString(new Decimal(incomeAfterTaxes.isNegative() ? 0 : incomeAfterTaxes))}`}
        subtitle={tCurrentYear("year.output.incomeAfterTaxes.subtitle")}
        classNames={{
          heading: "m-0",
          title: "text-3xl text-success-700 dark:text-success",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
        isCompact
      >
        <Table
          aria-label={tCurrentYear("year.output.incomeAfterTaxes.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn className="uppercase">
              {tCurrentYear(
                "year.output.incomeAfterTaxes.table.headers.description"
              )}
            </TableColumn>
            <TableColumn align="end" className="w-36 uppercase">
              {tCurrentYear(
                "year.output.incomeAfterTaxes.table.headers.subAmount"
              )}
            </TableColumn>
            <TableColumn align="end" className="w-36 uppercase">
              {tCurrentYear(
                "year.output.incomeAfterTaxes.table.headers.amount"
              )}
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="totalIncome">
              <TableCell>
                {tCurrentYear(
                  "year.output.incomeAfterTaxes.table.description.totalIncome"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end">
                {decimalToString(totalIncome, 2)}
              </TableCell>
            </TableRow>
            <TableRow key="paye">
              <TableCell>
                {tCurrentYear(
                  "year.output.incomeAfterTaxes.table.description.paye"
                )}
              </TableCell>
              <TableCell className="text-end">
                {decimalToString(paye, 2)}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
            </TableRow>
            <TableRow key="csg">
              <TableCell>
                {tCurrentYear(
                  "year.output.incomeAfterTaxes.table.description.csg"
                )}
              </TableCell>
              <TableCell className="text-end">
                {decimalToString(csg, 2)}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
            </TableRow>
            <TableRow key="nsf">
              <TableCell>
                {tCurrentYear(
                  "year.output.incomeAfterTaxes.table.description.nsf"
                )}
              </TableCell>
              <TableCell className="text-end">
                {decimalToString(nsf, 2)}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
            </TableRow>
            <TableRow key="totalTaxes">
              <TableCell>
                {tCurrentYear(
                  "year.output.incomeAfterTaxes.table.description.totalTaxes"
                )}
              </TableCell>
              <TableCell className="text-end border-t-1 border-default-500">
                {decimalToString(totalTaxes, 2)}
              </TableCell>
              <TableCell className="text-end">
                {decimalToString(totalTaxes.neg(), 2)}
              </TableCell>
            </TableRow>
            <TableRow
              key="incomeAfterTaxes"
              className="border-t-1 border-default-500"
            >
              <TableCell className="font-bold">
                {tCurrentYear(
                  "year.output.incomeAfterTaxes.table.description.incomeAfterTaxes"
                )}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
              <TableCell className="text-end font-bold border-b-4 border-double border-default-500">
                {decimalToString(incomeAfterTaxes, 2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </AccordionItem>
    </Accordion>
  );
}
