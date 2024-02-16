import { createContext } from "react";
import { type Settings } from "@/types";
import { EMPTY_SETTINGS } from "@/utils/settings";

export type SettingsContextType = [
  Settings | undefined,
  (settings: Settings, cb?: () => void) => void
];

const SettingsContext = createContext<SettingsContextType>([
  EMPTY_SETTINGS,
  () => {},
]);

export default SettingsContext;
