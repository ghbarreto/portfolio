import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselContainer = props => {
  const itemClassProps = props.itemClass || null;
  const responsive = {
    mobile: {
      breakpoint: { max: 4500, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      dynamicHeight={props.dynamicHeight || false}
      infinite={props.infinite || false}
      keyBoardControl={props.keyBoardControl || false}
      responsive={responsive}
      centerMode={props.centerMode || false}
      itemClass={`image-item ${itemClassProps}`}
      autoPlay={props.autoPlay || false}
      swipeable={props.swipeable || false}
      partialVisible={props.partialVisible || false}
      autoPlaySpeed={props.autoPlaySpeed ? props.autoPlaySpeed : 3000}
      showDots={props.showDots || false}
      customTransition={props.customTransition || 'transform 300ms ease-in-out'}
      transitionDuration={props.transitionDuration || false}
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
