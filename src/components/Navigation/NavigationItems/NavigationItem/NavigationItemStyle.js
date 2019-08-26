import styled from 'styled-components';

export const NavigationItemStyle = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  a {
    border-right: 2px solid #008c8c;
    font-size: 1.2rem;
    font-weight: 700;
    color: #26333e;
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
  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    text-align: center;

    a {
      color: white;
      height: 100%;
      padding: 16px 10px;
      border-bottom: 4px solid transparent;
      &:hover,
      &:active,
      &.active {
        background-color: #008c8c;
        /* border-bottom: 4px solid #40a4c8; */
        color: white;
      }
    }
  }
`;
