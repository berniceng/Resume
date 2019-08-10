import React, { Component } from 'react';
import { CardState, CardProps, CardType } from '../propType';
import * as styles from '../scss/card.scss';
import ArrowUp from '../components/arrow/arrowUp';
import ArrowDown from '../components/arrow/arrowDown';

export default class Card extends Component<CardProps & CardType, CardState> {
  state = {
    isOpen: false,
  };

  toggleIsOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { collapsible, logo, range, title, subtitle, type } = this.props;
    const { isOpen } = this.state;
    const arrow = isOpen
      ?
      ArrowUp('#6e6e70', '32px', '32px')
      :
      ArrowDown('#6e6e70', '32px', '32px');
    const showArrow = collapsible ? arrow : null;
    
    let headerStyle = type === 'education' ? styles.period : styles['period-ft'];
    headerStyle = subtitle.indexOf('Internship') > -1 ? styles['period-intern'] : headerStyle;

    return(
      <div className={styles.panel}>
        <div className={headerStyle}>
          {range}
        </div>
        <div className={styles.header}>
          <div className={styles.title}>
            <img src={logo}/>
            <div>
              <div className={styles.school}>
                  {title}
                </div>
              <div className={styles.cert}>
                  {subtitle}
                </div>
            </div>
          </div>
          <div
            className={styles.arrow}
            onClick={this.toggleIsOpen}
          >
            {showArrow}
          </div>
        </div>
      </div>
    );
  }
}
