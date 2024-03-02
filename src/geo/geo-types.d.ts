export type GeoOption = {
  label: string;
  value: number;
};

export type GeoItem = {
  id: string;
  name: string;
  city: string;
};

export type GeoCategory = {
  from: number;
  to?: number;
};

export type GeoSettings = {
  nbQuestions: number;
  categoryIndexes: number[] | "all";
};

export type GeoData = {
  items: GeoItem[];
  categories: GeoCategory[];
  defaultSettings: GeoSettings;
  nbQuestionsOptions: GeoOption[];
};
