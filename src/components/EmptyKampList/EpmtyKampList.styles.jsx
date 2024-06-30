import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const EmptyKampListWrapper = styled.div`
  width: 280px;
  display: flex;
  justify-content: center;
  gap: 24px;
  border: 1px solid;
  border-color: ${theme.colors.borderColor};
  padding: 16px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  margin-bottom: 32px;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 900px;
    padding: 24px;
    margin-top: 60px;
  }
`;

export const EmptyKampListText = styled.p`
  text-align: center;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
  }
`;
