import { projectTitle, projects, tags } from '../../utils/utils.functions';
import _ from 'lodash';
import '../../scss/WorkSub.scss';

const WorkSub = () => {
  const displayProjects = () => {
    return _.map(projects, (e, count) => {
      return (
        <div className={`${decideBackgroundColor(count)} projects-list-item`}>
          <div className="projects-list-item-name">
            <span className="bracket-color bracket-format">
              {tags.closingOpening}
            </span>
            {e.name}
            <div className="projects-list-item-description">
              {e.description}
            </div>
          </div>
          <div className="display-on-hover">
            <a className="button-project" href={e.githubLink}>
              Github
            </a>
            <a className="button-project" href={e.live}>
              Live
            </a>
          </div>
          <div className="projects-list-item-date">{e.date}</div>
          <div className="onHoverDisplay"></div>
        </div>
      );
    });
  };

  const decideBackgroundColor = b => {
    if (b === 0 || b === 4) return 'yellow';
    if (b === 1 || b === 5) return 'blue';
    if (b === 2 || b === 3) return 'pink';
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
    <>
      <div className="projects-title-main">
        <span className="projects-title">{displayProjectTitle()}</span>
      </div>
      <div className="project-list-margins">
        <div className="project-list">{displayProjects()}</div>
      </div>
    </>
  );
};

export default WorkSub;
