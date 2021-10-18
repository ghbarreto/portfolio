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
import Button from '../pages/common/Button';
import { CheckNavigation } from './common/CheckNavigation';
import '../scss/About.scss';

const NAVIGATE = <CheckNavigation location="About" />;

const About = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const displayExperience = () => {
    return Object.values(jobExperience).map(e => {
      return (
        <div className="experience-section">
          <span className="about-tags cellphone-font-size">
            {tags.closingOpening}
          </span>
          <span className="main-jobtitle-date cellphone-font-size">
            {e.title}
          </span>
          <span className="about-tags cellphone-font-size">
            {tags.slash}
            {tags.slash}
          </span>
          <span className="main-jobtitle-date cellphone-font-size">
            {e.date}
          </span>
          <div className="experience-job cellphone-font-size">
            {e.experience}
          </div>
        </div>
      );
    });
  };
  const display = () => {
    return (
      <>
        <div ref={ref}>{isVisible && NAVIGATE}</div>
        <div className="about-section-container">
          <div className="about-section-container-text word-color margin-left-phone">
            I am a{' '}
            <span className="highlight-blue">{informations.jobTitle}</span> from{' '}
            {informations.nationality} based in
            <span className="highlight-blue"> {informations.basedIn}</span>.
          </div>
          <div className="information-about-section" >
            <div className="section-tags margin-left-phone">EXPERIENCE</div>
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

  return (
    <>
      <div ref={ref}>{isVisible && NAVIGATE}</div>
      <div className="about-section-container margin-left-phone">
        <div className="about-section-container-text word-color  cellphone-font-size">
          I am a <span className="highlight-blue">{informations.jobTitle}</span>{' '}
          from {informations.nationality} based in
          <span className="highlight-blue"> {informations.basedIn}</span>.
        </div>

          <div className="information-about-section desktop-view margin-left-phone">
            <div className="section-tags section-tags-mobile ">
              EXPERIENCE
              {displayExperience()}
              <Button href={viewResume.resume} value={viewResume.value} />
            </div>
          </div>
          <div className="image-about-section desktop-image">
            <img src={aboutBanner} alt="about-banner" />
          </div>


        <span className="mobile-view margin-left-phone">
          <div className="information-about-section">
            <div className="section-tags section-tags-mobile ">
              EXPERIENCE
              {displayExperience()}
            </div>
          </div>
          <div className="image-about-section">
            <img src={aboutBanner} alt="about-banner" />
          </div>
            <Button href={viewResume.resume} value={viewResume.value} />
        </span>
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
