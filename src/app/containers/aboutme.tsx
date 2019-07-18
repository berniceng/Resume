import React from 'react';
import * as styles from '../scss/aboutme.scss';
import { withRouter } from 'react-router-dom';

const email = require('../../assets/img/email-icon.png');
const hp = require('../../assets/img/phone-icon.png');
const linkedin = require('../../assets/img/linkedin-icon.png');
const profile = require('../../assets/img/profile-pic.png');
const badminton = require('../../assets/img/badminton.png');
const dance = require('../../assets/img/dance.png');

const openInNewTab = () => {
  window.open('https://www.linkedin.com/in/bernice-ng-kai-ling', '_blank');
};

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
                <a onClick={openInNewTab}>Visit my Linkedin</a>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <img src={profile}/>
          </div>
        </div>
        <div/>
        <div className={styles.summary}>
          <div className={styles.title}>
            A little more about me...
          </div>
          <div className={styles.text}>
            A fourth year Information Systems undergraduate in
            Singapore Management University (SMU) with strong
            interest in full stack development.
            Being a conscientious worker and quick learner
            who is flexible as well as a team player.
            Experienced working with ReactJS mainly and was
            exposed to several other languages like Java and PHP.
          </div>
        </div>
        <div className={styles.interest}>
          <div className={styles.title}>
            Interests
          </div>
          <div className={styles.container}>
            <div>
              <div className={styles.card}>
                <div>
                  <img src={badminton}/>
                </div>
                <div>
                  <div>
                    Badminton
                  </div>
                  <div>
                    Playing badminton is something that I like to do during free time 
                    or even as an activity when meeting up with friends. I started 
                    playing badminton in Secondary School (NOTE: I am not a professional 
                    badminton player) where my friends and I would play after school 
                    for hours continuously. The reason I like badminton is that it is fun 
                    and you can play with anyone unlike soccer which female have less preference 
                    for in general.
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div>
                  <img src={dance}/>
                </div>
                <div>
                  <div>
                    Dance
                  </div>
                  <div>
                    Playing badminton is something that I like to do during free time 
                    or even as an activity when meeting up with friends. I started 
                    playing badminton in Secondary School (NOTE: I am not a professional 
                    badminton player) where my friends and I would play after school 
                    for hours continuously. The reason I like badminton is that it is fun 
                    and you can play with anyone unlike soccer which female have less preference 
                    for in general.
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div>
                  <img src={dance}/>
                </div>
                <div>
                  <div>
                    Dance
                  </div>
                  <div>
                    Playing badminton is something that I like to do during free time 
                    or even as an activity when meeting up with friends. I started 
                    playing badminton in Secondary School (NOTE: I am not a professional 
                    badminton player) where my friends and I would play after school 
                    for hours continuously. The reason I like badminton is that it is fun 
                    and you can play with anyone unlike soccer which female have less preference 
                    for in general.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
