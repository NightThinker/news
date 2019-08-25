import React from 'react';

import newsLogo from '../../assets/images/news-logo.png';
import { LogoStyle } from './LogoStyle';

const logo = (props) => (
  <LogoStyle>
    <img src={newsLogo} alt="Logo" />
  </LogoStyle>
);

export default logo;
