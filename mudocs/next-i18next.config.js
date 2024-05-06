const allHTMLTags = require('./html-tags')

/** @type import("next").I18NConfig */
const i18n = {
	defaultLocale: 'en',
  // locales: ['en', 'fr', 'mu'],
  locales: ['en'],
};

/** @type import("next-i18next").UserConfig */
const next18nextConfig = {
	i18n,
	// fallbackLng: 'en',
  serializeConfig: false,
  allowObjectInHTMLChildren: true,
	reloadOnPrerender: process.env.NODE_ENV === "development",
  react: {
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: allHTMLTags,
  },
  // saveMissing: true,
  // missingKeyHandler: (lngs, ns, key) => {
  //   console.error('MISSING KEY:', `"${key}";`, '\n', `locales: ${lngs};`, '\n', `ns: ${ns};`)
  // },
  missingInterpolationHandler: (_text, missingValues, options) => {
    if (process.env.NODE_ENV !== "development") return;

    const errorTitle = 'MISSING INTERPOLATION:'
    const missingInterpolationValues = [...missingValues]
    const translationKey = options.defaultValue
    const namespaces = options.ns?.length === 1 ? options.ns[0] : options.ns

    console.error(errorTitle, '\n', 'Key:', translationKey, '\n', 'Interpolations:', missingInterpolationValues, '\n', 'Namespace:', namespaces)
  },
};

module.exports = next18nextConfig;
