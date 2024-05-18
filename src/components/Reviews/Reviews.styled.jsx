import styled from '@emotion/styled';

export const ReviewsContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const ReviewList = styled.ul`
  width: 430px;
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
  background-color: #f2f4f7;
`;

export const FirstInitial = styled.h2`
  color: #e44848;
  margin-bottom: 0;
`;

export const ReviewerNameAndStars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
`;

export const ReviewComment = styled.p`
  color: #475467;
`;
