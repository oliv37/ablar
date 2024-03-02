import { type GeoData } from "@/src/geo/geo-types";
import GeoDataProvider from "./geo-data-provider";
import GeoSettingsProvider from "./geo-settings-provider";
import GeoStateProvider from "./geo-state-provider";

export default function GeoProviders({
  children,
  data,
}: {
  children: React.ReactNode;
  data: GeoData;
}) {
  return (
    <GeoDataProvider data={data}>
      <GeoSettingsProvider>
        <GeoStateProvider>{children}</GeoStateProvider>
      </GeoSettingsProvider>
    </GeoDataProvider>
  );
}
