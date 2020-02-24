export const toggleClass = (targetNode, className, boolean) => {
  if (boolean) {
    document.querySelector(targetNode).classList.add(className);
  } else {
    document.querySelector(targetNode).classList.remove(className);
  }
};

export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = setTimeout(() => { inThrottle = false }, limit);
    }
  }
}