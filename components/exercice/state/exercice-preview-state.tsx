import ExercicePreview from "../ui/exercice-preview";
import AbstractExerciceState from "./abstract-exercice-state";
import ExerciceQuestionState from "./exercice-question-state";

export default class ExercicePreviewState extends AbstractExerciceState {
  prevState(): AbstractExerciceState | undefined {
    if (this.index > 0) {
      return new ExercicePreviewState(this.items, this.index - 1);
    }
  }

  nextState(): AbstractExerciceState | undefined {
    const isLastIndex = this.index >= this.items.length - 1;
    return isLastIndex
      ? new ExerciceQuestionState(this.items, 0)
      : new ExercicePreviewState(this.items, this.index + 1);
  }

  isArrowKeysEnabled(): boolean {
    return true;
  }

  render() {
    return <ExercicePreview items={this.items} index={this.index} />;
  }
}
