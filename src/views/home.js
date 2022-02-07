import React, { Fragment } from 'react';

import { Hero, HomeContent } from '../components';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <hr />
      <HomeContent />
    </Fragment>
  );
};

export default Home;
