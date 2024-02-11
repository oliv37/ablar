"use client";

import { FraDpt } from "@/data/fra-dpt";
import clsx from "@/utils/clsx";
import { useContext } from "react";
import ExerciceStateContext from "../context/exercice-state-context";

type Props = {
  data: FraDpt[];
  index: number;
};

export default function QuestionPreview({ data, index }: Props) {
  const [_, dispatch] = useContext(ExerciceStateContext);
  const item = data[index];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-2 mb-2 font-bold">
        {item.id} - {item.name} - {item.city}
      </div>
      <div>
        <button
          type="button"
          className={clsx(
            "p-2 mr-4 border-b-2 border-foreground border-solid",
            "disabled:border-b-0 disabled:opacity-50"
          )}
          disabled={index <= 0}
          onClick={() => dispatch("PREV_STATE")}
        >
          prev
        </button>
        {index + 1} / {data.length}
        <button
          type="button"
          className={clsx("p-2 ml-4 border-b-2 border-foreground border-solid")}
          onClick={() => dispatch("NEXT_STATE")}
        >
          next
        </button>
      </div>
    </div>
  );
}
