import { createContext } from "react";
import { type Data } from "@/types";
import { EMPTY_SETTINGS } from "@/utils/settings";

const EMPTY_DATA: Data = {
  items: [],
  categories: [],
  defaultSettings: EMPTY_SETTINGS,
  nbQuestionsOptions: [],
};

const DataContext = createContext<Data>(EMPTY_DATA);

export default DataContext;
