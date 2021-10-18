import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import '../scss/Modal.scss';
import { useSpring, animated } from 'react-spring';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Button from '../utils/Button';

const ReactModal = ({
  isOpen,
  closeModal,
  onRequestClose,
  name,
  description,
  images,
  text,
  github,
  livePreview,
  ...props
}) => {
  const modalStyle = useSpring({
    from: { marginBottom: 500 },
    to: { marginBottom: 0 },
    delay: 100,
  });

  const buttonStyles = {
    padding: '15px',
    fontSize: 15,
  };

  const displayHeader = () => {
    const imageRender = images.map(e => <img src={e} alt={e} />);
    return (
      <>
        <div className="modal-header">
          <div className="modal-header-carousel">
            <Carousel autoPlay infiniteLoop>
              {imageRender}
            </Carousel>
          </div>
          <h2 className="modal-header-title">{name}</h2>
          <div className="modal-header-paragraph">{text}</div>
          <div className="modal-header-buttons">
            <Button
              value={github}
              href={github}
              style={buttonStyles}
              icon={<i class="fab fa-github"></i>}
            >
              Github
            </Button>
            <Button
              value={livePreview}
              href={livePreview}
              style={buttonStyles}
              icon={<i class="fas fa-eye"></i>}
            >
              Live
            </Button>
          </div>
        </div>
      </>
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
          <div onClick={closeModal}>X</div>

          {description || name ? displayHeader() : ''}
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
    backgroundColor: '#222',
    border: '0',
    boxShadow: '10px 10px 10px 5px rgba(0, 0, 0, 0.296)',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50px',
  },
};

export default ReactModal;
