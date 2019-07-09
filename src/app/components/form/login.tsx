import { InitialProps, LoginState } from '../../propType';
import React from 'react';
import Input from './input';
import * as jwt from 'jsonwebtoken';
import { ERRORMSG } from '../../data/messages';
import { USER } from '../../data/user';
import { AppContext } from '../../context';

// import styles from '../scss/login.scss';
import { withRouter } from 'react-router-dom';

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
      <div>
        <div>

        </div>
        <div>
          <Input label="Username" type="text" inputRef={this.usernameRef} />
          <Input label="Password" type="password" inputRef={this.passwordRef} />
          <Input label="Secret Key" type="password" inputRef={this.secretRef} />
          <div>
            <div onClick={this.login}>Login</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AppContext(Login));
