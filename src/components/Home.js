// components/Home.js
import React from 'react';
import '../css/global.css';

import user from '../json/Home.json';

const Home = () => {
  return (
    <div className="col-twelve intro-content">
      <h5>Hello, World.</h5>
      <h1>I'm {user.name}.</h1>
      <p className="intro-position">
        <span>{user.title}</span>
      </p>
    </div>
  );
};

export default Home;
