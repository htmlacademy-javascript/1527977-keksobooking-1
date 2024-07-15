const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const createPopup = (card) => {
  const popup = cardTemplate.cloneNode(true);

  const popupFields = [
    { selector: 'img', prop: 'src', value: card.author.avatar },
    { selector: '.popup__title', prop: 'textContent', value: card.offer.title },
    { selector: '.popup__text--address', prop: 'textContent', value: card.offer.address },
    { selector: '.popup__text--price', prop: 'textContent', value: card.offer.price },
    { selector: '.popup__type', prop: 'textContent', value: card.offer.type },
    { selector: '.popup__text--capacity', prop: 'textContent', value: `${card.offer.rooms} комнаты для ${card.offer.guests} гостей` },
    { selector: '.popup__text--time', prop: 'textContent', value: `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}` },
    { selector: '.popup__description', prop: 'textContent', value: card.offer.description },
    { selector: '.popup__photos > img', prop: 'src', value: card.offer.photos }
  ];

  popupFields.forEach((field) => {
    const element = popup.querySelector(field.selector);
    if (field.value) {
      element[field.prop] = field.value;
    } else {
      element.classList.add('hidden');
    }
  });

  const featuresContainer = popup.querySelector('.popup__features');
  const features = new Set(card.offer.features || []);

  const existingFeatures = featuresContainer.querySelectorAll('.popup__feature');
  existingFeatures.forEach((existingFeature) => {
    featuresContainer.removeChild(existingFeature);
  });

  if (features.size > 0) {
    features.forEach((feature) => {
      const featureElement = document.createElement('li');
      featureElement.classList.add('popup__feature', `popup__feature--${feature}`);
      featuresContainer.appendChild(featureElement);
    });
  } else {
    featuresContainer.classList.add('hidden');
  }

  return popup;
};

export { createPopup };
