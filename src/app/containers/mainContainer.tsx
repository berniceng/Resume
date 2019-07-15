import React from 'react';
import { InitialProps, MainState, MainProps } from '../propType';
import { AppContext } from '../context';
import Header from '../components/header';
import Footer from '../components/footer';
import * as headerStyles from '../scss/header.scss';
import * as styles from '../scss/mainContainer.scss';
import { withRouter } from 'react-router-dom';

class MainContainer extends React.Component<InitialProps & MainProps, MainState>{
  state = {
    currentPage: 'aboutme',
    headerClass: 'false',
  };

  componentDidMount() {
    document.addEventListener('scroll', this.showStickyHeader, false);
    this.props.history.push(`/main/${this.state.currentPage}`);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.showStickyHeader, false);
  }

  showStickyHeader = () => {
    const className = window.pageYOffset === 0 ? false : headerStyles.sticky_header;
    this.setState({ headerClass: `${className}` });
  }

  render() {
    return(
      <div className={styles.container}>
        <Header currentPage={this.state.currentPage} className={this.state.headerClass}/>
        <div className={styles.main_content}>
          {this.props.children}
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
