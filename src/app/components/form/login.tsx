import { InitialProps, LoginState } from '../../propType';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Input from './input';
import * as jwt from 'jsonwebtoken';
import { ERRORMSG } from '../../data/messages';
import { USER } from '../../data/user';
import { AppContext } from '../../context';

import '../../scss/variable.scss';
import * as styles from '../../scss/login.scss';

const logo = require('../../../assets/img/logo.png');


class Login extends React.Component<InitialProps, LoginState> {
  private usernameRef: React.RefObject<HTMLInputElement>;
  private passwordRef: React.RefObject<HTMLInputElement>;
  private secretRef: React.RefObject<HTMLInputElement>;

  constructor(props: InitialProps) {
    super(props);
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
    this.secretRef = React.createRef();
  }

  state = {
    error: '',
  };

  login = () => {
    const username = this.usernameRef.current ? this.usernameRef.current.value : '';
    const password = this.passwordRef.current ? this.passwordRef.current.value : '';
    const secret = this.secretRef.current ? this.secretRef.current.value : '';

    if (!username || !password || !secret) {
      this.setState({ error: ERRORMSG.LOGIN_EMPTY });
      return;
    }

    if (USER.PASSWORD !== password || USER.USERNAME !== username) {
      this.setState({ error: ERRORMSG.LOGIN_INVALID });
      return;
    }

    if (this.props.token.length <= 0) {
      const opts = {
        username,
        password,
      };

      const token = jwt.sign(opts, secret, {
        expiresIn: 60 * 60 * 24, // expires in 24 hours
      });

      this.props.setToken(token);

      this.props.history.push("/aboutme");
    }
  }

  render() {
    return(
      <div className={styles.background}>
        <div className={styles.left}>
          <div className={styles.title}>
            <div>
              "
            </div>
            Hop on to a journey with me
            <div>
              "
            </div>
          </div>
        </div>
        <div className={styles.right}>
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
              <Input label="Username" type="text" inputRef={this.usernameRef} placeholder="Enter Username Provided"/>
              <Input label="Password" type="password" inputRef={this.passwordRef} placeholder="Enter Password Provided"/>
              <Input label="Secret Key" type="password" inputRef={this.secretRef} placeholder="Enter Any Secret Key"/>
              <div onClick={this.login}>
                <div>Login</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AppContext(Login));
