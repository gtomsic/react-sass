import React from 'react';
import securityImage from '../assets/images/secure.jpg';
import cloudImage from '../assets/images/cloud-1.jpg';
import serverImage from '../assets/images/cloud-2.jpg';
import securityTwo from '../assets/images/secure-1.jpg';
import mainImage from '../assets/images/main.jpg';

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="two-col">
        <div className="two-col__one">
          <img
            src={securityImage}
            alt="Priorities for security, functionality and scalability"
          />
        </div>
        <div className="two-col__two">
          <h1>Designed for the best security...</h1>
        </div>
      </div>
      <div className="three-col">
        <div className="three-col__one">
          <img
            src={cloudImage}
            alt="WE DESIGN API BASE ON RELATIONAL DATABASE, NOSQL DATABASE"
          />
          <p>Api designed with relational database and nosql databased</p>
        </div>
        <div className="three-col__two">
          <img
            src={serverImage}
            alt="MAKE SURE A RELIABLE CONNECTION TO A SERVER"
          />
          <p>Ensures a reliable connection to servers</p>
        </div>
        <div className="three-col__three">
          <img
            src={securityTwo}
            alt="IT IS DESIGN FOR GOOD SECURITY AND COMPATIBILITY"
          />
          <p>Designed for solid security and compatibility</p>
        </div>
      </div>
      <div className="two-col two-col__reverse">
        <div className="two-col__one">
          <h1>
            Using modern frameworks such as ReactJS, JavaScript, HTML5, API base
            database design, NodeJS, Express, and more..
          </h1>
        </div>
        <div className="two-col__one">
          <img src={mainImage} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
