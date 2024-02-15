import { useRef, type EffectCallback, useEffect } from "react";

export default function useEffectOnce(effect: EffectCallback) {
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      effect();
    }
  }, [effect]);
}
