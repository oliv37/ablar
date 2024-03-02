type Checkbox = {
  title: string | React.ReactNode;
  value: string | number;
  defaultChecked: boolean | undefined;
};

type Props = {
  id: string;
  name: string;
  checkboxes: Checkbox[];
};

export default function GeoSettingsCheckboxFields({
  id,
  name,
  checkboxes,
}: Props) {
  return (
    <div className="my-8 flex flex-wrap">
      {checkboxes.map((checkbox, idx) => (
        <div key={idx} className="pl-0 pr-6 py-4">
          <label htmlFor={`${id}${idx}`} className="pr-2">
            {checkbox.title}
          </label>
          <input
            id={`${id}${idx}`}
            type="checkbox"
            name={name}
            value={checkbox.value}
            defaultChecked={checkbox.defaultChecked}
          />
        </div>
      ))}
    </div>
  );
}
