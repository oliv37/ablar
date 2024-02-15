import { type Settings } from "@/types";

const SETTINGS_KEY = "settings";

export function loadSettings(): Settings | undefined {
  const settings = localStorage.getItem(SETTINGS_KEY);
  return parseSettings(settings);
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
    (!settings.categoryIndexes || settings.categoryIndexes.length > 0)
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
