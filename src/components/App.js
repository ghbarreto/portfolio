import React from 'react';
import './scss/index.scss';

import Header from './Header';
import HeaderSub from './HeaderSub';
import Home from './screens/Home';
import About from './screens/About';
import AboutSub from './AboutSub';
import Work from './screens/Work';
import Reach from './screens/Reach';

import DisplayArrow from './DisplayArrow'

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
        <Reach />
      </div>
    </>
  );
};

export default App;
