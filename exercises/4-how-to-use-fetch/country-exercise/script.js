// This function should retrieve the JSON from the `countryURL` and then call onCountryDataReceived() with the JSON
function getData(countryURL) {
  fetch(countryURL)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      onCountryDataReceived(json);
    });
}

function onCountryDataReceived(country) {
  addCountryName(country);
  addCountryCapital(country);
  addNameInOtherLanguages(country);
  addImage(country);
}

// This function should take the JSON for the country and put a H1 tag on the screen containing its name
function addCountryName(countryData) {
  const body = document.querySelector("body");
  const h1 = document.createElement("h1");
  h1.innerText = countryData[0].name.common;
  body.append(h1);
}

// This function should take the JSON for the country and put a H2 tag on the screen containing its capital city
function addCountryCapital(countryData) {
  console.log("🦄 ~ addCountryCapital ~ countryData", countryData);
  const body = document.querySelector("body");
  const h2 = document.createElement("h2");
  h2.innerText = countryData[0].capital[0];
  body.append(h2);
}

function addImage(countryData) {
  const body = document.querySelector("body");
  const img = document.createElement("img");
  console.log(
    "🦄 ~ addImage ~ countryData[0].flags.png",
    countryData[0].flags.png
  );
  img.src = countryData[0].flags.png;
  body.append(img);
}

// This function should take the JSON for the country and put UL and LI tags on the screen with the countries name translated into other languages
function addNameInOtherLanguages(countryData) {}

function getContentDiv() {
  return document.querySelector("#content");
}

function onLoad() {
  getData("https://restcountries.com/v3.1/name/Great%20Britain");

  /** Remove this line when you have completed the task

    getData("https://restcountries.com/v3.1/name/France");

    getData("https://restcountries.com/v3.1/name/Germany");

    getData("https://restcountries.com/v3.1/name/Spain");

    getData("https://restcountries.com/v3.1/name/Portugal");

    getData("https://restcountries.com/v3.1/name/Hungary");

    getData("https://restcountries.com/v3.1/name/Russia");

    */ // Remove this line when you have completed the task
}

window.onload = onLoad;
