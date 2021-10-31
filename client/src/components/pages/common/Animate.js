import { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { animated, useSpring } from 'react-spring';

import { animations } from '../../utils/animations';

const Animation = ({ className, anim, key, animTimer, ...props }) => {
  const [animate, setAnimate] = useState(false);
  const animateDelay = animTimer ? animTimer : 500;

  const leftToRightAnimation = useSpring(
    animate && animations(animateDelay).leftToRight
  );
  const rightToLeftAnimation = useSpring(
    animate && animations(animateDelay).rightToLeft
  );
  const topToBottomAnimation = useSpring(
    animate && animations(animateDelay).topToBottom
  );
  const opacityAnimation = useSpring(
    animate && animations(animateDelay).opacity
  );
  const bottomToTopAnimation = useSpring(
    animate && animations(animateDelay).bottomToTop
  );

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
        <animated.div className={className} style={animationValue()} key={key}>
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
