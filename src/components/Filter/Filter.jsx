import { FilterCheckboxes } from '../FilterCheckboxes/FilterCheckboxes.jsx';
import { FilterLocation } from '../FilterLocation/FilterLocation.jsx';
import { FilterContainer } from './Filter.styles.jsx';

export const Filter = () => {
  return (
    <FilterContainer>
      <FilterLocation />
      <FilterCheckboxes />
    </FilterContainer>
  );
};
