"use client";

import { memo, useMemo } from "react";
import { useTranslation } from "next-i18next";
import { useFormikContext } from "formik";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MonthlyFormValues } from "../../types";
import {
  retrieveMonthlyValues,
  TickFormatter,
  TooltipFormatter,
} from "./reusables";
import { CURRENT_FINANCIAL_YEAR_NAMESPACE } from "../../reusables";

const MonthGraph = memo(() => {
  const { values, isValid } = useFormikContext<MonthlyFormValues>();
  const { t: tCurrentYear } = useTranslation(CURRENT_FINANCIAL_YEAR_NAMESPACE);
  const { t: tCommon } = useTranslation("common");

  const monthData = useMemo(() => {
    if (!isValid) return [];

    const minBaseSalary = 0;
    const maxBaseSalary = 1_000_000;
    const baseSalaryIncrement = 5_000;
    const data: any[] = [];
    let baseSalary = minBaseSalary;

    for (; baseSalary <= maxBaseSalary; baseSalary += baseSalaryIncrement) {
      const { newPAYE, newCSG, newNSF, newIncomeAfterTaxes } =
        retrieveMonthlyValues({
          values: { ...values, baseSalary: values.baseSalary + baseSalary },
          tCurrentYear,
        });
      data.push({
        [tCommon("graph.chargeableIncome")]: baseSalary,
        [tCommon("graph.paye")]: newPAYE.round().toNumber(),
        [tCommon("graph.csg")]: newCSG.round().toNumber(),
        [tCommon("graph.nsf")]: newNSF.round().toNumber(),
        [tCommon("graph.incomeAfterTaxes")]: newIncomeAfterTaxes
          .round()
          .toNumber(),
      });
    }

    return data;
  }, [values, isValid, tCurrentYear, tCommon]);

  if (!isValid) return null;

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      className="w-full min-h-[30rem] lg:min-h-[23.25rem] text-zinc-600 dark:text-zinc-300 [--tooltip-border-clr:#d4d4d8] dark:[--tooltip-border-clr:#71717b] [--tooltip-bg-clr:#ffffff] dark:[--tooltip-bg-clr:#18181b] [--csg-clr:#6e11b0] [--nsf-clr:#894b00] [--fsc-clr:#193cb8] [--paye-clr:#9f0712] [--total-income-clr:#016630] dark:[--csg-clr:#dab2ff] dark:[--nsf-clr:#facc15] dark:[--fsc-clr:#8ec5ff] dark:[--paye-clr:#ffa2a2] dark:[--total-income-clr:#4ade80]"
    >
      <LineChart data={monthData}>
        <XAxis
          dataKey={tCommon("graph.chargeableIncome")}
          tickFormatter={(value) => TickFormatter.format(value)}
          stroke="currentColor"
        />
        <YAxis
          tickFormatter={(value) => TickFormatter.format(value)}
          stroke="currentColor"
        />
        <Tooltip
          labelFormatter={(value) =>
            `${tCommon("graph.chargeableIncome")}: Rs ${TooltipFormatter.format(Number(value))}`
          }
          formatter={(value) => `Rs ${TooltipFormatter.format(Number(value))}`}
          labelClassName="text-black dark:text-white"
          contentStyle={{
            backgroundColor: "var(--tooltip-bg-clr)",
            borderColor: "var(--tooltip-border-clr)",
            borderRadius: "0.5rem",
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey={tCommon("graph.csg")}
          stroke="var(--csg-clr)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey={tCommon("graph.nsf")}
          stroke="var(--nsf-clr)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey={tCommon("graph.fsc")}
          stroke="var(--fsc-clr)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey={tCommon("graph.paye")}
          stroke="var(--paye-clr)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey={tCommon("graph.incomeAfterTaxes")}
          stroke="var(--total-income-clr)"
          strokeWidth={4}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
});

MonthGraph.displayName = "MonthGraph";

export { MonthGraph };
