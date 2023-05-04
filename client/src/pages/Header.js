import React from 'react';
import '../scss/Header.scss';
// import Particles from './common/Particle';
import { connect } from 'react-redux';
import { buttonValues, logo, tags, socialMedia, navigate, informations } from '../utils/utils.functions';
import Icons from '../components/Icons';
import Animate from '../components/Animate';
import HeaderMobile from './sub/HeaderMobile';

const Header = ({ details, ...props }) => {
    const location = details.details;
    const renderButtons = () => {
        return Object.values(buttonValues).map((e, i) => {
            const buttonDisplay = (
                <li onClick={() => props.handlePageChange(e.to)} className="nav-menu-items" key={i}>
                    <span className="nav-menu-left-width"></span>
                    <span className="color-brackets">{e.openingTag}</span>
                    <span className="color-name">{e.name}</span>
                    <span className="color-brackets">{e.closingTag}</span>
                    <span className="nav-menu-left-right"></span>
                </li>
            );
            return (
                <>
                    {location
                        ? location.location === e.name
                            ? renderActiveButton(e.openingTag, e.name, e.closingTag)
                            : buttonDisplay
                        : buttonDisplay}
                </>
            );
        });
    };

    const renderActiveButton = (opening, name, closing) => {
        return (
            <>
                <li className="nav-menu-items" key={name}>
                    <span className="color-brackets color-selected">{opening}</span>
                    <span className="color-name color-selected">{name}</span>
                    <span className="color-brackets color-selected">{closing}</span>
                </li>
            </>
        );
    };

    const renderName = () => {
        return (
            <div className="nav-menu-myname">
                <span className="nav-menu-tags">{tags.closingTagName}</span>
                {informations.name}
            </div>
        );
    };

    const renderSocialMedia = () => {
        return Object.values(socialMedia).map((e, i) => {
            return (
                <li key={i}>
                    <a href={e.src} target="_blank" rel="noreferrer">
                        <Icons className="fixed-image-sizing" icon={e.img} sizes={30} />
                    </a>
                </li>
            );
        });
    };

    const displayDot = () => {
        return navigate.map((e, i) => {
            return (
                <li key={i} onClick={() => props.handlePageChange(e.to)}>
                    <span className={`dot ${changeDotColor(e.loc)}`}></span>
                </li>
            );
        });
    };

    const changeDotColor = loc => {
        if (location) {
            if (loc === location.location) {
                return 'light-up-dot';
            }
        }
        return null;
    };

    return (
        <>
            {/* <Particles /> */}
            <Animate anim={'Opacity'}>
                <div className="mobile-header">
                    <HeaderMobile handlePageChange={props.handlePageChange} />
                </div>
                <div className="background-nav-bar-color"></div>
                <div className="fixed-nav-bar">
                    <div className="nav-bar">
                        <div className="nav-menu-logo">
                            <img className="logo" src={logo} alt="logo" onClick={() => props.handlePageChange(0)} />
                        </div>
                        {renderName()}
                        <ul className="nav-menu-buttons">{renderButtons()}</ul>
                    </div>
                </div>
                <div className="left-right-fixed">
                    <ul className="left-right-social-media" style={{ color: 'white' }}>
                        {renderSocialMedia()}
                    </ul>
                </div>
                <div className="right-fixed-navigation">
                    <ul className="left-right-navigation" style={{ color: 'white' }}>
                        <span className="left-right-navigation-block ">{displayDot()}</span>
                    </ul>
                </div>
            </Animate>
            {props.children}
        </>
    );
};

const mapStateToProps = state => {
    return {
        details: state.details,
    };
};

export default connect(mapStateToProps)(Header);
