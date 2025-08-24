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
  CSG_MONTHLY_BASE_SALARY_LIMIT,
  CSG_DECREASED_RATE,
  CSG_INCREASED_RATE,
  CSG_MAX_MONTHLY_DOMESTIC_LIMIT,
  INITIAL_MONTHLY_TAXABLE_BRACKETS,
  MRA_MONTHLY_MAX_NON_TAXABLE_TRAVELING_ALLOWANCE,
  NSF_MAX_MONTHLY_INSURABLE_BASIC_WAGE,
  NSF_MIN_MONTHLY_INSURABLE_BASIC_WAGE_HOUSEHOLD_EMPLOYEE,
  NSF_MIN_MONTHLY_INSURABLE_BASIC_WAGE_NORMAL_EMPLOYEE,
  NSF_RATE,
  MONTHLY_IET_DEPENDENT_DEDUCTIONS,
  CURRENT_FINANCIAL_YEAR_NAMESPACE,
  FSC_MAX_MONTHLY_NON_TAXABLE_LIMIT,
  FSC_RATE,
} from "../reusables";
import { MonthlyFormValues, TaxCalcRow } from "../types";

export default function MonthlyCalculations() {
  const { t: tCommon } = useTranslation("common");
  const { t: tCurrentYear } = useTranslation(CURRENT_FINANCIAL_YEAR_NAMESPACE);
  const { values, isValid } = useFormikContext<MonthlyFormValues>();
  const [baseSalary, setBaseSalary] = useState(new Decimal(0));
  const [travelingAllowance, setTravelingAllowance] = useState(new Decimal(0));
  const [maxNonTaxableTravelingAllowance, setMaxNonTaxableTravelingAllowance] =
    useState(new Decimal(0));
  const [taxableTravelingAllowance, setTaxableTravelingAllowance] = useState(
    new Decimal(0)
  );
  const [performanceBonus, setPerformanceBonus] = useState(new Decimal(0));
  const [otherTaxableIncome, setOtherTaxableIncome] = useState(new Decimal(0));
  const [chargeableIncome, setChargeableIncome] = useState(new Decimal(0));
  const [totalIncome, setTotalIncome] = useState(new Decimal(0));
  const [ietDeductions, setIETDeductions] = useState(new Decimal(0));
  const [otherTaxDeductions, setOtherTaxDeductions] = useState(new Decimal(0));
  const [totalDeductions, setTotalDeductions] = useState(new Decimal(0));
  const [paye, setPAYE] = useState(new Decimal(0));
  const [csg, setCSG] = useState(new Decimal(0));
  const [csgRate, setCSGRate] = useState(new Decimal(0));
  const [nsf, setNSF] = useState(new Decimal(0));
  const [nsfRate, setNSFRate] = useState(new Decimal(0));
  const [nsfInsurableSalary, setNSFInsurableSalary] = useState(new Decimal(0));
  const [fscRate, setFSCRate] = useState(new Decimal(0));
  const [fscChargeableIncome, setFSCChargeableIncome] = useState(
    new Decimal(0)
  );
  const [fsc, setFSC] = useState(new Decimal(0));
  const [totalTaxes, setTotalTaxes] = useState(new Decimal(0));
  const [incomeAfterTaxes, setIncomeAfterTaxes] = useState(new Decimal(0));
  const [monthlyPAYECalcRows, setMonthlyPAYECalcRows] = useState<
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
        const newPerformanceBonus = new Decimal(values.performanceBonus);
        const newOtherTaxableIncome = new Decimal(values.otherTaxableIncome);
        let newChargeableIncome = newBaseSalary
          .add(newTaxableTravelingAllowance)
          .add(newPerformanceBonus)
          .add(newOtherTaxableIncome);
        let newTotalIncome = newBaseSalary
          .add(newTravelingAllowance)
          .add(newPerformanceBonus)
          .add(newOtherTaxableIncome);
        const newIETDeductions =
          MONTHLY_IET_DEPENDENT_DEDUCTIONS[values.numOfDependents];
        const newOtherTaxDeductions = new Decimal(values.otherTaxDeductions);
        const newTotalDeductions = newIETDeductions.add(newOtherTaxDeductions);
        newChargeableIncome = newChargeableIncome.sub(newTotalDeductions);
        let remainder = newChargeableIncome;
        let newPAYE = new Decimal(0);
        const newMonthlyPAYECalcRows = [
          ...INITIAL_MONTHLY_TAXABLE_BRACKETS.map((bracket, index) => {
            if (!bracket.limit || remainder.lessThan(bracket.limit)) {
              const taxableAmount = remainder;
              const taxCharged = taxableAmount.mul(bracket.rate);
              newPAYE = newPAYE.add(taxCharged);
              remainder = remainder.sub(remainder);

              return {
                key: String(index),
                taxableLimit: bracket.limit
                  ? decimalToString(bracket.limit)
                  : tCurrentYear(
                      "month.output.paye.table.taxableLimits.remainder"
                    ),
                taxableAmount: decimalToString(taxableAmount, 2),
                taxRate: decimalToString(bracket.rate.mul(100)),
                taxCharged: decimalToString(taxCharged, 2),
              };
            }

            const taxableAmount = bracket.limit;
            const taxCharged = taxableAmount.mul(bracket.rate);
            newPAYE = newPAYE.add(taxCharged);
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
            taxableLimit: tCurrentYear(
              "month.output.paye.table.taxableLimits.taxCharged"
            ),
            taxableAmount: decimalToString(newChargeableIncome, 2),
            taxRate: null,
            taxCharged: decimalToString(newPAYE, 2),
          },
        ];
        const isExemptFromCSG =
          (!values.isCitizen && !values.isResident) ||
          (values.isInDomesticService &&
            newBaseSalary.lessThan(CSG_MAX_MONTHLY_DOMESTIC_LIMIT)) ||
          (values.isPublicSector && !values.isPRB);
        let newCSGRate = new Decimal(0);
        const isExemptFromNSF = ["under18", "70AndOver"].includes(values.age);
        const newNSFRate = isExemptFromNSF ? new Decimal(0) : NSF_RATE;
        const minNSFInsurableSalary = values.isInDomesticService
          ? NSF_MIN_MONTHLY_INSURABLE_BASIC_WAGE_HOUSEHOLD_EMPLOYEE
          : NSF_MIN_MONTHLY_INSURABLE_BASIC_WAGE_NORMAL_EMPLOYEE;
        const maxNSFInsurableSalary = NSF_MAX_MONTHLY_INSURABLE_BASIC_WAGE;
        const newNSFInsurableSalary = new Decimal(
          newBaseSalary.lessThan(minNSFInsurableSalary)
            ? 0
            : newBaseSalary.greaterThan(maxNSFInsurableSalary)
              ? maxNSFInsurableSalary
              : newBaseSalary
        );
        const isExemptFromFSC = newChargeableIncome.lessThanOrEqualTo(
          FSC_MAX_MONTHLY_NON_TAXABLE_LIMIT
        );
        const newFSCRate = FSC_RATE;
        const newFSCChargeableIncome = isExemptFromFSC
          ? new Decimal(0)
          : newChargeableIncome;

        if (!isExemptFromCSG) {
          newCSGRate = newBaseSalary.lessThanOrEqualTo(
            CSG_MONTHLY_BASE_SALARY_LIMIT
          )
            ? CSG_DECREASED_RATE
            : CSG_INCREASED_RATE;
        }

        const newCSG = newBaseSalary.mul(newCSGRate);
        const newNSF = isExemptFromNSF
          ? new Decimal(0)
          : newNSFInsurableSalary.mul(newNSFRate);
        const newFSC = newFSCChargeableIncome.mul(newFSCRate);
        const newTotalTaxes = newPAYE.add(newCSG).add(newNSF).add(newFSC);
        const newIncomeAfterTaxes = newTotalIncome.sub(newTotalTaxes);

        setBaseSalary(newBaseSalary);
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
        setCSGRate(newCSGRate);
        setCSG(newCSG);
        setNSFRate(newNSFRate);
        setNSFInsurableSalary(newNSFInsurableSalary);
        setNSF(newNSF);
        setFSCRate(newFSCRate);
        setFSCChargeableIncome(newFSCChargeableIncome);
        setFSC(newFSC);
        setTotalTaxes(newTotalTaxes);
        setMonthlyPAYECalcRows(newMonthlyPAYECalcRows);
        setIncomeAfterTaxes(newIncomeAfterTaxes);
      } catch {
        // There are scenarios where isValid hasn't changed to false yet but the values containing errors are being used for calculations
      }
    }
  }, [
    isValid,
    tCurrentYear,
    values.age,
    values.baseSalary,
    values.isCitizen,
    values.isInDomesticService,
    values.isPRB,
    values.isPublicSector,
    values.isResident,
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
        subtitle={tCurrentYear("month.output.chargeableIncome.subtitle")}
        classNames={{
          heading: "m-0 py-2",
          content: "pb-4",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
        isCompact
      >
        <Table
          aria-label={tCurrentYear("month.output.chargeableIncome.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn className="uppercase">
              {tCurrentYear(
                "month.output.chargeableIncome.table.headers.incomeDescription"
              )}
            </TableColumn>
            <TableColumn align="end" className="uppercase">
              {tCurrentYear(
                "month.output.chargeableIncome.table.headers.subAmount"
              )}
            </TableColumn>
            <TableColumn align="end" className="uppercase">
              {tCurrentYear(
                "month.output.chargeableIncome.table.headers.amount"
              )}
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="baseSalary">
              <TableCell>
                {tCurrentYear(
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
                {tCurrentYear(
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
                {tCurrentYear(
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
                {tCurrentYear(
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
            <TableRow key="performanceBonus">
              <TableCell>
                {tCurrentYear(
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
                {tCurrentYear(
                  "month.output.chargeableIncome.table.incomeDescription.otherTaxableIncome"
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
        key="paye"
        aria-label={`Rs ${decimalToString(paye)}`}
        title={`Rs ${decimalToString(paye)}`}
        subtitle={tCurrentYear("month.output.paye.subtitle")}
        classNames={{
          heading: "m-0 py-2",
          content: "pb-4",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
      >
        <p className="text-sm mb-1">
          {tCurrentYear("month.output.paye.calculationDescription")}
        </p>
        <Trans
          t={tCurrentYear}
          i18nKey="month.output.paye.calculationSteps"
          components={{
            ul: <ul className="text-sm leading-6" />,
          }}
        />
        <Table
          aria-label={tCurrentYear("month.output.paye.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn
              key="taxableLimit"
              align="end"
              className="uppercase text-end"
            >
              {tCurrentYear("month.output.paye.table.headers.taxableLimit")}
            </TableColumn>
            <TableColumn
              key="taxableAmount"
              align="end"
              className="uppercase text-end"
            >
              {tCurrentYear("month.output.paye.table.headers.taxableAmount")}
            </TableColumn>
            <TableColumn
              key="taxRate"
              align="end"
              className="uppercase text-end"
            >
              {tCurrentYear("month.output.paye.table.headers.taxRate")}
            </TableColumn>
            <TableColumn
              key="taxCharged"
              align="end"
              className="uppercase text-end"
            >
              {tCurrentYear("month.output.paye.table.headers.taxCharged")}
            </TableColumn>
          </TableHeader>
          <TableBody items={monthlyPAYECalcRows}>
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
        subtitle={tCurrentYear("month.output.csg.subtitle")}
        classNames={{
          heading: "m-0 py-2",
          content: "pb-4",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
      >
        <Table
          aria-label={tCurrentYear("month.output.csg.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn className="uppercase">
              {tCurrentYear("month.output.csg.table.headers.description")}
            </TableColumn>
            <TableColumn align="end" className="w-36 uppercase">
              {tCurrentYear("month.output.csg.table.headers.amount")}
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="csg">
              <TableCell>
                <span className="font-bold">
                  {tCurrentYear("month.output.csg.table.description.csg")}
                </span>{" "}
                ({tCurrentYear("month.form.baseSalary.label")}
                {" x "}
                {csgRate.mul(100).toNumber()}%{" = "}
                {"Rs "}
                {decimalToString(baseSalary, 2)}
                {" x "}
                {csgRate.mul(100).toNumber()}%)
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
        subtitle={tCurrentYear("month.output.nsf.subtitle")}
        classNames={{
          heading: "m-0 py-2",
          content: "pb-4",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
      >
        <Table
          aria-label={tCurrentYear("month.output.nsf.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn className="uppercase">
              {tCurrentYear("month.output.nsf.table.headers.description")}
            </TableColumn>
            <TableColumn align="end" className="w-36 uppercase">
              {tCurrentYear("month.output.nsf.table.headers.amount")}
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="nsf">
              <TableCell>
                <span className="font-bold">
                  {tCurrentYear("month.output.nsf.table.description.nsf")}
                </span>{" "}
                (*
                {tCurrentYear(
                  "month.output.nsf.table.description.nsfInsurableSalary"
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
            i18nKey="month.output.nsf.nsfInsurableSalaryExplanation"
            components={{
              Link: (
                <a
                  // TODO: The following link is not yet available. Make sure to add the file then remove this todo.
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
        key="fsc"
        aria-label={`Rs ${decimalToString(fsc)}`}
        title={`Rs ${decimalToString(fsc)}`}
        subtitle={tCurrentYear("month.output.fsc.subtitle")}
        classNames={{
          heading: "m-0 py-2",
          content: "pb-4",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
      >
        <Table
          aria-label={tCurrentYear("month.output.fsc.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn className="uppercase">
              {tCurrentYear("month.output.fsc.table.headers.description")}
            </TableColumn>
            <TableColumn align="end" className="w-36 uppercase">
              {tCurrentYear("month.output.fsc.table.headers.amount")}
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="fsc">
              <TableCell>
                <span className="font-bold">
                  {tCurrentYear("month.output.fsc.table.description.fsc")}
                </span>{" "}
                (
                {tCurrentYear(
                  "month.output.fsc.table.description.chargeableIncome"
                )}
                {" x "}
                {fscRate.mul(100).toNumber()}%{" = "}
                {"Rs "}
                {decimalToString(fscChargeableIncome, 2)}
                {" x "}
                {fscRate.mul(100).toNumber()}%)
              </TableCell>
              <TableCell className="text-end font-bold border-t-1 border-b-4 border-double border-default-500">
                {decimalToString(fsc, 2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="text-sm">
          *
          {tCurrentYear("month.output.fsc.fscChargeableIncomeExplanation", {
            maxFSCNonTaxableLimit: decimalToString(
              FSC_MAX_MONTHLY_NON_TAXABLE_LIMIT,
              0
            ),
          })}
        </p>
      </AccordionItem>
      <AccordionItem
        key="incomeAfterTaxes"
        aria-label={`Rs ${decimalToString(new Decimal(incomeAfterTaxes.isNegative() ? 0 : incomeAfterTaxes))}`}
        title={`Rs ${decimalToString(new Decimal(incomeAfterTaxes.isNegative() ? 0 : incomeAfterTaxes))}`}
        subtitle={tCurrentYear("month.output.incomeAfterTaxes.subtitle")}
        classNames={{
          heading: "m-0",
          title: "text-3xl text-success-700 dark:text-success",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
        isCompact
      >
        <Table
          aria-label={tCurrentYear("month.output.incomeAfterTaxes.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn className="uppercase">
              {tCurrentYear(
                "month.output.incomeAfterTaxes.table.headers.description"
              )}
            </TableColumn>
            <TableColumn align="end" className="w-36 uppercase">
              {tCurrentYear(
                "month.output.incomeAfterTaxes.table.headers.subAmount"
              )}
            </TableColumn>
            <TableColumn align="end" className="w-36 uppercase">
              {tCurrentYear(
                "month.output.incomeAfterTaxes.table.headers.amount"
              )}
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="totalIncome">
              <TableCell>
                {tCurrentYear(
                  "month.output.incomeAfterTaxes.table.description.totalIncome"
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
                  "month.output.incomeAfterTaxes.table.description.paye"
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
                  "month.output.incomeAfterTaxes.table.description.csg"
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
                  "month.output.incomeAfterTaxes.table.description.nsf"
                )}
              </TableCell>
              <TableCell className="text-end">
                {decimalToString(nsf, 2)}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
            </TableRow>
            <TableRow key="fsc">
              <TableCell>
                {tCurrentYear(
                  "month.output.incomeAfterTaxes.table.description.fsc"
                )}
              </TableCell>
              <TableCell className="text-end">
                {decimalToString(fsc, 2)}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
            </TableRow>
            <TableRow key="totalTaxes">
              <TableCell>
                {tCurrentYear(
                  "month.output.incomeAfterTaxes.table.description.totalTaxes"
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
                  "month.output.incomeAfterTaxes.table.description.incomeAfterTaxes"
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
