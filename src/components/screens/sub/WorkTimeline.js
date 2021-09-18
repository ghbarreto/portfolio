import React from 'react';
import '../../scss/WorkTimeline.scss';
import _ from 'lodash';
import {
  timelineHorizontal,
  projectTitle,
  tags,
  kyteLogo,
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
    return _.map(timelineHorizontal, (e, count) => {
      let c = count + 1;
      const arrows = c % 2 ? 'down' : 'up';
      console.log(c);
      return (
        <div className={`horizontal-container-${c}`}>
          <div className="background-border"></div>
          <div className="container-items">
            <img className="container-items-image" src={e.image} alt="logo" />
            <div className="container-items-title format-titles">
              {e.title}{' '}
              <span className="back-slashes">
                {tags.slash}
                {tags.slash}
              </span>{' '}
              {e.date}
            </div>
            <div className="container-items-description description-format">
              {e.description}
            </div>
          </div>
          <div className="border"></div>
          <div className={`arrow ${arrows}`}></div>
          <div className="fill-arrow"></div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="projects-title-main">
        <span className="projects-title">{displayProjectTitle()}</span>
      </div>
      <div className="horizontal-project-list">
        <div className="horizontal-line">{displayHorizontalProjects()}</div>
      </div>
    </>
  );
};

export default WorkTimeline;
