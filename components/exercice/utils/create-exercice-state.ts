import findItems from "@/utils/find-items";
import { loadSettings } from "@/utils/settings";
import ExercicePreviewState from "../state/ExercicePreviewState";
import AbstractExerciceState from "../state/AbstractExerciceState";
import fraDptData from "@/data/fra-dpt";

export default function createExerciceState(): AbstractExerciceState {
  const settings = loadSettings();
  const data = findItems(fraDptData, settings);
  return new ExercicePreviewState(data, 0);
}
