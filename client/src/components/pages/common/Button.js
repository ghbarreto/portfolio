import React from 'react';
import '../../scss/Button.scss';

const Button = ({ href, value, styles, className, buttonStyles, ...props }) => {
  return (
    <div onClick={props.onClick} className={`button-centeralize ${className}`}>
      <a
        target={`${props.target}`}
        style={styles}
        className={`button-style ${buttonStyles}`}
        href={href}
      >
        {props.icon} {props.children || value}
      </a>
    </div>
  );
};

export default Button;
