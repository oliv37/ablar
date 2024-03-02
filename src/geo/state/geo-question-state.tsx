import GeoState from "./geo-state";
import GeoQuestion from "@/src/geo/components/ui/main/state/geo-question";

export default class GeoQuestionState extends GeoState {
  prevState(): GeoState | undefined {
    return undefined;
  }

  nextState(): GeoState | undefined {
    const isLastIndex = this.index >= this.items.length - 1;
    return isLastIndex
      ? undefined
      : new GeoQuestionState(this.items, this.index + 1);
  }

  isArrowKeysEnabled(): boolean {
    return false;
  }

  render() {
    return (
      <GeoQuestion key={this.item?.id} items={this.items} index={this.index} />
    );
  }
}
