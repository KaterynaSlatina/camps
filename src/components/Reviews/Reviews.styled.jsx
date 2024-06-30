import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const ReviewsContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    flex-direction: row;
  }
`;

export const ReviewList = styled.ul`
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 430px;
  }
`;

export const ReviewItem = styled.div`
  margin-bottom: 24px;
`;

export const ReviewerRate = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

export const FirstInitialCover = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  background-color: ${theme.colors.greyBackgroundColor};
`;

export const FirstInitial = styled.h2`
  color: ${theme.colors.red};
  margin-bottom: 0;
`;

export const ReviewerNameAndStars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
`;

export const ReviewComment = styled.p`
  color: ${theme.colors.greyTextColor};
  font-size: 14px;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 16px;
  }
`;
