import React, { useRef } from 'react';
import { connect } from 'react-redux';
import {
  informations,
  aboutBanner,
  tags,
  jobExperience,
  viewResume,
} from '../utils/utils.functions';
import useOnScreen from '../utils/useOnScreen';
import Button from '../utils/Button';
import { CheckNavigation } from '../utils/CheckNavigation';
import '../scss/About.scss';

const NAVIGATE = <CheckNavigation location="About" />;

const About = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const displayExperience = () => {
    return Object.values(jobExperience).map(e => {
      return (
        <div className="experience-section">
          <span className="about-tags">{tags.closingOpening}</span>
          <span className="main-jobtitle-date">{e.title}</span>
          <span className="about-tags">
            {tags.slash}
            {tags.slash}
          </span>
          <span className="main-jobtitle-date">{e.date}</span>
          <div className="experience-job">{e.experience}</div>
        </div>
      );
    });
  };

  return (
    <>
      <div ref={ref}>{isVisible && NAVIGATE}</div>
      <div className="about-section-container">
        <div className="about-section-container-text word-color">
          I am a <span className="highlight-blue">{informations.jobTitle}</span>{' '}
          from {informations.nationality} based in
          <span className="highlight-blue"> {informations.basedIn}</span>.
        </div>
        <div className="information-about-section">
          <div className="section-tags">EXPERIENCE</div>
          {displayExperience()}
          <Button href={viewResume.resume} value={viewResume.value} />
        </div>
        <div className="image-about-section">
          <img src={aboutBanner} alt="about-banner" />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    details_: state.details,
  };
};

export default connect(mapStateToProps)(About);
