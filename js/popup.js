const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const createPopup = (card) => {
  const popup = cardTemplate.cloneNode(true);
  popup.querySelector('img').src = card.author.avatar;
  popup.querySelector('.popup__title').textContent = card.offer.title;
  popup.querySelector('.popup__text--address').textContent = card.offer.address;

  return popup;
};

export { createPopup };
