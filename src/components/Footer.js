import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="two-col">
          <div className="two-col__one">
            <h3>Copyright</h3>
            <p>&copy; www.gabrieltomsic.com 2022</p>
            <p>&copy; Developed By: Gabriel Tomsic 2022</p>
          </div>
          <div className="two-col__two">
            <h3>Powered By</h3>
            <p>
              <i className="fa-brands fa-js-square"></i>Javascript
            </p>
            <p>
              <i className="fa-brands fa-react"></i>ReactJS
            </p>
            <p>
              <i className="fa-brands fa-node"></i>NodeJS
            </p>
            <p>
              <i className="fa-brands fa-sass"></i>SASS
            </p>
            <p>
              <i className="fa-brands fa-html5"></i>HTML5
            </p>
            <p>
              <i className="fa-brands fa-css3"></i>CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
