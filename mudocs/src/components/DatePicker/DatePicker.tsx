import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from "react";
import { clx } from "@/utils/functions";

type Props = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "type"
> & {
  onPickerOpened?: () => void;
  iconClassName?: string;
  isValid?: boolean;
};

export default function DatePicker({
  onChange,
  onPickerOpened,
  iconClassName: iconExtraClasses,
  isValid = true,
  ...props
}: Props) {
  const [selectedDate, setSelectedDate] = useState<undefined | Date>(
    props.value || props.defaultValue
      ? new Date((props.value || props.defaultValue) as string | number | Date)
      : undefined,
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const displayedDate = selectedDate
    ? new Intl.DateTimeFormat("en-UK").format(selectedDate)
    : "";
  const inputClassName = clx(
    "input-base",
    isValid && "input-valid",
    !isValid && "input-error",
  );
  const iconClassName = clx(
    "input-icon-base",
    isValid && "input-icon-valid",
    !isValid && "input-icon-error",
    iconExtraClasses,
  );

  const showDatePicker = useCallback(() => {
    inputRef?.current?.showPicker?.();
    onPickerOpened?.();
  }, [onPickerOpened]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const datePickerTriggerKeyCodes = ["Space", "Enter"];

      if (datePickerTriggerKeyCodes.includes(e.code)) {
        showDatePicker();
      }
    },
    [showDatePicker],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const strDate = e.target.value;
      let parsedDate = undefined;

      if (strDate) {
        parsedDate = new Date(strDate);
      }

      setSelectedDate(parsedDate);
      onChange?.(e);
    },
    [onChange],
  );

  return (
    <div className="relative">
      <input
        type="text"
        className={inputClassName}
        placeholder="DD/MM/YYYY"
        {...props}
        value={displayedDate}
        onKeyDown={handleKeyDown}
        onClick={showDatePicker}
        onTouchEnd={showDatePicker}
        readOnly
      />
      <input
        ref={inputRef}
        className="invisible sr-only absolute bottom-0 left-0"
        aria-hidden="false"
        type="date"
        {...props}
        onChange={handleChange}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 flex h-full items-center px-2.5"
      >
        <svg
          className={iconClassName}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
        </svg>
      </div>
    </div>
  );
}
