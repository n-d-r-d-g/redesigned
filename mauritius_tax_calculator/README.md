# Mauritius Tax Calculator

This is an unofficial alternative to the [MRA's current tax calculator](https://eservices.mra.mu/taxcalculator/viewCalculate).

## Motivation

The [MRA's current tax calculator](https://eservices.mra.mu/taxcalculator/viewCalculate) has been made available to help employees in Mauritius visualize how taxes are calculated and how much they need to pay.

This project aims at solving the following issues in the tool:

- After clicking `Calculate`, the user needs to click `Reset`, they are prompted to clear the values or not, then they can modify the cells. This is overcomplicated for no obvious reasons.
- The logic that runs after clicking `Calculate` sits on the client. Having to click a button to trigger the calculation adds an unnecessary step for the user.
- Cell data modification is not user-friendly; if a number has already been entered, e.g. 300,000, it's not possible to change it to 400,000 without having to clear the cell completely.
- The `Computation of Tax... (Old System)` table is only displayed as a comparison between the new and old tax systems. However, it clutter the website, hence, end up confusing users.
- The `Computation of Tax... (New System)` table is displayed even if the user is not interested in viewing the detailed tax calculation.
- The `Computation of Tax... (New System)` table does not display the monthly PAYE amount.
- The `Chargeable Income for the Year` table does not indicate which values are added and subtracted. It is also displayed even if the user us not interested in viewing the detailed calculation.
- Contrast between foreground and background colors & other accessibility issues.
- Technical terms used on the website may be legally correct but not user-friendly, especially for first-timers.
- The only supported language is English.
- No dark mode (Based on preference).
