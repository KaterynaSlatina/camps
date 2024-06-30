import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-top: 30px;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 620px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 902px;
    align-items: flex-start;
  }
`;
export const DetailsTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  margin-bottom: 24px;
  width: 450px;
`;

export const RatingAndLocation = styled.ul`
  display: flex;
  gap: 10px;
`;

export const RatingAndLocationItem = styled.li`
  display: flex;
  font-size: 16px;
`;

export const SvgReviewAndLocation = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 4px;
  stroke: black;
`;

export const RatingAndReviews = styled.p`
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    background: #101828;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 1px;
  }
`;

export const CampPrice = styled.b`
  font-size: 24px;
  font-weight: 600;
`;

export const DetailsImgList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  display: flex;
  align-content: center;
  /* align-items: center; */

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    flex-direction: row;
  }
`;

export const DetailsImg = styled.img`
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
  width: 200px;
  height: auto;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 450px;
    height: 310px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 290px;
    height: 310px;
  }
`;

export const CampDescriptionText = styled.p`
  color: #475467;
  line-height: 1.5;
  margin-bottom: 44px;
  width: 260px;
  font-size: 14px;
  display: flex;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 600px;
    font-size: 16px;
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 902px;
    font-size: 18px;
  }
`;

export const ButtonsModal = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 44px;
  border-bottom: 1px solid rgba(16, 24, 40, 0.2);
`;

export const BtnFeaturesOrReviews = styled.button`
  display: block;
  width: fit-content;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  margin-bottom: 24px;
  border: none;
  background-color: transparent;
  position: relative;
  font-size: 18px;

  ::before {
    content: '';
    position: absolute;
    top: 184%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 5px;
    background-color: ${({ active }) => (active ? '#e44848' : 'transparent')};
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    font-size: 20px;
  }
`;
