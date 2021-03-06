"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};
/*
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData('portugal');
getCountryData('usa');

*/
/*
const getCountryAndNeighour = function (country) {
 //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);
  
  //Render Country 1
  renderCountry(data);

  //Get Neighbour Country 2
  const [neighbour] = data.borders;

  if(!neighbour) {
    return;
  }

  //AJAX call country 2
  const request2 = new XMLHttpRequest();
  request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
  request2.send();

  request2.addEventListener('load', function () {
    const data2 = JSON.parse(this.responseText)
    console.log(data2);

    renderCountry(data2, 'neighbour');
  });
}); 
};
getCountryAndNeighour('usa');
*/

//Promises
//const request = fetch("https://restcountries.com/v2/name/portugal");
//console.log(request);
/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`).then(function (
    response
  ) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    renderCountry(data[0]);
  })
};
getCountryData('portugal')
*/
//clean code
//const getCountryData = function (country) {
//  fetch(`https://restcountries.com/v2/name/${country}`)
//    .then(response => response.json())
//    .then(data => renderCountry(data[0]));
//};
//getCountryData('portugal')

/*
const getCountryData = function (country) {
  //Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
  .then(response =>{ 
    console.log(response);

    if(!response.ok) 
      throw new Error(`Country Not Found (${response.status})`);
    return response.json()
  })
  .then(data => {
    renderCountry(data[0]);
    const neighbour = data[0].borders?.[0];

    if(!neighbour) return;

    //country 2
    return fetch( `https://restcountries.com/v2/alpha/${neighbour}`);
  })
  .then(response => {
    if(!response.ok) 
      throw new Error(`Country Not found (${response.status})`);

    return response.json()
  })
  .then(data => renderCountry(data, 'neighbour'))
  .catch(err => {
    console.error(` ${err}`);
    renderError(`Something went wrong ${err.message}. Try Again`);
  })
  .finally(() => {
    countriesContainer.style.opacity = 1;
  });
};
*/
//Chaining data

const getJSON = function (url, errorMsg = "Something Went Wrong") {
  return fetch(url).then((response) => {
    console.log(response);

    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};
const getCountryData = function (country) {
  //Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, "Country Not Found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found');

      //country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        "Country Not Found"
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(` ${err}`);
      renderError(`Something went wrong ${err.message}. Try Again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("portugal");
});
