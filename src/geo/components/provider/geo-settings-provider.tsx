"use client";

import { useContext, useEffect, useMemo, useState } from "react";
import type { GeoSettings } from "@/src/geo/geo-types";
import GeoDataContext from "@/src/geo/context/geo-data-context";
import GeoSettingsContext, {
  type GeoSettingsContextType,
} from "@/src/geo/context/geo-settings-context";
import {
  isValidGeoSettings,
  loadGeoSettingsOrDefault,
  saveGeoSettings,
} from "@/src/geo/utils/geo-settings-utils";

export default function GeoSettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { defaultSettings } = useContext(GeoDataContext);
  const [settings, setSettings] = useState<GeoSettings>();

  useEffect(() => {
    setSettings(loadGeoSettingsOrDefault(defaultSettings));
  }, [defaultSettings]);

  const contextValue = useMemo<GeoSettingsContextType>(() => {
    return [
      settings,
      (newSettings: GeoSettings, cb?: () => void) => {
        if (isValidGeoSettings(newSettings)) {
          saveGeoSettings(newSettings);
          setSettings(newSettings);
          cb && cb();
        }
      },
    ];
  }, [settings]);

  return (
    <GeoSettingsContext.Provider value={contextValue}>
      {children}
    </GeoSettingsContext.Provider>
  );
}
