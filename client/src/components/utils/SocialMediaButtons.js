import React from 'react';
import { socialMedia } from './utils.functions';
import _ from 'lodash';
import '../scss/SocialMediaButtons.scss'

const SocialMediaButtons = () => {
  const returnButtons = () => {
    return Object.values(socialMedia).map((e, v) => {
      return (
        <li>
          <a href={e.src}>
            <img
              className="social-media-img"
              src={e.img}
              alt={`${e.name} icon`}
            />
          </a>
        </li>
      );
    });
  };

  return <ul>{returnButtons()}</ul>;
};

export default SocialMediaButtons;
