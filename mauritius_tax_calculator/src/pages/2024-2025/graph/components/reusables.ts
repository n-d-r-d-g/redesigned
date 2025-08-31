import { TFunction } from "i18next";
import { MonthlyFormValues, YearlyFormValues } from "../../types";
import Decimal from "decimal.js";
import {
  CSG_DECREASED_RATE,
  CSG_INCREASED_RATE,
  CSG_MAX_MONTHLY_DOMESTIC_LIMIT,
  CSG_MAX_YEARLY_DOMESTIC_LIMIT,
  CSG_MONTHLY_BASE_SALARY_LIMIT,
  CSG_YEARLY_BASE_SALARY_LIMIT,
  INITIAL_MONTHLY_TAXABLE_BRACKETS,
  INITIAL_YEARLY_TAXABLE_BRACKETS,
  MONTHLY_IET_DEPENDENT_DEDUCTIONS,
  MRA_MONTHLY_MAX_NON_TAXABLE_TRAVELING_ALLOWANCE,
  MRA_YEARLY_MAX_NON_TAXABLE_TRAVELING_ALLOWANCE,
  NSF_MAX_MONTHLY_INSURABLE_BASIC_WAGE,
  NSF_MAX_YEARLY_INSURABLE_BASIC_WAGE,
  NSF_MIN_MONTHLY_INSURABLE_BASIC_WAGE_HOUSEHOLD_EMPLOYEE,
  NSF_MIN_MONTHLY_INSURABLE_BASIC_WAGE_NORMAL_EMPLOYEE,
  NSF_MIN_YEARLY_INSURABLE_BASIC_WAGE_HOUSEHOLD_EMPLOYEE,
  NSF_MIN_YEARLY_INSURABLE_BASIC_WAGE_NORMAL_EMPLOYEE,
  NSF_RATE,
  YEARLY_IET_DEPENDENT_DEDUCTIONS,
} from "../../reusables";
import { decimalToString } from "@/utils/functions";

type RetrieveMonthlyValues = {
  values: MonthlyFormValues;
  tCurrentYear: TFunction<"2024-2025", undefined>;
};

export const TickFormatter = Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

export const TooltipFormatter = new Intl.NumberFormat("en");

export function retrieveMonthlyValues({
  values,
  tCurrentYear,
}: RetrieveMonthlyValues) {
  const newBaseSalary = new Decimal(values.baseSalary);
  const newTravelingAllowance = new Decimal(values.travelingAllowance);
  const baseSalaryTimes25Percent = newBaseSalary.dividedBy(4);
  const newMaxNonTaxableTravelingAllowance = Decimal.min(
    MRA_MONTHLY_MAX_NON_TAXABLE_TRAVELING_ALLOWANCE,
    baseSalaryTimes25Percent
  );
  const newTaxableTravelingAllowance = newTravelingAllowance.lessThanOrEqualTo(
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
            : tCurrentYear("month.output.paye.table.taxableLimits.remainder"),
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

  if (!isExemptFromCSG) {
    newCSGRate = newBaseSalary.lessThanOrEqualTo(CSG_MONTHLY_BASE_SALARY_LIMIT)
      ? CSG_DECREASED_RATE
      : CSG_INCREASED_RATE;
  }

  const newCSG = newBaseSalary.mul(newCSGRate);
  const newNSF = isExemptFromNSF
    ? new Decimal(0)
    : newNSFInsurableSalary.mul(newNSFRate);
  const newTotalTaxes = newPAYE.add(newCSG).add(newNSF);
  const newIncomeAfterTaxes = newTotalIncome.sub(newTotalTaxes);

  return {
    newBaseSalary,
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
    newCSGRate,
    newCSG,
    newNSFRate,
    newNSFInsurableSalary,
    newNSF,
    newTotalTaxes,
    newMonthlyPAYECalcRows,
    newIncomeAfterTaxes,
  };
}

type RetrieveYearlyValues = {
  values: YearlyFormValues;
  tCurrentYear: TFunction<"2024-2025", undefined>;
};

export function retrieveYearlyValues({
  values,
  tCurrentYear,
}: RetrieveYearlyValues) {
  const newMonthlyBaseSalary = new Decimal(values.monthlyBaseSalary);
  const newTotalBaseSalary = new Decimal(values.totalBaseSalary);
  const newEOYBonus = new Decimal(values.eoyBonus);
  const newTravelingAllowance = new Decimal(values.travelingAllowance);
  const totalBaseSalaryTimes25Percent = newTotalBaseSalary.dividedBy(4);
  const newMaxNonTaxableTravelingAllowance = Decimal.min(
    MRA_YEARLY_MAX_NON_TAXABLE_TRAVELING_ALLOWANCE,
    totalBaseSalaryTimes25Percent
  );
  const newTaxableTravelingAllowance = newTravelingAllowance.lessThanOrEqualTo(
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
            : tCurrentYear("year.output.paye.table.taxableLimits.remainder"),
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
        "year.output.paye.table.taxableLimits.taxCharged"
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

  return {
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
  };
}
