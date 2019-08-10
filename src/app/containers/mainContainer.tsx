import React, { Component } from 'react';
import { InitialProps, MainState } from '../propType';
import { AppContext } from '../context';
import Header from '../components/header';
import Footer from '../components/footer';
import * as headerStyles from '../scss/header.scss';
import * as styles from '../scss/mainContainer.scss';
import { withRouter } from 'react-router-dom';
import AboutMe from './aboutme';
import Education from './education';
import Experience from './experience';

const bookmarkId = [
  'bookmark_aboutme',
  'bookmark_education',
  'bookmark_experience',
];

class MainContainer extends Component<InitialProps, MainState>{
  state = {
    headerClass: 'false',
  };

  componentDidMount() {
    document.addEventListener('scroll', this.showStickyHeader, false);

    const { history } = this.props;
    const { pathname } = history.location;

    const currentPage = this.getCurrentPage();

    const main = currentPage ? currentPage : 'aboutme';
    const elem = document.getElementById(`bookmark_${main}`);

    this.scrollIntoView(elem);
    this.navigate(main);
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

    let page = 'aboutme';

    if (match && match.params.page) {
      page = match.params.page;
    }

    return page;
  }

  scrollIntoView = (elem: any) => {
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  onClickMenu = (e: any) => {
    const dataKey = e.target.getAttribute('data-key');
    const elem = document.getElementById(`bookmark_${dataKey}`);

    this.scrollIntoView(elem);
    this.navigate(dataKey);
  }

  navigate = (dataKey: string) => {
    const { history } = this.props;

    history.push(`/${dataKey}`);
  }

  render() {
    return(
      <div className={styles.container}>
        <Header 
          currentPage={this.getCurrentPage()} 
          className={this.state.headerClass} 
          onClick={this.onClickMenu}
        />
        <div className={styles.main_content}>
          <AboutMe bookmarkId={bookmarkId[0]}/>
          <Education bookmarkId={bookmarkId[1]}/>
          <Experience bookmarkId={bookmarkId[2]}/>
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
