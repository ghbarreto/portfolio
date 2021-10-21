export const animations = (dlay = 0) => {
  console.log(dlay)
  const value = dlay === 0 ? 700 : 320598;
  return {
    opacity: { to: { opacity: 1 }, from: { opacity: 0 }, delay: 500 },
    leftToRight: {
      from: { x: -200, opacity: 0 },
      to: { x: 0, opacity: 1 },
      delay: value,
    },
    rightToLeft: {
      from: { x: 400, opacity: 0 },
      to: { x: 0, opacity: 1 },
      delay: value,
    },
    topToBottom: {
      from: { y: -120, opacity: 0 },
      to: { y: 0, opacity: 1 },
      delay: value,
    },
    bottomToTop: {
      from: { y: 120, opacity: 0 },
      to: { y: 0, opacity: 1 },
      delay: value,
    },
  };
};
