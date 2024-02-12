import { useCallback, useContext, useEffect, useState } from "react";
import type AbstractExerciceState from "../state/abstract-exercice-state";
import DataContext from "../context/data-context";
import ExercicePreviewState from "../state/exercice-preview-state";
import findItems from "@/utils/find-items";
import { loadSettings } from "@/utils/settings";

export default function useExerciceState(): [
  AbstractExerciceState | undefined,
  (state: AbstractExerciceState) => void,
  () => void
] {
  const [exerciceState, _setExerciceState] = useState<
    AbstractExerciceState | undefined
  >();
  const data = useContext(DataContext);

  const setExerciceState = useCallback(
    (state: AbstractExerciceState) => _setExerciceState(state),
    [_setExerciceState]
  );

  const reloadExerciceState = useCallback(() => {
    const settings = loadSettings();
    const items = findItems(data, settings);
    setExerciceState(new ExercicePreviewState(items, 0));
  }, [data, setExerciceState]);

  useEffect(() => reloadExerciceState(), [reloadExerciceState]);

  return [exerciceState, setExerciceState, reloadExerciceState];
}
