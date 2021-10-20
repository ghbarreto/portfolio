import { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { animated, useSpring } from 'react-spring';

import { animations } from '../../utils/animations';

const Animation = ({ className, anim, ...props }) => {
  const [animate, setAnimate] = useState(false);
  const leftToRightAnimation = useSpring(animate && animations.leftToRight);
  const rightToLeftAnimation = useSpring(animate && animations.rightToLeft);
  const topToBottomAnimation = useSpring(animate && animations.topToBottom);
  const opacityAnimation = useSpring(animate && animations.opacity);
  const bottomToTopAnimation = useSpring(animate && animations.bottomToTop);

  const animationValue = () => {
    switch (anim) {
      case 'LeftToRight':
        return leftToRightAnimation;
      case 'RightToLeft':
        return rightToLeftAnimation;
      case 'TopToBottom':
        return topToBottomAnimation;
      case 'Opacity':
        return opacityAnimation;
      case 'BottomToTop':
        return bottomToTopAnimation;
      default:
        return;
    }
  };

  const setAnimation = view => {
    if (!animate && view) {
      setAnimate(true);
    }
    return;
  };

  const displayAnimationOnViewPort = () => {
    return (
      animate && (
        <animated.div className={className} style={animationValue()}>
          {props.children}
        </animated.div>
      )
    );
  };

  return (
    <>
      <InView tag="div" onChange={setAnimation} />

      {displayAnimationOnViewPort()}
    </>
  );
};

export default Animation;
