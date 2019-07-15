import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/form/login';
import MainContainer from './containers/mainContainer';
import React from 'react';
import Skills from './containers/skills';
import Aboutme from './containers/aboutme';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/"  key="login" render={() => <Login />}/>
        <Route exact={true} path="/login"  key="login" render={() => <Login />}/>
        <Route
          exact={true}
          path="/main"
          key="main"
          render={
            () => <MainContainer/>
          }
        />
        <Route
          exact={true}
          path="/main/aboutme"
          key="about me"
          render={
            () => <MainContainer children={<Aboutme/>}/>
          }
        />
        <Route
          exact={true}
          path="/skills"
          key="skills"
          render={
            () => <MainContainer children={<Skills/>}/>
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
