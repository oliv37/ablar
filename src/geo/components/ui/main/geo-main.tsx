"use client";

import { type KeyboardEvent, useRef, useContext, useEffect } from "react";
import GeoStateContext from "@/src/geo/context/geo-state-context";

type Props = {
  mapElement: React.ReactElement;
};

export default function GeoMain({ mapElement }: Props) {
  const mainRef = useRef<HTMLElement>(null);
  const [geoState, dispatch] = useContext(GeoStateContext);

  useEffect(() => {
    mainRef.current?.focus();
  }, [geoState?.items]);

  useEffect(() => {
    const id = geoState?.item?.id;
    if (id) {
      document
        .querySelector(`svg.map .fill-foreground`)
        ?.classList.remove("fill-foreground");
      document
        .querySelector(`svg.map [id="${id}"]`)
        ?.classList.add("fill-foreground");
    }
  }, [geoState?.item]);

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.code === "ArrowLeft") {
      dispatch("PREV_STATE");
    }

    if (e.code === "ArrowRight") {
      dispatch("NEXT_STATE");
    }
  }

  return (
    <main
      ref={mainRef}
      tabIndex={-1}
      onKeyDown={geoState?.isArrowKeysEnabled() ? handleKeyDown : undefined}
      className="h-screen min-h-96 flex flex-col outline-none"
    >
      {mapElement}
      <div className="p-6 min-h-36">{geoState?.render()}</div>
    </main>
  );
}
