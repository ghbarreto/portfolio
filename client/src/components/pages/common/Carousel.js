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
      dynamicHeight={props.dynamicHeight}
      infinite={props.infinite}
      keyBoardControl={props.keyBoardControl}
      responsive={responsive}
      centerMode={props.centerMode}
      itemClass={`image-item ${itemClassProps}`}
      autoPlay={props.autoPlay}
      swipeable={props.swipeable}
      partialVisible={props.partialVisible}
      autoPlaySpeed={props.autoPlaySpeed ? props.autoPlaySpeed : 3000}
      showDots={props.showDots}
      customTransition={props.customTransition || 'transform 300ms ease-in-out'}
      transitionDuration={props.transitionDuration}
      responsive={responsive}
      onClick={props.onClick}
      beforeChange={props.beforeChange}
      afterChange={props.afterChange}
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
