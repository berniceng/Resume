import React  from 'react';
import { Context } from './context';
import Routes from './routes';
import { InitialState } from './propType';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export default class App extends React.Component<{}, InitialState> {

  state = {
    token: '',
    history: createBrowserHistory(),
    match: [],
  };

  setToken = (token: string) => {
    this.setState({ token });
  }

  render() {
    return (
      <Router history={this.state.history}>
        <Context.Provider value={{ ...this.state, setToken: this.setToken }} >
          <Routes/>
        </Context.Provider>
      </Router>
    );
  }
}
