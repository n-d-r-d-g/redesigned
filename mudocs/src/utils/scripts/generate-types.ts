import { generateI18NextResourcesTypeDef } from "./generate-i18-next-resources-types";
import { generateTypedTransTypeDef } from "./generate-typed-trans-types";

async function generateTypes() {
  await generateI18NextResourcesTypeDef();
  await generateTypedTransTypeDef();
}

generateTypes();
