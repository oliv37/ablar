import { createContext } from "react";
import GeoAbstractState from "@/src/geo/state/geo-state";

export type ActionType = "NEXT_STATE" | "PREV_STATE" | "RELOAD_STATE";

export type GeoStateContextType = [
  GeoAbstractState | undefined,
  (action: ActionType) => void
];

const GeoStateContext = createContext<GeoStateContextType>([
  undefined,
  () => {},
]);

export default GeoStateContext;
