import { useEffect, useState } from 'react';
import KampCard from '../KampCard/KampCard';
import { fetchKamps } from '../../store/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredKamps } from '../../store/selectors';
import { BtnLoadMore, KampListWrapper } from './KampsList.styled';
import EmptyKampList from '../EmptyKampList/EpmtyKampList';

export default function KampsList() {
  const [isLoadedItems, setIsLoadedItems] = useState(4);
  const kamps = useSelector(selectFilteredKamps);
  const dispatch = useDispatch();

  const shownKamps = kamps ? kamps.slice(0, isLoadedItems) : null;

  const { error } = useSelector((state) => state.kamps);

  useEffect(() => {
    dispatch(fetchKamps());
  }, [dispatch]);

  if (shownKamps.length === 0) {
    return <EmptyKampList />;
  }

  if (error) return <div>Error: {error}</div>;

  const handleLoadMore = () => {
    setIsLoadedItems(isLoadedItems + 4);
  };

  return (
    <KampListWrapper>
      <ul>
        {shownKamps.map((kamps) => (
          <li key={kamps._id}>
            <KampCard kamps={kamps} />
          </li>
        ))}
      </ul>
      {shownKamps.length < kamps.length ? (
        <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>
      ) : null}
    </KampListWrapper>
  );
}
