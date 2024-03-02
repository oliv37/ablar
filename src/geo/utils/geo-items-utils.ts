import type { GeoItem, GeoCategory, GeoSettings } from "@/src/geo/geo-types";

export function findGeoItems(
  items: GeoItem[],
  categories: GeoCategory[],
  settings: GeoSettings
) {
  const { nbQuestions: nbItems, categoryIndexes } = settings;
  const itemsInCategories: GeoItem[] = getGeoItemsInCategories(
    items,
    categories,
    categoryIndexes
  );
  return findGeoItemsRecursively(itemsInCategories, nbItems);
}

function findGeoItemsRecursively(
  items: GeoItem[],
  nbItems = 5,
  res: GeoItem[] = []
) {
  if (!items.length || res.length === nbItems) {
    return res;
  }

  const index = Math.floor(Math.random() * items.length);
  return findGeoItemsRecursively(
    items.filter((v, i) => i !== index),
    nbItems,
    [...res, items[index]]
  );
}

function getGeoItemsInCategories(
  items: GeoItem[],
  categories: GeoCategory[],
  categoryIndexes: number[] | "all"
): GeoItem[] {
  if (categoryIndexes === "all") {
    return items;
  }

  return categories
    .filter((_, idx) => categoryIndexes.includes(idx))
    .flatMap(({ from, to }) =>
      items.slice(from, to != undefined ? to + 1 : items.length)
    );
}
