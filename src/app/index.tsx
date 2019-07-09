import React  from 'react';
import { Context } from './context';
import Routes from './routes';

export default class App extends React.Component {

  state = {
    token: ''
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
