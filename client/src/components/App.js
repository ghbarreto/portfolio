import React, { useState } from 'react';
import './scss/index.scss';
import ReactPageScroller from 'react-page-scroller';

import Header from './pages/Header';
import HeaderSub from './pages/sub/HeaderSub';
import Home from './pages/Home';
import About from './pages/About';
import AboutSub from './pages/sub/AboutSub';
import Work from './pages/Work';
import WorkSub from './pages/sub/WorkSub';
import Reach from './pages/Reach';
import WorkTimeline from './pages/sub/WorkTimeline';
import DisplayArrow from './pages/common/DisplayArrow';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = number => {
    setCurrentPage(number);
  };

  const handleBeforePageChange = number => {
    console.log(number);
  };

  return (
    <>
      <Header handlePageChange={handlePageChange} />
      <DisplayArrow
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />

      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
        containerHeight={'100vh'}
        animationTimer={1500}
        renderAllPagesOnFirstRender={false}
      >
        <HeaderSub
          title={'Hello!'}
          name={"I'm Gabriel"}
          sub={'Web Developer'}
          header={"I'm"}
          name2={'Gabriel'}
        >
          <Home />
        </HeaderSub>

        <About />
        <AboutSub />

        <WorkSub>
          <Work />
        </WorkSub>

        <WorkTimeline />

        <Reach />
      </ReactPageScroller>
    </>
  );
};

export default App;
