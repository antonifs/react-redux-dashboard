import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components
import App from './components/App';
import HomePage from './components/home/HomePage';

export default (
  <Route path="/" components={App}>
    <IndexRoute component={HomePage} />
  </Route>
);
