import { useEffect, useState } from 'react';
import KampCard from '../KampCard/KampCard';
import { fetchKamps } from '../../store/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectKamps } from '../../store/selectors';
import { BtnLoadMore, KampListWrapper } from './KampList.styled';

export default function KampsList() {
  const [isLoadedItems, setIsLoadedItems] = useState(4);
  const kamps = useSelector(selectKamps);
  const dispatch = useDispatch();

  const shownKamps = kamps ? kamps.slice(0, isLoadedItems) : null;

  const {
    // filteredKamps,
    // isLoading,
    error,
  } = useSelector((state) => state.kamps);

  useEffect(() => {
    dispatch(fetchKamps());
  }, [dispatch]);

  // if (isLoading) return <div>Loading...</div>;
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
      {shownKamps < kamps ? (
        <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>
      ) : (
        []
      )}
    </KampListWrapper>
  );
}
