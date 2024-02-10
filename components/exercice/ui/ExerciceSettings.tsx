"use client";

import { useContext } from "react";
import ExerciceStateContext from "../context/ExerciceStateContext";
import useSettings from "../hooks/useSettings";
import useNbQuestions from "../hooks/useNbQuestions";

const nbQuestionsValues = [5, 10, 15];

export default function ExerciceSettings() {
  const [_, dispatch] = useContext(ExerciceStateContext);
  const [settings, updateSettings] = useSettings();
  const [nbQuestions, setNbQuestions] = useNbQuestions(settings);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (nbQuestions != undefined) {
      updateSettings({ nbQuestions });
      dispatch("RELOAD_STATE");
    }
  }

  return (
    settings && (
      <div className="w-full max-w-screen-md">
        <h3 className="font-bold text-2xl">Settings</h3>
        <form onSubmit={handleSubmit}>
          <div className="my-8">
            <label htmlFor="nbQuestions" className="pr-4">
              Number of questions
            </label>
            <select
              id="nbQuestions"
              className="p-2"
              value={nbQuestions}
              onChange={(e) => setNbQuestions(Number(e.target.value))}
            >
              {nbQuestionsValues.map((nbQuestionsValue) => (
                <option key={nbQuestionsValue} value={nbQuestionsValue}>
                  {nbQuestionsValue}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="py-1 px-2 border-2 border-foreground"
          >
            Refresh ⟳
          </button>
        </form>
      </div>
    )
  );
}
