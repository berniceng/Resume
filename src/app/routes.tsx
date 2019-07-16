import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/form/login';
import React from 'react';
import MainContainer from './containers/mainContainer';
import Skills from './containers/skills';
import Aboutme from './containers/aboutme';
import { AppContext } from './context';

const Routes = () => {
  return (
    <BrowserRouter>
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
              // page='aboutme'
              // children={
              //   <Aboutme/>
              // }
            />
          }
        />
        <Route
          exact={true}
          path="/skills"
          key="skills"
          render={
            () => <MainContainer
              children={{
                page: 'skills',
                component: <Skills/>,
              }}
            />
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
