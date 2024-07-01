const blockElement = (element) => {
  element.forEach((component) => {
    component.disabled = !component.disabled;
  });
};

const toggleClass = (element, targetClass) => {
  element.classList.toggle(`${targetClass}`);
};

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export { toggleClass, blockElement, debounce };
