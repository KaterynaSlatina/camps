import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  transition: opacity 500ms ease;
`;
// export const Logo = styled.`
// `;

export const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover,
  &:focus,
  .active {
    opacity: 0.5;
    color: red;
  }
`;

export const Contacts = styled.ul`
  display: flex;
  gap: 20px;
`;
