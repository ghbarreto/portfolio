import React from 'react';
import './scss/Header.scss';
import Particles from './utils/Particle';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  buttonValues,
  logo,
  tags,
  socialMedia,
  navigate,
  informations,
} from './utils/utils.functions';

const Header = ({ details }) => {
  const location = details.details;
  const renderButtons = () => {
    return Object.values(buttonValues).map(e => {
      const buttonDisplay = (
        <li className="nav-menu-items">
          <span className="color-brackets">{e.openingTag}</span>
          <span className="color-name">{e.name}</span>
          <span className="color-brackets">{e.closingTag}</span>
        </li>
      );
      return (
        <>
          {location
            ? location.location === e.name
              ? renderActiveButton(e.openingTag, e.name, e.closingTag)
              : buttonDisplay
            : buttonDisplay}
        </>
      );
    });
  };

  const renderActiveButton = (opening, name, closing) => {
    return (
      <>
        <li className="nav-menu-items">
          <span className="color-brackets color-selected">{opening}</span>
          <span className="color-name color-selected">{name}</span>
          <span className="color-brackets color-selected">{closing}</span>
        </li>
      </>
    );
  };

  const renderName = () => {
    return (
      <div className="nav-menu-myname">
        <span className="nav-menu-tags">{tags.closingTagName}</span>
        {informations.name}
      </div>
    );
  };

  const redirectOnClick = path => {
    console.log(path);
    return <a href={path}>redirect</a>;
  };

  const renderSocialMedia = () => {
    return Object.values(socialMedia).map(e => {
      console.log(e.img);
      return (
        <li>
          <a href={e.src}>
            <img
              className="fixed-image-sizing"
              src={e.img}
              alt={`${e.name} icon`}
              onClick={() => redirectOnClick(e.src)}
            />
          </a>
        </li>
      );
    });
  };

  const displayDot = () => {
    return navigate.map(e => {
      return (
        <>
          <li>
            <span className={`dot ${changeDotColor(e)}`}></span>
          </li>
        </>
      );
    });
  };

  const changeDotColor = loc => {
    if (location) {
      if (loc === location.location) {
        return 'light-up-dot';
      }
    }
    return null;
  };

  return (
    <>
      <Particles />
      <div className="background-nav-bar-color"></div>
      <div className="fixed-nav-bar">
        <div className="nav-bar">
          <div className="nav-menu-logo">
            <img className="logo" src={logo} alt="logo" />
          </div>
          {renderName()}
          <ul className="nav-menu-buttons">{renderButtons()}</ul>
        </div>
      </div>
      <div className="left-right-fixed">
        <ul className="left-right-social-media" style={{ color: 'white' }}>
          {renderSocialMedia()}
        </ul>
      </div>
      <div className="right-fixed-navigation">
        <ul className="left-right-navigation" style={{ color: 'white' }}>
          <span className="left-right-navigation-block ">{displayDot()}</span>
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    details: state.details,
  };
};

export default connect(mapStateToProps)(Header);
