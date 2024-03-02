import { createContext } from "react";
import type { GeoSettings } from "@/src/geo/geo-types";
import { GEO_EMPTY_SETTINGS } from "@/src/geo/utils/geo-settings-utils";

export type GeoSettingsContextType = [
  GeoSettings | undefined,
  (settings: GeoSettings, cb?: () => void) => void
];

const GeoSettingsContext = createContext<GeoSettingsContextType>([
  GEO_EMPTY_SETTINGS,
  () => {},
]);

export default GeoSettingsContext;
