# Mauritius Tax Calculator

This is an unofficial alternative to the [MRA's current tax calculator](https://eservices.mra.mu/taxcalculator/viewCalculate). Click [here](https://mauritius-tax-calculator.netlify.app) if you wish to check out the website.

## Motivation

The [MRA's current tax calculator](https://eservices.mra.mu/taxcalculator/viewCalculate) has been made available to help employees in Mauritius visualize how taxes are calculated and how much they need to pay.

This project aims at solving the following issues in the tool:

- After clicking `Calculate`, the user needs to click `Reset`, they are prompted to clear the values or not, then they can modify the cells. This is overcomplicated for no obvious reasons.
- The logic that runs after clicking `Calculate` sits on the client. Having to click a button to trigger the calculation adds an unnecessary step for the user.
- Cell data modification is not user-friendly; if a number has already been entered, e.g. 300,000, it's not possible to change it to 400,000 without having to clear the cell completely.
- The `Computation of Tax... (Old System)` table is only displayed as a comparison between the new and old tax systems. However, it clutters the website, hence, ends up confusing users.
- The `Computation of Tax... (New System)` table is displayed even if the user is not interested in viewing the detailed tax calculation.
- The `Computation of Tax... (New System)` table does not display the monthly PAYE amount.
- The `Chargeable Income for the Year` table does not indicate which values are added and subtracted. It is also displayed even if the user is not interested in viewing the detailed calculation.
- Contrast between foreground and background colors & other accessibility issues.
- Technical terms used on the website may be legally correct but not user-friendly, especially for first-timers.
- The only supported language is English.
- No dark mode (Based on preference).

## How this app might be useful

### Payslip verification

At the end of every month, most employees don't make sure that the values in their payslip are correct. It's time-consuming, error-prone, feels complex and most assume there won't be mistakes.

Nevertheless, failure to do this verification can often lead to paying more than required and not even realizing it.

Even the payroll team can make mistakes!

By using this app, you can quickly cross check whether your payslip contains errors. If so, you can contact the payroll team for clarification.

### Pre-negotiation

Whenever you need to negotiate a package, it's important to take into account how much of it you really receive, i.e. after taxes. This way, you can make a calculated decision based on your needs.

## Adding a new financial year

1. Copy the previous financial year's `pages` folder and rename it to the new financial year.
2. Copy the previous financial year's `locales` and rename them to the new financial year.
3. Add the new financial year to `i18next-resources.d.ts`.
4. Inside the new pages folder (`pages/new_financial_year`), **manually** replace all occurrences of the previous financial year with the new financial year.
5. Update `reusables` and logic according to the MRA's website ([PAYE](https://www.mra.mu/index.php/employers/paye), [CSG](https://www.mra.mu/index.php/eservices1/individual/monthly-paye-csg-nsf-return), [NSF]()).
6. Add MRA's PDFs to `mra-pdfs/new_financial_year`.
7. Modify the redirect to the latest financial year in `pages/index.page.tsx`.

## Miscellaneous

### Highlight text on MRA's website via URL

Execute the following in your browser's console to get a modified URL that automatically highlight specified keywords:

```js
function getHighlightedURL(originalURL, ...keywords) {
  const url = new URL(originalURL);
  const searchParams = btoa(JSON.stringify(keywords));
  url.searchParams.set("highlight", searchParams);

  return url.href;
}
```

You can generate highlight URLs with one or multiple keywords:

```js
getHighlightedURL(location.href, "guide"); // Highlights `guide` on the page
getHighlightedURL(location.href, "guide", "tax"); // Highlights `guide` & `tax` on the page
```
