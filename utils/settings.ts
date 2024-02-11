import { Category } from "./settings-category";

const SETTINGS_KEY = "settings";

export type Settings = {
  nbQuestions: number;
  categories?: Category[];
};

const DEFAULT_SETTINGS: Settings = {
  nbQuestions: 10,
};

export const nbQuestionsValues = [5, 10, 15];

export function loadSettings(): Settings {
  try {
    const settings = localStorage.getItem(SETTINGS_KEY);
    return parseSettings(settings);
  } catch (e) {
    console.error(e);
    return DEFAULT_SETTINGS;
  }
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
    (!settings.categories || settings?.categories?.length > 0)
  );
}

function parseSettings(settingsStr: string | null): Settings {
  const settings = settingsStr
    ? (JSON.parse(settingsStr) as Settings)
    : undefined;

  return isValidSettings(settings) ? settings : DEFAULT_SETTINGS;
}
