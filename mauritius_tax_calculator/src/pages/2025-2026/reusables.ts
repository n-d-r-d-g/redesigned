import Decimal from "decimal.js";

export const CURRENT_FINANCIAL_YEAR_START = 2025;

export const CURRENT_FINANCIAL_YEAR_END = 2026;

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
    limit: new Decimal(38_462),
    rate: new Decimal(0),
  },
  {
    key: "2",
    limit: new Decimal(38_462),
    rate: new Decimal(0.1),
  },
  {
    key: "3",
    rate: new Decimal(0.2),
  },
];

export const INITIAL_YEARLY_TAXABLE_BRACKETS = [
  {
    key: "1",
    limit: new Decimal(500_000),
    rate: new Decimal(0),
  },
  {
    key: "2",
    limit: new Decimal(500_000),
    rate: new Decimal(0.1),
  },
  {
    key: "3",
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
  age: "29To64",
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
  age: "29To64",
  isCitizen: true,
  isResident: true,
  isPublicSector: false,
  isPRB: false,
  isInDomesticService: false,
} as const;

export const PAYE_MAX_YEARLY_NON_TAXABLE_LIMIT_18_TO_28_YEARS = new Decimal(
  1_000_000
);
export const PAYE_MAX_MONTHLY_NON_TAXABLE_LIMIT_18_TO_28_YEARS = new Decimal(
  PAYE_MAX_YEARLY_NON_TAXABLE_LIMIT_18_TO_28_YEARS
)
  .dividedBy(13)
  .round();
export const FSC_MAX_YEARLY_NON_TAXABLE_LIMIT = new Decimal(12_000_000);
export const FSC_MAX_MONTHLY_NON_TAXABLE_LIMIT = new Decimal(
  FSC_MAX_YEARLY_NON_TAXABLE_LIMIT
)
  .dividedBy(13)
  .round();
export const FSC_RATE = new Decimal(0.15);
export const CSG_MONTHLY_BASE_SALARY_LIMIT = new Decimal(50_000);
export const CSG_MAX_MONTHLY_DOMESTIC_LIMIT = new Decimal(3_000);
export const CSG_YEARLY_BASE_SALARY_LIMIT =
  CSG_MONTHLY_BASE_SALARY_LIMIT.mul(12);
export const CSG_MAX_YEARLY_DOMESTIC_LIMIT =
  CSG_MAX_MONTHLY_DOMESTIC_LIMIT.mul(12);
export const CSG_DECREASED_RATE = new Decimal(0.015);
export const CSG_INCREASED_RATE = new Decimal(0.03);

export const NSF_MIN_MONTHLY_INSURABLE_BASIC_WAGE_HOUSEHOLD_EMPLOYEE =
  new Decimal(2_795);
export const NSF_MIN_MONTHLY_INSURABLE_BASIC_WAGE_NORMAL_EMPLOYEE = new Decimal(
  4_400
);
export const NSF_MAX_MONTHLY_INSURABLE_BASIC_WAGE = new Decimal(28_570);
export const NSF_MIN_YEARLY_INSURABLE_BASIC_WAGE_HOUSEHOLD_EMPLOYEE =
  NSF_MIN_MONTHLY_INSURABLE_BASIC_WAGE_HOUSEHOLD_EMPLOYEE.mul(12);
export const NSF_MIN_YEARLY_INSURABLE_BASIC_WAGE_NORMAL_EMPLOYEE =
  NSF_MIN_MONTHLY_INSURABLE_BASIC_WAGE_NORMAL_EMPLOYEE.mul(12);
export const NSF_MAX_YEARLY_INSURABLE_BASIC_WAGE =
  NSF_MAX_MONTHLY_INSURABLE_BASIC_WAGE.mul(12);
export const NSF_RATE = new Decimal(0.01);
