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
} from "@nextui-org/react";
import Decimal from "decimal.js";
import { useFormikContext } from "formik";
import { Trans, useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import {
  CSG_DECREASED_RATE,
  CSG_INCREASED_RATE,
  CSG_MAX_MONTHLY_DOMESTIC_LIMIT,
  CSG_MAX_YEARLY_DOMESTIC_LIMIT,
  CSG_MONTHLY_BASE_SALARY_LIMIT,
  CSG_YEARLY_BASE_SALARY_LIMIT,
  INITIAL_YEARLY_TAXABLE_BRACKETS,
  MRA_YEARLY_MAX_NON_TAXABLE_TRAVELING_ALLOWANCE,
  NSF_MAX_YEARLY_INSURABLE_BASIC_WAGE,
  NSF_MIN_YEARLY_INSURABLE_BASIC_WAGE_HOUSEHOLD_EMPLOYEE,
  NSF_MIN_YEARLY_INSURABLE_BASIC_WAGE_NORMAL_EMPLOYEE,
  NSF_RATE,
  YEARLY_IET_DEPENDENT_DEDUCTIONS,
} from "../reusables";
import { TaxCalcRow, YearlyFormValues } from "../types";

export default function YearlyCalculations() {
  const { t: tCommon } = useTranslation("common");
  const { t: t2024To2025 } = useTranslation("2024-2025");
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
        const newMonthlyBaseSalary = new Decimal(values.monthlyBaseSalary);
        const newTotalBaseSalary = new Decimal(values.totalBaseSalary);
        const newEOYBonus = new Decimal(values.eoyBonus);
        const newTravelingAllowance = new Decimal(values.travelingAllowance);
        const totalBaseSalaryTimes25Percent = newTotalBaseSalary.dividedBy(4);
        const newMaxNonTaxableTravelingAllowance = Decimal.min(
          MRA_YEARLY_MAX_NON_TAXABLE_TRAVELING_ALLOWANCE,
          totalBaseSalaryTimes25Percent
        );
        const newTaxableTravelingAllowance =
          newTravelingAllowance.lessThanOrEqualTo(
            newMaxNonTaxableTravelingAllowance
          )
            ? new Decimal(0)
            : newTravelingAllowance.sub(newMaxNonTaxableTravelingAllowance);
        const newPerformanceBonus = new Decimal(values.performanceBonus);
        const newOtherTaxableIncome = new Decimal(values.otherTaxableIncome);
        let newChargeableIncome = newTotalBaseSalary
          .add(newEOYBonus)
          .add(newTaxableTravelingAllowance)
          .add(newPerformanceBonus)
          .add(newOtherTaxableIncome);
        let newTotalIncome = newTotalBaseSalary
          .add(newEOYBonus)
          .add(newTravelingAllowance)
          .add(newPerformanceBonus)
          .add(newOtherTaxableIncome);
        const newIETDeductions =
          YEARLY_IET_DEPENDENT_DEDUCTIONS[values.numOfDependents];
        const newOtherTaxDeductions = new Decimal(values.otherTaxDeductions);
        const newTotalDeductions = newIETDeductions.add(newOtherTaxDeductions);
        newChargeableIncome = newChargeableIncome.sub(newTotalDeductions);
        let remainder = newChargeableIncome;
        let newPAYE = new Decimal(0);
        const newYearlyPAYECalcRows = [
          ...INITIAL_YEARLY_TAXABLE_BRACKETS.map((bracket, index) => {
            if (!bracket.limit || remainder.lessThan(bracket.limit)) {
              const taxableAmount = remainder;
              const taxCharged = taxableAmount.mul(bracket.rate);
              newPAYE = newPAYE.add(taxCharged);
              remainder = remainder.sub(remainder);

              return {
                key: String(index),
                taxableLimit: bracket.limit
                  ? decimalToString(bracket.limit)
                  : t2024To2025(
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
            taxableLimit: t2024To2025(
              "month.output.paye.table.taxableLimits.taxCharged"
            ),
            taxableAmount: decimalToString(newChargeableIncome, 2),
            taxRate: null,
            taxCharged: decimalToString(newPAYE, 2),
          },
        ];
        const isExemptFromCSG =
          (!values.isCitizen && !values.isResident) ||
          (values.isPublicSector && !values.isPRB);
        const isExemptFromCSGOnTotalBaseSalary =
          isExemptFromCSG ||
          (values.isInDomesticService &&
            newTotalBaseSalary.lessThan(CSG_MAX_YEARLY_DOMESTIC_LIMIT));
        const isExemptFromCSGOnMonthlyBaseSalary =
          isExemptFromCSG ||
          (values.isInDomesticService &&
            newMonthlyBaseSalary.lessThan(CSG_MAX_MONTHLY_DOMESTIC_LIMIT));
        let newTotalBaseSalaryCSGRate = new Decimal(0);
        let newEOYBonusCSGRate = new Decimal(0);
        const isExemptFromNSF = ["under18", "70AndOver"].includes(values.age);
        const newNSFRate = isExemptFromNSF ? new Decimal(0) : NSF_RATE;
        const minNSFInsurableSalary = values.isInDomesticService
          ? NSF_MIN_YEARLY_INSURABLE_BASIC_WAGE_HOUSEHOLD_EMPLOYEE
          : NSF_MIN_YEARLY_INSURABLE_BASIC_WAGE_NORMAL_EMPLOYEE;
        const maxNSFInsurableSalary = NSF_MAX_YEARLY_INSURABLE_BASIC_WAGE;
        const newNSFInsurableSalary = new Decimal(
          newTotalBaseSalary.lessThan(minNSFInsurableSalary)
            ? 0
            : newTotalBaseSalary.greaterThan(maxNSFInsurableSalary)
              ? maxNSFInsurableSalary
              : newTotalBaseSalary
        );

        if (!isExemptFromCSGOnTotalBaseSalary) {
          newTotalBaseSalaryCSGRate = newTotalBaseSalary.lessThanOrEqualTo(
            CSG_YEARLY_BASE_SALARY_LIMIT
          )
            ? CSG_DECREASED_RATE
            : CSG_INCREASED_RATE;
        }

        if (!isExemptFromCSGOnMonthlyBaseSalary) {
          newEOYBonusCSGRate = newMonthlyBaseSalary.lessThanOrEqualTo(
            CSG_MONTHLY_BASE_SALARY_LIMIT
          )
            ? CSG_DECREASED_RATE
            : CSG_INCREASED_RATE;
        }

        const newTotalBaseSalaryCSG = newTotalBaseSalary.mul(
          newTotalBaseSalaryCSGRate
        );
        const newEOYBonusCSG = newMonthlyBaseSalary.mul(newEOYBonusCSGRate);
        const newCSG = newTotalBaseSalaryCSG.add(newEOYBonusCSG);
        const newNSF = isExemptFromNSF
          ? new Decimal(0)
          : newNSFInsurableSalary.mul(newNSFRate);
        const newTotalTaxes = newPAYE.add(newCSG).add(newNSF);
        const newIncomeAfterTaxes = newTotalIncome.sub(newTotalTaxes);

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
    t2024To2025,
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
        subtitle={t2024To2025("year.output.chargeableIncome.subtitle")}
        classNames={{
          heading: "m-0 py-2",
          content: "pb-4",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
        isCompact
      >
        <Table
          aria-label={t2024To2025("year.output.chargeableIncome.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn className="uppercase">
              {t2024To2025(
                "year.output.chargeableIncome.table.headers.description"
              )}
            </TableColumn>
            <TableColumn align="end" className="uppercase">
              {t2024To2025(
                "year.output.chargeableIncome.table.headers.subAmount"
              )}
            </TableColumn>
            <TableColumn align="end" className="uppercase">
              {t2024To2025("year.output.chargeableIncome.table.headers.amount")}
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="baseSalary">
              <TableCell>
                {t2024To2025(
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
                {t2024To2025(
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
                {t2024To2025(
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
                {t2024To2025(
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
                {t2024To2025(
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
                {t2024To2025(
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
                {t2024To2025(
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
                {t2024To2025(
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
                {t2024To2025(
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
                {t2024To2025(
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
                {t2024To2025(
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
                {t2024To2025(
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
        subtitle={t2024To2025("year.output.paye.subtitle")}
        classNames={{
          heading: "m-0 py-2",
          content: "pb-4",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
      >
        <p className="text-sm mb-1">
          {t2024To2025("year.output.paye.calculationDescription")}
        </p>
        <Trans
          t={t2024To2025}
          i18nKey="year.output.paye.calculationSteps"
          components={{
            ul: <ul className="text-sm leading-6" />,
          }}
        />
        <Table
          aria-label={t2024To2025("year.output.paye.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn
              key="taxableLimit"
              align="end"
              className="uppercase text-end"
            >
              {t2024To2025("year.output.paye.table.headers.taxableLimit")}
            </TableColumn>
            <TableColumn
              key="taxableAmount"
              align="end"
              className="uppercase text-end"
            >
              {t2024To2025("year.output.paye.table.headers.taxableAmount")}
            </TableColumn>
            <TableColumn
              key="taxRate"
              align="end"
              className="uppercase text-end"
            >
              {t2024To2025("year.output.paye.table.headers.taxRate")}
            </TableColumn>
            <TableColumn
              key="taxCharged"
              align="end"
              className="uppercase text-end"
            >
              {t2024To2025("year.output.paye.table.headers.taxCharged")}
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
        subtitle={t2024To2025("year.output.csg.subtitle")}
        classNames={{
          heading: "m-0 py-2",
          content: "pb-4",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
      >
        <Table
          aria-label={t2024To2025("year.output.csg.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn className="uppercase">
              {t2024To2025("year.output.csg.table.headers.description")}
            </TableColumn>
            <TableColumn align="end" className="w-36 uppercase">
              {t2024To2025("year.output.csg.table.headers.amount")}
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="totalBaseSalaryCSG">
              <TableCell>
                {t2024To2025(
                  "year.output.csg.table.description.totalBaseSalaryCSG"
                )}{" "}
                (
                {t2024To2025(
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
                {t2024To2025("year.output.csg.table.description.eoyBonusCSG")} (
                {t2024To2025(
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
                {t2024To2025("month.output.csg.table.description.csg")}
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
        subtitle={t2024To2025("month.output.nsf.subtitle")}
        classNames={{
          heading: "m-0 py-2",
          content: "pb-4",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
      >
        <Table
          aria-label={t2024To2025("month.output.nsf.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn className="uppercase">
              {t2024To2025("month.output.nsf.table.headers.description")}
            </TableColumn>
            <TableColumn align="end" className="w-36 uppercase">
              {t2024To2025("month.output.nsf.table.headers.amount")}
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="nsf">
              <TableCell>
                <span className="font-bold">
                  {t2024To2025("month.output.nsf.table.description.nsf")}
                </span>{" "}
                (*
                {t2024To2025(
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
            ns="2024-2025"
            i18nKey="month.output.nsf.nsfInsurableSalaryExplanation"
            components={{
              Link: (
                <a
                  href="https://github.com/n-d-r-d-g/redesigned/tree/main/mauritius_tax_calculator/mra-pdfs/2024-2025/nsf-employers-guide.pdf"
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
        subtitle={t2024To2025("month.output.incomeAfterTaxes.subtitle")}
        classNames={{
          heading: "m-0",
          title: "text-3xl text-success-700 dark:text-success",
          indicator: "text-2xl text-default-700 rotate-[-180deg]",
        }}
        isCompact
      >
        <Table
          aria-label={t2024To2025("month.output.incomeAfterTaxes.table.title")}
          shadow="none"
        >
          <TableHeader>
            <TableColumn className="uppercase">
              {t2024To2025(
                "month.output.incomeAfterTaxes.table.headers.description"
              )}
            </TableColumn>
            <TableColumn align="end" className="w-36 uppercase">
              {t2024To2025(
                "month.output.incomeAfterTaxes.table.headers.subAmount"
              )}
            </TableColumn>
            <TableColumn align="end" className="w-36 uppercase">
              {t2024To2025(
                "month.output.incomeAfterTaxes.table.headers.amount"
              )}
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="totalIncome">
              <TableCell>
                {t2024To2025(
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
                {t2024To2025(
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
                {t2024To2025(
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
                {t2024To2025(
                  "month.output.incomeAfterTaxes.table.description.nsf"
                )}
              </TableCell>
              <TableCell className="text-end">
                {decimalToString(nsf, 2)}
              </TableCell>
              <TableCell className="text-end">{null}</TableCell>
            </TableRow>
            <TableRow key="totalTaxes">
              <TableCell>
                {t2024To2025(
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
                {t2024To2025(
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
