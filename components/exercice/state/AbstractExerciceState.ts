import { FraDpt } from "@/data/fra-dpt";

export default abstract class AbstractExerciceState {
  constructor(public data: FraDpt[] = [], public index: number = 0) {}

  get item(): FraDpt {
    return this.data[this.index];
  }

  abstract prevState(): AbstractExerciceState | undefined;

  abstract nextState(): AbstractExerciceState | undefined;

  abstract isArrowKeysEnabled(): boolean;

  abstract render(): React.ReactNode;
}
