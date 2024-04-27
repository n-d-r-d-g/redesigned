# Vue 3 + TypeScript + Vite

This is an unofficial alternative to the [MRA's current tax calculator](https://eservices.mra.mu/taxcalculator/viewCalculate).

## Motivation

The [MRA's current tax calculator](https://eservices.mra.mu/taxcalculator/viewCalculate) has been made available to help employees in Mauritius visualize how taxes are calculated and how much they need to pay.

This project aims at solving the following issues in the tool:

- After clicking `Calculate`, the user needs to click `Reset`, they are prompted to clear the values or not, then they can modify the cells. This is overcomplicated for no obvious reasons.
- The logic that runs after clicking `Calculate` sits on the client. Having to click a button to trigger the calculation adds an unnecessary step for the user.
- Cell data modification is not user-friendly; if a number has already been entered, e.g. 300,000, it's not possible to change it to 400,000 without having to clear the cell completely.
- The `Computation of Tax` tables are only displayed as a comparison betwwen the new and old tax systems. However, they clutter the website, hence, end up confusing users.
- The tool is similar to a spreadsheet and this is definitely not the most user-friendly way to interact with any piece of software.
- Contrast between foreground and background colors & other accessibility issues.
- Technical terms used on the website may be legally correct but not user-friendly, especially for first-timers.
- The only supported language is English
