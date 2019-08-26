import React from 'react';
import PropTypes from 'prop-types';

import { ButtonDefaultStyle } from './ButtonStyle';

const Button = (props) => {
  const { children, ...otherProps } = props;

  return (
    <ButtonDefaultStyle {...otherProps}>
      <span>{children}</span>
    </ButtonDefaultStyle>
  );
};

Button.propTypes = {
  type: PropTypes.string
};

export default Button;
