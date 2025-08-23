import Decimal from "decimal.js";

export const CURRENT_FINANCIAL_YEAR_START = 2023;

export const CURRENT_FINANCIAL_YEAR_END = 2024;

export const CURRENT_FINANCIAL_YEAR_NAMESPACE = `${CURRENT_FINANCIAL_YEAR_START}-${CURRENT_FINANCIAL_YEAR_END}`;

export const MIN_MONETARY_AMOUNT = 0;

export const MAX_MONETARY_AMOUNT = 999_999_999_999;

export const MRA_MONTHLY_MAX_NON_TAXABLE_TRAVELING_ALLOWANCE = new Decimal(
  20_000
);

export const MRA_YEARLY_MAX_NON_TAXABLE_TRAVELING_ALLOWANCE =
  MRA_MONTHLY_MAX_NON_TAXABLE_TRAVELING_ALLOWANCE.mul(12);

export const INITIAL_MONTHLY_TAXABLE_BRACKETS = [
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

export const INITIAL_YEARLY_TAXABLE_BRACKETS = [
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

export const YEARLY_IET_DEPENDENT_DEDUCTIONS = {
  0: new Decimal(0),
  1: new Decimal(110_000),
  2: new Decimal(190_000),
  3: new Decimal(275_000),
  4: new Decimal(355_000),
};

export const MONTHLY_IET_DEPENDENT_DEDUCTIONS = Object.entries(
  YEARLY_IET_DEPENDENT_DEDUCTIONS
).reduce(
  (acc, [key, val]) => ({ ...acc, [key]: val.dividedBy(12).round() }),
  {} as Record<keyof typeof YEARLY_IET_DEPENDENT_DEDUCTIONS, Decimal>
);

export const DEFAULT_MONTHLY_INITIAL_VALUES = {
  baseSalary: 0,
  travelingAllowance: 0,
  performanceBonus: 0,
  otherTaxableIncome: 0,
  numOfDependents: "0",
  otherTaxDeductions: 0,
  age: "18To64",
  isCitizen: true,
  isResident: true,
  isPublicSector: false,
  isPRB: false,
  isInDomesticService: false,
} as const;

export const DEFAULT_YEARLY_INITIAL_VALUES = {
  monthlyBaseSalary: 0,
  totalBaseSalary: 0,
  eoyBonus: 0,
  travelingAllowance: 0,
  performanceBonus: 0,
  otherTaxableIncome: 0,
  numOfDependents: "0",
  otherTaxDeductions: 0,
  age: "18To64",
  isCitizen: true,
  isResident: true,
  isPublicSector: false,
  isPRB: false,
  isInDomesticService: false,
} as const;

export const CSG_MONTHLY_BASE_SALARY_LIMIT = new Decimal(50_000);
export const CSG_MAX_MONTHLY_DOMESTIC_LIMIT = new Decimal(3_000);
export const CSG_YEARLY_BASE_SALARY_LIMIT =
  CSG_MONTHLY_BASE_SALARY_LIMIT.mul(12);
export const CSG_MAX_YEARLY_DOMESTIC_LIMIT =
  CSG_MAX_MONTHLY_DOMESTIC_LIMIT.mul(12);
export const CSG_DECREASED_RATE = new Decimal(0.015);
export const CSG_INCREASED_RATE = new Decimal(0.03);

export const NSF_MIN_MONTHLY_INSURABLE_BASIC_WAGE_HOUSEHOLD_EMPLOYEE =
  new Decimal(2_375);
export const NSF_MIN_MONTHLY_INSURABLE_BASIC_WAGE_NORMAL_EMPLOYEE = new Decimal(
  3_740
);
export const NSF_MAX_MONTHLY_INSURABLE_BASIC_WAGE = new Decimal(24_315);
export const NSF_MIN_YEARLY_INSURABLE_BASIC_WAGE_HOUSEHOLD_EMPLOYEE =
  NSF_MIN_MONTHLY_INSURABLE_BASIC_WAGE_HOUSEHOLD_EMPLOYEE.mul(12);
export const NSF_MIN_YEARLY_INSURABLE_BASIC_WAGE_NORMAL_EMPLOYEE =
  NSF_MIN_MONTHLY_INSURABLE_BASIC_WAGE_NORMAL_EMPLOYEE.mul(12);
export const NSF_MAX_YEARLY_INSURABLE_BASIC_WAGE =
  NSF_MAX_MONTHLY_INSURABLE_BASIC_WAGE.mul(12);
export const NSF_RATE = new Decimal(0.01);
