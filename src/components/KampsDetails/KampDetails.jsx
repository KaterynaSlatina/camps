import { useState } from 'react';
import {
  BtnFeaturesOrReviews,
  ButtonsModal,
  CampDescriptionText,
  CampPrice,
  DetailsContainer,
  DetailsImg,
  DetailsImgList,
  DetailsTitleContainer,
  RatingAndLocation,
  RatingAndLocationItem,
  RatingAndReviews,
  SvgReviewAndLocation,
} from './KampDetails.styled.jsx';
import svg from '../../assets/icons/icons.svg';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';

export default function KampDetails({ kamps }) {
  const [activeButton, setActiveButton] = useState('Features');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const location = kamps.location;
  const parts = location.split(', ');
  const formattedLocation = parts.reverse().join(', ');
  console.log(formattedLocation);

  return (
    <DetailsContainer>
      <DetailsTitleContainer>
        <h2>{kamps.name}</h2>

        <RatingAndLocation>
          <RatingAndLocationItem>
            <SvgReviewAndLocation>
              <use href={`${svg}#icon-star`}></use>
            </SvgReviewAndLocation>

            <RatingAndReviews>
              {kamps.rating}({kamps.reviews.length} Reviews)
            </RatingAndReviews>
          </RatingAndLocationItem>

          <RatingAndLocationItem>
            <SvgReviewAndLocation>
              <use href={`${svg}#icon-map`}></use>
            </SvgReviewAndLocation>
            <p>{formattedLocation}</p>
          </RatingAndLocationItem>
        </RatingAndLocation>

        <CampPrice>€{kamps.price}</CampPrice>
      </DetailsTitleContainer>

      <DetailsImgList>
        <li>
          <DetailsImg
            src={kamps.gallery[0]}
            alt="img"
            width="290"
            height="310"
          />
        </li>
        <li>
          <DetailsImg
            src={kamps.gallery[1]}
            alt="img"
            width="290"
            height="310"
          />
        </li>
        <li>
          <DetailsImg
            src={kamps.gallery[2]}
            alt="img"
            width="290"
            height="310"
          />
        </li>
      </DetailsImgList>

      <CampDescriptionText>{kamps.description}</CampDescriptionText>

      <ButtonsModal>
        <BtnFeaturesOrReviews
          type="button"
          onClick={() => handleButtonClick('Features')}
          active={activeButton === 'Features'}
        >
          Features
        </BtnFeaturesOrReviews>

        <BtnFeaturesOrReviews
          type="button"
          onClick={() => handleButtonClick('Reviews')}
          active={activeButton === 'Reviews'}
        >
          Reviews
        </BtnFeaturesOrReviews>
      </ButtonsModal>
      {activeButton === 'Features' && <Features kamps={kamps} />}
      {activeButton === 'Reviews' && <Reviews kamps={kamps} />}
    </DetailsContainer>
  );
}
