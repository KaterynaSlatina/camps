import { Filter } from '../components/Filter/Filter';
import KampsList from '../components/KampsList/KampsList';
import { CatalogContainer } from './Catalog.styles';

export default function Catalog() {
  return (
    <CatalogContainer>
      <Filter />
      <KampsList />
    </CatalogContainer>
  );
}
