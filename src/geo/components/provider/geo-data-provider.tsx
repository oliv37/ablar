"use client";

import type { GeoData } from "@/src/geo/geo-types";
import GeoDataContext from "@/src/geo/context/geo-data-context";

export default function GeoDataProvider({
  children,
  data,
}: {
  children: React.ReactNode;
  data: GeoData;
}) {
  return (
    <GeoDataContext.Provider value={data}>{children}</GeoDataContext.Provider>
  );
}
