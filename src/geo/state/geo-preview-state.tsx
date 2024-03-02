import GeoState from "./geo-state";
import GeoQuestionState from "./geo-question-state";
import GeoPreview from "@/src/geo/components/ui/main/state/geo-preview";

export default class GeoPreviewState extends GeoState {
  prevState(): GeoState | undefined {
    if (this.index > 0) {
      return new GeoPreviewState(this.items, this.index - 1);
    }
  }

  nextState(): GeoState | undefined {
    const isLastIndex = this.index >= this.items.length - 1;
    return isLastIndex
      ? new GeoQuestionState(this.items, 0)
      : new GeoPreviewState(this.items, this.index + 1);
  }

  isArrowKeysEnabled(): boolean {
    return true;
  }

  render() {
    return <GeoPreview items={this.items} index={this.index} />;
  }
}
