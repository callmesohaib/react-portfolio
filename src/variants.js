export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -10 : 0,
      x: direction === "left" ? 15 : direction === "right" ? -15 : 0,
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
        stiffness: 50,
        damping: 15, 
        delay: delay,
      },
    },
  };
};
