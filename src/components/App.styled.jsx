import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
  margin: 0;
  padding: 0;
`;

export const Navigation = styled.nav``;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding: 15px;
  transition: all 0.3s;
  color: black;
  font-size: 20px;
  &.active {
    color: #1f85cf;
    border-bottom: 2px solid #1f85cf;
  }
`;
