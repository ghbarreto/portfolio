import React from 'react';
import './scss/index.scss';

import Header from './screens/Header';
import HeaderSub from './screens/sub/HeaderSub';
import Home from './screens/Home';
import About from './screens/About';
import AboutSub from './screens/sub/AboutSub';
import Work from './screens/Work';
import Reach from './screens/Reach';
import WorkTimeline from './screens/sub/WorkTimeline'

import DisplayArrow from './utils/DisplayArrow'

const App = () => {
  return (
    <>
      <div className="landing-page">
        <Header />
        <DisplayArrow />
        <HeaderSub
          title={'Hello!'}
          name={"I'm Gabriel"}
          sub={'Web Developer'}
        />
        <Home />
      </div>
      <div className="section-pages">
        <About />
      </div>
      <div className="landing-page">
        <AboutSub />
      </div>
      <div className="landing-page">
        <Work />
      </div>
      <div className="landing-page">
        <WorkTimeline />
      </div>
      <div className="landing-page">
        <Reach />
      </div>
    </>
  );
};

export default App;
