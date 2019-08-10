import { Switch, Route } from 'react-router-dom';
import React from 'react';
import MainContainer from './containers/maincontainer';

const Routes = () => {
  return (
    <Switch>
      <Route
        exact={true}
        path={['/:page', '/']}
        key="routes"
        render={
          () => <MainContainer />
        }
      />
    </Switch>
  );
};

export default Routes;
