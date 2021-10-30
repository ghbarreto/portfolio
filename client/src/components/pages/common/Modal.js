import Modal from 'react-modal';
import React, { useEffect } from 'react';
import '../../scss/Modal.scss';
import { useSpring, animated } from 'react-spring';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from '../common/Carousel';
import Button from './Button';
import Icons from '../common/Icons';

const ReactModal = ({
  isOpen,
  closeModal,
  onRequestClose,
  carouselValues,
  ...props
}) => {
  const modalStyle = useSpring({
    from: { marginBottom: 500 },
    to: { marginBottom: 0 },
    delay: 100,
  });

  const stopPageFromScrolling = () => {
    if (props.stopPageScroller === true) return;
    if (props.stopPageScroller === false) return props.handlePageScroller(true);
  };

  useEffect(() => {
    stopPageFromScrolling();
  }, [props.stopPageScroller]);

  const displayHeader = () => {
    const imageRender = carouselValues.images.map(e => (
      <img key={e} src={e} alt={e} />
    ));
    return (
      <div className="modal-header" key={imageRender}>
        <div className="modal-header-carousel">
          <Carousel
            infinite
            keyBoardControl
            itemClass="image-item"
            autoPlay
            swipeable
            autoPlaySpeed={5000}
            showDots
            customTransition="transform 300ms ease-in-out"
            transitionDuration={1500}
            containerClass="carousel-main"
          >
            {imageRender}
          </Carousel>
        </div>
        <h2 className="modal-header-title">
          <span className="bracket-carousel">//</span>
          {carouselValues.name}
        </h2>

        <div className="modal-header-paragraph">{carouselValues.text}</div>

        <div className="modal-header-buttons">
          <Button
            value={carouselValues.githubLink}
            style={{ padding: '10px ' }}
            href={carouselValues.githubLink}
            styles={{
              backgroundColor: '#fd3a8c',
              color: 'black',
              padding: '15px 30px',
            }}
            icon={
              <Icons icon={'github'} sizes={25} styles={{ color: 'black' }} />
            }
          >
            Github
          </Button>
          <Button
            style={{ padding: '10px ' }}
            value={carouselValues.livePreview}
            href={carouselValues.livePreview}
            styles={{
              backgroundColor: '#ffe881',
              color: 'black',
              padding: '15px 30px',
            }}
            icon={
              <Icons
                icon={'live-preview'}
                sizes={25}
                styles={{ color: 'black' }}
              />
            }
          >
            Live
          </Button>
        </div>
      </div>
    );
  };

  return (
    <animated.div style={modalStyle}>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        shouldCloseOnEsc={true}
        ariaHideApp={false}
      >
        <animated.div style={modalStyle}>
          <div className="x-icon" onClick={closeModal}>
            <Icons icon={'close'} sizes={25} />
          </div>
          {carouselValues.description || carouselValues.name
            ? displayHeader()
            : ''}
        </animated.div>
      </Modal>
    </animated.div>
  );
};

const customStyles = {
  content: {
    top: '50%',
    height: '70%',
    width: '70%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    backgroundColor: 'white',
    border: '0',
    transform: 'translate(-50%, -50%)',
    boxShadow: '10px 10px 10px 5px rgba(0, 0, 0, 0.296)',
    borderRadius: '50px',
    overflow: 'auto',
  },
};

export default ReactModal;
