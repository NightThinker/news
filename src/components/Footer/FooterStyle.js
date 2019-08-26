import styled from 'styled-components';

import { White50Color, GreenColor, Gray50Color } from '../../styles/Styles';

export const ContainerStyle = styled.div`
  display: flex;
  background: ${White50Color};
  padding: 25px 20px 25px 36px;
  justify-content: space-between;
`;

export const NavigationStyle = styled.ul`
  display: flex;
  padding: 0;
`;
export const NavigationItemStyle = styled.li`
  display: flex;
  /* padding: 0; */
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-right: 1px solid ${Gray50Color};
  padding: 0 15px;
  a {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${GreenColor};
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
    &:hover,
    &:active,
    &.active {
      color: #008c8c;
    }
  }
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    border-right: unset;
  }
`;

export const CopyStyle = styled.div`
  display: flex;
`;

export const FooterStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 45px;
  padding-bottom: 45px;
`;
