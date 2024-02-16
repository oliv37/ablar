import { type Item, type Category, type Settings, type Data } from "@/types";

export default function findItems(
  items: Item[],
  categories: Category[],
  settings: Settings
) {
  const { nbQuestions: nbItems, categoryIndexes } = settings;
  const itemsInCategories: Item[] = getItemsInCategories(
    items,
    categories,
    categoryIndexes
  );
  return findItemsRecursively(itemsInCategories, nbItems);
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

function getItemsInCategories(
  items: Item[],
  categories: Category[],
  categoryIndexes: number[] | "all"
): Item[] {
  if (categoryIndexes === "all") {
    return items;
  }

  return categories
    .filter((_, idx) => categoryIndexes.includes(idx))
    .flatMap(({ from, to }) =>
      items.slice(from, to != undefined ? to + 1 : items.length)
    );
}
