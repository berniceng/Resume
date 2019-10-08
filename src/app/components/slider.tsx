import React, { Component } from 'react';
import { SliderState, SliderProps, RecommendationType } from '../propType';
import * as styles from '../scss/slider.scss';
import ArrowLeft from './arrow/arrowLeft';
import ArrowRight from './arrow/arrowRight';

class Slider extends Component<SliderProps, SliderState>{
  state = {
    index: 0,
  };

  slide = (direction: string) => (e: any) => {
    const { index } = this.state;
    const { data } = this.props;

    let newIndex;
    const slider = document.getElementById('slider-recommendation');
    const sliderList = slider ? slider.children : null;
    const currElem = sliderList ? sliderList[index] as HTMLElement : null;

    if (direction === 'left' && sliderList && currElem) {
      newIndex = index === 0 ? data.length - 1 : index - 1;
      const prevElem = sliderList[newIndex] as HTMLElement;
      currElem.style.display = 'none';
      prevElem.style.display = 'block';
    } else if (direction === 'right' && sliderList && currElem) {
      newIndex = index === data.length - 1 ? 0 : index + 1;
      const nextElem = sliderList[newIndex] as HTMLElement;
      currElem.style.display = 'none';
      nextElem.style.display = 'block';
    }

    this.setState({
      index: newIndex,
    });
  }

  render() {
    const { data } = this.props;
    const { index } = this.state;

    return(
      <div className={styles.container}>
        <div className={styles.slider}>
          <div id="slider-recommendation" className={styles.content}>
            {
              data.map((recommendation: RecommendationType, i: number) => {
                return (
                  <div className={`${styles.item} ${i === index ? styles.visible : null}`} key={i}>
                    <div className={styles.header}>
                      <div className={styles.name}>
                        {recommendation.name}
                      </div>
                      <div className={styles.title}>
                        {`${recommendation.title}, ${recommendation.department}`}
                      </div>
                      <div className={styles.company}>
                        {recommendation.company}
                      </div>
                    </div>
                    <div className={styles.body}>
                      {
                        recommendation.desc.map((desc, i: number) => {
                          return (
                            <div className={styles.paragraph} key={i}>
                              {desc}
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                );
              })
            }
          </div>
          <div className={styles.buttons}>
            <div onClick={this.slide('left')}>
              {
                ArrowLeft('#6e6e70', '32px', '32px')
              }
            </div>
            <div>
              {
                `${index + 1} / ${data.length}`
              }
            </div>
            <div onClick={this.slide('right')}>
              {
                ArrowRight('#6e6e70', '32px', '32px')
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
