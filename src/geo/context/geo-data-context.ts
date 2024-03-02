import { createContext } from "react";
import { type GeoData } from "@/src/geo/geo-types";
import { GEO_EMPTY_SETTINGS } from "@/src/geo/utils/geo-settings-utils";

const GEO_EMPTY_DATA: GeoData = {
  items: [],
  categories: [],
  defaultSettings: GEO_EMPTY_SETTINGS,
  nbQuestionsOptions: [],
};

const GeoDataContext = createContext<GeoData>(GEO_EMPTY_DATA);

export default GeoDataContext;
