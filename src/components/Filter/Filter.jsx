import { FilterCheckboxes } from '../FilterCheckboxes/FilterCheckboxes.jsx';
import { FilterLocation } from '../FilterLocation/FilterLocation.jsx';
import { FilterWrapper } from './Filter.styles.jsx';

export const Filter = () => {
  return (
    <FilterWrapper>
      <FilterLocation />
      <FilterCheckboxes />
    </FilterWrapper>
  );
};
