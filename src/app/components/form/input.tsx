import { InputProps } from '../../propType';
import React from 'react';

import * as styles from '../../scss/login.scss';

export default class Input extends React.Component<InputProps, {}>{
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    const { label, type, inputRef, placeholder } = this.props;
    return(
      <div>
        <div>
          {label}
        </div>
        <input type={type} ref={inputRef} placeholder={placeholder}/>
      </div>
    );
  }
}
