// Показать/скрыть фильтр
document.querySelector('.menu-icon-wrapper').onclick = function () {
  document.querySelector('.menu-icon').classList.toggle('menu-icon--active');
  document.querySelector('.sidebar').classList.toggle('sidebar--active');
};

// Показать еще 3 карточки на странице
const btnShowMoreCards = document.querySelector('.more-btn');
const hiddenCards = document.querySelectorAll('.card--hidden');

btnShowMoreCards.addEventListener('click', () => {
  hiddenCards.forEach(card => {
    card.classList.remove('card--hidden');
  });
});

// Показать/скрыть контент внутри виджетов
const widgets = document.querySelectorAll('.widget');

widgets.forEach(widget => {
  widget.addEventListener('click', e => {
    if (e.target.classList.contains('widget__title')) {
      e.target.classList.toggle('widget__title--active');
      e.target.nextElementSibling.classList.toggle('widget__body--hidden');
    }
  });
});

// Location
const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckBoxes = document.querySelectorAll('[data-location-param]');

checkBoxAny.addEventListener('change', () => {
  if (checkBoxAny.checked) {
    topLocationCheckBoxes.forEach(item => {
      item.checked = false;
    });
  }
});

topLocationCheckBoxes.forEach(item => {
  item.addEventListener('change', () => {
    if (checkBoxAny.checked) checkBoxAny.checked = false;
  });
});

// Кнопка показать еще в дополнительных опциях
const showMoreOptionsBtn = document.querySelector('.checkbox__more');
const hiddenOptions = document.querySelectorAll('.checkbox--hidden');

showMoreOptionsBtn.addEventListener('click', () => {
  hiddenOptions.forEach(option => {
    if (option.classList.contains('checkbox--hidden')) {
      option.classList.remove('checkbox--hidden');
      showMoreOptionsBtn.textContent = 'Скрыть';
    } else {
      option.classList.add('checkbox--hidden');
      showMoreOptionsBtn.textContent = 'Показать ещё';
    }
  });
});
