import React from 'react';
import '../scss/Button.scss';

const Button = ({ href, value, styles, className, buttonStyles, buttonCenteralize, ...props }) => {
    const buttonCenter = buttonCenteralize ? 'button-centeralize' : null;
    return (
        <React.Fragment>
            <a
                className={`${buttonCenter} ${className}`}
                target={`${props.target}`}
                onClick={props.onClick}
                style={styles}
                className={`button-style ${buttonStyles}`}
                href={href}
            >
                {props.icon} {props.children || value}
            </a>
        </React.Fragment>
    );
};

export default Button;
