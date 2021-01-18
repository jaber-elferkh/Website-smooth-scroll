import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const SidebarConatainer = styled.aside`
  /* border: 2px solid red; */
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 300ms ease-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Icon = styled.div`
  /* border: 2px solid yellow; */
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
`;

export const SidebarWrapper = styled.div`
  /* border: 2px solid blue; */
  color: white;
`;

export const SidebarMenu = styled.div`
  /* border: 2px solid red; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 200ms ease-out;
  color: white;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 200ms ease-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SideBtnLink = styled(LinkR)`
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
  transition: 200ms ease-out;

  &:hover {
    background-color: white;
    color: #01bf71;
    transition: 200ms ease-out;
  }
`;
