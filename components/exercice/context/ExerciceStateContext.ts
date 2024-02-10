import { createContext } from "react";
import AbstractExerciceState from "../state/AbstractExerciceState";

export type ActionType = "NEXT_STATE" | "PREV_STATE" | "RELOAD_STATE";

export type ExerciceStateContextType = [
  AbstractExerciceState | undefined,
  (action: ActionType) => void
];

const ExerciceStateContext = createContext<ExerciceStateContextType>([
  undefined,
  () => {},
]);

export default ExerciceStateContext;
