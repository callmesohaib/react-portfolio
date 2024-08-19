export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        // ease: [0.25, 0.25, 0.25, 0.75],
        ease: "easeInOut",
        duration: 1.2,
        delay: delay,
      },
    },
  };
};
