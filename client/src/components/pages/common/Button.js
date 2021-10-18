import React from 'react';
import '../../scss/Button.scss';

const Button = ({ href, value, ...props }) => {
  return (
    <div className="button-centeralize">
      <a className="button-style" style={props.style} href={href}>
        {props.icon} {props.children || value}
      </a>
    </div>
  );
};

export default Button;
