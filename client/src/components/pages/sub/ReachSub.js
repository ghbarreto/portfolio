import React from 'react';
import '../../scss/WorkTimeline.scss';
import '../../scss/ReachSub.scss';
import {
  tags,
  projectTitle,
  reachMeInfo,
  reachMeInfoContact,
} from '../../utils/utils.functions';
import FormContainer from '../common/FormContainer';

const displayProjectTitle = () => {
  return (
    <div>
      <span className="closing-opening-tags">{tags.closingOpening}</span>{' '}
      {projectTitle[2]}
    </div>
  );
};

const displayReachInfo = () => {
  return reachMeInfoContact.map(e => {
    const flagEmail = e.val === 'henriqve.dev@gmail.com' ? 'highlight' : '';
    return (
      <div key={e.val} className="reach-sub-info">
        <img src={e.icon} alt={e.icon} />
        <div>{e.val}</div>
      </div>
    );
  });
};

const ReachSub = () => {
  return (
    <>
      <div className="projects-title-main">
        <span className="projects-title">{displayProjectTitle()}</span>
      </div>
      <div className="form-container-sub">
        <div className="reach-sub-contact">
          <div className="react-sub-paragraph">{reachMeInfo}</div>
          {displayReachInfo()}
        </div>
        <div>
          <FormContainer
            name="Name"
            email="E-mail"
            message="Message"
            button={'SEND'}
          />
        </div>
      </div>
    </>
  );
};

export default ReachSub;
