import type { GeoItem } from "@/src/geo/geo-types";

type Props = {
  from: GeoItem;
  to: GeoItem;
};

export default function GeoSettingsCategoryTitle({ from, to }: Props) {
  return (
    <>
      <span className="font-bold">{from.id}</span>
      {` ${from.name} - `}
      <span className="font-bold">{to.id}</span>
      {` ${to.name}`}
    </>
  );
}
