import React from 'react';
import * as styles from '../scss/recommendation.scss';
import Slider from '../components/slider';
import { MENU } from '../data/constants';

const data = [
  {
    name: 'GJOLAJ Mirash',
    title: 'Manager, Tech Lead',
    department: 'Digital Operations',
    company: 'AXA Insurance Pte Ltd',
    desc: [
      'During Bernice\'s internship, she has shown dedication and passion \
      for her job together with professionalism and curiosity.',
      'She was able to quickly learn all the concept she was not familiar \
      with and her curiosity helped her to accomplish the tasks she was working \
      on. As a team player, Bernice worked with two product teams to increase \
      time-to-market, releasing new features immediately Despite time \
      constraints, she was able to deliver on time without compromising the \
      quality of her work and seek help anytime she could not proceed.',
    ],
  },
  {
    name: 'Li Wai-Ting',
    title: 'Manager',
    department: 'Strategic Transformation',
    company: 'AXA Insurance Pte Ltd',
    desc: [
      'As her Scrum Master for the projects that Bernice worked on, I had many \
      opportunities to see her in action and can attest to her dedication, professionalism \
      and hard-working attitude.',
      'She is a quick learner and shows initiative to accomplish tasks with quality. When in \
      doubt, Bernice did not hesitate to ask for help. She is able to work well both as an \
      individual and within a team and shows maturity beyond her age.',
      'Bernice\'s confidence has grown immensely and she has worked hard on imrpoving her \
      technical and communication skills.',
    ],
  },
  {
    name: 'Alan Chang Jia Jie',
    title: 'Specialist',
    department: 'Digital Commerce',
    company: 'AXA Insurance Pte Ltd',
    desc: [
      'During her time at AXA, Bernice handled all tasks assigned to her with a positive \
      can-do attitude, and was able to complete them to the highest standards. Her vast \
      knowledge of coding, impressive work ethics, cheerful personality and humility will \
      make her an invaluable asset to any organisation.',
    ],
  },
];

const Recommendation = () => {
  return(
    <div id={MENU.RECOMMENDATION.KEY} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.recommendation}>
          <div className={styles.title}>
            Recommendations
          </div>
          <Slider data={data}/>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
