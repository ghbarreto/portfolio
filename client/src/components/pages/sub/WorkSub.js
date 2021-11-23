import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import 'react-multi-carousel/lib/styles.css';

import Animate from '../common/Animate';
import { projectTitle, projects, tags } from '../../utils/utils.functions';
import '../../scss/WorkSub.scss';
import Carousel from '../common/Carousel';
import ReactModal from '../common/Modal';
import Button from '../common/Button';
import Icons from '../common/Icons';

const WorkSub = props => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [carouselValues, setCarouselValues] = useState({});

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    props.handlePageScroller(false);
  }

  const displayProjects = () => {
    return _.map(projects, (e, count) => {
      const odd = count % 2 === 0 ? 'TopToBottom' : 'BottomToTop';
      return (
        <React.Fragment key={count}>
          <Animate
            anim={odd}
            className={`${decideBackgroundColor(
              count
            )} projects-list-item project-desktop`}
          >
            <div key={count}>
              <div className="projects-list-item-name">
                <span className="bracket-color bracket-format">
                  {tags.closingOpening}
                </span>
                {e.name}
                <div className="projects-list-item-description">
                  {e.description}
                </div>
                <div className="projects-list-item-date">
                  <div className="project-button-more">
                    <Button
                      styles={{
                        backgroundColor: 'white',
                        color: '#222',
                        padding: '9px ',
                      }}
                      icon={<Icons icon={'AiOutlinePlus'} sizes={18} />}
                      onClick={() => {
                        setCarouselValues({
                          name: e.name,
                          description: e.description,
                          images: e.images,
                          text: e.text,
                          githubLink: e.githubLink,
                          livePreview: e.live,
                        });
                        openModal();
                      }}
                    >
                      more
                    </Button>
                  </div>
                  <div>{e.date}</div>
                </div>
              </div>
            </div>
          </Animate>
          {props.children}
        </React.Fragment>
      );
    });
  };
  const displayProjectsMobile = () => {
    return _.map(projects, (e, count) => {
      const odd = count % 2 === 0 ? 'TopToBottom' : 'BottomToTop';
      return (
        <div key={count} className={`${decideBackgroundColor(count)}`}>
          <div className="projects-list-name-wrapped">
            <span className="bracket-color bracket-format">
              {tags.closingOpening}
            </span>
            {e.name}
          </div>
          <div className="projects-list-item-description">{e.description}</div>
          <div className="projects-list-item-date">
            <div className="project-button-more">
              <Button
                styles={{
                  backgroundColor: 'white',
                  color: '#222',
                  padding: '9px',
                }}
                icon={<Icons icon={'AiOutlinePlus'} sizes={18} />}
                onClick={() => {
                  setCarouselValues({
                    name: e.name,
                    description: e.description,
                    images: e.images,
                    text: e.text,
                    githubLink: e.githubLink,
                    livePreview: e.live,
                  });
                  openModal();
                }}
              >
                more
              </Button>
            </div>
            <div>{e.date}</div>
          </div>
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
      <Animate anim={'Opacity'}>
        <span className="closing-opening-tags">{tags.closingOpening}</span>{' '}
        {projectTitle[0]}
      </Animate>
    );
  };

  return (
    <>
      <div className="projects-title-main">
        <span className="projects-title">{displayProjectTitle()}</span>
      </div>

      <div className="project-list-margins projects-landing-page">
        <div
          // onMouseEnter={() => props.handlePageScroller(true)}
          // onMouseLeave={() => props.handlePageScroller(false)}
          className="project-list"
        >
          {displayProjects()}
          <div
          // onMouseEnter={() => props.handlePageScroller(true)}
          // onMouseLeave={() => props.handlePageScroller(false)}
          >
            <Carousel
              infinite
              keyBoardControl
              itemClass="image-item projects-list-item"
              autoPlay
              swipeable
              autoPlaySpeed={5000}
              showDots
              customTransition="transform 300ms ease-in-out"
              transitionDuration={1500}
              containerClass="carousel-mobile"
            >
              {displayProjectsMobile()}
              {props.children}
            </Carousel>
          </div>
        </div>
      </div>
      {console.log(props)}
      {modalIsOpen ? (
        <ReactModal
          stopPageScroller={props.stopPageScroller}
          handlePageScroller={props.handlePageScroller}
          isOpen={modalIsOpen}
          carouselValues={carouselValues}
          closeModal={closeModal}
        />
      ) : null}
    </>
  );
};

export default WorkSub;
