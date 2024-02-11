"use client";

import { type KeyboardEvent, useRef, useContext, useEffect } from "react";
import ExerciceStateContext from "../context/exercice-state-context";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ExerciceWrapper({ children, className }: Props) {
  const mainRef = useRef<HTMLElement>(null);
  const [exerciceState, dispatch] = useContext(ExerciceStateContext);
  useEffect(() => {
    mainRef.current?.focus();
  }, [exerciceState?.data]);

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.code === "ArrowLeft") {
      dispatch("PREV_STATE");
    }

    if (e.code === "ArrowRight") {
      dispatch("NEXT_STATE");
    }
  }

  return (
    <main
      ref={mainRef}
      tabIndex={-1}
      onKeyDown={
        exerciceState?.isArrowKeysEnabled() ? handleKeyDown : undefined
      }
      className={className}
    >
      {children}
    </main>
  );
}
