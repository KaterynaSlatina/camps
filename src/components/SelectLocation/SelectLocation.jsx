import { LocationInput } from './SelectLocation.styles';

export default function SelectLocation(props) {
  const { label, name, options, ...rest } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <LocationInput as="select" name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </LocationInput>
    </div>
  );
}
