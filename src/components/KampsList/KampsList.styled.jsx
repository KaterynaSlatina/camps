import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const KampListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    margin-top: 60px;
  }
`;

export const BtnLoadMore = styled.button`
  display: flex;
  font-size: 14px;
  padding: 12px 30px;
  border: 1px solid ${theme.colors.borderColor};
  background: transparent;
  border-radius: 200px;
  color: ${theme.colors.textColor};
  margin-bottom: 40px;

  &:hover {
    border-color: ${theme.colors.red};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    padding: 16px 32px;
  }
`;
