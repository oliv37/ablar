import { type Item } from "../../../types";

export default abstract class AbstractExerciceState {
  constructor(public items: Item[] = [], public index: number = 0) {}

  get item(): Item {
    return this.items[this.index];
  }

  abstract prevState(): AbstractExerciceState | undefined;

  abstract nextState(): AbstractExerciceState | undefined;

  abstract isArrowKeysEnabled(): boolean;

  abstract render(): React.ReactNode;
}
