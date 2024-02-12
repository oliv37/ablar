import { type ExerciceStateContextType } from "../context/exercice-state-context";
import { useMemo } from "react";
import createDispatcher from "../utils/create-dispatcher";
import useExerciceState from "./use-exercice-state";

export default function useExerciceStateContextValue(): ExerciceStateContextType {
  const [exerciceState, setExerciceState, reloadExerciceState] =
    useExerciceState();
  return useMemo<ExerciceStateContextType>(() => {
    return [
      exerciceState,
      createDispatcher(exerciceState, setExerciceState, reloadExerciceState),
    ];
  }, [exerciceState, setExerciceState, reloadExerciceState]);
}
