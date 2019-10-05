import React, { Component } from 'react';
// import { AppContext } from '../context';
import { HeaderProps, HeaderState } from '../propType';
import * as styles from '../scss/header.scss';
import { MENU } from '../data/constants';
import { withRouter } from 'react-router';

class Header extends Component<any, HeaderState>{
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

  toggleBurgerMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  clickMenu = (e: any) => {
    e.preventDefault();
    const key = e.target.href.split('#')[1];
    const anchorTarget = document.getElementById(key);

    this.addToHistory(key);

    if (anchorTarget) {
      scrollTo({
        behavior: 'smooth',
        top: anchorTarget.offsetTop - 64,
      });
    }
  }

  addToHistory = (dataKey: string) => {
    const { history } = this.props;

    history.push(`/${dataKey}`);
  }

  render() {
    const { currentPage } = this.props;
    const menuObj = [
      MENU.ABOUTME,
      MENU.EDU,
      MENU.EXP,
      MENU.SKILL,
      MENU.RECOMMENDATION,
    ];

    const menu = menuObj.map((obj) => {
      if (currentPage === obj.KEY) {
        return(
          <a
            href={`#${obj.KEY}`}
            className={styles.underline}
            data-key={obj.KEY}
            key={obj.KEY}
            onClick={this.clickMenu}
          >
            {obj.TITLE}
          </a>
        );
      }
      return(
        <a
          href={`#${obj.KEY}`}
          data-key={obj.KEY}
          key={obj.KEY}
          onClick={this.clickMenu}
        >
          {obj.TITLE}
        </a>
      );

    });

    return(
      this.state.width > 849
      ?
      (
        <div className={`${styles.header} ${this.props.className}`}>
          {menu}
        </div>
      )
      :
      (
        <div className={`${styles.menubar} ${this.state.isOpen ? styles.open : null}`}>
          <div className={styles.sidebar}>
            {menu}
          </div>
          <div
            className={`${styles.burger} ${this.props.className}`}
            onClick={this.toggleBurgerMenu}
          >
            <span/>
            <span/>
            <span/>
          </div>
          <div className={styles.background} onClick={this.toggleBurgerMenu}/>
        </div>
      )
    );
  }
}

export default withRouter(Header);
