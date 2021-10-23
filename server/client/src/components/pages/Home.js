import React, { useRef } from 'react';
import useOnScreen from '../utils/useOnScreen';
import { CheckNavigation } from './common/CheckNavigation';

const Home = props => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const returnVisibleContent = () => {
    if (isVisible) {
      return <CheckNavigation location="Home" />;
    }
  };

  return (
    <>
      <div ref={ref} style={{ color: 'white' }}>
        {returnVisibleContent()}
      </div>
      {props.children}
    </>
  );
};

export default Home;
