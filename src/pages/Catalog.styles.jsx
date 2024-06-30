import styled from '@emotion/styled';
import { theme } from '../styles/theme';

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 30px;
  padding: 16px;
  /* margin: auto; */

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    /* flex-direction: row; */
    padding: 20px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    flex-direction: row;
    padding: 20px;
  }
`;
