export default function findItems<T>(items: T[], number = 5) {
  return findItemsInternal(items, number);
}

function findItemsInternal<T>(items: T[], number = 5, res: T[] = []) {
  if (!items.length || res.length === number) {
    return res;
  }

  const index = Math.floor(Math.random() * items.length);
  return findItemsInternal(
    items.filter((v, i) => i !== index),
    number,
    [...res, items[index]]
  );
}
