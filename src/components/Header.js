import React from 'react';
import './scss/Header.scss';
import Particles from './utils/Particle';
import { buttonValues, logo, tags } from './utils/utils.functions';

import HeaderSub from './HeaderSub';
const Header = () => {
  const renderButtons = () => {
    return Object.values(buttonValues).map(e => {
      return (
        <li className="nav-menu-items">
          <span className="color-brackets">{e.openingTag}</span>
          <span className="nav-menu-name">{e.name}</span>
          <span className="color-brackets">{e.closingTag}</span>
        </li>
      );
    });
  };

  return (
    <>
      <Particles />
      <div className="nav">
        <div className="nav-bar">
          <div className="nav-menu-logo">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="nav-menu-myname">
            <span className="nav-menu-tags">{tags.openingTag}</span> Gabriel
            Barrett <span className="nav-menu-tags">{tags.closingTag}</span>
          </div>
          <div className="nav-menu-buttons">
            <ul>{renderButtons()}</ul>
          </div>
        </div>
      </div>

      <div>
        <HeaderSub
          title={'Hello!'}
          name={"I'm Gabriel"}
          sub={'Web Developer'}
        />
      </div>
    </>
  );
};

export default Header;
