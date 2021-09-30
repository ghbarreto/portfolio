import React from 'react';
import { socialMedia } from './utils.functions';
import _ from 'lodash';

const SocialMediaButtons = ({ styles }) => {

  const returnButtons = () => {
    return Object.values(socialMedia).map((e, v) => {
      return (
        <li>
          <a href={e.src}>
            <img
              style={styles}
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
