import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const ContactList = styled.ul`
  display: none;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 10px;
    flex-direction: column;
    transition: opacity 500ms ease;
  }
`;

export const ContactLink = styled(NavLink)`
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.5;
    color: ${theme.colors.red};
  }
`;
