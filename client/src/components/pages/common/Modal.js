import Modal from 'react-modal';
import React, { useEffect, useState } from 'react';
import '../../scss/Modal.scss';
import { useSpring, animated } from 'react-spring';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from '../common/Carousel';
import Button from './Button';
import Icons from '../common/Icons';
import useDimensions from '../../utils/useDimensions';
import Lightbox from './LightBox';

const ReactModal = ({
  isOpen,
  closeModal,
  onRequestClose,
  carouselValues,
  ...props
}) => {
  const modalStyle = useSpring({
    from: { marginBottom: -400 },
    to: { marginBottom: 0 },
    delay: 100,
  });
  const { width } = useDimensions();
  const stopPageFromScrolling = () => {
    if (props.stopPageScroller === true) return;
    if (props.stopPageScroller === false) return props.handlePageScroller(true);
  };

  const [displayLightBox, setDisplayLightBox] = useState(false);
  const [image, setImage] = useState()

  useEffect(() => {
    stopPageFromScrolling();
  }, [props.stopPageScroller]);

  const setDisplayLightBoxFalse = () => setDisplayLightBox(false);
  
  const setLightBox = e => {
    return (
      <Lightbox
        images={e}
        open={true}
        setDisplayLightBoxFalse={setDisplayLightBoxFalse}
      />
    );
  };

  console.log(displayLightBox);
  const displayHeader = () => {
    const imageRender = carouselValues.images.map(e => (
      <>
        <img
          key={e}
          src={e}
          alt={e}
          onClick={() => {
            setImage(e)
            setDisplayLightBox(true);
          }}
        />
      </>
    ));
    const buttonColour = carouselValues.livePreview ? 'black' : 'white';

    return (
      <div className="modal-header" key={imageRender}>
        <div className="modal-header-carousel">
          <Carousel
            infinite
            keyBoardControl
            itemClass="image-item mobile-projects-list-item"
            autoPlay
            swipeable
            centerMode
            autoPlaySpeed={5000}
            showDots
            customTransition="transform 300ms ease-in-out"
            transitionDuration={1500}
            containerClass="carousel-main"
          >
            {imageRender}
          </Carousel>
        </div>
        <div style={{ color: '#fd3a8c', marginLeft: '50px', fontSize: '12px', fontWeight: 'bold'}}>* click image to expand</div>
        <h2 className="modal-header-title">
          <span className="bracket-carousel">//</span>
          {carouselValues.name}
        </h2>
        <div className="modal-header-paragraph">{carouselValues.text}</div>

        {displayLightBox && setLightBox(image)}
        <div className="modal-header-buttons">
          <Button
            value={carouselValues.githubLink}
            href={carouselValues.githubLink}
            styles={{
              backgroundColor: '#fd3a8c',
              color: 'black',
            }}
            icon={<Icons icon={'github'} sizes={25} />}
          >
            Github
          </Button>
          <Button
            value={carouselValues.livePreview}
            href={carouselValues.livePreview}
            styles={{
              backgroundColor: !carouselValues.livePreview
                ? '#c2bebe'
                : '#ffe881',
              color: !carouselValues.livePreview ? 'white' : 'black',
              pointerEvents: !carouselValues.livePreview ? 'none' : null,
              cursor: !carouselValues.livePreview ? 'default' : 'pointer',
            }}
            icon={
              <Icons
                icon={
                  !carouselValues.livePreview
                    ? 'no-live-preview'
                    : 'live-preview'
                }
                sizes={25}
                styles={{ color: buttonColour }}
              />
            }
          >
            {!carouselValues.livePreview ? 'Developing' : 'Live'}
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
        style={width > 700 ? customStylesDesktop : customStylesMobile}
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

const customStylesDesktop = {
  content: {
    top: '50%',
    height: 'auto',
    width: '70%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    backgroundColor: 'white',
    border: '0',
    transform: 'translate(-50%, -50%)',
    boxShadow:
      'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    borderRadius: '55px',
    overflow: 'auto',
  },
};

const customStylesMobile = {
  content: {
    top: '50%',
    height: 'auto',
    width: '100%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    backgroundColor: 'white',
    border: '0',
    transform: 'translate(-50%, -50%)',
    boxShadow:
      'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    borderRadius: '55px',
    overflow: 'auto',
  },
};

export default ReactModal;
