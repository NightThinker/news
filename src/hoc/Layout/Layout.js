import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import { MainStyle } from './LayoutStyle';

function Layout(props) {
  return (
    <React.Fragment>
      <Toolbar />
      <MainStyle>{props.children}</MainStyle>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
