import React, { Suspense } from 'react';
// import { Switch } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

const News = React.lazy(() => import('../pages/News/News'));
const Regions = React.lazy(() => import('../pages/Regions/Regions'));
const Tv = React.lazy(() => import('../pages/Tv/Tv'));
const Video = React.lazy(() => import('../pages/Video/Video'));

export default (
  <Suspense fallback={<p>Loading...</p>}>
    <Switch>
      <Route path="/regions" component={Regions} />
      <Route path="/tv" component={Tv} />
      <Route path="/video" component={Video} />
      <Route path="/news" exact component={News} />
      <Redirect from="/" to="/news" />
    </Switch>
  </Suspense>
);
