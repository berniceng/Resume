import React, { Component } from 'react';
import { AppContext } from '../context';
import { InitialProps, HeaderProps, HeaderState } from '../propType';
import * as styles from '../scss/header.scss';

class Header extends Component<HeaderProps & InitialProps, HeaderState>{
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

  // navigate = (e: any) => {
  //   const key = e.currentTarget.getAttribute('data-key');
  //   this.props.history.push(`/main/${key}`);
  // }

  render() {
    const { onClick, currentPage } = this.props;

    const menuObj = [
      { key: 'aboutme', title: 'About Me' },
      { key: 'education', title: 'Education' },
      { key: 'experience', title: 'Experiences' },
      { key: 'skill', title: 'Skills' },
      { key: 'recommendation', title: 'Recommendation' },
    ];

    const menu = menuObj.map((obj) => {
      if (currentPage === obj.key) {
        return(
          <div
            className={styles.underline}
            data-key={obj.key}
            key={obj.key}
            onClick={onClick}
          >
            {obj.title}
          </div>
        );
      }
      return(
        <div
          data-key={obj.key}
          key={obj.key}
          onClick={onClick}
        >
          {obj.title}
        </div>
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

export default AppContext(Header);
