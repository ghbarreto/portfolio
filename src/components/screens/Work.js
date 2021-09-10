import React, { useRef } from 'react';
import { connect } from 'react-redux';
import useOnScreen from '../utils/useOnScreen';
import { CheckNavigation } from '../utils/CheckNavigation';

const Work = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const returnVisibleContent = () => {
    if (isVisible) {
      return <CheckNavigation location="Works" />;
    }
  };

  return (
    <div ref={ref} style={{ color: 'white' }}>
      {returnVisibleContent()}
      WORK
    </div>
  );
};

const mapStateToProps = state => {
  return {
    details_: state.details,
  };
};

export default connect(mapStateToProps)(Work);
