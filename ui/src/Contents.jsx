import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from './routes.js';

export default function Contents() {
  return (
    <Switch>
<<<<<<< HEAD
      <Redirect exact from="/" to="/issues" />
=======
      <Redirect exact from="/" to="/HomeUi" />
>>>>>>> edc861e (Adding home componment and css styling of the home component)
      {routes.map(attrs => <Route {...attrs} key={attrs.path} />)}
    </Switch>
  );
}
