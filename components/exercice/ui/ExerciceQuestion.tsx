"use client";

import { FraDpt } from "@/data/fra-dpt";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import ExerciceStateContext from "../context/ExerciceStateContext";

type Props = {
  data: FraDpt[];
  index: number;
};

export default function Question({ data, index }: Props) {
  const [_, dispatch] = useContext(ExerciceStateContext);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const item = data[index];

  useEffect(() => {
    focus();
  }, []);

  useEffect(() => {
    const item = data[index];
    if (id === item?.id && name === item?.name && city === item?.city) {
      const isLastIndex = index >= data.length - 1;
      if (isLastIndex) {
        dispatch("RELOAD_STATE");
      } else {
        dispatch("NEXT_STATE");
      }
    }
  }, [id, name, city, data, index, dispatch]);

  function focus(currentInput?: HTMLInputElement) {
    [idRef.current, nameRef.current, cityRef.current]
      .find((input) => input && input !== currentInput && !input.disabled)
      ?.focus();
  }

  function handleChange(setValue: (value: string) => void, answer: string) {
    return function (e: ChangeEvent<HTMLInputElement>) {
      const newValue = e.target.value;
      setValue(newValue);
      if (newValue === answer) {
        focus(e.target);
      }
    };
  }

  return (
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
  );
}
