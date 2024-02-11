import data from "@/data/fra-dpt";
import { type Category } from "@/utils/settings-category";

type Props = {
  category: Category;
};

export default function CategoryCheckboxLabel({ category }: Props) {
  const itemFrom = data[category.from];
  const itemTo = data[category.to || data.length - 1];

  return (
    <>
      <span className="font-bold">{itemFrom.id}</span>
      {` ${itemFrom.name} - `}
      <span className="font-bold">{itemTo.id}</span>
      {` ${itemTo.name}`}
    </>
  );
}
