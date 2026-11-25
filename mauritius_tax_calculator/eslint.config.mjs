import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  ...nextCoreWebVitals,
  {
    rules: {
      // React Compiler rules added in eslint-plugin-react-hooks 7 (via eslint-config-next 16).
      // Existing code violates them (e.g. setState calls inside effects); re-enable once refactored.
      "react-hooks/static-components": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);
