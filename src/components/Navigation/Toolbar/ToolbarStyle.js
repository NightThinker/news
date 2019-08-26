import styled from 'styled-components';

export const ToolbarStyle = styled.header`
  /* height: 56px; */
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  z-index: 90;

  @media (max-width: 499px) {
    .DesktopOnly {
      display: none;
    }
  }
`;

export const LogoStyle = styled.div`
  height: 80%;
`;

export const NavStyle = styled.nav`
  margin-left: 80px;
  background: #1eaaaa;
  width: 100%;
  height: 50px;
  @media (max-width: 499px) {
    display: none;
  }
`;
