import React  from 'react';
import { Context } from './context';
import Routes from './routes';
import { InitialState, ResizeWidthType } from './propType';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export default class App extends React.Component<{}, InitialState & ResizeWidthType> {

  state = {
    history: createBrowserHistory(),
    match: [],
    width: window.innerWidth,
  };

  onResize = () => {
    this.setState({
      width: window.innerWidth,
    });
  }

  componentWillMount() {
    this.onResize();
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    return (
      <Router history={this.state.history}>
        <Context.Provider value={{ ...this.state }} >
          <Routes/>
        </Context.Provider>
      </Router>
    );
  }
}
