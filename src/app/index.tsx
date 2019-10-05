import React  from 'react';
// import { Context } from './context';
import Routes from './routes';
import { InitialState } from './propType';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export default class App extends React.Component<{}, InitialState> {

  state = {
    history: createBrowserHistory(),
    match: [],
  };

  render() {
    return (
      <Router history={this.state.history}>
        {/* <Context.Provider value={{ ...this.state }} > */}
          <Routes/>
        {/* </Context.Provider> */}
      </Router>
    );
  }
}
