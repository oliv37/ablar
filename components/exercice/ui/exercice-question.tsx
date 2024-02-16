"use client";

import {
  type ChangeEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ExerciceStateContext from "../context/exercice-state-context";
import { type Item } from "../../../types";

type Props = {
  items: Item[];
  index: number;
};

export default function ExerciceQuestion({ items, index }: Props) {
  const [_, dispatch] = useContext(ExerciceStateContext);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const item = items[index];

  useEffect(() => {
    focusNextInput();
  }, []);

  useEffect(() => {
    const item = items[index];
    if (id === item?.id && name === item?.name && city === item?.city) {
      const isLastIndex = index >= items.length - 1;
      if (isLastIndex) {
        dispatch("RELOAD_STATE");
      } else {
        dispatch("NEXT_STATE");
      }
    }
  }, [id, name, city, items, index, dispatch]);

  function focusNextInput(currentInput?: HTMLInputElement) {
    [idRef.current, nameRef.current, cityRef.current]
      .find((input) => input && input !== currentInput && !input.disabled)
      ?.focus();
  }

  function handleChange(setValue: (value: string) => void, answer: string) {
    return function (e: ChangeEvent<HTMLInputElement>) {
      const newValue = e.target.value;
      setValue(newValue);
      if (newValue === answer) {
        focusNextInput(e.target);
      }
    };
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="id"
          className="m-2 w-20 border-b-2 border-foreground border-solid"
          disabled={id == item?.id}
          value={id}
          onChange={handleChange(setId, item?.id)}
          ref={idRef}
        />
        <input
          type="text"
          placeholder="name"
          className="m-2 w-44 border-b-2 border-foreground border-solid"
          disabled={name == item?.name}
          value={name}
          onChange={handleChange(setName, item?.name)}
          ref={nameRef}
        />
        <input
          type="text"
          placeholder="city"
          className="m-2 w-44 border-b-2 border-foreground border-solid"
          disabled={city == item?.city}
          value={city}
          onChange={handleChange(setCity, item?.city)}
          ref={cityRef}
        />
      </div>
      <div className="mt-2 text-center">
        {index + 1} / {items.length}
      </div>
    </div>
  );
}
