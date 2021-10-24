import React from 'react';
import { socialMedia } from '../../utils/utils.functions';
import _ from 'lodash';
import Icons from './Icons';
import '../../scss/SocialMediaButtons.scss';

const SocialMediaButtons = () => {
  const returnButtons = () => {
    return Object.values(socialMedia).map((e, i) => {
      return (
        <li key={i}>
          <a href={e.src}>
            <Icons className="social-media-img" icon={e.img} sizes={30} />
          </a>
        </li>
      );
    });
  };

  return <ul>{returnButtons()}</ul>;
};

export default SocialMediaButtons;
