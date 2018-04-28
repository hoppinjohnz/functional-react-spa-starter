import React from 'react';
import { Route } from 'react-router-dom';
import Home, { HomePath } from './Home';
import Boilerplate, { BoilerplatePath } from './Boilerplate';

export default () => (
  <main>
    <Route exact path={HomePath} component={Home} />,
    <Route exact path={BoilerplatePath} component={Boilerplate} />
  </main>
);
