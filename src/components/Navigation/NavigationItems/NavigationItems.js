import React from 'react';

import { NavigationItemsStyle } from './NavigationItemsStyle';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <NavigationItemsStyle>
    <NavigationItem link="/" exact>
      News
    </NavigationItem>
    <NavigationItem link="/regions">Regions</NavigationItem>
    <NavigationItem link="/video">Video</NavigationItem>
    <NavigationItem link="/tv">Tv</NavigationItem>
  </NavigationItemsStyle>
);

export default navigationItems;
