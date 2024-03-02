"use client";

import { useContext } from "react";
import type { GeoSettings } from "@/src/geo/geo-types";
import GeoDataContext from "@/src/geo/context/geo-data-context";
import GeoSettingsContext from "@/src/geo/context/geo-settings-context";
import GeoStateContext from "@/src/geo/context/geo-state-context";
import GeoSettingsSelectField from "./form/geo-settings-select-field";
import GeoSettingsCheckboxFields from "./form/geo-settings-checkbox-fields";
import GeoSettingsCategoryTitle from "./form/geo-settings-category-title";

export default function GeoSettings() {
  const {
    items,
    categories: allCategories,
    nbQuestionsOptions,
  } = useContext(GeoDataContext);
  const [settings, updateSettings] = useContext(GeoSettingsContext);
  const [_, dispatch] = useContext(GeoStateContext);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const nbQuestionsFormData = formData.get("nbQuestions");
    const categoriesFormData = formData.getAll("categories");
    const newSettrings: GeoSettings = {
      nbQuestions: Number(nbQuestionsFormData),
      categoryIndexes:
        categoriesFormData.length < allCategories.length
          ? categoriesFormData.map((idx) => Number(idx))
          : "all",
    };
    updateSettings(newSettrings, () => dispatch("RELOAD_STATE"));
  }

  return (
    settings && (
      <aside className="flex justify-center mt-5 mb-20">
        <div className="w-full max-w-screen-md">
          <h3 className="font-bold text-2xl">Settings</h3>
          <form onSubmit={handleSubmit}>
            <GeoSettingsSelectField
              id="nbQuestions"
              name="nbQuestions"
              label="Number of questions"
              defaultValue={settings.nbQuestions}
              options={nbQuestionsOptions}
            />
            <GeoSettingsCheckboxFields
              id="category"
              name="categories"
              checkboxes={allCategories.map((category, idx) => ({
                title: (
                  <GeoSettingsCategoryTitle
                    from={items[category.from]}
                    to={items[category.to || items.length - 1]}
                  />
                ),
                value: idx,
                defaultChecked:
                  settings.categoryIndexes == "all" ||
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
      </aside>
    )
  );
}
