import React from 'react';

import { ImgStyle } from './ImgStyle';

const logo = (props) => (
  <ImgStyle>
    <img src={props.src} alt="img" />
  </ImgStyle>
);

export default logo;
