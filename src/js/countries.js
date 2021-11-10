import countryCardTpl from '../templates/coutry-card.hbs';
import API from '../js/fetchCountries';

const debounce = require('lodash.debounce');

const refs = {
  inputEl: document.querySelector('.input'),
  searchEl: document.querySelector('.search-country'),
};

refs.inputEl.addEventListener('input', debounce(onSearch, 500));

function onSearch(evt) {
  evt.preventDefault();
  const searchQuery = evt.target.value.trim();
  if (!searchQuery) return;

  API.fetchCountries(searchQuery).then(countrys =>
    countrys.forEach(country => {
      if (countrys.length > 1) {
        console.log('рендерим список результатов');
      } else {
        console.log(country);
        const countryCardMarkup = createcountryCardMarkup(country);

        refs.searchEl.insertAdjacentHTML('beforeend', countryCardMarkup);

        function createcountryCardMarkup(item) {
          return countryCardTpl(item);
        }
      }
    }),
  );
}
