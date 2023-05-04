export const animations = dlay => {
  return {
    opacity: { to: { opacity: 1 }, from: { opacity: 0 }, delay: dlay },
    leftToRight: {
      from: { x: -200, opacity: 0 },
      to: { x: 0, opacity: 1 },
      delay: dlay,
    },
    rightToLeft: {
      from: { x: 400, opacity: 0 },
      to: { x: 0, opacity: 1 },
      delay: dlay,
    },
    topToBottom: {
      from: { y: -120, opacity: 0 },
      to: { y: 0, opacity: 1 },
      delay: dlay,
    },
    bottomToTop: {
      from: { y: 120, opacity: 0 },
      to: { y: 0, opacity: 1 },
      delay: dlay,
    },
  };
};
