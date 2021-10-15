import Modal from 'react-modal';
import React from 'react';
import '../scss/Modal.scss';
import { useSpring, animated } from 'react-spring';

const ReactModal = ({
  isOpen,
  closeModal,
  onRequestClose,
  description,
  name,
  ...props
}) => {
  const modalStyle = useSpring({
    from: { marginBottom: 500 },
    to: { marginBottom: 0 },
    delay: 100,
  });

  return (
    <animated.div style={modalStyle}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        ariaHideApp={false}
      >
        <animated.div style={modalStyle}>
          <h1>{name}</h1>
          <p>{description}</p>
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
    transform: 'translate(-50%, -50%)',
  },
};

export default ReactModal;
