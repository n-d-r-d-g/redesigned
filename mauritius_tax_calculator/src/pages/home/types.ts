export interface Route {
  slug: string | null;
  label: string;
  children?: Route[];
}
