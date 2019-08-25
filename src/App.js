import React from 'react';
import { withRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import routes from './utils/routes';
import Layout from './hoc/Layout/Layout';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: #eef2f5;
    padding: 0;
    margin: 0;
    font-family: Thonburi;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }
  h1 {
    font-size: 2.667rem;
    margin: 0;
  }
  h2 {
    font-size: 1.125rem;
    margin: 0;
  }
  h3 {
    font-size: 1rem;
    margin: 0;
  }
  p {
    font-size: 0.875rem;
    margin: 0;
  } 
`;

function App() {
  return (
    <Layout>
      <GlobalStyle />
      {routes}
    </Layout>
  );
}

export default withRouter(App);
