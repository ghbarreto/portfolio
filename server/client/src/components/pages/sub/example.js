import { InView } from 'react-intersection-observer';
import { animated, useSpring } from 'react-spring';

import { animations } from '../../utils/animations';

const [animate, setAnimate] = useState(false);

const setAnimation = view => {
  if (!animate && view) {
    setAnimate(true);
  }
  return;
};

const leftToRightAnimation = useSpring(animate && animations.leftToRight);
const rightToLeftAnimation = useSpring(animate && animations.rightToLeft);
const topToBottomAnimation = useSpring(animate && animations.topToBottom);
const opacityAnimation = useSpring(animate && animations.opacity);


<animated.h1 style={topToBottomAnimation}></animated.h1>

return <InView tag="div" onChange={setAnimation} />;
