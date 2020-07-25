import React from 'react';
import { Switch } from 'react-router-dom';

import Main from 'pages/Main';
import Path from 'pages/Path';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/path" component={Path} />
    <Route path="/" component={Main} />
  </Switch>
);

export default Routes;
