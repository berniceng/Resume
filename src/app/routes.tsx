import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { InitialProps } from './propType';
import Login from './components/form/login';
import MainContainer from './containers/mainContainer';
import { AppContext } from './context';
import React from 'react';

const Routes = (props: InitialProps): any => {
  return (
        <BrowserRouter>
            {
                props.token === '' ?
                <Switch>
                    <Route exact={true} path="/login"  key="login" render={() => <Login />}/>
                    <Redirect to="/login"/>
                </Switch>
                :
                <Switch>
                    <Route
                        exact={true}
                        path="/aboutme"
                        key="about me"
                        render={() => <MainContainer/>}
                    />
                    <Redirect to="/aboutme" />
                </Switch>
            }
        </BrowserRouter>
  );
};

export default AppContext(Routes);
