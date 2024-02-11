import { type Settings } from "./settings";

export default function findItems<T>(items: T[], settings: Settings) {
  const { nbQuestions: nbItems, categories } = settings;
  const availableItems: T[] = !categories?.length
    ? items
    : categories.flatMap(({ from, to }) =>
        items.slice(from, to != undefined ? to + 1 : categories.length)
      );
  return findItemsInternal(availableItems, nbItems);
}

function findItemsInternal<T>(items: T[], nbItems = 5, res: T[] = []) {
  if (!items.length || res.length === nbItems) {
    return res;
  }

  const index = Math.floor(Math.random() * items.length);
  return findItemsInternal(
    items.filter((v, i) => i !== index),
    nbItems,
    [...res, items[index]]
  );
}
