import React from 'react';
import { tags } from '../../utils/utils.functions';
import HeaderMobile from './HeaderMobile';
import '../../scss/HeaderSub.scss';

const HeaderSub = ({ title, name, sub, job_title, header, name2 }) => {
  const openingTag = `${tags.openingTag} h1 ${tags.closingOpening}`;
  const closingTag = `${tags.closingTagName} h1 ${tags.closingOpening}`;
  const colorName = (val, val2) => {
    return Object.values(val).map(e => (
      <div className={`center-text-${val2}`}>{e}</div>
    ));
  };
  return (
    <>
      <div className="center">
        <div className="center-text">
          <div className="center-text-title">{title}</div>
          <div className="center-text-container">
            <div className="center-text-tag">{openingTag}</div>
            <div className="center-text-name">{colorName(name, 'name')}</div>
            <div className="center-text-mobile-header">{header}</div>
            <div className="center-text-mobile-name">
              {colorName(name2, 'mobile')}
            </div>
            <div className="center-text-tag-job">{job_title}</div>
          </div>
          <div className="center-text-tag-end">{closingTag}</div>
          <div className="center-text-sub">{sub}</div>
        </div>
      </div>
    </>
  );
};

export default HeaderSub;
