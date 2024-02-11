import ExercicePreview from "../ui/exercice-preview";
import AbstractExerciceState from "./abstract-exercice-state";
import ExerciceQuestionState from "./exercice-question-state";

export default class ExercicePreviewState extends AbstractExerciceState {
  prevState(): AbstractExerciceState | undefined {
    if (this.index > 0) {
      return new ExercicePreviewState(this.data, this.index - 1);
    }
  }

  nextState(): AbstractExerciceState | undefined {
    const isLastIndex = this.index >= this.data.length - 1;
    return isLastIndex
      ? new ExerciceQuestionState(this.data, 0)
      : new ExercicePreviewState(this.data, this.index + 1);
  }

  isArrowKeysEnabled(): boolean {
    return true;
  }

  render() {
    return <ExercicePreview data={this.data} index={this.index} />;
  }
}
