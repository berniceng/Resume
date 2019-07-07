import { InputState, InputProps } from '../../propType';
import * as React from 'react';

export default class Input extends React.Component<InputProps, InputState>{
  state = {
    input: '',
  };

  render() {
    const { label, type, inputRef } = this.props;
    return(
      <div>
        <div>
          {label}
        </div>
        <input type={type} ref={inputRef}/>
      </div>
    );
  }
}
