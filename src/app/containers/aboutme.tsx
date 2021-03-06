import React from 'react';
import * as styles from '../scss/aboutMe.scss';
import { TileProps } from '../propType';
import Tile from '../components/tile';
import { MENU } from '../data/constants';
''
const email = require('../../assets/img/email-icon.png');
const hp = require('../../assets/img/phone-icon.png');
const linkedin = require('../../assets/img/linkedin-icon.png');
const profile = require('../../assets/img/profile-pic.png');
const badminton = require('../../assets/img/badminton.png');
const dance = require('../../assets/img/dance.png');
const code = require('../../assets/img/code.jpg');

const openInNewTab = () => {
  window.open('https://www.linkedin.com/in/bernice-ng-kai-ling', '_blank');
};

const AboutMe = () => {
  const data = [
    {
      title: 'Badminton',
      image: badminton,
      desc: 'Playing badminton is something that I like to do \
      during free time or even as an activity when meeting up \
      with friends. I started playing badminton in Secondary School \
      where my friends and I would play after school for hours \
      continuously.',
    },
    {
      title: 'Dance',
      image: dance,
      desc: 'Dancing is another thing that I like to do. \
      I am involved in the dance ministry in church and sometimes involved \
      in dance performance in the church events.',
    },
    {
      title: 'Code',
      image: code,
      desc: 'Back then when I started the semester in polytechnic, \
      I was worried that I might not be able to do well. I didn\'t \
      know how to type. I didn\'t started off as a fan of coding \
      but when I was exposed to it, my interest grew. It became \
      something that i would want as a job now and that something \
      that I would want to learn more and more.',
    },
  ];

  return(
    <div id={MENU.ABOUTME.KEY} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contact}>
          <div className={styles.top}>
            <div className={styles.left}>
              <img src={profile}/>
            </div>
            <div className={styles.right}>
              <div>Hello, I am</div>
              <div>Ng Kai Ling Bernice</div>
              <div>Developer</div>
              <div className={styles.bottom}>
                <div>
                  <div>
                    <img src={email}/>
                    <div>bernice-ng@hotmail.com</div>
                  </div>
                  <div>
                    <img src={linkedin}/>
                    <a onClick={openInNewTab}>Visit my Linkedin</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              {
                data.map((obj: TileProps, i: number) => {
                  return(
                    <Tile key={i} {...obj}/>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
