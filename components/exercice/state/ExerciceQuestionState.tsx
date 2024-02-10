import ExerciceQuestion from "../ui/ExerciceQuestion";
import AbstractExerciceState from "./AbstractExerciceState";

export default class ExerciceQuestionState extends AbstractExerciceState {
  prevState(): AbstractExerciceState | undefined {
    return undefined;
  }

  nextState(): AbstractExerciceState | undefined {
    const isLastIndex = this.index >= this.data.length - 1;
    return isLastIndex
      ? undefined
      : new ExerciceQuestionState(this.data, this.index + 1);
  }

  isArrowKeysEnabled(): boolean {
    return false;
  }

  render() {
    return (
      <ExerciceQuestion
        key={this.item?.id}
        data={this.data}
        index={this.index}
      />
    );
  }
}
