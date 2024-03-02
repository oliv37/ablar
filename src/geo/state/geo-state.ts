import type { GeoItem } from "@/src/geo/geo-types";

export default abstract class GeoState {
  constructor(public items: GeoItem[] = [], public index: number = 0) {}

  get item(): GeoItem {
    return this.items[this.index];
  }

  abstract prevState(): GeoState | undefined;

  abstract nextState(): GeoState | undefined;

  abstract isArrowKeysEnabled(): boolean;

  abstract render(): React.ReactNode;
}
