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
import { AppContext } from '../context';

class MainContainer extends Component<any, MainState>{
  state = {
    headerClass: 'false',
  };

  componentDidMount() {
    // window.addEventListener('popstate', this.test, false);
    document.addEventListener('scroll', this.showStickyHeader, false);
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

export default withRouter(AppContext(MainContainer));

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
