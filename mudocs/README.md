# MUDOCS

This is an unofficial project that aims to make public processes in Mauritius smoother and easier to understand. Click [here](https://mu-docs.netlify.app) if you wish to check out the website.

## Motivation

There's a lot of manual steps involved in Mauritian public processes and these steps are often not made publicly available by the authorities, and if they are, users are left confused with the way the information is presented.

This project is an attempt to make public processes in Mauritius more transparent and provide a better and smoother user experience by solicitating the help of members in the community. Anyone can help; whether through code or information about these processes or even feedback.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Generate Type Definitions

Some type definitions are missing from react-i18next & next-18next packages. There are 2 ways to generate these type definitions.

**NOTE: All locales need to contain the same corresponding translation file structure, otherwise the types won't be generated properly.**

### Manual

Run `npm run gen:types`

### Automatic

We have set up a watcher that automatically generates the missing type definitions during development, i.e. when you run `npm run dev:watch`, an additional terminal window should open to watch for changes in the `public/locales` folder. **If you close the new window, the watcher won't work.**

You may need to modify the [`watch:locales` script](package.json#L12) depending on your terminal. This script watches for changes in `public/locales` using [`onchange`](https://github.com/Qard/onchange) then generates type definitions as soon as a change is detected.

## References

The following resources have been used for research on this project:

- https://nlta.govmu.org/Pages/Procedures/Registration.aspx
- https://nlta.govmu.org/Pages/FAQ/Registration_faq.aspx
- https://registrar.govmu.org/Pages/About%20Us/Registration.aspx#Vehicle_Trailers
- https://ilemauriceinside.fr/acheter-une-voiture-a-lile-maurice/
- https://www.sicom.mu/
