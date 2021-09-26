import React, { useState } from 'react';
import {
  logo,
  tags,
  informations,
  buttonValuesMobile,
} from '../../utils/utils.functions';
import '../../scss/HeaderMobile.scss';

const HeaderMobile = () => {
  const [triggerNav, setTriggerNav] = useState(false);

  const handleModal = bool => {
    return setTriggerNav(bool);
  };

  const displaySideMenuLinks = () => {
    return Object.values(buttonValuesMobile).map(e => {
      return (
        <li className="side-menu-items">
          <div className="side-menu-margins">
            <span className="side-menu-left-width"></span>
            <span className="color-brackets">{e.openingTag}</span>
            <span className="color-name">{e.name}</span>
            <span className="color-brackets">{e.closingTag}</span>
            <span className="side-menu-left-right"></span>
          </div>
        </li>
      );
    });
  };
  return (
    <>
      <div className="navigation">
        <div>
          <img src={logo} alt="logo" />
          <div className="navigation-mobile-name">
            <span className="mobile-tag-color">{tags.closingTagName}</span>
            {informations.name}
          </div>
        </div>
        <nav>
          <ul className="burger-nav" onClick={() => handleModal(true)}>
            <li className="hamburger-nav nav1"></li>
            <li className="hamburger-nav nav2"></li>
            <li className="hamburger-nav nav3"></li>
          </ul>
        </nav>
      </div>

      <nav
        className="side-menu"
        style={{ display: triggerNav ? 'block' : 'none' }}
      >
        <div className="side-menu-header">
          <div className="x-icon">
            <i className="fas fa-times" onClick={() => handleModal()}></i>
          </div>
          <img src={logo} alt="logo" />
          <ul className="burger-nav" onClick={() => handleModal()}>
            <li className="hamburger-nav nav1"></li>
            <li className="hamburger-nav nav2"></li>
            <li className="hamburger-nav nav3"></li>
          </ul>
        </div>

        <div className="side-menu-links">
          <ul>{displaySideMenuLinks()}</ul>
        </div>
      </nav>
    </>
  );
};

export default HeaderMobile;
