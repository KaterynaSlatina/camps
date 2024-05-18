import styled from '@emotion/styled';

export const KampListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BtnLoadMore = styled.button`
  display: flex;
  padding: 16px 32px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  background: transparent;
  border-radius: 200px;
  color: #101828;
  margin-bottom: 40px;

  &:hover {
    border-color: #e44848;
  }
`;
