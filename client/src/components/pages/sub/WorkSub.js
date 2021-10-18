import { projectTitle, projects, tags } from '../../utils/utils.functions';
import _ from 'lodash';
import { useState } from 'react';
import '../../scss/WorkSub.scss';
import ReactModal from '../common/Modal';

const WorkSub = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [text, setText] = useState('');
  const [buttonLink, setButtonLink] = useState('');
  const [livePreview, setLivePreview] = useState('');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const displayProjects = () => {
    return _.map(projects, (e, count) => {
      return (
        <>
          <div
            className={`${decideBackgroundColor(count)} projects-list-item`}
            onClick={() => {
              setName(e.name);
              setDescription(e.description);
              setImages(e.images);
              setText(e.text);
              setButtonLink(e.githubLink);
              setLivePreview(e.live);
              openModal();
            }}
          >
            <div className="projects-list-item-name">
              <span className="bracket-color bracket-format">
                {tags.closingOpening}
              </span>
              {e.name}
              <div className="projects-list-item-description">
                {e.description}
              </div>
              <div className="projects-list-item-date">{e.date}</div>
            </div>
            <div className="display-on-hover">
              <a className="button-project" href={e.githubLink}>
                Github
              </a>
              <a className="button-project" href={e.live}>
                Live
              </a>
            </div>
            <div className="onHoverDisplay"></div>
          </div>
        </>
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

      <div className="project-list-margins projects-landing-page">
        <div className="project-list">{displayProjects()}</div>
      </div>
      {modalIsOpen ? (
        <ReactModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          description={description}
          name={name}
          images={images}
          text={text}
          github={buttonLink}
          livePreview={livePreview}
        />
      ) : null}
    </>
  );
};

export default WorkSub;
