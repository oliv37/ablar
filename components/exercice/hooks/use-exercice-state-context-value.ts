import { type ExerciceStateContextType } from "../context/exercice-state-context";
import type AbstractExerciceState from "../state/abstract-exercice-state";
import { useMemo } from "react";
import createDispatcher from "../utils/create-dispatcher";

export default function useExerciceStateContextValue(
  exerciceState: AbstractExerciceState | undefined,
  setExerciceState: (state: AbstractExerciceState) => void
): ExerciceStateContextType {
  return useMemo<ExerciceStateContextType>(() => {
    return [exerciceState, createDispatcher(exerciceState, setExerciceState)];
  }, [exerciceState, setExerciceState]);
}
