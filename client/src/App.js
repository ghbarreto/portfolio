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
import DisplayArrow from './components/DisplayArrow';

const App = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [stopPageScroller, setStopPageScroller] = useState(false);

    const handlePageChange = number => {
        setCurrentPage(number);
    };

    const handlePageScroller = bool => {
        setStopPageScroller(bool);
    };

    return (
        <>
            <Header handlePageChange={handlePageChange} />
            <DisplayArrow handlePageChange={handlePageChange} currentPage={currentPage} />
            {/* <ReactPageScroller
                pageOnChange={handlePageChange}
                customPageNumber={currentPage}
                containerHeight={'100vh'}
                blockScrollUp={stopPageScroller}
                blockScrollDown={stopPageScroller}
                renderAllPagesOnFirstRender={false}
                animationTimer={800}
            > */}
            <HeaderSub
                title={'Hello!'}
                name={"I'm Gabriel"}
                sub={['Web Developer', 'Full-stack Dev', 'App Developer']}
                header={"I'm"}
                name2={'Gabriel'}
                handlePageChange={handlePageChange}
            >
                <Home />
            </HeaderSub>

            <About />
            <AboutSub />

            <WorkSub stopPageScroller={stopPageScroller} handlePageScroller={handlePageScroller}>
                <Work />
            </WorkSub>

            <WorkTimeline />

            <Reach />
            {/* </ReactPageScroller> */}
        </>
    );
};

export default App;
