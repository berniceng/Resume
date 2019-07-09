import React from 'react';
import { InitialProps, MainState } from '../propType';
import { AppContext } from '../context';

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
class MainContainer extends React.Component<InitialProps, MainState>{
  state = {
    test1: 1,
  };

  render() {
    return(
      <div>
        Test
        <div >{this.state.test1}</div>
        <div>{this.props.token}</div>
      </div>
    );
  }
}

export default AppContext(MainContainer);
