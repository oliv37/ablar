import { type ExerciceStateContextType } from "../context/ExerciceStateContext";
import type AbstractExerciceState from "../state/AbstractExerciceState";
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
