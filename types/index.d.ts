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
  categoryIndexes?: number[];
};

export type Data = {
  items: Item[];
  categories: Category[];
};
