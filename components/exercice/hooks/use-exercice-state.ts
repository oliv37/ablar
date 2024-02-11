import { useCallback, useEffect, useState } from "react";
import type AbstractExerciceState from "../state/abstract-exercice-state";
import createExerciceState from "../utils/create-exercice-state";

export default function useExerciceState(): [
  AbstractExerciceState | undefined,
  (state: AbstractExerciceState) => void
] {
  const [exerciceState, _setExerciceState] = useState<
    AbstractExerciceState | undefined
  >();

  const setExerciceState = useCallback(
    (state: AbstractExerciceState) => {
      _setExerciceState(state);
    },
    [_setExerciceState]
  );

  useEffect(() => {
    setExerciceState(createExerciceState());
  }, [setExerciceState]);

  return [exerciceState, setExerciceState];
}
