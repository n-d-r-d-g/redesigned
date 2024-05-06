import { DEFAULT_I18N_NAMESPACE } from "../../constants";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof DEFAULT_I18N_NAMESPACE;
    resources: I18NextResources;
    resources;
  }
}
