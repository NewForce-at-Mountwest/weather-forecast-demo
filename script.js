const charlestonWeather = {
  location: "Charleston, WV",
  foreCastType: "Five Day Forecast",
  forecast: [
    {
      day: "Friday",
      high: 89,
      low: 67,
      conditions: "Sunny and clear"
    },
    {
      day: "Saturday",
      high: 93,
      low: 70,
      conditions: "Sunny and clear"
    },
    {
      day: "Sunday",
      high: 90,
      low: 72,
      conditions: "Chance of rain"
    },
    {
      day: "Monday",
      high: 90,
      low: 71,
      conditions: "Chance of rain"
    },
    {
      day: "Tuesday",
      high: 91,
      low: 71,
      conditions: "Chance of rain"
    }
  ]
};

const huntingtonWeather = {
  location: "Huntington, WV",
  foreCastType: "Five Day Forecast",
  forecast: [
    {
      day: "Friday",
      high: 88,
      low: 66,
      conditions: "sunny and clear"
    },
    {
      day: "Saturday",
      high: 91,
      low: 70,
      conditions: "sunny and clear"
    },
    {
      day: "Sunday",
      high: 94,
      low: 72,
      conditions:
        "sunny and clear during the day, with chances of thunderstorms at night"
    },
    {
      day: "Monday",
      high: 91,
      low: 71,
      conditions: "Partly Cloudy"
    },
    {
      day: "Tuesday",
      high: 91,
      low: 71,
      conditions: "Chance of showers"
    }
  ]
};

// function buildHeader(city, forecastLength){
//     const headingHTML= `<h2>${city}</h2>
//     <h3>${forecastLength}</h3>`
//     return headingHTML
// }

// Function that returns HTML string to build a weather forecast header
const buildHeader = (city, forecastLength) => {
  const headingHTML = `<div><h2>${city}</h2>
    <h3>${forecastLength}</h3></div>`;
  return headingHTML;
};

// Function that builds a single day in the weather forecast
const buildSingleDay = singleDayObject => {
  let tempClass = "";
  let imageURL = "";
  if (singleDayObject.high > 90) {
    // add class of "above-90"
    tempClass = "above-90";
  } else {
    // add class of "below-90"
    tempClass = "below-90";
  }

  //if the conditions include "sunny"
  const todaysConditionsLowercase = singleDayObject.conditions.toLowerCase()
  if (todaysConditionsLowercase.includes("sunny")) {
    imageURL = "images/sunny.jpg";
  } else if (todaysConditionsLowercase.includes("cloudy")) {
    imageURL = "images/cloudy.jpg";
  } else if (
    todaysConditionsLowercase.includes("rain") ||
    todaysConditionsLowercase.includes("shower")
  ) {
    imageURL = "images/rainy.png";
  }

  const singleDayHTML = `<section class="forecast-day ${tempClass}">
        <img class="img-icon" src=${imageURL}>
        <p>${singleDayObject.day}</p>
        <p>High: ${singleDayObject.high}</p>
        <p>Low: ${singleDayObject.low}</p>
        <p>Conditions</p>
        <p>${singleDayObject.conditions}</p>
    </section>`;
  return singleDayHTML;
};

// Function that returns an HTML string of all the days in a forecast
const buildEntireForecast = weatherArray => {
  let giantHTMLStringOfEverything = "";
  for (let i = 0; i < weatherArray.length; i++) {
    const singleDay = buildSingleDay(weatherArray[i]);
    giantHTMLStringOfEverything += singleDay;
  }

  console.log(giantHTMLStringOfEverything);
  return giantHTMLStringOfEverything;
};

// Function that builds an entire weather forecast component and prints it to the DOM

const printWeatherForecast = () => {
  // Header for Huntington
  const huntingtonHeader = buildHeader(
    huntingtonWeather.location,
    huntingtonWeather.foreCastType
  );

  // Forecast for huntington
  const huntingtonEntireForecast = buildEntireForecast(
    huntingtonWeather.forecast
  );

  // Header for charleston
  const charlestonHeader = buildHeader(
    charlestonWeather.location,
    charlestonWeather.foreCastType
  );

  // Forecast for charleston
  const charlestonEntireForecast = buildEntireForecast(
    charlestonWeather.forecast
  );
  //   const singleDay = buildSingleDay(huntingtonWeather.forecast[0])
  //   const singleDay = buildSingleDay(huntingtonWeather.forecast[1])
  // const header = buildHeader("taco", "cheese")
  const containerToPrint = document.querySelector("#weather-forecast");
  containerToPrint.innerHTML =
  `<section class="flex-container">
        ${huntingtonHeader}
        ${huntingtonEntireForecast}
    </section>
  <section class="flex-container">
    ${charlestonHeader}
    ${charlestonEntireForecast}
  </section>`
};

printWeatherForecast();

// const buildHeader = (city, forecastLength) => `<h2>${city}</h2>
// <h3>${forecastLength}</h3>`

// print the location in the DOM
// print the type of forecast in the dom
// print a single day in the forecast

// Add a condition-- check and see if the high is above 90. If so, give it a red background
