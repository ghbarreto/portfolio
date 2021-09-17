import { projectTitle, projects, tags } from './utils/utils.functions';
import _ from 'lodash';
import './scss/WorkSub.scss';

const WorkSub = () => {
  const displayProjects = () => {
    return _.map(projects, e => console.log(e));
  };

  const displayProjectTitle = () => {
    return (
      <div>
        <span className="closing-opening-tags">{tags.closingOpening}</span>{' '}
        {projectTitle[0]}
      </div>
    );
  };
  return (
    <div className="projects-title-main">
      <span className="projects-title">{displayProjectTitle()}</span>
      {displayProjects()}
    </div>
  );
};

export default WorkSub;
