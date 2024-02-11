export type Category = {
  from: number;
  to?: number;
};

export function hasCategory(
  categories: Category[] | undefined,
  category: Category
): boolean {
  if (!categories?.length) {
    return true;
  }

  return (
    categories.find(
      ({ from, to }) => from === category.from && to === category.to
    ) != null
  );
}

export function filterCategories(
  categories: Category[],
  values: FormDataEntryValue[]
): Category[] | undefined {
  if (!values?.length || values.length === categories.length) {
    return;
  }
  return values.map((v) => categories[Number(v)]);
}
