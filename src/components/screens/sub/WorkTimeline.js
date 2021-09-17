import React from 'react';
import '../../scss/WorkTimeline.scss';
import _ from 'lodash';
import {
  timelineHorizontal,
  projectTitle,
  tags,
} from '../../utils/utils.functions';

const WorkTimeline = () => {
  const displayProjectTitle = () => {
    return (
      <div>
        <span className="closing-opening-tags">{tags.closingOpening}</span>{' '}
        {projectTitle[1]}
      </div>
    );
  };
  const displayHorizontalProjects = () => {
    return _.map(timelineHorizontal, e => {
      const header = `${e.title} ${e.company} ${e.date}`;
      return (
        <>
          <div className="horizontal-dot"></div>
          <div className="horizontal-border"></div>
          <div className="float-horizontals">
            <div className="container-horizontal">
              <div className="horizontal-project-list-container-image">
                <img
                  className="horizontal-project-list-image"
                  src={e.image}
                  alt="logo"
                />
              </div>
              <ul className="horizontal-project-list-items">
                <li className="horizontal-project-list-title">{header}</li>
                <li className="horizontal-project-list-description">
                  {e.description}
                </li>
              </ul>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div className="projects-title-main">
        <span className="projects-title">{displayProjectTitle()}</span>
      </div>
      <div className="horizontal-project-list">
        <div className="horizontal-line"></div>
        {displayHorizontalProjects()}
      </div>
    </>
  );
};

export default WorkTimeline;
