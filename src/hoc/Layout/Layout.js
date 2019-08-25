import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import { MainStyle } from './LayoutStyle';

function Layout(props) {
  return (
    <React.Fragment>
      <Toolbar />
      <MainStyle>{props.children}</MainStyle>
    </React.Fragment>
  );
}

export default Layout;
