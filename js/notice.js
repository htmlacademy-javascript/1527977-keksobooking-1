import {isEscapeKey} from './util.js';

const successNotice = document.querySelector('#success').content.querySelector('.success');
const errorNotice = document.querySelector('#error').content.querySelector('.error');

const errorLoadingNotice = (message) => {
  const notice = document.createElement('div');
  notice.style.position = 'absolute';
  notice.style.zIndex = '10';
  notice.style.left = '0';
  notice.style.top = '0';
  notice.style.right = '0';
  notice.style.padding = '10px';
  notice.style.fontSize = '20px';
  notice.style.textAlign = 'center';
  notice.style.color = 'black';
  notice.style.backgroundColor = 'pink';
  notice.textContent = message;
  document.body.append(notice);

  setTimeout(() => {
    notice.remove();
  }, 5000);
};

const showSuccessNotice = () => {
  document.body.append(successNotice);
  document.body.addEventListener('keydown', onEscDown);
  document.body.addEventListener('click', onBodyClick);
};

const showErrorNotice = () => {
  document.body.append(errorNotice);
  document.body.addEventListener('keydown', onEscDown);
  document.body.addEventListener('click', onBodyClick);
  errorNotice.querySelector('.error__button').addEventListener('click', hideMessage);
};

function hideMessage() {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.body.removeEventListener('keydown', onEscDown);
  document.body.removeEventListener('click', onBodyClick);
}

function onBodyClick(evt) {
  if (evt.target.closest('.success__inner') ||
    evt.target.closest('.error__inner')
  ) {
    return;
  }
  hideMessage();
}

function onEscDown(evt) {
  if (isEscapeKey) {
    evt.preventDefault();
    evt.stopPropagation();
    hideMessage();
  }
}

export { errorLoadingNotice, showSuccessNotice, showErrorNotice };
