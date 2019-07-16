import React, { Component } from 'react';
import { HeaderProps, HeaderState } from '../propType';
import * as styles from '../scss/header.scss';

class Header extends Component<HeaderProps, HeaderState>{
  state = {
    width: window.innerWidth,
    isOpen: false
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

  toggleBurgerMenu = () => {
    this.setState({
      isOpen: this.state.isOpen ? false : true,
    });
  }

  render() {
    const menuObj = [
      {key: "aboutme", title: "About Me"},
      {key: "skills", title: "Skills"},
      {key: "edu", title: "Education"},
      {key: "exp", title: "Experiences"},
      {key: "recommendation", title: "Recommendation"},
      {key: "logout", title: "Logout"}
    ];
    
    const menu = menuObj.map((obj) => {
        if(this.props.currentPage === obj.key){
          return(
            <div className={styles.underline}>{obj.title}</div>
          )
        } else{
          return(
            <div>{obj.title}</div>
          )
        }
    });

    return(
      this.state.width > 849
      ?
      (
        <div className={`${styles.header} ${this.props.className}`}>
          { menu }
        </div>
      )
      :
      (
        <div className={`${styles.menubar} ${this.state.isOpen ? styles.open : null}`}>
          <div className={styles.sidebar}>
            { menu }
          </div>
          <div className={`${styles.burger} ${this.props.className}`} onClick={this.toggleBurgerMenu}>
            <span/>
            <span/>
            <span/>
          </div>
          <div className={styles.background} onClick={this.toggleBurgerMenu}></div>
        </div>
      )
    );
  }
}

export default Header;
