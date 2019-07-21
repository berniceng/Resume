import { Switch, Route } from 'react-router-dom';
import Login from './components/form/login';
import React from 'react';
import MainContainer from './containers/mainContainer';
import Education from './containers/education';
import Aboutme from './containers/aboutMe';

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/"  key="login" render={() => <Login />}/>
      <Route exact={true} path="/login"  key="login" render={() => <Login />}/>
      <Route
        exact={true}
        path="/main/aboutme"
        key="about me"
        render={
          () => <MainContainer
            children={{
              page: 'aboutme',
              component: <Aboutme/>,
            }}
          />
        }
      />
      <Route
        exact={true}
        path="/main/education"
        key="edu"
        render={
          () => <MainContainer
            children={{
              page: 'education',
              component: <Education/>,
            }}
          />
        }
      />
    </Switch>
  );
};

export default Routes;
