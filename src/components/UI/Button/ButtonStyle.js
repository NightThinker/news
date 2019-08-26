import styled, { css } from 'styled-components';

import { ClickAble, WhiteColor, Border, MarginPadding, Gray70Color, BorderRadius } from '../../../styles/Styles';

const ButtonStyle = styled.button`
  padding: 10px 20px;
  
  text-align: center;
  font-weight: lighter;
  position: relative;

  z-index: 1;
  font-size: 16px;

  font-family: inherit;

  span {
    position: relative;
    z-index: 3;
  }

  ${Border}
  ${css`
    ${ClickAble}
  `}

  /* Speace */
  ${MarginPadding}
  ${BorderRadius}


  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonDefaultStyle = styled(ButtonStyle)`
  color: ${Gray70Color};
  transition: all 0.5s;
  background: ${WhiteColor};

  /* &:hover {
    opacity: 1;
  } */
`;
