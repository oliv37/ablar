"use client";

import { type Data } from "@/types";
import DataContext from "../context/data-context";

export default function DataProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: Data;
}) {
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
