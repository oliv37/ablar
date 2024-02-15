import DataProvider from "@/components/exercice/provider/data-provider";
import ExerciceStateProvider from "@/components/exercice/provider/exercice-state-provider";
import SettingsProvider from "@/components/exercice/provider/settings-provider";
import Exercice from "@/components/exercice/ui/exercice";
import ExerciceSettings from "@/components/exercice/ui/exercice-settings";
import ExerciceWrapper from "@/components/exercice/ui/exercice-wrapper";

export default async function Home() {
  const id = "fra-dpt";
  const { default: Map } = await import(`@/components/maps/${id}-map`);
  const { data } = await import(`@/data/${id}`);
  return (
    <DataProvider value={data}>
      <SettingsProvider>
        <ExerciceStateProvider>
          <ExerciceWrapper className="min-h-screen flex flex-col outline-none">
            <Map className="map flex-1 self-center min-h-64" />
            <Exercice className="p-6 min-h-36" />
          </ExerciceWrapper>
          <aside className="flex justify-center mt-5 mb-20">
            <ExerciceSettings />
          </aside>
        </ExerciceStateProvider>
      </SettingsProvider>
    </DataProvider>
  );
}
