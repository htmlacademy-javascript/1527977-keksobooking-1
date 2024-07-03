const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const cardsContainer = document.querySelector('.map');

const localCards = [];

const renderCards = (data) => {
  cardsContainer.querySelectorAll('.popup').forEach((element) => element.remove());
  localCards.length = 0;
  localCards.push(...data.slice());
  const cardFragment = document.createDocumentFragment();
  data.forEach(({ author, offer, location }) => {
    const card = cardTemplate.cloneNode(true);
    card.querySelector('img').src = author.avatar;
    card.querySelector('.popup__title').textContent = offer.title;
    card.querySelector('.popup__text--address').textContent = offer.address;
    card.dataset.location = location;

    cardFragment.appendChild(card);
  });
  cardsContainer.appendChild(cardFragment);
};

export { renderCards };

// Каждое из объявлений показывается на карте в виде метки.
// Размеры метки похожего объявления — 40 на 40.

// 5.4. При нажатии на метку похожего объявления, показывается балун
// (предоставляется API карт) с подробной информацией об объявлении (далее — карточка).
//  Если данных для заполнения не хватает, потому что в объявлении отсутствует часть информации,
//  соответствующий блок в карточке скрывается. Например, если в объявлении не указано никаких удобств,
//  нужно скрыть блок .popup__features.

// 5.5. Нажатие на специальную метку выбора адреса не приводит к показу балуна.

// 5.6. В каждый момент времени может быть показан только один балун,
// то есть нажатие на метку другого похожего объявления должно скрывать текущий балун,
// если он показан, и показывать балун, соответствующий другому объявлению.

// 5.7. Открытую карточку с подробной информацией можно закрыть нажатием на крестик в углу балуна.
