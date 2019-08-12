import React, { Component } from 'react';
import { SliderState, SliderProps, RecommendationType } from '../propType';
import * as styles from '../scss/slider.scss';
import ArrowLeft from './arrow/arrowLeft';
import ArrowRight from './arrow/arrowRight';

class Slider extends Component<SliderProps, SliderState>{
  state = {
    index: 0,
  };

  render() {
    const { data } = this.props;
    const { index } = this.state;

    return(
      <div className={styles.container}>
        <div className={styles.slider}>
          <div className={styles.content}>
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
            <div>
              {
                ArrowLeft('#6e6e70', '32px', '32px')
              }
            </div>
            <div>
              {
                `${index + 1} / ${data.length}`
              }
            </div>
            <div>
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
