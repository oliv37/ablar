import type { GeoOption } from "@/src/geo/geo-types";

type Props = {
  id: string;
  name: string;
  label: string;
  defaultValue: string | number | undefined;
  options: GeoOption[];
};

export default function GeoSettingsSelectField({
  id,
  name,
  label,
  defaultValue,
  options,
}: Props) {
  return (
    <div className="my-8">
      <label htmlFor={id} className="pr-4">
        {label}
      </label>
      <select id={id} name={name} defaultValue={defaultValue} className="p-2">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
