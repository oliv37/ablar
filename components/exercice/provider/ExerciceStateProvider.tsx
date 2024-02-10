"use client";

import ExerciceStateContext from "../context/ExerciceStateContext";
import useExerciceState from "../hooks/useExerciceState";
import useExerciceStateContextValue from "../hooks/useExerciceStateContextValue";

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
