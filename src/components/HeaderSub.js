import React from 'react';
import { tags } from './utils/utils.functions';
import './scss/HeaderSub.scss';

const HeaderSub = ({ title, name, sub, job_title }) => {
  const openingTag = `${tags.openingTag} h1 ${tags.closingOpening}`;
  const closingTag = `${tags.closingTagName} h1 ${tags.closingOpening}`;
  const colorName = () => {
    return Object.values(name).map(e =>
      e === 'G' ? (
        <div className="center-text-name color-change">{e}</div>
      ) : (
        <div className="center-text-name">{e}</div>
      )
    );
  };

  colorName();
  return (
    <div className="center">
      <div className="center-text">
        <div className="center-text-title">{title}</div>
        <div className="center-text-container">
          <div className="center-text-tag">{openingTag}</div>
          <div className="center-text-name">{colorName()}</div>
          <div className="center-text-tag-job">{job_title}</div>
        </div>
        <div className="center-text-tag-end">{closingTag}</div>
        <div className="center-text-sub">{sub}</div>
      </div>
    </div>
  );
};

export default HeaderSub;
