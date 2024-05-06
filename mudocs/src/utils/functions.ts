import { NextRouter } from "next/router";
import { TFunction } from "next-i18next";
import { Address, Person, Company, PersonTitle } from "@/types";

export function generateDocumentTitle(...strParts: Array<string>) {
  let title = "MUDOCS";

  if ((strParts?.length || 0) === 0) return title;

  title = strParts.reduce((prevStr, strPart) => {
    if (!strPart) return prevStr;

    return `${prevStr} - ${strPart}`;
  }, title);

  return title;
}

export function clx(...classes: Array<undefined | string | number | boolean>) {
  const concatClasses = classes.filter(Boolean).join(" ");

  return concatClasses;
}

/** E.g. for different values of type:
 * short: 01/11/21
 * long: 01 NOVEMBER 2021
 */
export function formattedDate(
  date?: string | number | Date,
  locale: string | Array<string> = "en-UK",
  options?: Intl.DateTimeFormatOptions,
  type: "short" | "long" = "short",
) {
  if (!date) return null;

  const parsedDate = new Date(date);
  let formattedStrDate = null;

  if (type === "short") {
    const dateTimeFormat = new Intl.DateTimeFormat(locale, options);
    formattedStrDate = dateTimeFormat.format(parsedDate);

    return formattedStrDate;
  }

  if (type === "long") {
    formattedStrDate = Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
      .format(parsedDate)
      ?.toUpperCase();
  }

  return formattedStrDate;
}

export function nameWithTitle(
  title: PersonTitle | "",
  name: string,
  t?: TFunction,
) {
  return `${t && title ? t(`titles.${title}`) : title} ${name.toUpperCase()}`;
}

export function namesWithId(traders: Array<Person | Company>, t: TFunction) {
  return traders.reduce((finalStr, trader, i) => {
    let nameWithId = "";

    if (trader.traderType === "company") {
      nameWithId = `${trader.name}, ${t("brn")} ${trader.brn?.toUpperCase()}`;
    } else {
      nameWithId = `${nameWithTitle(
        t(`titles.${trader.title}`),
        trader.name,
      )}, ${t(
        trader.nationality === "mauritian" ? "idNo" : "passportNo",
      )} ${trader.id?.toUpperCase()}`;
    }

    const isLastTrader = i === traders.length - 1;
    const isSecondLastTrader = i === traders.length - 2;

    if (!isLastTrader) {
      nameWithId += isSecondLastTrader ? " & " : ", ";
    }

    return (finalStr += nameWithId);
  }, "");
}

export function namesWithAddress(
  traders: Array<(Person | Company) & Address>,
  t: TFunction,
  commonAddress: boolean = false,
) {
  const retrieveAddress = (trader: (Person | Company) & Address) =>
    [trader?.address?.street, trader?.address?.locality?.toUpperCase()]
      .filter(Boolean)
      .join(", ");

  const traderNamesWithoutAddress = traders.reduce((finalStr, trader, i) => {
    const isPerson = trader.traderType === "person";
    const typedTrader = isPerson
      ? (trader as Person & Address)
      : (trader as Company & Address);
    let nameWithAddtionalInfo = isPerson
      ? nameWithTitle(
          t(`titles.${(typedTrader as Person).title}`),
          typedTrader.name,
        )
      : typedTrader.name;
    const address = retrieveAddress(typedTrader);
    nameWithAddtionalInfo += commonAddress
      ? ""
      : `, ${t(isPerson ? "residingAt" : "locatedAt")} ${address}`;
    const isLastTrader = i === traders.length - 1;
    const isSecondLastTrader = i === traders.length - 2;

    if (!isLastTrader) {
      nameWithAddtionalInfo += isSecondLastTrader ? " & " : ", ";
    }

    return (finalStr += nameWithAddtionalInfo);
  }, "");

  if (!traderNamesWithoutAddress) return traderNamesWithoutAddress;

  if (!commonAddress) return traderNamesWithoutAddress;

  const address = retrieveAddress(traders[0]);

  if (!address) return traderNamesWithoutAddress;

  return `${traderNamesWithoutAddress}, ${t(
    traders[0].traderType === "person" ? "residingAt" : "locatedAt",
  )} ${address}`;
}

export function getValueByAccessor(
  obj: { [key: string]: unknown },
  accessor: string,
) {
  const proxy = new Proxy(obj, {
    get: function (_map, key) {
      try {
        return eval(`obj.${String(key)}`);
      } catch {
        return undefined;
      }
    },
  });

  const valueByAccessor = proxy[accessor];

  return valueByAccessor;
}

export function silentlyUpdateURL(path: string, router: NextRouter) {
  const localePrefix =
    router.locale === router.defaultLocale ? "" : `/${router.locale}`;
  const newPath = `${localePrefix}${path}`;

  // next/router's caveat: cannot push silently to a new route
  window.history.pushState(
    {
      as: newPath,
      url: router.pathname,
      options: { shallow: true },
    },
    "",
    newPath,
  );
}

const oneThroughtNineteen = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
};

const tens = {
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety",
};

const oneThousandToThePower = {
  1: "thousand",
  2: "million",
  3: "billion",
  4: "trillion",
};

