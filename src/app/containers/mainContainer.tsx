import React from 'react';
import { InitialProps, MainState } from '../propType';
import { AppContext } from '../context';
import Header from '../components/header';
import Footer from '../components/footer';
import * as headerStyles from '../scss/header.scss';
import * as styles from '../scss/mainContainer.scss';

class MainContainer extends React.Component<InitialProps, MainState>{
  state = {
    currentPage: 'aboutme',
    headerClass: 'false',
  };

  componentDidMount() {
    document.addEventListener('scroll', this.showStickyHeader, false);
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
        <div className={styles.main_content}/>
        <Footer />
      </div>
    );
  }
}

export default AppContext(MainContainer);

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
