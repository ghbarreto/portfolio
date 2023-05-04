import React from 'react';

import Icons from '../../components/Icons';
import '../../scss/WorkTimeline.scss';
import '../../scss/ReachSub.scss';
import { tags, projectTitle, reachMeInfo, reachMeInfoContact } from '../../utils/utils.functions';
import FormContainer from '../../components/FormContainer';

const displayProjectTitle = () => {
    return (
        <div>
            <span className="closing-opening-tags">{tags.closingOpening}</span> {projectTitle[2]}
        </div>
    );
};

const displayReachInfo = () => {
    return reachMeInfoContact.map((e, i) => {
        return (
            <div key={i} className="reach-sub-info">
                <Icons icon={e.icon} sizes={30} styles={{ marginTop: '3px', color: colours(i) }} />
                {e.val === 'henriqve.dev@gmail.com' ? (
                    <div
                        onClick={e => {
                            window.location.href = `mailto:henriqve.dev@gmail.com`;
                            e.preventDefault();
                        }}
                    >
                        {e.val}
                    </div>
                ) : (
                    <div>{e.val}</div>
                )}
            </div>
        );
    });
};

const colours = val => {
    switch (val) {
        case 0:
            return '#00c2cb';
        case 1:
            return '#fd3a8c';
        case 2:
            return '#ffe881';
        default:
            return 'white';
    }
};

const ReachSub = () => {
    return (
        <>
            <div className="projects-title-main reach-sub">
                <span className="projects-title">{displayProjectTitle()}</span>
            </div>
            <div className="form-container-sub">
                <div className="reach-sub-contact">
                    <div className="react-sub-paragraph">{reachMeInfo}</div>
                    {displayReachInfo()}
                </div>
                <div>
                    <FormContainer name="Name" email="E-mail" message="Message" button="Send" />
                </div>
            </div>
        </>
    );
};

export default ReachSub;
