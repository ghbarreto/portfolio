import React from 'react';
import '../scss/Button.scss';

const Button = ({ href, value }) => {
  return (
    <div className="button-centeralize">
    <button className="button-style">
      <a href={href}>{value}</a>
      </button>
      </div>
  );
};

export default Button;
