export type Option = {
  label: string;
  value: string | number;
};

export type Item = {
  id: string;
  name: string;
  city: string;
};

export type Category = {
  from: number;
  to?: number;
};

export type Settings = {
  nbQuestions: number;
  categoryIndexes: number[] | "all";
};

export type Data = {
  items: Item[];
  categories: Category[];
  defaultSettings: Settings;
  nbQuestionsOptions: Option[];
};
