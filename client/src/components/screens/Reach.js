import React, { useRef } from 'react';
import { connect } from 'react-redux';
import useOnScreen from '../utils/useOnScreen';
import { CheckNavigation } from '../utils/CheckNavigation';
import ReachSub from './sub/ReachSub';

const Reach = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const returnVisibleContent = () => {
    if (isVisible) {
      return <CheckNavigation location="Reach" />;
    }
  };

  return (
    <>
      <div ref={ref} style={{ color: 'white' }}>
        {returnVisibleContent()}
      </div>
      <ReachSub />
    </>
  );
};

const mapStateToProps = state => {
  return {
    details_: state.details,
  };
};

export default connect(mapStateToProps)(Reach);
