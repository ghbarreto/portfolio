import React, { useState, useRef } from 'react';

import { logo, tags, informations, buttonValuesMobile } from '../../utils/utils.functions';
import { useOnClickOutside } from '../../utils/useOnClickOutside';
import '../../scss/HeaderMobile.scss';
import SocialMediaButtons from '../../components/SocialMediaButtons';
import Icons from '../../components/Icons';

const HeaderMobile = props => {
    const [triggerNav, setTriggerNav] = useState(false);
    const ref = useRef();

    const appearAnimation = triggerNav ? 'side-menu-appear' : 'side-menu-disappear';

    useOnClickOutside(ref, () => {
        setTriggerNav(false);
    });

    const handleModal = () => {
        setTriggerNav(!triggerNav);
    };

    const displaySideMenuLinks = () => {
        return Object.values(buttonValuesMobile).map((e, i) => {
            return (
                <li
                    onClick={() => {
                        props.handlePageChange(e.to);
                        setTriggerNav(false);
                    }}
                    className="side-menu-items"
                    key={i}
                >
                    <div className="side-menu-margins">
                        <span className="side-menu-left-width"></span>
                        <span className="color-brackets">{e.openingTag}</span>
                        <span className="color-name">{e.name}</span>
                        <span className="color-brackets">{e.closingTag}</span>
                        <span className="side-menu-left-right"></span>
                    </div>
                </li>
            );
        });
    };

    return (
        <>
            <div className="mobile-header-full" ref={ref}>
                <div className="mobile-header-fixed">
                    <div className="navigation">
                        <div>
                            <img src={logo} alt="logo" onClick={() => props.handlePageChange(0)} />
                        </div>

                        <div className="navigation-mobile-name">
                            <span className="mobile-tag-color">{tags.closingTagName}</span>
                            {informations.name}
                        </div>
                        <nav>
                            <ul className="burger-nav" onClick={() => handleModal()}>
                                <li className="hamburger-nav nav1"></li>
                                <li className="hamburger-nav nav2"></li>
                                <li className="hamburger-nav nav3"></li>
                            </ul>
                        </nav>
                    </div>

                    {triggerNav && (
                        <nav
                            className={`side-menu ${appearAnimation}`}
                            style={{ display: triggerNav ? 'block' : 'none' }}
                        >
                            <div className="side-menu-header">
                                <div className="x-icon" onClick={() => setTriggerNav(false)}>
                                    <Icons icon="close" sizes={35} />
                                </div>
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="side-menu-links">
                                <ul>{displaySideMenuLinks()}</ul>
                            </div>

                            <span className="social-media-links">
                                <div className="side-menu-mobile-name">
                                    <span className="side-menu-tag-color">{tags.closingTagName}</span>
                                    {informations.name}
                                </div>
                                <SocialMediaButtons className="social-media-links" style={styles} />
                            </span>
                        </nav>
                    )}
                </div>
            </div>
        </>
    );
};

const styles = {
    color: 'red',
};

export default HeaderMobile;
