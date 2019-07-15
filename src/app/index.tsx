import React  from 'react';
import { Context } from './context';
import Routes from './routes';
import { InitialState } from './propType';
import { BrowserRouter } from 'react-router-dom';

export default class App extends React.Component<{}, InitialState> {

  state = {
    token: '',
  };

  setToken = (token: string) => {
    this.setState({ token });
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state, setToken: this.setToken }} >
        <Routes/>
      </Context.Provider>
    );
  }
}
