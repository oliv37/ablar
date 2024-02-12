import { type Item, type Category, type Settings, type Data } from "@/types";

export default function findItems(data: Data, settings: Settings) {
  const { nbQuestions: nbItems, categoryIndexes } = settings;
  const availableItems: Item[] = getAvailableItems(
    data.items,
    data.categories,
    categoryIndexes
  );
  return findItemsRecursively(availableItems, nbItems);
}

function findItemsRecursively(items: Item[], nbItems = 5, res: Item[] = []) {
  if (!items.length || res.length === nbItems) {
    return res;
  }

  const index = Math.floor(Math.random() * items.length);
  return findItemsRecursively(
    items.filter((v, i) => i !== index),
    nbItems,
    [...res, items[index]]
  );
}

function getAvailableItems(
  items: Item[],
  categories: Category[],
  categoryIndexes?: number[]
): Item[] {
  if (!categoryIndexes?.length) {
    return items;
  }

  return categories
    .filter((_, idx) => categoryIndexes.includes(idx))
    .flatMap(({ from, to }) =>
      items.slice(from, to != undefined ? to + 1 : items.length)
    );
}
