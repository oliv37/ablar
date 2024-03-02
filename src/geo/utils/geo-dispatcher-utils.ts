import type { ActionType } from "@/src/geo/context/geo-state-context";
import GeoState from "@/src/geo/state/geo-state";

export function createGeoDispatcher(
  state: GeoState | undefined,
  setState: (state: GeoState) => void,
  reloadState: () => void
): (action: ActionType) => void {
  return function dispath(action: ActionType) {
    if (action === "RELOAD_STATE") {
      reloadState();
    }
    if (action === "PREV_STATE") {
      const prevState = state?.prevState();
      prevState && setState(prevState);
    }
    if (action === "NEXT_STATE") {
      const nextState = state?.nextState();
      nextState && setState(nextState);
    }
  };
}
