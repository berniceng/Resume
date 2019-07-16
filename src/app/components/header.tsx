import React, { Component } from 'react';
import { HeaderProps, HeaderState } from '../propType';
import * as styles from '../scss/header.scss';

class Header extends Component<HeaderProps, HeaderState>{
  state = {
    width: window.innerWidth,
    isOpen: false,
  };

  componentWillMount() {
    this.onResize();
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.setState({
      width: window.innerWidth,
    });
  }

  openBurgerMenu = () => {
    this.setState({
      isOpen: this.state.isOpen ? false : true,
    });
  }

  render() {
    return(
      this.state.width > 849
      ?
      (
        <div className={`${styles.header} ${this.props.className}`}>
          <div>
            About Me
          </div>
          <div>
            Skills
          </div>
          <div>
            Education
          </div>
          <div>
            Experiences
          </div>
          <div>
            Recommendation
          </div>
          <div>
            Logout
          </div>
        </div>
      )
      :
      (
        <div className={`${styles.menubar} ${this.state.isOpen ? styles.open : null}`}>
          <div className={styles.sidebar}>
            <div>
              About Me
            </div>
            <div>
              Skills
            </div>
            <div>
              Education
            </div>
            <div>
              Experiences
            </div>
            <div>
              Recommendation
            </div>
            <div>
              Logout
            </div>
          </div>
          <div className={`${styles.burger} ${this.props.className}`} onClick={this.openBurgerMenu}>
            <span/>
            <span/>
            <span/>
          </div>
        </div>
      )
    );
  }
}

export default Header;
