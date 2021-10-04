import React from 'react';
import '../../scss/WorkTimeline.scss';
import {
  tags,
  projectTitle,
} from '../../utils/utils.functions';

const displayProjectTitle = () => {
  return (
    <div>
      <span className="closing-opening-tags">{tags.closingOpening}</span>{' '}
      {projectTitle[2]}
    </div>
  );
}

const ReachSub = () => {
  return (
    <div className="projects-title-main">
      <span className="projects-title">{displayProjectTitle()}</span>
    </div>
  );
};

export default ReachSub;
