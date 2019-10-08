import React, { Component } from 'react';
import { AppContext } from '../context';
import { IsOpenType, InitialState, HeaderProps, ResizeWidthType } from '../propType';
import * as styles from '../scss/header.scss';
import { MENU } from '../data/constants';

class Header extends Component<HeaderProps & InitialState & ResizeWidthType, IsOpenType>{
  state = {
    isOpen: false,
  };

  toggleBurgerMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  clickMenu = (e: any) => {
    e.preventDefault();
    const { width } = this.props;
    const key = e.target.href.split('#')[1];
    const anchorTarget = document.getElementById(key);
    const top = width > 849 ? 72 : 0;

    this.addToHistory(key);
    this.scrollIntoView(anchorTarget as HTMLElement, top);
  }

  addToHistory = (dataKey: string) => {
    const { history } = this.props;

    history.push(`/${dataKey}`);
  }

  scrollIntoView = (elem: HTMLElement, minusTop = 38) => {
    if (elem) {
      scrollTo({
        behavior: 'smooth',
        top: elem.offsetTop - minusTop,
      });
    }
  }

  componentDidMount() {
    const { currentPage, width } = this.props;
    const main = currentPage ? currentPage : MENU.ABOUTME.KEY;
    const elem = document.getElementById(main);

    if (width > 849) {
      this.scrollIntoView(elem as HTMLElement);
    }
  }

  render() {
    const { currentPage, width } = this.props;
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
      width > 849
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

export default AppContext(Header);
