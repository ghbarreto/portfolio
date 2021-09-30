import React, { useState } from 'react';
import {
  logo,
  tags,
  informations,
  buttonValuesMobile,
} from '../../utils/utils.functions';
import '../../scss/HeaderMobile.scss';
import SocialMediaButtons from '../../utils/SocialMediaButtons';

const HeaderMobile = () => {
  const [triggerNav, setTriggerNav] = useState(false);

  const handleModal = () => {
    return triggerNav === true ? setTriggerNav(false) : setTriggerNav(true);
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
      <div className="mobile-header-full">
        <div className="mobile-header-fixed">
          <div className="navigation">
            <div>
              <img src={logo} alt="logo" />
            </div>

            <div className="navigation-mobile-name">
              <span className="mobile-tag-color">{tags.closingTagName}</span>
              {informations.name}
            </div>
            <nav>
              <ul className="burger-nav">
                <div onClick={() => handleModal()}>
                  <li className="hamburger-nav nav1"></li>
                  <li className="hamburger-nav nav2"></li>
                  <li className="hamburger-nav nav3"></li>
                </div>
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
            </div>
            <div className="side-menu-links">
              <ul>{displaySideMenuLinks()}</ul>
            </div>
            <span className="social-media-links">
              <SocialMediaButtons styles={styles.imageSizing} />
            </span>
          </nav>
        </div>
      </div>
    </>
  );
};

const styles = {
  imageSizing: {
    height: '35px',
    width: '35px',
    margin: '35px'
  },
};

export default HeaderMobile;
