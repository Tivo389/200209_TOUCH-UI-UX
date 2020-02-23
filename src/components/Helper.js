export const toggleClass = (targetNode, className, boolean) => {
  if (boolean) {
    document.querySelector(targetNode).classList.add(className);
  } else {
    document.querySelector(targetNode).classList.remove(className);
  }
};