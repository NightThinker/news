import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import { ToolbarStyle, LogoStyle, NavStyle } from './ToolbarStyle';

const toolbar = (props) => (
  <ToolbarStyle>
    {/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
    {/* <LogoStyle> */}
    <Logo />
    {/* </LogoStyle> */}
    <NavStyle>
      <NavigationItems isAuthenticated={props.isAuth} />
    </NavStyle>
  </ToolbarStyle>
);

export default toolbar;
