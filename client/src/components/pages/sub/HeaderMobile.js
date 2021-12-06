import React, { useState, useRef } from 'react';

import {
  logo,
  tags,
  informations,
  buttonValuesMobile,
} from '../../utils/utils.functions';
import { useOnClickOutside } from '../../utils/useOnClickOutside';
import '../../scss/HeaderMobile.scss';
import SocialMediaButtons from '../common/SocialMediaButtons';
import Icons from '../common/Icons';

const HeaderMobile = props => {
  const [triggerNav, setTriggerNav] = useState(false);
  const [modalOpen, setModalOpen] = useState(0);
  const ref = useRef();

  const appearAnimation = triggerNav
    ? 'side-menu-appear'
    : 'side-menu-disappear';
  const handleModal = () => {
    if (triggerNav === false && modalOpen === 1) {
      setModalOpen(0);
      setTriggerNav(false);
    }
    if (triggerNav === false && modalOpen === 0) {
      setModalOpen(1);
      setTriggerNav(true);
    }
    if (modalOpen === 1 && triggerNav === true) {
      setTriggerNav(false);
      setModalOpen(0);
    }
  };

  useOnClickOutside(ref, () =>
    triggerNav === true ? setTriggerNav(false) : null
  );

  const displaySideMenuLinks = () => {
    return Object.values(buttonValuesMobile).map((e, i) => {
      return (
        <li
          onClick={() => {
            props.handlePageChange(e.to);
            setTriggerNav(false);
          }}
          className="side-menu-items"
          key={i}
        >
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
              <img src={logo} alt="logo" onClick={() => props.handlePageChange(0)}/>
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
            ref={ref}
            className={`side-menu ${appearAnimation}`}
            style={{ display: triggerNav ? 'block' : 'none' }}
          >
            <div className="side-menu-header">
              <div className="x-icon" onClick={() => handleModal()}>
                <Icons icon="close" sizes={35} />
              </div>
              <img src={logo} alt="logo" />
            </div>
            <div className="side-menu-links">
              <ul>{displaySideMenuLinks()}</ul>
            </div>

            <span className="social-media-links">
              <div className="side-menu-mobile-name">
                <span className="side-menu-tag-color">
                  {tags.closingTagName}
                </span>
                {informations.name}
              </div>
              <SocialMediaButtons
                className="social-media-links"
                style={styles}
              />
            </span>
          </nav>
        </div>
      </div>
    </>
  );
};

const styles = {
  color: 'red',
};

export default HeaderMobile;
