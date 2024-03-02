"use client";

import {
  type ChangeEvent,
  useContext,
  useEffect,
  useRef,
  useState,
  SetStateAction,
} from "react";
import clsx from "@/src/shared/utils/clsx";
import type { GeoItem } from "@/src/geo/geo-types";
import GeoStateContext from "@/src/geo/context/geo-state-context";

const FIELD_NAMES = ["id", "name", "city"] as const;

type FieldName = (typeof FIELD_NAMES)[number];

const DEFAULT_INPUT_VALUES: Record<FieldName, string> = {
  id: "",
  name: "",
  city: "",
};

const DEFAULT_INPUT_REFS: Record<FieldName, HTMLInputElement | null> = {
  id: null,
  name: null,
  city: null,
};

const KEYBOARD_LETTERS = ["É", "Î"];

function computeHelpValue(inputValue: string, answer: string): string {
  const maxLength = Math.min(inputValue.length, answer.length);
  for (let i = 0; i <= maxLength; i++) {
    if (i === maxLength || inputValue.charAt(i) !== answer.charAt(i)) {
      return answer.substring(0, Math.min(i + 1, answer.length));
    }
  }
  return answer;
}

function createInputChangeHandler(
  fieldName: FieldName,
  setInputValues: (value: SetStateAction<Record<FieldName, string>>) => void
) {
  return function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setInputValues((prevValues) => ({
      ...prevValues,
      [fieldName]: newValue,
    }));
  };
}

type Props = {
  items: GeoItem[];
  index: number;
};

export default function GeoQuestion({ items, index }: Props) {
  const [_, dispatch] = useContext(GeoStateContext);
  const [inputValues, setInputValues] = useState(DEFAULT_INPUT_VALUES);
  const inputRefs =
    useRef<Record<FieldName, HTMLInputElement | null>>(DEFAULT_INPUT_REFS);
  const [lastFocusFieldName, setLastFocusFieldName] = useState<FieldName>("id");
  const item = items[index];

  useEffect(
    function focusNextInput() {
      const inputsEnabled = Object.values(inputRefs.current).filter(
        (input) => input != null && !input.disabled
      );
      const isInputFocused = inputsEnabled.some(
        (inputEnabled) => inputEnabled === document.activeElement
      );

      if (inputsEnabled.length && !isInputFocused) {
        inputsEnabled[0]?.focus();
      }
    },
    [inputValues]
  );

  useEffect(
    function dispatchNextState() {
      const allAnswersAreValid =
        item &&
        FIELD_NAMES.every(
          (fieldName) => inputValues[fieldName] === item[fieldName]
        );

      if (allAnswersAreValid) {
        const isLastItem = item === items[items.length - 1];
        if (isLastItem) {
          dispatch("RELOAD_STATE");
        } else {
          dispatch("NEXT_STATE");
        }
      }
    },
    [items, item, inputValues, dispatch]
  );

  function handleClickLetter(letter: string) {
    const input = inputRefs.current[lastFocusFieldName];

    if (input && !input.disabled) {
      setInputValues((prevValues) => ({
        ...prevValues,
        [lastFocusFieldName]: prevValues[lastFocusFieldName] + letter,
      }));
    }
  }

  function handleClickHelp() {
    const fieldNameToHelp = FIELD_NAMES.find(
      (fieldName) => item && inputValues[fieldName] !== item[fieldName]
    );

    if (fieldNameToHelp) {
      setInputValues((prevValues) => ({
        ...prevValues,
        [fieldNameToHelp]: computeHelpValue(
          prevValues[fieldNameToHelp],
          item[fieldNameToHelp]
        ),
      }));
    }
  }

  return (
    item && (
      <div>
        <div className="flex justify-center items-center">
          {FIELD_NAMES.map((fieldName) => (
            <input
              key={fieldName}
              type="text"
              placeholder={fieldName}
              className={clsx(
                `${fieldName === "id" ? "w-14" : "w-44"}`,
                "m-2 border-b-2 border-foreground border-solid"
              )}
              disabled={inputValues[fieldName] == item[fieldName]}
              value={inputValues[fieldName]}
              onChange={createInputChangeHandler(fieldName, setInputValues)}
              onFocus={() => setLastFocusFieldName(fieldName)}
              ref={(el) => (inputRefs.current[fieldName] = el)}
            />
          ))}
        </div>
        <div className="mt-2 text-center">
          <span className="mr-6 font-bold">
            {index + 1} / {items.length}
          </span>
          {KEYBOARD_LETTERS.map((letter) => (
            <button
              key={letter}
              type="button"
              className="mr-2 px-2 border border-foreground shadow shadow-current"
              onClick={() => handleClickLetter(letter)}
            >
              {letter}
            </button>
          ))}
          <button
            type="button"
            className={clsx(
              "ml-4 px-2 font-bold rounded-full",
              "bg-foreground text-background"
            )}
            onClick={handleClickHelp}
          >
            ?
          </button>
        </div>
      </div>
    )
  );
}
