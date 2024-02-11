import findItems from "@/utils/find-items";
import { loadSettings } from "@/utils/settings";
import ExercicePreviewState from "../state/exercice-preview-state";
import AbstractExerciceState from "../state/abstract-exercice-state";
import fraDptData from "@/data/fra-dpt";

export default function createExerciceState(): AbstractExerciceState {
  const settings = loadSettings();
  const data = findItems(fraDptData, settings);
  return new ExercicePreviewState(data, 0);
}
