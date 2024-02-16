import { type Settings } from "@/types";

const SETTINGS_KEY = "settings";

export const EMPTY_SETTINGS: Settings = {
  nbQuestions: 0,
  categoryIndexes: "all",
};

export function loadSettingsOrDefault(defaultSettings: Settings): Settings {
  const settings = localStorage.getItem(SETTINGS_KEY);
  return parseSettings(settings) || defaultSettings;
}

export function saveSettings(settings: Settings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error(e);
  }
}

export function isValidSettings(settings?: Settings): settings is Settings {
  return (
    settings != undefined &&
    settings.nbQuestions > 0 &&
    (settings.categoryIndexes === "all" || settings.categoryIndexes?.length > 0)
  );
}

function parseSettings(settingsStr: string | null): Settings | undefined {
  if (!settingsStr) {
    return;
  }

  try {
    const settings = JSON.parse(settingsStr) as Settings;
    return isValidSettings(settings) ? settings : undefined;
  } catch (e) {
    console.error(e);
    return;
  }
}
