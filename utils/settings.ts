const SETTINGS_KEY = "settings";

export type Settings = {
  nbQuestions: number;
};

const DEFAULT_SETTINGS: Settings = {
  nbQuestions: 5,
};

export function loadSettings(): Settings {
  try {
    const settings = localStorage.getItem(SETTINGS_KEY);
    return settings ? JSON.parse(settings) : DEFAULT_SETTINGS;
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
