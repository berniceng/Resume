import * as React  from 'react';
import { Context } from './context';
import MainContainer from './containers/mainContainer';
import Login from './components/form/login';

export default class App extends React.Component {

  state = {
    token: '',
  };

  setToken = (token: string) => {
    this.setState({ token });
  }

  render() {
    const content = this.state.token ? <MainContainer /> : <Login />;
    return (
      <Context.Provider value={{ ...this.state, setToken: this.setToken }} >
        {content as JSX.Element}
      </Context.Provider>
    );
  }
}
