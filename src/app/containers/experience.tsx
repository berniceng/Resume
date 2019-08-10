import React from 'react';
import * as styles from '../scss/experiences.scss';
import { CardProps, BookmarkProp } from '../propType';
import Card from '../components/card';

const axa = require('../../assets/img/axa.png');
const groupstar = require('../../assets/img/groupstar.jpg');
const ncs = require('../../assets/img/ncs.png');
const sap = require('../../assets/img/sap.png');
const data = [
  {
    range: 'May 2019 - August 2019',
    logo: axa,
    title: 'AXA Insurance Singapore',
    subtitle: 'Full Stack Developer (Internship)',
    collapsible: true,
    desc: [
      'Modified and implemented User Interface using SASS and ReactJS',
      'Write and modified tests to improve coverage using cypress and jest',
    ],
    tools: [
      'SASS',
      'ReactJS',
      'Cypress',
      'Jest',
      'CSS Modules',
    ],
  },
  {
    range: 'May 2018 - August 2018',
    logo: groupstar,
    title: 'GroupStar',
    subtitle: 'Web Developer (Internship)',
    collapsible: true,
    desc: [
      'Implemented new features (e.g. image cropping tool, automatic video stitching tool, access control)',
      'Collaborated with team members on documentation updates',
      'Developed documents for tests',
      'Designed detailed UI wireframes',
      'Communicated information and comments between the team and the developers',
    ],
    tools: [
      'PHP',
      'Javascript',
      'ReactJS',
      'FFMPEG',
    ],
  },
  {
    range: 'March 2018 - August 2015',
    logo: ncs,
    title: 'NCS',
    subtitle: 'Java Developer',
    collapsible: true,
    desc: [
      'Developed triggers for audit trail purposes',
      'Updated the User Manual based on the modified system',
      'Modified functions (e.g. Retrieval and inserting of clob data), developed test specification and testing of those functions',
    ],
    tools: [
      'Java',
      'Oracle Database',
      'Batch Scripts',
    ],
  },
  {
    range: 'April 2013 - October 2013',
    logo: sap,
    title: 'SAP',
    subtitle: 'Developer (Internship)',
    collapsible: true,
    desc: [
      'Made suggestions on analytics to be added',
      'Developed web services (REST API)',
      'Developed User Interfaces based on design using SAPUI5',
      'Conducted market survey to understand citizens’ concerns and preferences and developed personas',
      'Researched on the policies in Singapore for content of the application',
      'Assisted in card sorting session for UI/UX',
      'Participated in Design Thinking Workshop conducted by SAP',
      'Filed a patent together with fellow colleagues titled Virtual Taxi Stand Management System',
    ],
    tools: [
      'Java',
      'Jersey',
      'Postman',
      'SAPUI5',
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
                  <Card key={i} {...obj} type='experiences'/>
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
