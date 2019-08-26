import React from 'react';
import { NavLink } from 'react-router-dom';

import { ContainerStyle, NavigationStyle, CopyStyle, NavigationItemStyle } from './FooterStyle';
import Text from '../UI/Text/Text';

function Footer() {
  return (
    <ContainerStyle>
      <NavigationStyle>
        <NavigationItemStyle>
          <NavLink to="/" exact>
            News
          </NavLink>
        </NavigationItemStyle>
        <NavigationItemStyle>
          <NavLink to="regions" exact>
            Regions
          </NavLink>
        </NavigationItemStyle>
        <NavigationItemStyle>
          <NavLink to="video" exact>
            Video
          </NavLink>
        </NavigationItemStyle>
        <NavigationItemStyle>
          <NavLink to="tv" exact>
            Tv
          </NavLink>
        </NavigationItemStyle>
      </NavigationStyle>
      <CopyStyle>
        <Text type="p" color="gray30">
          Copy right AMPOS
        </Text>
      </CopyStyle>
    </ContainerStyle>
  );
}

export default Footer;
