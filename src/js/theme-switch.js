import menuItemTpl from '../templates/menu-card.hbs';
import menuItems from '../menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// рендеринг разметки элементов меню
const menuEl = document.querySelector('.js-menu');
const itemsMarkup = createMenuItemsMarkup(menuItems);

menuEl.insertAdjacentHTML('beforeend', itemsMarkup);

function createMenuItemsMarkup(items) {
  return menuItemTpl(items);
}
// рендеринг разметки элементов меню

// переключение темы. localStorage
const bodyEl = document.querySelector('body');
const themeSwitchToggle = document.querySelector('#theme-switch-toggle');

if (localStorage.getItem('checked') === 'true') {
  themeSwitchToggle.checked = true;
  bodyEl.classList.add(Theme.DARK);
} else {
  themeSwitchToggle.checked = false;
  bodyEl.classList.add(Theme.LIGHT);
}

themeSwitchToggle.addEventListener('change', changeThemeSwitchHandler);

function changeThemeSwitchHandler(evt) {
  localStorage.setItem('checked', evt.target.checked);

  if (evt.target.checked) {
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
  } else {
    bodyEl.classList.add(Theme.LIGHT);
    bodyEl.classList.remove(Theme.DARK);
  }
}
// переключение темы. localStorage
