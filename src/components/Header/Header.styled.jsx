import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  padding: 20px;
  background-color: ${theme.colors.white};
  position: fixed;
  width: 100%;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.borderColor};
    position: absolute;
    bottom: 0;
    left: 0;
  }

  /* @media screen and (min-width: ${theme.breakpoint.tablet}) {
    max-width: 768px;
  } */

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 1440px;
  }
`;

export const ButtonBurger = styled.button`
  border: none;
  background-color: ${theme.colors.white};

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    display: none;
  }
`;

export const SvgBurger = styled.svg`
  width: 24px;
  height: 24px;
`;

export const Contacts = styled.ul`
  display: flex;
  gap: 20px;
`;
