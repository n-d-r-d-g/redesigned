import Decimal from "decimal.js";

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
export const IET_DEPENDENT_DEDUCTIONS = {
  0: new Decimal(0),
  1: new Decimal(110_000),
  2: new Decimal(190_000),
  3: new Decimal(275_000),
  4: new Decimal(355_000),
};
