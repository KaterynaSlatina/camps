import { LocationInput } from './SelectLocation.styles';

export default function SelectLocation(props) {
  const { options, name, onChange } = props;
  // console.log(options);

  return (
    <div>
      <label htmlFor={name}></label>
      <LocationInput as="select" name={name} onChange={onChange}>
        <option value="">All camps</option>
        {options.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </LocationInput>
    </div>
  );
}
