import { InputProps } from '../../propType';
import React from 'react';

export default class Input extends React.Component<InputProps, {}>{
  constructor(props: InputProps) {
    super(props);
  }

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
