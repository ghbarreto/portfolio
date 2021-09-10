import React from 'react';
import './scss/Header.scss';
import Particles from './utils/Particle';
import { connect } from 'react-redux';
import { buttonValues, logo, tags } from './utils/utils.functions';
import Home from './screens/Home';

const Header = ({ details }) => {
  const location = details.details;
  console.log(details.details);
  const renderButtons = () => {
    return Object.values(buttonValues).map(e => {
      const buttonDisplay = (
        <li className="nav-menu-items">
          <span className="color-brackets">{e.openingTag}</span>
          <span className="color-name">{e.name}</span>
          <span className="color-brackets">{e.closingTag}</span>
        </li>
      );
      const obj_values = Object.keys(e.name);
      for (let i in obj_values) {
        if (obj_values[i] > 4) {
          return renderContact(e.openingTag, e.name, e.closingTag);
        }
      }
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

  const renderContact = (opening, name, closing) => {
    return (
      <li className="nav-menu-items">
        <span className="color-brackets color-brackets-6">{opening}</span>
        <span className="color-name-6">{name}</span>
        <span className="color-brackets color-brackets-6">{closing}</span>
      </li>
    );
  };

  const renderName = () => {
    return (
      <div className="nav-menu-myname">
        <span className="nav-menu-tags">{tags.closingTagName}</span>Gabriel
        Barrett
      </div>
    );
  };

  return (
    <div className="fixed-nav-bar">
      <Particles />
      <div className="nav-bar">
        <div className="nav-menu-logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        {renderName()}
        <ul className="nav-menu-buttons">{renderButtons()}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    details: state.details,
  };
};

export default connect(mapStateToProps)(Header);
