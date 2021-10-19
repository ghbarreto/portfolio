export const animations = {
  opacity: { to: { opacity: 1 }, from: { opacity: 0 }, delay: 500 },
  leftToRight: {
    from: { x: -200, opacity: 0 },
    to: { x: 0, opacity: 1 },
    delay: 0,
  },
  rightToLeft: {
    from: { x: 400, opacity: 0 },
    to: { x: 0, opacity: 1 },
    delay: 0,
  },
  topToBottom: {
    from: { y: -120, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 0,
  },
  bottomToTop: {
    from: { y: 120, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 0,
  },
};
