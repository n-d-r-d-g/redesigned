export interface MonthlyFormValues {
  baseSalary: number;
  travelingAllowance: number;
  performanceBonus: number;
  otherTaxableIncome: number;
  age: "under18" | "18To64" | "65To69" | "70AndOver";
  isCitizen: boolean;
  isResident: boolean;
  isPublicSector: boolean;
  isPRB: boolean;
  isInDomesticService: boolean;
}

export interface YearlyFormValues {
  monthlyBaseSalary: number;
  totalBaseSalary: number;
  eoyBonus: number;
  travelingAllowance: number;
  performanceBonus: number;
  otherTaxableIncome: number;
  numOfDependents: "0" | "1" | "2" | "3" | "4";
  otherTaxDeductions: number;
  age: "under18" | "18To64" | "65To69" | "70AndOver";
  isCitizen: boolean;
  isResident: boolean;
  isPublicSector: boolean;
  isPRB: boolean;
  isInDomesticService: boolean;
}

export interface TaxCalcRow {
  key: string;
  taxableLimit: string;
  taxableAmount: string;
  taxRate: null | string;
  taxCharged: string;
}

export type TabKey = "month" | "year";
