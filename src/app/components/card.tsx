import React, { Component } from 'react';
import { CardState, CardProps } from '../propType';
import * as styles from '../scss/card.scss';
import ArrowUp from '../components/arrow/arrowUp';
import ArrowDown from '../components/arrow/arrowDown';

export default class Card extends Component<CardProps, CardState> {
  state = {
    isOpen: false,
  };

  toggleIsOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const data = this.props;
    return(
      <div className={styles.panel}>
        <div className={styles.period}>
          {data.range}
        </div>
        <div className={styles.header}>
          <div className={styles.title}>
            <img src={data.logo}/>
            <div>
              <div className={styles.school}>
                  {data.title}
                </div>
              <div className={styles.cert}>
                  {data.subtitle}
                </div>
            </div>
          </div>
          <div
            className={styles.arrow}
            onClick={this.toggleIsOpen}
          >
            {
              this.state.isOpen
              ?
              ArrowUp('#6e6e70', '32px', '32px')
              :
              ArrowDown('#6e6e70', '32px', '32px')
            }
          </div>
        </div>
      </div>
    );
  }
}
