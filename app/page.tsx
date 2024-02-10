import Exercice from "@/components/exercice/ui/Exercice";
import ExerciceWrapper from "@/components/exercice/ui/ExerciceWrapper";
import ExerciceStateProvider from "@/components/exercice/provider/ExerciceStateProvider";
import ExerciceSettings from "@/components/exercice/ui/ExerciceSettings";
import FraDptMap from "@/components/maps/FraDptMap";

export default function Home() {
  return (
    <ExerciceStateProvider>
      <ExerciceWrapper className="min-h-screen flex flex-col outline-none">
        <FraDptMap className="map flex-1 self-center min-h-64" />
        <Exercice className="p-6 min-h-36" />
      </ExerciceWrapper>
      <aside className="flex justify-center mt-5 mb-20">
        <ExerciceSettings />
      </aside>
    </ExerciceStateProvider>
  );
}
