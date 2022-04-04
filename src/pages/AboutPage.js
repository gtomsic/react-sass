import React from 'react';
import profileImage from '../assets/profile.png';
import apiImage from '../assets/images/api.jpg';
import scalableImage from '../assets/images/scalable.jpg';
import experienceImage from '../assets/images/experience.jpg';

const AboutPage = () => {
  return (
    <div className="container about">
      <section className="about-two__side">
        <div className="about-two__side-left">
          <img src={profileImage} alt="Gabriel Tomsic" />
          <h3>Gabriel Tomsic</h3>
          <div>Software Engineer</div>
          <div>Fullstack Developer</div>
          <div>Email: gabriel@gabrieltomsic.com</div>
        </div>
        <div className="about-two__side-right">
          <h3>About Me</h3>
          <p>
            Two (2) years plus of self experience using cutting edge frameworks
            ReactJS, HTML/CSS, SASS, NodeJS, Javascript, Github and more...Tech
            is constantly evolving due to technological advances and the
            strategic development of new softwares and languages from various
            organizations. As a software engineer, I thrive in this fast-paced
            environment.
          </p>
          <br />
          <p>
            I create, maintain, audit and improve system to meet the particular
            needs of system analysts and architechs, testing both hard and
            sofware system to diagnose and resolve system faults.
          </p>
          <div className="about-2-col">
            <div className="about-2-col-of-1">
              <img src={apiImage} alt="About API" />
            </div>
            <div className="about-2-col-of-2">
              <h3>Master in API application where security is my priority</h3>
            </div>
          </div>
          <div className="about-2-col about-2-col-reverse">
            <div className="about-2-col-of-1">
              <h3>
                Optimizes layouts for responsiveness before publishing the
                website or application.
              </h3>
            </div>
            <div className="about-2-col-of-2">
              <img src={scalableImage} alt="Scalable" />
            </div>
          </div>
          <h3>My Experiences</h3>
          <div className="about-experiences">
            <img src={experienceImage} alt="Experience" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
