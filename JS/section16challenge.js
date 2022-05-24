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
const getJSON = function (url, errorMsg = "Something Went Wrong") {
    return fetch(url).then((response) => {
      console.log(response);
  
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
      return response.json();
    });
  };

*/
/*
  const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
      .then(res => {
        if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);
        return fetch(`https://restcountries.com/v2/name/${data.country}`);
      })
      .then(res => {
        if (!res.ok) throw new Error(`Country not found (${res.status})`);
        return res.json();
      })
      .then(data => renderCountry(data[0]))
      .catch(err => console.error(`${err.message} `));
  };
  //whereAmI(52.508, 13.381);
  //whereAmI(19.037, 72.873);
  //whereAmI(-33.933, 18.474);
*/
  /*
  //Promises
  const lotteryPromise = new Promise(function(resolve, reject) {
    console.log('Lottery draw is happening');
    
    setTimeout(function() {
      if(Math.random() >= 0.5) {
        resolve("You Won")
      } else {
        reject(new Error('You Lost'));
      }
    }, 2000);
  });

  lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

  //Promisifying setTimeout
  const wait = function(seconds) {
    return new Promise(function(resolve){
      setTimeout(resolve, seconds * 1000);
    });
  };

  wait(1)
  .then(() => {
    console.log('1 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds passed');
    return wait(1);
  })
  .then(() => console.log('4 seconds passed'));

  Promise.resolve('.abc').then(x => console.log(x));
  Promise.reject(new Error('Problem!!')).catch(x => console.error(x));
  */
 
  const getPosition = function() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  //consuming promises with Async / Await
  const whereAmI = async function(country) {
    try {
    //GEolocation   
    const pos = await getPosition();
    const { latitude: lat, longitude: lon } = pos.coords;

    //Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lon}?geoit=json`);
    if(!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
   // fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res));
   
   const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);
   if(!res.ok) throw new Error('Problem getting Country');
   const data = await res.json();
   console.log(data);
   renderCountry(data[0]); 
    } catch (err) {
      console.log(`${err}`);
      renderError(`Something went country ${err.message}`);
    }
  };
  whereAmI();
  console.log('FIRST');