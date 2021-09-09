import React from 'react';
import { tags } from './utils/utils.functions';
import './scss/HeaderSub.scss';

const HeaderSub = ({ title, name, sub, job_title }) => {
  return (
    <>
      <div className="center-component">
        <div className="center-text">
          <div className="center-text-title">{title}</div>
          <div className="center-text-container">
            <div className="center-text-tag">{tags.h1}</div>
            <div className="center-text-name">{name}</div>
            <div className="center-text-tag-job">{job_title}</div>
          </div>
          <div className="center-text-sub">{sub}</div>
          <div className="center-text-tag-end">{tags.closingH1}</div>
        </div>
      </div>
    </>
  );
};

export default HeaderSub;
