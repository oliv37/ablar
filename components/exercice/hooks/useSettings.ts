import {
  isValidSettings,
  loadSettings,
  saveSettings,
  type Settings,
} from "@/utils/settings";
import { useEffect, useState } from "react";

export default function useSettings(): [
  Settings | undefined,
  (newSettings: Settings) => void
] {
  const [settings, setSettings] = useState<Settings | undefined>();

  useEffect(() => setSettings(loadSettings()), []);

  function updateSettings(newSettings: Settings) {
    if (isValidSettings(settings)) {
      saveSettings(newSettings);
      setSettings(newSettings);
    }
  }

  return [settings, updateSettings];
}
