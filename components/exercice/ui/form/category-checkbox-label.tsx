import { type Item } from "../../../../types";

type Props = {
  from: Item;
  to: Item;
};

export default function CategoryCheckboxLabel({ from, to }: Props) {
  return (
    <>
      <span className="font-bold">{from.id}</span>
      {` ${from.name} - `}
      <span className="font-bold">{to.id}</span>
      {` ${to.name}`}
    </>
  );
}
