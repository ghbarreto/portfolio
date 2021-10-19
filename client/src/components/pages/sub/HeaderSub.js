import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { animated, useSpring } from 'react-spring';
import { Typewriter } from 'react-simple-typewriter';

import { animations } from '../../utils/animations';
import { tags, hireMeButton, typeWriter } from '../../utils/utils.functions';
import SocialMediaButtons from '../common/SocialMediaButtons';
import Button from '../common/Button';
import '../../scss/HeaderSub.scss';

const HeaderSub = ({ title, name, sub, job_title, header, name2 }) => {
  const [animate, setAnimate] = useState(false);
  const openingTag = `${tags.openingTag} h1 ${tags.closingOpening}`;
  const closingTag = `${tags.closingTagName} h1 ${tags.closingOpening}`;
  const colorName = (val, val2) => {
    return Object.values(val).map(e => (
      <div className={`center-text-${val2}`}>{e}</div>
    ));
  };

  const displayHireButton = () => {
    return Object.values(hireMeButton).map(e => {
      return <Button value={e.title} styles={e.styles} src={e.src} />;
    });
  };

  const setAnimation = view => {
    if (!animate && view) {
      setAnimate(true);
    }
    return;
  };

  return (
    <>
      <InView tag="div" onChange={setAnimation}>
        <div className="center">
          <div className="center-text">
            <animated.h1 style={useSpring(animations.topToBottom)}>
              <div className="center-text-title">{title}</div>
            </animated.h1>
            <div className="center-text-container">
              <animated.h1 style={useSpring(animations.leftToRight)}>
                <div className="center-text-tag">{openingTag}</div>
              </animated.h1>
              <animated.h1 style={useSpring(animations.opacity)}>
                <div className="center-text-name">
                  {colorName(name, 'name')}
                </div>
              </animated.h1>
              <div className="center-text-full-mobile-header">
                <div className="center-text-mobile-header">{header}</div>
                <div className="center-text-mobile-name">
                  {colorName(name2, 'mobile')}
                </div>
              </div>
              <div className="center-text-tag-job">{job_title}</div>
              <animated.h1 style={useSpring(animations.rightToLeft)}>
                <div className="center-text-tag-end">{closingTag}</div>
              </animated.h1>
            </div>

            <animated.h1 style={useSpring(animations.bottomToTop)}>
              <div className="center-text-sub">
                <Typewriter
                  words={[sub]}
                  loop={1}
                  cursor
                  cursorStyle={'|'}
                  typeSpeed={70}
                  deleteSpeed={40}
                />
              </div>
            </animated.h1>
            <div className="center-text-button margin-top-mobile">
              {displayHireButton()}
            </div>
            <div className="center-text-social-media">
              {SocialMediaButtons()}
            </div>
          </div>
        </div>
      </InView>
    </>
  );
};

export default HeaderSub;