function twoDigitAmountToWords(twoDigitAmount: string) {
  const amountInt = parseInt(twoDigitAmount);

  if (amountInt <= 19) {
    return oneThroughtNineteen[amountInt as keyof typeof oneThroughtNineteen];
  }

  const tensToWords =
    twoDigitAmount[0] === "0"
      ? undefined
      : tens[twoDigitAmount[0] as unknown as keyof typeof tens];

  if (twoDigitAmount[1] === "0") {
    return tensToWords;
  }

  const onesToWords =
    twoDigitAmount[1] === "0"
      ? undefined
      : oneThroughtNineteen[
          twoDigitAmount[1] as unknown as keyof typeof oneThroughtNineteen
        ];

  return [tensToWords, onesToWords].filter(Boolean).join(" ");
}

function threeDigitAmountToWords(threeDigitAmount: string) {
  const hundredsToWords =
    threeDigitAmount[0] === "0"
      ? undefined
      : `${
          oneThroughtNineteen[
            threeDigitAmount[0] as unknown as keyof typeof oneThroughtNineteen
          ]
        } hundred`;
  const twoDigitAmount = threeDigitAmount.slice(1, 3);
  const tensAndOnesToWords =
    twoDigitAmount === "00" ? undefined : twoDigitAmountToWords(twoDigitAmount);

  return [hundredsToWords, tensAndOnesToWords].filter(Boolean).join(" and ");
}

export function amountToWords(amount: number): undefined | string {
  if (!Number.isInteger) {
    throw new Error("Only integer values are supported.");
  }

  if (amount < 0) {
    throw new Error("Negative values are not supported.");
  }

  if (amount > 999_999_999_999_999) {
    throw new Error("The maximum supported value is 999_999_999_999_999.");
  }

  if (amount === 0) {
    return "zero";
  }

  const amountStr = amount.toString();

  let groupsOfThreeInWords = [];
  let paddedAmountStr = amountStr;
  let i;

  if (amountStr.length % 3 !== 0) {
    for (i = 0; i < 3 - (amountStr.length % 3); i++) {
      paddedAmountStr = `0${paddedAmountStr}`;
    }
  }

  let thousandPower = 0;

  for (i = paddedAmountStr.length; i > 0; i -= 3) {
    const threeDigitAmountStr = paddedAmountStr.slice(i - 3, i);
    let suffix = "";

    if (thousandPower > 0) {
      suffix =
        oneThousandToThePower[
          thousandPower as keyof typeof oneThousandToThePower
        ];
    }

    thousandPower++;

    const threeDigitAmountInWords =
      threeDigitAmountToWords(threeDigitAmountStr);

    if (!threeDigitAmountInWords) continue;

    groupsOfThreeInWords.unshift(
      [threeDigitAmountInWords, suffix].filter(Boolean).join(" "),
    );
  }

  groupsOfThreeInWords = groupsOfThreeInWords.filter(Boolean);

  if (
    groupsOfThreeInWords.length > 1 &&
    !groupsOfThreeInWords[groupsOfThreeInWords.length - 1].includes(" and ")
  ) {
    groupsOfThreeInWords.splice(groupsOfThreeInWords.length - 1, 0, "and");
  }

  return groupsOfThreeInWords.join(" ");
}

export function convertCamelToKebabCase(originalText: string) {
  if (originalText != originalText.toLowerCase()) {
    originalText = originalText.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
  }

  return originalText;
}

// console.assert(
//   amountToWords(0) === "zero",
//   `0: not working; got: ${amountToWords(0)}`
// );
// console.assert(
//   amountToWords(1) === "one",
//   `1: not working; got: ${amountToWords(1)}`
// );
// console.assert(
//   amountToWords(98) === "ninety eight",
//   `98: not working; got: ${amountToWords(98)}`
// );
// console.assert(
//   amountToWords(508) === "five hundred and eight",
//   `508: not working; got: ${amountToWords(508)}`
// );
// console.assert(
//   amountToWords(211) === "two hundred and eleven",
//   `211: not working; got: ${amountToWords(211)}`
// );
// console.assert(
//   amountToWords(700) === "seven hundred",
//   `700: not working; got: ${amountToWords(700)}`
// );
// console.assert(
//   amountToWords(440) === "four hundred and forty",
//   `440: not working; got: ${amountToWords(440)}`
// );
// console.assert(
//   amountToWords(400_000) === "four hundred thousand",
//   `400_000: not working; got: ${amountToWords(400_000)}`
// );
// console.assert(
//   amountToWords(9_876_000) ===
//     "nine million eight hundred and seventy six thousand",
//   `9_876_000: not working; got: ${amountToWords(9_876_000)}`
// );
// console.assert(
//   amountToWords(870_001) === "eight hundred and seventy thousand and one",
//   `870_001: not working; got: ${amountToWords(870_001)}`
// );
// console.assert(
//   amountToWords(45_123_870_001) ===
//     "forty five billion one hundred and twenty three million eight hundred and seventy thousand and one",
//   `45_123_870_001: not working; got: ${amountToWords(45_123_870_001)}`
// );
// console.assert(
//   amountToWords(45_000_000_001) === "forty five billion and one",
//   `45_000_000_001: not working; got: ${amountToWords(45_000_000_001)}`
// );
// console.assert(
//   amountToWords(45_099_000_000_001) ===
//     "forty five trillion ninety nine billion and one",
//   `45_099_000_000_001: not working; got: ${amountToWords(45_099_000_000_001)}`
// );
// console.assert(
//   amountToWords(45_099_000_000_000) ===
//     "forty five trillion and ninety nine billion",
//   `45_099_000_000_000: not working; got: ${amountToWords(45_099_000_000_000)}`
// );
