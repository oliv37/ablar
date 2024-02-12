import { createContext } from "react";
import { type Data } from "@/types";

const DataContext = createContext<Data>({
  items: [],
  categories: [],
});

export default DataContext;
