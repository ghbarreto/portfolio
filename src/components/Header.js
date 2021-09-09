import React from 'react';
import './scss/Header.scss';
import Particles from './utils/Particle';
import { buttonValues, logo } from './utils/utils.functions';

import HeaderSub from './HeaderSub';

const Header = () => {
  const renderButtons = () => {
    return Object.values(buttonValues).map(e => {
      return <li className="nav-menu-items">{e.name}</li>;
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
          <div className="nav-menu-buttons">
            <ul>{renderButtons()}</ul>
          </div>
        </div>
      </div>

      <div>
        <HeaderSub
          title={'Hello my name is'}
          name={'Gabriel Barreto'}
          sub={'And I am a Full-Stack Developer'}
        />
      </div>
    </>
  );
};

export default Header;
