import React from 'react';
import * as styles from '../scss/skills.scss';
import { BookmarkProps } from '../propType';

const data = {
  skills: [
    'Git',
    'Cypress',
    'Jest',
    'ReactJs',
    'Javascript',
    'SASS',
    'LESS CSS',
    'CSS',
    'HTML',
    'PHP',
    'Java',
    'MySQL',
    'Oracle Database',
    'Design Thinking',
  ],
  tools: [
    'NotePad++',
    'Eclipse',
    'Visual Studio Code',
    'Jira',
    'FileZilla',
  ],
};

const Skills = (props: BookmarkProps) => {
  const { bookmarkId } = props;

  return(
    <div id={bookmarkId} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.skills}>
          <div className={styles.title}>
            Abilities
          </div>
          <div className={styles.summary}>
            <div className={styles.skills}>
              <div className={styles.subtitle}>
                Skills
              </div>
              <ul>
                {
                  data.skills.map((skill: string, i: number) => {
                    return(
                        <li className={styles.item} key={i}>{skill}</li>
                    );
                  })
                }
              </ul>
            </div>
            <div className={styles.tools}>
              <div className={styles.subtitle}>
                Tools
              </div>
              <ul>
                {
                  data.tools.map((skill: string, i: number) => {
                    return(
                        <li className={styles.item} key={i}>{skill}</li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
