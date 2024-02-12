"use client";

import ExerciceStateContext from "../context/exercice-state-context";
import useExerciceStateContextValue from "../hooks/use-exercice-state-context-value";

export default function ExerciceStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const contextValue = useExerciceStateContextValue();
  return (
    <ExerciceStateContext.Provider value={contextValue}>
      {children}
    </ExerciceStateContext.Provider>
  );
}
