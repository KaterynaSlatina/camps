import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import svg from '../../assets/icons/icons.svg';
import KampDetails from '../KampsDetails/KampDetails';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favoritesSlice';
import { selectFavoriteKamp } from '../../store/selectors';
import {
  CampCardWrapper,
  CampDescription,
  CampImg,
  CampPrice,
  PriceAndFav,
  RatingList,
  TitleCamp,
  TitleCardContainer,
  BtnShowMore,
  CampDescriptionText,
  FeatureItem,
  FeatureList,
  RatingAndReviews,
  RatingItem,
  SvgCard,
  SvgReviewAndLocation,
  SvgFavorite,
} from './KampCard.styled';

export default function KampCard({ kamps }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoriteKamp);

  useEffect(() => {
    setIsFavorite(favorites.some((favorite) => favorite._id === kamps._id));
  }, [favorites, kamps]);

  const toggleFavorites = () => {
    if (isFavorite) {
      dispatch(removeFavorite(kamps));
    } else {
      dispatch(addFavorite(kamps));
    }
  };

  const location = kamps.location;
  const parts = location.split(', ');
  const formattedLocation = parts.reverse().join(', ');
  // console.log(formattedLocation);

  return (
    <CampCardWrapper>
      <CampImg src={kamps.gallery[0]} alt="img" width="290" height="310" />

      <CampDescription>
        <div>
          <TitleCardContainer>
            <TitleCamp>{kamps.name}</TitleCamp>
            <PriceAndFav>
              <CampPrice>€{kamps.price}</CampPrice>
              <SvgFavorite isFavorite={isFavorite} onClick={toggleFavorites}>
                <use href={`${svg}#icon-heart`}></use>
              </SvgFavorite>
            </PriceAndFav>
          </TitleCardContainer>
          <RatingList>
            <RatingItem>
              <SvgReviewAndLocation>
                <use href={`${svg}#icon-star`}></use>
              </SvgReviewAndLocation>
              <RatingAndReviews>
                {kamps.rating}({kamps.reviews.length} Reviews)
              </RatingAndReviews>
            </RatingItem>
            <RatingItem>
              <SvgReviewAndLocation>
                <use href={`${svg}#icon-map`}></use>
              </SvgReviewAndLocation>
              <p>{formattedLocation}</p>
              {/* <p>{kamps.location}</p> */}
            </RatingItem>
          </RatingList>
        </div>

        <div>
          <CampDescriptionText>{kamps.description}</CampDescriptionText>
        </div>

        <FeatureList>
          <FeatureItem>
            <SvgCard>
              <use href={`${svg}#icon-adults`}></use>
            </SvgCard>
            {kamps.adults} adults
          </FeatureItem>
          <FeatureItem>
            <SvgCard>
              <use href={`${svg}#icon-transmission`}></use>
            </SvgCard>
            {kamps.transmission}
          </FeatureItem>
          <FeatureItem>
            <SvgCard>
              <use href={`${svg}#icon-petrol`}></use>
            </SvgCard>
            {kamps.engine}
          </FeatureItem>
          <FeatureItem>
            <SvgCard>
              <use href={`${svg}#icon-kitchen`}></use>
            </SvgCard>
            {kamps.details.kitchen > 0 ? 'Kitchen' : null}{' '}
          </FeatureItem>
          <FeatureItem>
            <SvgCard>
              <use href={`${svg}#icon-bed`}></use>
            </SvgCard>
            {kamps.details.beds} beds
          </FeatureItem>
          <FeatureItem>
            <SvgCard>
              <use href={`${svg}#icon-ac`}></use>
            </SvgCard>
            {kamps.details.airConditioner > 0 ? 'AC' : null}
          </FeatureItem>
        </FeatureList>

        <BtnShowMore onClick={() => setIsOpenModal(true)}>
          Show more
        </BtnShowMore>

        <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
          <KampDetails kamps={kamps} />
        </Modal>
      </CampDescription>
    </CampCardWrapper>
  );
}
