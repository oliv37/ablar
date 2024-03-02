import type { GeoSettings } from "@/src/geo/geo-types";

const GEO_SETTINGS_KEY = "settings";

export const GEO_EMPTY_SETTINGS: GeoSettings = {
  nbQuestions: 0,
  categoryIndexes: "all",
};

export function loadGeoSettingsOrDefault(
  defaultSettings: GeoSettings
): GeoSettings {
  const settings = localStorage.getItem(GEO_SETTINGS_KEY);
  return parseGeoSettings(settings) || defaultSettings;
}

export function saveGeoSettings(settings: GeoSettings): void {
  try {
    localStorage.setItem(GEO_SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error(e);
  }
}

export function isValidGeoSettings(
  settings?: GeoSettings
): settings is GeoSettings {
  return (
    settings != undefined &&
    settings.nbQuestions > 0 &&
    (settings.categoryIndexes === "all" || settings.categoryIndexes?.length > 0)
  );
}

function parseGeoSettings(settingsStr: string | null): GeoSettings | undefined {
  if (!settingsStr) {
    return;
  }

  try {
    const settings = JSON.parse(settingsStr) as GeoSettings;
    return isValidGeoSettings(settings) ? settings : undefined;
  } catch (e) {
    console.error(e);
    return;
  }
}
