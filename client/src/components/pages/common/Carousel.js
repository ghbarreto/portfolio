import Carousel from 'react-multi-carousel';
import Icons from './Icons';
import Button from './Button';

const CarouselContainer = props => {
  const itemClassProps = props.itemClass && null;
  const responsive = {
    mobile: {
      breakpoint: { max: 850, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      dynamicHeight={props.dynamicHeight || null}
      infinite={props.infinite || null}
      keyBoardControl={props.keyBoardControl || null}
      responsive={responsive}
      itemClass={`image-item ${itemClassProps}`}
      autoPlay={props.autoPlay || null}
      swipeable={props.swipeable || null}
      partialVisible={props.partialVisible || null}
      autoPlaySpeed={props.autoPlaySpeed ? props.autoPlaySpeed : 3000}
      showDots={props.showDots || null}
      customTransition={props.customTransition || 'transform 300ms ease-in-out'}
      transitionDuration={props.transitionDuration || null}
      responsive={responsive}
      containerClass={props.containerClass}
      // customRightArrow={
      //   <Icons
      //     icon={'rightArrow'}
      //     styles={{ position: 'absolute', left: '86%' }}
      //     sizes={40}
      //   />
      // }
      // customLeftArrow={
      //   <Icons
      //     icon={'leftArrow'}
      //     onClick={() => }
      //     styles={{ position: 'absolute', left: '2%' }}
      //     sizes={40}
      //   />
      // }
    >
      {props.children}
    </Carousel>
  );
};

export default CarouselContainer;
