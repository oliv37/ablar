"use client";

import { useContext } from "react";
import SelectField from "./form/select-field";
import CheckboxFields from "./form/checkbox-fields";
import CategoryCheckboxLabel from "./form/category-checkbox-label";
import { type Settings } from "../../../types";
import DataContext from "../context/data-context";
import SettingsContext from "../context/settings-context";
import ExerciceStateContext from "../context/exercice-state-context";
import isUndefinedOrEmpty from "@/utils/is-undefined-or-empty";

export default function ExerciceSettings() {
  const {
    items,
    categories: allCategories,
    nbQuestionsOptions,
  } = useContext(DataContext);
  const [settings, updateSettings] = useContext(SettingsContext);
  const [_, dispatch] = useContext(ExerciceStateContext);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newSettrings: Settings = {
      nbQuestions: Number(formData.get("nbQuestions")),
      categoryIndexes: formData.getAll("categories").map((idx) => Number(idx)),
    };
    updateSettings(newSettrings, () => dispatch("RELOAD_STATE"));
  }

  if (!settings) {
    return;
  }

  return (
    <div className="w-full max-w-screen-md">
      <h3 className="font-bold text-2xl">Settings</h3>
      <form onSubmit={handleSubmit}>
        <SelectField
          id="nbQuestions"
          name="nbQuestions"
          label="Number of questions"
          defaultValue={settings.nbQuestions}
          options={nbQuestionsOptions}
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
              isUndefinedOrEmpty(settings.categoryIndexes) ||
              settings.categoryIndexes.includes(idx),
          }))}
        />
        <button type="submit" className="py-1 px-2 border-2 border-foreground">
          Refresh ⟳
        </button>
      </form>
    </div>
  );
}
