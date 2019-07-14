import React from 'react';
import { HeaderProps } from '../propType';
import * as styles from '../scss/header.scss';

const Header = (props: HeaderProps) => {
  return(
    <div className={`${styles.header} ${props.className}`}>
      <div>
        About Me
      </div>
      <div>
        Skills
      </div>
      <div>
        Education
      </div>
      <div>
        Experiences
      </div>
      <div>
        Recommendation
      </div>
      <div>
        Logout
      </div>
    </div>
  );
};

export default Header;
