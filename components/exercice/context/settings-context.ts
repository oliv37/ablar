import { createContext } from "react";
import { type Settings } from "@/types";

const EMPTY_SETTINGS: Settings = {
  nbQuestions: 0,
};

export type SettingsContextType = [
  Settings | undefined,
  (settings: Settings, cb?: () => void) => void
];

const SettingsContext = createContext<SettingsContextType>([
  EMPTY_SETTINGS,
  () => {},
]);

export default SettingsContext;
