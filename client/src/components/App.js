import React from 'react';
import './scss/index.scss';

import Header from './screens/Header';
import HeaderSub from './screens/sub/HeaderSub';
import Home from './screens/Home';
import About from './screens/About';
import AboutSub from './screens/sub/AboutSub';
import Work from './screens/Work';
import Reach from './screens/Reach';
import WorkTimeline from './screens/sub/WorkTimeline';
import DisplayArrow from './utils/DisplayArrow';

const App = () => {
  return (
    <>
      <Header />
      <div className="landing-page">
        <DisplayArrow />
        <HeaderSub
          title={'Hello!'}
          name={"I'm Gabriel"}
          sub={'Web Developer'}
          header={"I'm"}
          name2={'Gabriel'}
        />
        <Home />
      </div>
      <div className="landing-page landing-page-section">
        <About />
      </div>
      <div className="landing-page landing-page-section-sub">
        <AboutSub />
      </div>

      <div className="landing-page landing-page-section">
        <Work />
      </div>
      <div className="landing-page landing-page-section-sub">
        <WorkTimeline />
      </div>

      <div className="landing-page landing-page-section">
        <Reach />
      </div>
    </>
  );
};

export default App;
