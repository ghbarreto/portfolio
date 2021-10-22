import React from 'react';
import './scss/index.scss';

import Header from './pages/Header';
import HeaderSub from './pages/sub/HeaderSub';
import Home from './pages/Home';
import About from './pages/About';
import AboutSub from './pages/sub/AboutSub';
import Work from './pages/Work';
import Reach from './pages/Reach';
import WorkTimeline from './pages/sub/WorkTimeline';
import DisplayArrow from './pages/common/DisplayArrow';

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
