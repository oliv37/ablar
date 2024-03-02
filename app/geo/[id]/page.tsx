import { type Metadata } from "next";
import GeoSettings from "@/src/geo/components/ui/settings/geo-settings";
import GeoMain from "@/src/geo/components/ui/main/geo-main";
import GeoProviders from "@/src/geo/components/provider/geo-providers";

export const metadata: Metadata = {
  title: "Ablar - Geo",
  description: "Ablar Geography",
};

export function generateStaticParams(): { id: string }[] {
  return ["fr-dpt", "usa", "eu"].map((id) => ({ id }));
}

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params: { id } }: Props) {
  const { data } = await import(`@/src/geo/data/geo-${id}-data`);
  const { default: GeoMap } = await import(
    `@/src/geo/components/ui/map/geo-${id}-map`
  );
  return (
    <GeoProviders data={data}>
      <GeoMain
        mapElement={
          <GeoMap className="map flex-1 w-full h-full self-center min-h-60" />
        }
      />
      <GeoSettings />
    </GeoProviders>
  );
}
