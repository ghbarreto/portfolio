import React from 'react';
import './scss/index.scss';

import Header from './Header';
import HeaderSub from './HeaderSub';
import Home from './screens/Home';
import About from './screens/About';
import Work from './screens/Work';

const App = () => {
  return (
    <>
      <div className="landing-page">
        <Header />
        <HeaderSub
          title={'Hello!'}
          name={"I'm Gabriel"}
          sub={'Web Developer'}
        />
        <Home />
      </div>
      <div className="landing-page">
        <About />
      </div>

      <div className="landing-page">
        <Work />
      </div>
    </>
  );
};

export default App;
