"use client";

import { useContext, useEffect } from "react";
import ExerciceStateContext from "../context/exercice-state-context";

type Props = {
  className?: string;
};

export default function Exercice({ className }: Props) {
  const [exerciceState] = useContext(ExerciceStateContext);

  useEffect(() => {
    const id = exerciceState?.item?.id;
    if (id) {
      document
        .querySelector(`svg.map .fill-foreground`)
        ?.classList.remove("fill-foreground");
      document
        .querySelector(`svg.map [id="${id}"]`)
        ?.classList.add("fill-foreground");
    }
  }, [exerciceState?.item]);

  return <div className={className}>{exerciceState?.render()}</div>;
}
