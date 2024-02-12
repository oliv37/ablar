"use client";

import { useContext } from "react";
import ExerciceStateContext from "../context/exercice-state-context";
import useSettings from "../hooks/use-settings";
import { isValidSettings, nbQuestionsValues } from "@/utils/settings";
import SelectField from "./form/select-field";
import CheckboxFields from "./form/checkbox-fields";
import CategoryCheckboxLabel from "./form/category-checkbox-label";
import { type Settings } from "../../../types";
import DataContext from "../context/data-context";

export default function ExerciceSettings() {
  const [_, dispatch] = useContext(ExerciceStateContext);
  const { items, categories: allCategories } = useContext(DataContext);
  const [settings, updateSettings] = useSettings();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newSettrings: Settings = {
      nbQuestions: Number(formData.get("nbQuestions")),
      categoryIndexes: formData.getAll("categories").map((idx) => Number(idx)),
    };

    if (isValidSettings(newSettrings)) {
      updateSettings(newSettrings);
      dispatch("RELOAD_STATE");
    }
  }

  return (
    settings && (
      <div className="w-full max-w-screen-md">
        <h3 className="font-bold text-2xl">Settings</h3>
        <form onSubmit={handleSubmit}>
          <SelectField
            id="nbQuestions"
            name="nbQuestions"
            label="Number of questions"
            defaultValue={settings.nbQuestions}
            options={nbQuestionsValues.map((v) => ({
              label: v.toString(),
              value: v,
            }))}
          />
          <CheckboxFields
            id="category"
            name="categories"
            checkboxes={allCategories.map((category, idx) => ({
              label: (
                <CategoryCheckboxLabel
                  from={items[category.from]}
                  to={items[category.to || items.length - 1]}
                />
              ),
              value: idx,
              defaultChecked:
                !settings.categoryIndexes?.length ||
                settings.categoryIndexes.includes(idx),
            }))}
          />
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
