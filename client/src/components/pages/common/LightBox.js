import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const LightboxComponent = ({ images, open, setDisplayLightBoxFalse }) => {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <div>
      {isOpen && (
        <Lightbox
          mainSrc={images}
          onCloseRequest={() => {
            setIsOpen(false);
            setDisplayLightBoxFalse();
          }}
        />
      )}
    </div>
  );
};

export default LightboxComponent;
