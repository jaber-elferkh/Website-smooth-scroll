import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  /* border: 2px solid red; */
  background: #000;
  color: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  font-size: 1rem;
`;

export const NavbarContainer = styled.div`
  /* border: 2px solid yellow; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 20px;
`;

export const NavLogo = styled(LinkR)`
  /* border: 2px solid blue; */
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-left: 1.5rem; */
  font-size: 1.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
    transform: translate(-100%, 60%);
  }
`;

export const NavMenu = styled.ul`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  /* border: 2px solid #01bf71; */
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  /* border: 3px solid red; */
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  background-color: #01bf71;
  border-radius: 8px;
  padding: 10px 22px;
  text-decoration: none;
  color: white;
  outline: none;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: white;
    color: #01bf71;
  }
`;
