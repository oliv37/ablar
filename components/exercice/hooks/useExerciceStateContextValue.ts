import {
  type ActionType,
  type ExerciceStateContextType,
} from "../context/ExerciceStateContext";
import type AbstractExerciceState from "../state/AbstractExerciceState";
import { useMemo } from "react";
import createExerciceState from "../utils/create-exercice-state";

function createDispatcher(
  exerciceState: AbstractExerciceState | undefined,
  setExerciceState: (state: AbstractExerciceState) => void
): (action: ActionType) => void {
  return function dispath(action: ActionType) {
    if (action === "RELOAD_STATE") {
      setExerciceState(createExerciceState());
    }
    if (action === "PREV_STATE") {
      const prevExerciceState = exerciceState?.prevState();
      prevExerciceState && setExerciceState(prevExerciceState);
    }
    if (action === "NEXT_STATE") {
      const nextExerciceState = exerciceState?.nextState();
      nextExerciceState && setExerciceState(nextExerciceState);
    }
  };
}

export default function useExerciceStateContextValue(
  exerciceState: AbstractExerciceState | undefined,
  setExerciceState: (state: AbstractExerciceState) => void
): ExerciceStateContextType {
  return useMemo<ExerciceStateContextType>(() => {
    return [exerciceState, createDispatcher(exerciceState, setExerciceState)];
  }, [exerciceState, setExerciceState]);
}
