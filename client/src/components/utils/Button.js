import React from 'react';
import '../scss/Button.scss';

const Button = ({ href, value }) => {
  return (
    <button className="buttonStyle">
      <a href={href}>{value}</a>
    </button>
  );
};

export default Button;
