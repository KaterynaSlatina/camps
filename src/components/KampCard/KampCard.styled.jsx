import styled from '@emotion/styled';

export const CampCardWrapper = styled.div`
  display: flex;
  gap: 24px;
  border: 1px solid;
  border-color: rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 32px;
`;

export const CampImg = styled.img`
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
`;

export const CampDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 526px;
`;

export const TitleCardContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 10px;
`;

export const TitleCamp = styled.h2`
  font-weight: 900;
  font-size: 24px;
  line-height: 24px;
`;

export const PriceAndFav = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const CampPrice = styled.b`
  font-weight: 900;
  font-size: 24px;
  line-height: 20px;
`;

export const RatingList = styled.ul`
  display: flex;
  font-size: 16px;
  gap: 15px;
`;

export const RatingItem = styled.li`
  display: flex;
  align-items: stretch;
`;

export const SvgReviewAndLocation = styled.svg`
  stroke: #101828;
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const RatingAndReviews = styled.p`
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    background: #101828;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 1px;
  }
`;

export const FeatureList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-end;
  gap: 7px;
  background-color: #f2f4f7;
  padding: 12px 18px;
  border-radius: 100px;
  justify-content: center;
`;

export const SvgCard = styled.svg`
  stroke: #101828;
  width: 20px;
  height: 20px;
`;

export const BtnShowMore = styled.button`
  width: 166px;
  padding: 16px 40px;
  color: #fff;
  background-color: #e44848;
  border-radius: 200px;
  border: none;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 500;

  &:hover,
  btnShowMore:focus {
    background-color: #d84343;
  }
`;

export const CampDescriptionText = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #475467;
`;
export const SvgFavorite = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
  fill: ${(props) => (props.isFavorite ? '#d84343 ' : 'white')};
  stroke: ${(props) => (props.isFavorite ? ' #d84343' : '#101828')};
`;
