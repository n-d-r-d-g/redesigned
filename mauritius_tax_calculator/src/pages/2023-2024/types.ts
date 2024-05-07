export interface MonthlyFormValues {
  baseSalary: number;
  travelingAllowance: number;
  internetAllowance: number;
  performanceBonus: number;
  otherTaxableIncome: number;
}

export interface YearlyFormValues {
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

export interface TaxCalcRow {
  key: string;
  taxableLimit: string;
  taxableAmount: string;
  taxRate: null | string;
  taxCharged: string;
}

export type TabKey = "month" | "year";
