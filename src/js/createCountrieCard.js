import countryCardTpl from '../templates/coutry-card.hbs';
import countryListTpl from '../templates/country-list.hbs';
import API from './fetchCountries';
import { notice, error } from '@pnotify/core';
import { debounce } from 'lodash';

const refs = {
  inputEl: document.querySelector('.input'),
  listEl: document.querySelector('.search-list'),
  cardEl: document.querySelector('.country-card-wrapper'),
};

refs.inputEl.addEventListener('input', debounce(onSearch, 500));

function onSearch(evt) {
  const searchQuery = evt.target.value.trim();

  if (!searchQuery) return;

  refs.cardEl.innerHTML = '';
  refs.listEl.innerHTML = '';

  API.fetchCountries(searchQuery).then(countrys => {
    if (countrys.length > 10) {
      const myNotice = notice({
        text: 'Too many matches found. Please enter a more specific query!',
        delay: 3000,
        addClass: 'notice',
      });
    } else if (countrys.length <= 10 && countrys.length > 1) {
      refs.listEl.innerHTML = countryListTpl(countrys);
    } else if (countrys.length === 1) {
      refs.cardEl.innerHTML = countryCardTpl(...countrys);
    } else {
      const myError = error({
        text: 'enter valid country name!',
        delay: 3000,
        addClass: 'notice',
      });
    }
  });
}
