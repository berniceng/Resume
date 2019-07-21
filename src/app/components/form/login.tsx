import { InitialProps, LoginState } from '../../propType';
import React, { Component, RefObject, createRef } from 'react';
import { withRouter } from 'react-router-dom';
import { ERRORMSG } from '../../data/messages';
import { AppContext } from '../../context';

import '../../scss/variable.scss';
import * as styles from '../../scss/login.scss';
import axios from 'axios';

const logo = require('../../../assets/img/logo.png');

class Login extends Component<InitialProps, LoginState> {
  private usernameRef: RefObject<HTMLInputElement>;
  private passwordRef: RefObject<HTMLInputElement>;

  constructor(props: InitialProps) {
    super(props);
    this.usernameRef = createRef();
    this.passwordRef = createRef();
  }

  state = {
    error: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.keyb, false);

    const token = localStorage.getItem('resume-token');

    axios.post('http://localhost:3000/api/users/verifyToken', {
      token,
    }).then((res) => {
      if (res.data.valid) {
        this.props.history.push('/main/aboutme');
        this.props.setToken(token);
      } else {
        localStorage.removeItem('resume-token');
        this.props.setToken('');
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyb, false);
  }

  keyb = (e: any) => {
    if (e.keyCode === 13) {
      this.login();
    }
  }

  login = () => {
    const username = this.usernameRef.current ? this.usernameRef.current.value : '';
    const password = this.passwordRef.current ? this.passwordRef.current.value : '';

    if (!username || !password) {
      this.setState({ error: ERRORMSG.LOGIN_EMPTY });
      return;
    }

    if (this.props.token.length <= 0) {
      axios.post('http://localhost:3000/api/users/getToken', {
        username, password,
      }).then((res) => {
        this.props.setToken(res.data.token);
        localStorage.setItem('resume-token', res.data.token);
        this.props.history.push('/main/aboutme');
      });
    }
  }

  render() {
    return(
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <div>
              <img src={logo}/>
            </div>
            <div>
              Bernice Ng <br/> Kai Ling
            </div>
          </div>
          <div className={styles.title}>
            Login with the credentials provided
          </div>
          <div className={styles.form}>
            <div>
              <input
                type="text"
                ref={this.usernameRef}
                placeholder="Enter Username Provided"
              />
            </div>
            <div>
              <input
                type="password"
                ref={this.passwordRef}
                placeholder="Enter Password Provided"
              />
            </div>
            <div onClick={this.login}>
              <div>Login</div>
            </div>
            <div className={this.state.error ? styles.show : styles.hide}>
              <div>{this.state.error}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AppContext(Login));
