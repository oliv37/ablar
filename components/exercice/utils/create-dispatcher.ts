import { type ActionType } from "../context/exercice-state-context";
import type AbstractExerciceState from "../state/abstract-exercice-state";
import createExerciceState from "./create-exercice-state";

export default function createDispatcher(
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