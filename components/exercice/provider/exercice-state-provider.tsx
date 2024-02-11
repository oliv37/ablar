"use client";

import ExerciceStateContext from "../context/exercice-state-context";
import useExerciceState from "../hooks/use-exercice-state";
import useExerciceStateContextValue from "../hooks/use-exercice-state-context-value";

export default function ExerciceStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [exerciceState, setExerciceState] = useExerciceState();
  const contextValue = useExerciceStateContextValue(
    exerciceState,
    setExerciceState
  );

  return (
    <ExerciceStateContext.Provider value={contextValue}>
      {children}
    </ExerciceStateContext.Provider>
  );
}
