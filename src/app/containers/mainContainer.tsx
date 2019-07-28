import React, { Component } from 'react';
import { InitialProps, MainState } from '../propType';
import { AppContext } from '../context';
import Header from '../components/header';
import Footer from '../components/footer';
import * as headerStyles from '../scss/header.scss';
import * as styles from '../scss/mainContainer.scss';
import { withRouter } from 'react-router-dom';
import Aboutme from './aboutMe';
import Education from './education';

class MainContainer extends Component<InitialProps, MainState>{
  state = {
    headerClass: 'false',
  };

  componentDidMount() {
    document.addEventListener('scroll', this.showStickyHeader, false);

    const main = 'aboutme';
    const { history } = this.props;
    const { pathname } = history.location;

    if (pathname.length === 1) {
      history.push(`/main/${main}`);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.showStickyHeader, false);
  }

  showStickyHeader = () => {
    const className = window.pageYOffset === 0 ? false : headerStyles.sticky_header;
    this.setState({ headerClass: `${className}` });
  }

  render() {
    const { match } = this.props;

    let page = 'aboutme';

    if (match) {
      page = match.params.page;
    }

    return(
      <div className={styles.container}>
        <Header currentPage={page} className={this.state.headerClass}/>
        <div className={styles.main_content}>
          <Aboutme/>
          <Education/>
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
