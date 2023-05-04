import React, { useRef } from 'react';
import { connect } from 'react-redux';

import { informations, aboutBanner, tags, jobExperience, viewResume } from '../utils/utils.functions';
import Animate from '../components/Animate';
import Icons from '../components/Icons';
import useOnScreen from '../utils/useOnScreen';
import Button from '../components/Button';
import { CheckNavigation } from '../components/CheckNavigation';
import '../scss/About.scss';

const NAVIGATE = <CheckNavigation location="About" />;

const About = props => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    const displayExperience = () => {
        return Object.values(jobExperience).map((e, i) => {
            const odd = i % 2 === 0 ? 'RightToLeft' : 'LeftToRight';
            const count = i + 1;
            const animationTimer = Number(900 * count);
            return (
                <React.Fragment key={i}>
                    <Animate anim={odd} animTimer={animationTimer}>
                        <div className="experience-section">
                            <span className="about-tags cellphone-font-size">{tags.closingOpening}</span>
                            <span className="main-jobtitle-date cellphone-font-size">{e.title}</span>
                            <span className="about-tags cellphone-font-size">
                                {tags.slash}
                                {tags.slash}
                            </span>
                            <span className="main-jobtitle-date cellphone-font-size">{e.date}</span>
                            <div className="experience-job cellphone-font-size">{e.experience}</div>
                        </div>
                    </Animate>
                </React.Fragment>
            );
        });
    };
    const animateComponent = () => {
        return (
            <>
                <div style={{ marginTop: '10%' }} className="about-section-container margin-left-phone">
                    <Animate anim={'LeftToRight'}>
                        <div className="about-section-container-text word-color cellphone-font-size">
                            I am a <span className="highlight-blue">{informations.jobTitle}</span> from{' '}
                            {informations.nationality} based in
                            <span className="highlight-blue"> {informations.basedIn}</span>.
                        </div>
                    </Animate>

                    <div className="information-about-section desktop-view margin-left-phone">
                        <div className="section-tags section-tags-mobile ">
                            <Animate anim={'LeftToRight'} animTimer={1000}>
                                EXPERIENCE
                            </Animate>
                            {displayExperience()}
                            <Animate anim={'Opacity'} animTimer={2500}>
                                <Button
                                    icon={<Icons icon={'resume'} sizes={25} />}
                                    target={'_blank'}
                                    href={viewResume.resume}
                                    value={viewResume.value}
                                    styles={buttonStyle.button}
                                />
                            </Animate>
                        </div>
                    </div>
                    <div className="image-about-section desktop-image">
                        <Animate anim={'Opacity'}>
                            <img src={aboutBanner} alt="about-banner" />
                        </Animate>
                    </div>

                    {/* MOBILE */}
                    <span className="mobile-view margin-left-phone">
                        <div className="information-about-section">
                            <div className="section-tags section-tags-mobile ">
                                <Animate anim={'LeftToRight'}>EXPERIENCE</Animate>
                                {displayExperience()}
                            </div>
                        </div>
                        <Animate anim={'BottomToTop'}>
                            <div className="image-about-section">
                                <img src={aboutBanner} alt="about-banner" />
                            </div>
                        </Animate>
                        <div className="btn-about-sub">
                            <Animate anim={'BottomToTop'}>
                                <Button
                                    styles={buttonStyle.button}
                                    href={viewResume.resume}
                                    value={viewResume.value}
                                    icon={
                                        <Icons
                                            styles={{ margin: '-4px', marginLeft: '5px' }}
                                            icon={'resume'}
                                            sizes={25}
                                        />
                                    }
                                />
                            </Animate>
                        </div>
                    </span>
                </div>
                {props.children}
            </>
        );
    };
    return (
        <>
            <div ref={ref}>{isVisible && NAVIGATE}</div>
            {animateComponent()}
        </>
    );
};

const mapStateToProps = state => {
    return {
        details_: state.details,
    };
};

const buttonStyle = {
    button: {
        padding: '10px 20px',
        backgroundColor: '#00c2cb',
        color: 'white',
    },
};

export default connect(mapStateToProps)(About);
