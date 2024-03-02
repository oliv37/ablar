"use client";

import { useCallback, useContext, useMemo, useState } from "react";
import useEffectOnce from "@/src/shared/hooks/use-effect-once";
import GeoStateContext, {
  type GeoStateContextType,
} from "@/src/geo/context/geo-state-context";
import GeoDataContext from "@/src/geo/context/geo-data-context";
import GeoState from "@/src/geo/state/geo-state";
import GeoPreviewState from "@/src/geo/state/geo-preview-state";
import { findGeoItems } from "@/src/geo/utils/geo-items-utils";
import { createGeoDispatcher } from "@/src/geo/utils/geo-dispatcher-utils";
import { loadGeoSettingsOrDefault } from "@/src/geo/utils/geo-settings-utils";

export default function GeoStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [geoState, setGeoState] = useState<GeoState>();
  const data = useContext(GeoDataContext);

  const reloadExerciceState = useCallback(() => {
    const settings = loadGeoSettingsOrDefault(data.defaultSettings);
    const items = findGeoItems(data.items, data.categories, settings);
    setGeoState(new GeoPreviewState(items, 0));
  }, [data]);

  useEffectOnce(reloadExerciceState);

  const contextValue = useMemo<GeoStateContextType>(() => {
    return [
      geoState,
      createGeoDispatcher(geoState, setGeoState, reloadExerciceState),
    ];
  }, [geoState, setGeoState, reloadExerciceState]);

  return (
    <GeoStateContext.Provider value={contextValue}>
      {children}
    </GeoStateContext.Provider>
  );
}
