import { NavLink } from 'react-router-dom';
import { HeaderContainer, Navigation, StyledNavLink } from './Header.styled';

export default function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">Kamp Rent</NavLink>
      <Navigation>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
      </Navigation>
      <div>
        <ul>
          <li>kampsukraine@gmail.com</li>
          <li>+38 067 000 00 00</li>
        </ul>
      </div>
    </HeaderContainer>
  );
}
