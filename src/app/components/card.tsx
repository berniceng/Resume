import React, { Component } from 'react';
import { CardState, CardProps, CardType } from '../propType';
import * as styles from '../scss/card.scss';
import ArrowUp from '../components/arrow/arrowUp';
import ArrowDown from '../components/arrow/arrowDown';

export default class Card extends Component<CardProps & CardType, CardState> {
  state = {
    isOpen: false,
    width: window.innerWidth,
  };

  onResize = () => {
    this.setState({
      width: window.innerWidth,
    });
  }

  toggleIsOpen = (e: any) => {
    const { isOpen, width } = this.state;
    let cardElem: any;
    let elem: any;

    cardElem = e.currentTarget.parentElement.parentElement;
    elem = e.currentTarget.parentElement.nextSibling;

    if (!isOpen && elem) {
      const height = elem.firstChild.scrollHeight;

      elem.style.height = `${height}px`;
      elem.style.paddingBottom = '25px';

      cardElem.addEventListener('transitionend', () => {

        const offsetTop = cardElem.offsetTop;
        const scrollTop = width > 849 ? offsetTop - 90 : offsetTop;

        window.scrollTo({
          top: scrollTop,
          behavior: 'smooth',
        });
      });
    } else {
      elem.style.height = '0';
      elem.style.paddingBottom = '0';
    }

    this.setState({
      isOpen: !isOpen,
    });
  }

  componentWillMount() {
    this.onResize();
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    const { collapsible, logo, range, title, subtitle, desc, tools, type } = this.props;
    const { isOpen } = this.state;
    const arrow = isOpen
      ?
      ArrowUp('#6e6e70', '32px', '32px')
      :
      ArrowDown('#6e6e70', '32px', '32px');
    const showArrow = collapsible ? arrow : null;

    let headerStyle = type === 'education' ? styles.period : styles['period-ft'];
    headerStyle = subtitle.indexOf('Internship') > -1 ? styles['period-intern'] : headerStyle;

    const content = collapsible ?
      (
        <div className={styles.body}>
          <div>
            <div className={styles.desc}>
              <ul>
                {
                  desc.map((descStr: string, i: number) => {
                    return (<li key={`${i}_desc`}>{descStr}</li>);
                  })
                }
              </ul>
            </div>
            <br/>
            <div className={styles.tools}>
              <div className={styles.title}>Tools Used:</div>
              <ul>
                {
                  tools.map((tool: string, i: number) => {
                    return (<li key={`${i}_tool`}>{tool}</li>);
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      )
      : null;

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
        {content}
      </div>
    );
  }
}
