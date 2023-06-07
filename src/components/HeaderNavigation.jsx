import { Outlet } from 'react-router-dom';
import { StyledNavLink, Navigation } from './App.styled';

export default function HeaderNavigation() {
  return (
    <header>
      <Navigation>
        <StyledNavLink to="/">Shop</StyledNavLink>
        <StyledNavLink to="/card">Shopping Card</StyledNavLink>
      </Navigation>
      <Outlet />
    </header>
  );
}
