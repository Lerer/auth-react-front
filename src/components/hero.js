import React from 'react';

const logo = 'images/Pizza-logo-tiny.png';
//"https://cdn.auth0.com/blog/auth0-react-sample/assets/logo.png";

const Hero = () => (
  <div className="text-center hero">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="256" />
    <h1 className="mb-4">Pizza42</h1>
    <p className="lead">Pizza Store Example</p>
  </div>
);

export default Hero;
