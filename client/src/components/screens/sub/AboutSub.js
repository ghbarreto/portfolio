import React, { useRef } from 'react';
import '../../scss/AboutSub.scss';
import useOnScreen from '../../utils/useOnScreen';
import { CheckNavigation } from '../../utils/CheckNavigation';
import { knowledgeField, tags, skills } from '../../utils/utils.functions';

const AboutSub = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const NAVIGATE = <CheckNavigation location="About" />;

  const displayKnowledgeSection = () => {
    return Object.values(knowledgeField).map(e => {
      return (
        <div className="knowledge-section-fields">
          <span className="about-tags">{tags.closingOpening}</span>
          <span className="main-jobtitle-date cellphone-font-size">{e.title}</span>
          <span className="about-tags">
            {tags.slash}
            {tags.slash}
          </span>
          <div className="experience-job cellphone-font-size">{e.qualifications}</div>
        </div>
      );
    });
  };

  const displaySkillsSection = () => {
    return skills.map(e => {
      return (
        <div className="list-of-skills cellphone-font-size">
          <span>{e}</span>
        </div>
      );
    });
  };

  return (
    <div className="about-sub-flex">
      <div className="knowledge-section">
        <div className="section-tags section-tags-mobile">KNOWLEDGE</div>
        {displayKnowledgeSection()}
      </div>
      <div className="skills-section">
        <div className="section-tags section-tags-mobile">SKILLS</div>
        <div className="parent-skills">
          <div className="parent-skills-flex">{displaySkillsSection()}</div>
        </div>
        <div ref={ref}>{isVisible && NAVIGATE}</div>
      </div>
    </div>
  );
};
export default AboutSub;