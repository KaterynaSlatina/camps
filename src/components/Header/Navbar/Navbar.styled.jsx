import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const Navigation = styled.nav`
  padding: 30px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    display: flex;
    gap: 25px;
    padding: 0px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  width: fit-content;
  font-size: 17px;
  cursor: pointer;
  margin-bottom: 20px;

  &.active {
    opacity: 0.5;
    color: ${theme.colors.red};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    margin-bottom: 0px;
  }
`;
