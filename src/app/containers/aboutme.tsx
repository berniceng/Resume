import React from 'react';
import * as styles from '../scss/aboutme.scss';

const email = require('../../assets/img/email-icon.png');
const hp = require('../../assets/img/phone-icon.png');
const linkedin = require('../../assets/img/linkedin-icon.png');
const profile = require('../../assets/img/profile-pic.png');

const openInNewTab = () => {
  window.open('https://www.linkedin.com/in/bernice-ng-kai-ling', '_blank');
}

const Aboutme = () => {
  return(
    <div className={styles.aboutme_container}>
      <div className={styles.content}>
        <div className={styles.contact}>
          <div className={styles.left}>
            <div>Hello, I am</div>
            <div>Ng Kai Ling Bernice</div>
            <div>Developer</div>
            <div>
              <div>
                <img src={email}/>
                <div>bernice-ng@hotmail.com</div>
              </div>
              <div>
                <img src={hp}/>
                <div>+65 91195763</div>
              </div>
              <div>
                <img src={linkedin}/>
                <a onClick={openInNewTab}>www.linkedin.com/in/bernice-ng-kai-ling</a>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <img src={profile}/>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Aboutme;
