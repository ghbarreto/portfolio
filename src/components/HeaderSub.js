import React from 'react';
import './scss/HeaderSub.scss';

const HeaderSub = ({ title, name, sub }) => {
  return (
    <>
      <div className="center-text">
        <div className="center-text-title">{title}</div>
        <div className="center-text-name">{name}</div>
      </div>
      <div className="center-text-sub">{sub}</div>
    </>
  );
};

export default HeaderSub;
