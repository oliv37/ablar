import { createContext } from "react";
import { type Data } from "@/types";

const EMPTY_DATA: Data = {
  items: [],
  categories: [],
  defaultSettings: {
    nbQuestions: 0,
  },
  nbQuestionsOptions: [],
};

const DataContext = createContext<Data>(EMPTY_DATA);

export default DataContext;
