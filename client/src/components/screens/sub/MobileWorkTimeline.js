import React from 'react';
import '../../scss/MobileWorkTimeline.scss';

const MobileWorkTimeline = () => {
  const createWorkTimeline = () => {
    return (
      <>
        <div className="mobile-container">
          <div className="mobile-dot"></div>
          <div className="mobile-border"></div>
          <div className="mobile-arrow"></div>
          <div className="mobile-title">TITLE </div>
          <div className="mobile-image">IMAGE </div>
          <div className="mobile-paragraph">PARAGRAPH</div>
        </div>
      </>
    );
  };
  return (
    <div className="vertical-project-list">
      <div className="vertical-line">{createWorkTimeline()}</div>
    </div>
  );
};

export default MobileWorkTimeline;
