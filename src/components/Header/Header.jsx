import { NavLink } from 'react-router-dom';
import {
  ContactLink,
  ContactList,
  HeaderContainer,
  Navigation,
  StyledNavLink,
} from './Header.styled';

export default function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">Camp Rent</NavLink>
      <Navigation>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
      </Navigation>

      <ContactList>
        <li>
          <ContactLink href="mailto: campsukraine@gmail.com">
            campsukraine@gmail.com
          </ContactLink>
        </li>
        <li>
          <ContactLink href="tel:+380670000000">+38 067 000 00 00</ContactLink>
        </li>
      </ContactList>
    </HeaderContainer>
  );
}
