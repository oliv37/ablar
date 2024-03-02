"use client";

import { useContext } from "react";
import clsx from "@/src/shared/utils/clsx";
import type { GeoItem } from "@/src/geo/geo-types";
import GeoStateContext from "@/src/geo/context/geo-state-context";

type Props = {
  items: GeoItem[];
  index: number;
};

export default function GeoPreview({ items, index }: Props) {
  const [_, dispatch] = useContext(GeoStateContext);
  const item = items[index];

  return (
    item && (
      <div className="flex flex-col justify-center items-center">
        <div className="p-2 mb-2 font-bold">
          {item.id} - {item.name} - {item.city}
        </div>
        <div>
          <button
            type="button"
            className={clsx(
              "p-2 mr-4 border-b-2 border-foreground border-solid",
              "disabled:border-b-0 disabled:opacity-50"
            )}
            disabled={index <= 0}
            onClick={() => dispatch("PREV_STATE")}
          >
            prev
          </button>
          {index + 1} / {items.length}
          <button
            type="button"
            className={clsx(
              "p-2 ml-4 border-b-2 border-foreground border-solid"
            )}
            onClick={() => dispatch("NEXT_STATE")}
          >
            next
          </button>
        </div>
      </div>
    )
  );
}
