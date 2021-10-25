import React from 'react';
import '../../scss/Button.scss';

const Button = ({ href, value, style, className, buttonStyles, ...props }) => {
  return (
    <div
      onClick={props.onClick}
      className={`button-centeralize ${className}`}
      styles={style}
    >
      <a className={`button-style ${buttonStyles}`} style={style} href={href}>
        {props.icon} {props.children || value}
      </a>
    </div>
  );
};

export default Button;
