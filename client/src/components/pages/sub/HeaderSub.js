import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import { tags, hireMeButton } from '../../utils/utils.functions';
import SocialMediaButtons from '../common/SocialMediaButtons';
import Button from '../common/Button';
import '../../scss/HeaderSub.scss';
import Animate from '../common/Animate';
import Icons from '../common/Icons';

const HeaderSub = ({
  title,
  name,
  sub,
  job_title,
  header,
  name2,
  ...props
}) => {
  const openingTag = `${tags.openingTag} h1 ${tags.closingOpening}`;
  const closingTag = `${tags.closingTagName} h1 ${tags.closingOpening}`;

  const colorName = (val, val2) => {
    return Object.values(val).map((e, i) => (
      <div key={i} className={`center-text-${val2}`}>
        {e}
      </div>
    ));
  };

  const displayHireButton = () => {
    return Object.values(hireMeButton).map((e, i) => {
      const icon = <Icons icon={'hire-me'} size={25} />;
      return (
        <Button
          key={i}
          value={e.title}
          styles={e.styles}
          src={e.src}
          icon={icon}
        />
      );
    });
  };

  const displayTypeWriter = () => {
    return (
      <Typewriter
        words={[sub]}
        loop={4}
        cursor
        cursorStyle={'|'}
        typeSpeed={350}
        deleteSpeed={80}
      />
    );
  };

  return (
    <>
      <div className="center">
        <div className="center-text">
          <Animate anim={'TopToBottom'}>
            <div className="center-text-title">{title}</div>
          </Animate>
          <div className="center-text-container">
            <Animate anim={'LeftToRight'}>
              <div className="center-text-tag">{openingTag}</div>
            </Animate>
            <Animate anim={'Opacity'}>
              <div className="center-text-name">{colorName(name, 'name')}</div>
            </Animate>
            <Animate anim={'Opacity'}>
              <div className="center-text-full-mobile-header">
                <div className="center-text-mobile-header">{header}</div>
                <div className="center-text-mobile-name">
                  {colorName(name2, 'mobile')}
                </div>
              </div>
            </Animate>
            <div className="center-text-tag-job">{job_title}</div>
            <Animate anim={'RightToLeft'}>
              <div className="center-text-tag-end">{closingTag}</div>
            </Animate>
          </div>

          <Animate anim={'Opacity'}>
            <div className="center-text-sub">{displayTypeWriter()}</div>
          </Animate>

          <Animate anim={'Opacity'}>
            <div className="center-text-button margin-top-mobile">
              {displayHireButton()}
            </div>
          </Animate>
          <Animate anim={'Opacity'}>
            <div className="center-text-social-media">
              {SocialMediaButtons()}
            </div>
          </Animate>
        </div>
      </div>
      {props.children}
    </>
  );
};

export default HeaderSub;
