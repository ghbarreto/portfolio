import React, { useRef } from 'react';
import { connect } from 'react-redux';
import useOnScreen from '../utils/useOnScreen';
import { CheckNavigation } from '../utils/CheckNavigation';

import WorkSub from '../screens/sub/WorkSub';

const Work = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const returnVisibleContent = () => {
    if (isVisible) {
      return <CheckNavigation location="Works" />;
    }
  };

  return (
    <>
      <div ref={ref} style={{ color: 'white' }}>
        {returnVisibleContent()}
      </div>
      <WorkSub />
    </>
  );
};

const mapStateToProps = state => {
  return {
    details_: state.details,
  };
};

export default connect(mapStateToProps)(Work);
