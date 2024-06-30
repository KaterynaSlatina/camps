import { Navigation, StyledNavLink } from './Navbar.styled';

const Navbar = ({ toggleModal }) => {
  const handleLinkClick = () => {
    toggleModal();
  };
  return (
    <Navigation>
      <StyledNavLink to="/" onClick={handleLinkClick}>
        Home
      </StyledNavLink>
      <StyledNavLink to="/catalog" onClick={handleLinkClick}>
        Catalog
      </StyledNavLink>
      <StyledNavLink to="/favorites" onClick={handleLinkClick}>
        Favorites
      </StyledNavLink>
    </Navigation>
  );
};

export default Navbar;
