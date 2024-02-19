"use client";

import { useCallback, useContext, useMemo, useState } from "react";
import ExerciceStateContext, {
  ExerciceStateContextType,
} from "../context/exercice-state-context";
import AbstractExerciceState from "../state/abstract-exercice-state";
import DataContext from "../context/data-context";
import findItems from "@/utils/find-items";
import ExercicePreviewState from "../state/exercice-preview-state";
import { createDispatcher } from "../utils/dispatcher";
import { loadSettingsOrDefault } from "@/utils/settings";
import useEffectOnce from "@/hooks/use-effect-once";

export default function ExerciceStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [exerciceState, setExerciceState] = useState<AbstractExerciceState>();
  const data = useContext(DataContext);

  const reloadExerciceState = useCallback(() => {
    const settings = loadSettingsOrDefault(data.defaultSettings);
    const items = findItems(data.items, data.categories, settings);
    setExerciceState(new ExercicePreviewState(items, 0));
  }, [data]);

  useEffectOnce(reloadExerciceState);

  const contextValue = useMemo<ExerciceStateContextType>(() => {
    return [
      exerciceState,
      createDispatcher(exerciceState, setExerciceState, reloadExerciceState),
    ];
  }, [exerciceState, setExerciceState, reloadExerciceState]);

  return (
    <ExerciceStateContext.Provider value={contextValue}>
      {children}
    </ExerciceStateContext.Provider>
  );
}
