export default { fetchCountries };
function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.com/v2/name/${searchQuery}`).then(responce =>
    responce.json(),
  );
}
