import React, { useRef } from 'react';

import Animate from '../common/Animate';
import '../../scss/AboutSub.scss';
import useOnScreen from '../../utils/useOnScreen';
import { CheckNavigation } from '../common/CheckNavigation';
import { knowledgeField, tags, skills } from '../../utils/utils.functions';

const AboutSub = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const NAVIGATE = <CheckNavigation location="About" />;

  const displayKnowledgeSection = () => {
    return Object.values(knowledgeField).map((e, i) => {
      const odd = i % 2 === 0 ? 'LeftToRight' : 'RightToLeft';
      const animationTimer = Number(500 * (i + 1));
      return (
        <React.Fragment key={i}>
          <Animate anim={odd} animTimer={animationTimer}>
            <div className="knowledge-section-fields">
              <span className="about-tags">{tags.closingOpening}</span>
              <span className="main-jobtitle-date cellphone-font-size">
                {e.title}
              </span>
              <span className="about-tags">
                {tags.slash}
                {tags.slash}
              </span>
              <div className="experience-job cellphone-font-size">
                {e.qualifications}
              </div>
            </div>
          </Animate>
        </React.Fragment>
      );
    });
  };

  const displaySkillsSection = () => {
    return skills.map((e, i) => {
      return (
        <div key={i} className="list-of-skills cellphone-font-size">
          <span>{e}</span>
        </div>
      );
    });
  };

  return (
    <div className="about-sub-flex">
      <div className="knowledge-section">
        <Animate anim={'LeftToRight'} animTimer={1000}>
          <div className="section-tags section-tags-mobile">KNOWLEDGE</div>
        </Animate>
        {displayKnowledgeSection()}
      </div>
      <div ref={ref}>{isVisible && NAVIGATE}</div>
      <div className="skills-section">
        <Animate anim={'TopToBottom'} animTimer={1000}>
          <div className="section-tags section-tags-mobile">SKILLS</div>
        </Animate>
        <div className="parent-skills">
          <Animate anim={'Opacity'} animTimer={2500}>
            <div className="parent-skills-flex">{displaySkillsSection()}</div>
          </Animate>
        </div>
      </div>
    </div>
  );
};
export default AboutSub;
