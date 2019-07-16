import React from 'react';
import { InitialProps, MainState, MainProps } from '../propType';
import { AppContext } from '../context';
import Header from '../components/header';
import Footer from '../components/footer';
import * as headerStyles from '../scss/header.scss';
import * as styles from '../scss/mainContainer.scss';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class MainContainer extends React.Component<MainProps & InitialProps, MainState>{
  state = {
    headerClass: 'false',
  };

  componentDidMount() {
    document.addEventListener('scroll', this.showStickyHeader, false);

    const token = localStorage.getItem('resume-token');
    this.props.setToken(token == null ? '' : token);

    axios.post('http://localhost:3000/api/users/verifyToken', {
      token,
    }).then((res: any) => {
      if (res.data.valid) {
        this.props.history.push(`/main/${this.props.children.page}`);
      } else {
        localStorage.removeItem('resume-token');
        this.props.history.push('/login');
      }
    });
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
        <Header currentPage={this.props.children.page} className={this.state.headerClass}/>
        <div className={styles.main_content}>
          {this.props.children.component}
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
