const blockElement = (element) => {
  element.forEach((component) => {
    component.disabled = !component.disabled;
  });
};

const getNumber = (data, sign) => Number(data.toFixed(sign));

const toggleClass = (element, targetClass) => {
  element.classList.toggle(`${targetClass}`);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const isElementInFocus = (element) => element === document.activeElement;

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export { toggleClass, blockElement, isElementInFocus, getNumber, isEscapeKey, debounce };
