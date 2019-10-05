import React, { Component } from 'react';
import { MainState } from '../propType';
// import { AppContext } from '../context';
import Header from '../components/header';
import Footer from '../components/footer';
import * as headerStyles from '../scss/header.scss';
import * as styles from '../scss/mainContainer.scss';
import { withRouter } from 'react-router-dom';
import AboutMe from './aboutMe';
import Education from './education';
import Skills from './skills';
import Experiences from './experiences';
import Recommendation from './recommendation';
import { MENU } from '../data/constants';

class MainContainer extends Component<any, MainState>{
  state = {
    headerClass: 'false',
  };

  test = (e: any) => {
    const urlArr = window.location.href.split('/');
    const key = urlArr[urlArr.length - 1];
    const elem = document.getElementById(key);

    this.scrollIntoView(elem);
  }

  componentDidMount() {
    window.addEventListener('popstate', this.test, false);

    document.addEventListener('scroll', this.showStickyHeader, false);

    const currentPage = this.getCurrentPage();

    const main = currentPage ? currentPage : MENU.ABOUTME.KEY;
    const elem = document.getElementById(main);

    this.scrollIntoView(elem);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.showStickyHeader, false);
  }

  showStickyHeader = () => {
    const className = window.pageYOffset === 0 ? false : headerStyles.sticky_header;
    this.setState({ headerClass: `${className}` });
  }

  getCurrentPage = () => {
    const { match } = this.props;

    let page = MENU.ABOUTME.KEY;

    if (match && match.params.page) {
      page = match.params.page;
    }

    return page;
  }

  scrollIntoView = (elem: any) => {
    if (elem) {
      scrollTo({
        behavior: 'smooth',
        top: elem.offsetTop - 34,
      });
    }
  }

  render() {
    return(
      <div className={styles.container}>
        <Header
          currentPage={this.getCurrentPage()}
          className={this.state.headerClass}
        />
        <div className={styles.main_content}>
          <AboutMe/>
          <Education/>
          <Experiences/>
          <Skills/>
          <Recommendation/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(MainContainer);

// function MainContainer(props: any) {
//     const [test, setTest] = React.useState(1)
//     React.useEffect(() => {
//         props.setToken('123')
//     }, [])
//     return (
//         <div>
//             <div>{test}</div>
//             <div>{props.token}</div>
//         </div>
//     )
// }
