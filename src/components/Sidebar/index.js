import React from 'react';
import {
  CloseIcon,
  Icon,
  SidebarConatainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SideBtnLink,
  SideBtnWrap,
} from './style';

const Sidebar = () => {
  return (
    <SidebarConatainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="blog">Blog</SidebarLink>
          <SidebarLink to="work">Work</SidebarLink>
          <SidebarLink to="services">Services</SidebarLink>
          <SidebarLink to="signup">Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideBtnLink to="/signin">Sign In</SideBtnLink>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarConatainer>
  );
};

export default Sidebar;
