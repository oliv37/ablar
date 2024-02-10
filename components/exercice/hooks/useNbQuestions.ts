import type { Settings } from "@/utils/settings";
import { useState, type Dispatch, type SetStateAction, useEffect } from "react";

export default function useNbQuestions(
  settings: Settings | undefined
): [number | undefined, Dispatch<SetStateAction<number | undefined>>] {
  const [nbQuestions, setNbQuestions] = useState<number | undefined>(
    settings?.nbQuestions
  );

  useEffect(() => {
    setNbQuestions(settings?.nbQuestions);
  }, [settings]);

  return [nbQuestions, setNbQuestions];
}
