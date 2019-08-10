import React from 'react';
import * as styles from '../scss/experiences.scss';
import { CardProps, BookmarkProp } from '../propType';
import Card from '../components/card';

const smu = require('../../assets/img/smu.png');
const nyp = require('../../assets/img/nyp.png');
const data = [
  {
    range: 'August 2016 - May 2020',
    logo: smu,
    title: 'Singapore Management University (SMU)',
    subtitle: 'Bachelors of Science (Information Systems)',
    collapsible: false,
  },
  {
    range: 'May 2011 - April 2014',
    logo: nyp,
    title: 'Nanyang Polytechnic (NYP)',
    subtitle: 'Diploma in Business Enterprise IT',
    collapsible: false,
    activity: [
      {
        title: 'Participated in SAP Dashboard Competition',
      },
      {
        title: 'Involved in Silver InfoComm',
      },
    ],
  },
];

const Experience = (props: BookmarkProp) => {
  const { bookmarkId } = props;

  return(
    <div id={bookmarkId} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.experiences}>
          <div className={styles.title}>
            Experiences
          </div>
          <div className={styles.journey}>
            {
              data.map((obj: CardProps, i: number) => {
                return(
                  <Card key={i} {...obj} />
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
