import React from 'react';
import Typewriter from 'typewriter-effect';

import { tags } from '../../utils/utils.functions';
import SocialMediaButtons from '../../components/SocialMediaButtons';
import Button from '../../components/Button';
import '../../scss/HeaderSub.scss';
import Animate from '../../components/Animate';
import Icons from '../../components/Icons';

const HeaderSub = ({ title, name, sub, job_title, header, name2, ...props }) => {
    const openingTag = `${tags.openingTag} h1 ${tags.closingOpening}`;
    const closingTag = `${tags.closingTagName} h1 ${tags.closingOpening}`;

    const colorName = (val, val2) => {
        return Object.values(val).map((e, i) => (
            <div key={i} className={`center-text-${val2}`}>
                {e}
            </div>
        ));
    };

    return (
        <div style={{ height: '100vh' }}>
            <div className="center">
                <div className="center-text">
                    <Animate anim={'TopToBottom'} animTimer={1000}>
                        <div className="center-text-title">{title}</div>
                    </Animate>
                    <div className="center-text-container">
                        <Animate anim={'LeftToRight'}>
                            <div className="center-text-tag">{openingTag}</div>
                        </Animate>
                        <Animate anim={'Opacity'}>
                            <div className="center-text-name">{colorName(name, 'name')}</div>
                        </Animate>
                        <Animate anim={'Opacity'}>
                            <div className="center-text-full-mobile-header">
                                <div className="center-text-mobile-header">{header}</div>
                                <div className="center-text-mobile-name">{colorName(name2, 'mobile')}</div>
                            </div>
                        </Animate>
                        <div className="center-text-tag-job">{job_title}</div>
                        <Animate anim={'RightToLeft'}>
                            <div className="center-text-tag-end">{closingTag}</div>
                        </Animate>
                    </div>

                    <Animate anim={'Opacity'}>
                        <div className="center-text-sub">
                            <Typewriter
                                options={{
                                    strings: sub,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </Animate>

                    <Animate anim={'Opacity'}>
                        <div className="center-text-button margin-top-mobile">
                            <Button
                                value={'Hire Me'}
                                styles={{
                                    backgroundColor: '#00c2cb',
                                    color: 'white',
                                }}
                                onClick={() => props.handlePageChange(5)}
                                src={'TODO'}
                                icon={<Icons icon={'hire-me'} size={25} />}
                            />
                        </div>
                    </Animate>
                    <Animate anim={'Opacity'}>
                        <div className="center-text-social-media">{SocialMediaButtons()}</div>
                    </Animate>
                </div>
            </div>
        </div>
    );
};

export default HeaderSub;
