import {
  DetailedHTMLProps,
  FocusEvent,
  HTMLAttributes,
  MouseEvent,
  useState,
} from "react";
import { useTranslation } from "next-i18next";
import Tippy from "@tippyjs/react";
import { clx } from "@/utils/functions";
import TypedTrans from "../TypedTrans/TypedTrans";
import { DEFAULT_I18N_NAMESPACE } from "../../../constants";
import { SelectiveTerms } from "@/types";
import "tippy.js/dist/tippy.css";

const technicalTermPrefix = "technicalTerms.";

type TechnicalTermPrefix = typeof technicalTermPrefix;
type TechnicalTermSuffix = `.${string}`;
type TechnicalTerms = SelectiveTerms<
  TypedTransParams["common"],
  TechnicalTermPrefix,
  TechnicalTermSuffix
>;

type Props = DetailedHTMLProps<
  Omit<HTMLAttributes<HTMLElement>, "children">,
  HTMLElement
> & {
  name: TechnicalTerms;
  count?: number;
};

export default function TechnicalTerm({
  name,
  count = 1,
  className,
  ...props
}: Props) {
  const { t: tCommon } = useTranslation(DEFAULT_I18N_NAMESPACE);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const titleKey = `technicalTerms.${name}.title` as const;
  const label = tCommon(`technicalTerms.${name}.label`, { count });
  const spanClassName = clx(
    "inline cursor-help rounded underline decoration-dotted decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:decoration-gray-400 dark:focus-visible:ring-blue-500 focus-visible:dark:ring-offset-slate-900",
    className,
  );

  const showTooltip = (e: FocusEvent | MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTooltipVisible(true);
  };

  const hideTooltip = (e: FocusEvent | MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTooltipVisible(false);
  };

  const toggleTooltip = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTooltipVisible((prevIsVisible) => !prevIsVisible);
  };

  const onOutsideTooltipClick = (_i: unknown, e: Event) => {
    hideTooltip(e as unknown as MouseEvent);
  };

  return (
    <Tippy
      content={
        <TypedTrans
          ns="common"
          i18nKey={titleKey}
          params={{ count }}
          components={{
            EN: <span lang="en" />,
            FR: <span lang="fr" />,
            MU: <span lang="mfe" />,
          }}
        />
      }
      visible={isTooltipVisible}
      onClickOutside={onOutsideTooltipClick}
    >
      <span
        tabIndex={0}
        className={spanClassName}
        {...props}
        onClick={toggleTooltip}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {label}
      </span>
    </Tippy>
  );
}
