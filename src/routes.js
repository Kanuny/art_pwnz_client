import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';
import { ReduxAsyncConnect } from 'redux-connect';

import Layout from './components/Layout/Layout';
import Gallery from './pages/Gallery/Gallery';
import Details from './pages/Details/Details';
import Videos from './pages/Videos/Videos';
import Home from './pages/History/History';

function Stub() {
  return (
    <div> This is a stub </div>
  );
}

export default (browserHistory) => (
  <Router history={browserHistory} render={(props) => <ReduxAsyncConnect {...props} />}>
    <Route path="/" component={Layout}>
      <IndexRedirect to="home" />
      <Route path="home" component={Home} />
      <Route path="gallery" component={Gallery} />
      <Route path="videos" component={Videos} />
      <Route path="about" component={Stub} />
      <Route path="article/:id" component={Details} />
    </Route>
    <Route path="*" component={() => <div> Not Found </div>} />
  </Router>
);
