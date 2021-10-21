import React from 'react';
import { logo, timelineHorizontal, tags } from '../../utils/utils.functions';
import _ from 'lodash';
import '../../scss/MobileWorkTimeline.scss';

const MobileWorkTimeline = () => {
  const createWorkTimeline = () => {
    return _.map(timelineHorizontal, (e, index) => {
      index++;
      const arrows = index % 2 === 0 ? 'arrow-left' : 'arrow-right';
      return (
        <div key={index} className="mobile-container">
          <div className={`mobile-dot mobile-dot-${index}`}></div>
          <div
            className={`mobile-border mobile-border-${index} mobile-border-left-${index}`}
          ></div>
          <div
            className={`mobile-arrow mobile-arrow-${index} ${arrows} arrow-left-${index}`}
          ></div>
          <div className={`mobile-image mobile-image-left-${index}`}>
            <div className="mobile-image-pos">
              <img src={e.image} alt="a" />
            </div>
          </div>
          <div className={`mobile-title mobile-title-${index}`}>
            <span className={`color-${index}`}>{e.title} </span>
            <span className="back-slashes">
              {tags.slash}
              {tags.slash}
            </span>{' '}
            <span className={`color-${index}`}>{e.date}</span>
          </div>
          <div className={`mobile-paragraph mobile-paragraph-${index}`}>
            {e.description}
          </div>
        </div>
      );
    });
  };
  return (
    <div className="vertical-project-list">
      <div className="vertical-line">{createWorkTimeline()}</div>
      <div className="vertical-line-arrow"></div>
    </div>
  );
};

export default MobileWorkTimeline;
