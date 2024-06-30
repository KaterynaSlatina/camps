import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const CampCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid;
  border-color: ${theme.colors.borderColor};
  border-radius: 20px;
  padding: 12px;
  margin-bottom: 20px;
  width: 280px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row;
    width: 750px;
    gap: 18px;
    padding: 16px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 888px;
    padding: 24px;
    gap: 24px;
    margin-bottom: 32px;
  }
`;

export const CampImg = styled.img`
  border-radius: 10px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 290px;
    height: 310px;
  }
`;

export const CampDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 260px;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 400px;
    align-items: flex-start;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 526px;
  }
`;

export const TitleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-bottom: 10px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row;
    gap: 24px;
    padding: 24px;
    margin-bottom: 32px;
    align-items: baseline;
    margin-bottom: 10px;
    padding: 0;
  }
`;

export const TitleCamp = styled.h2`
  line-height: 24px;
  width: 260px;
  font-size: 18px;
  text-align: center;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-weight: 900;
    font-size: 24px;
    width: fit-content;
    font-size: 20px;
  }
`;

export const PriceAndFav = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const CampPrice = styled.b`
  line-height: 20px;
  font-size: 18px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-weight: 900;
    font-size: 20px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    font-weight: 900;
    font-size: 24px;
  }
`;

export const RatingList = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 8px;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row;
    font-size: 16px;
    gap: 15px;
  }
`;

export const RatingItem = styled.li`
  display: flex;
  align-items: stretch;
`;

export const SvgReviewAndLocation = styled.svg`
  stroke: ${theme.colors.black};
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
    background: ${theme.colors.black};
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
  width: 260px;
  justify-content: center;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: flex-start;
    width: 430px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 525px;
  }
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-end;
  gap: 7px;
  background-color: ${theme.colors.greyBackgroundColor};
  padding: 12px 18px;
  border-radius: 100px;
  justify-content: center;
`;

export const SvgCard = styled.svg`
  stroke: ${theme.colors.black};
  width: 20px;
  height: 20px;
`;

export const BtnShowMore = styled.button`
  width: 150px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.red};
  border-radius: 200px;
  border: none;
  line-height: 1.5;
  font-size: 14px;
  padding: 12px 30px;
  font-weight: 500;

  &:hover,
  btnShowMore:focus {
    background-color: ${theme.colors.redHover};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 130px;
    padding: 12px 20px;
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 166px;
    padding: 16px 40px;
    font-size: 16px;
  }
`;

export const CampDescriptionText = styled.p`
  overflow: hidden;
  width: 250px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${theme.colors.greyTextColor};
  align-items: center;
  font-size: 14px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 16px;
    width: 400px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    font-size: 18px;
    width: 525px;
  }
`;

export const SvgFavorite = styled.svg`
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: ${(props) => (props.isFavorite ? `${theme.colors.red}` : 'white')};
  stroke: ${(props) => (props.isFavorite ? `${theme.colors.red}` : '#101828')};

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 24px;
    height: 24px;
  }
`;
