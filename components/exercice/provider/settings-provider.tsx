"use client";

import { Settings, type Data } from "@/types";
import DataContext from "../context/data-context";
import SettingsContext, {
  SettingsContextType,
} from "../context/settings-context";
import { useContext, useEffect, useMemo, useState } from "react";
import {
  isValidSettings,
  loadSettingsOrDefault,
  saveSettings,
} from "@/utils/settings";

export default function SettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { defaultSettings } = useContext(DataContext);
  const [settings, setSettings] = useState<Settings>();

  useEffect(() => {
    setSettings(loadSettingsOrDefault(defaultSettings));
  }, [defaultSettings]);

  const contextValue = useMemo<SettingsContextType>(() => {
    return [
      settings,
      (newSettings: Settings, cb?: () => void) => {
        if (isValidSettings(newSettings)) {
          saveSettings(newSettings);
          setSettings(newSettings);
          cb && cb();
        }
      },
    ];
  }, [settings]);

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
}
