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
      conditions: "Sunny and clear"
    },
    {
      day: "Saturday",
      high: 91,
      low: 70,
      conditions: "Sunny and clear"
    },
    {
      day: "Sunday",
      high: 94,
      low: 72,
      conditions:
        "Sunny and clear during the day, with chances of thunderstorms at night"
    },
    {
      day: "Monday",
      high: 91,
      low: 71,
      conditions: "Partly cloudy"
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
  const headingHTML = `<h2>${city}</h2>
    <h3>${forecastLength}</h3>`;
  return headingHTML;
};

// Function that builds a single day in the weather forecast
const buildSingleDay = singleDayObject => {
    let tempClass = ""
    if(singleDayObject.high > 90){
        // add class of "above-90"
        tempClass = "above-90"

    } else {
        // add class of "below-90"
        tempClass = "below-90"
    }
  const singleDayHTML = `<section class="forecast-day ${tempClass}">
        <p>${singleDayObject.day}</p>
        <p>${singleDayObject.high}</p>
        <p>${singleDayObject.low}</p>
        <p>${singleDayObject.conditions}</p>
    </section>`;
    return singleDayHTML
};

// Function that returns an HTML string of all the days in a forecast
const buildEntireForecast = (weatherArray) => {
    let giantHTMLStringOfEverything = ""
    for(let i = 0; i < weatherArray.length; i++){
        const singleDay = buildSingleDay(weatherArray[i])
        giantHTMLStringOfEverything += singleDay
    }
    console.log(giantHTMLStringOfEverything)
    return giantHTMLStringOfEverything
}






// Function that builds an entire weather forecast component and prints it to the DOM

const printWeatherForecast = () => {
    // Header for Huntington
  const huntingtonHeader = buildHeader(
    huntingtonWeather.location,
    huntingtonWeather.foreCastType
  );

  // Forecast for huntington
  const huntingtonEntireForecast = buildEntireForecast(huntingtonWeather.forecast)

// Header for charleston
  const charlestonHeader = buildHeader(
    charlestonWeather.location,
    charlestonWeather.foreCastType
  );

  // Forecast for charleston
  const charlestonEntireForecast = buildEntireForecast(charlestonWeather.forecast)
//   const singleDay = buildSingleDay(huntingtonWeather.forecast[0])
//   const singleDay = buildSingleDay(huntingtonWeather.forecast[1])
  // const header = buildHeader("taco", "cheese")
  const containerToPrint = document.querySelector("#weather-forecast");
  containerToPrint.innerHTML = huntingtonHeader + huntingtonEntireForecast + charlestonHeader + charlestonEntireForecast;
};

printWeatherForecast();

// const buildHeader = (city, forecastLength) => `<h2>${city}</h2>
// <h3>${forecastLength}</h3>`

// print the location in the DOM
// print the type of forecast in the dom
// print a single day in the forecast

// Add a condition-- check and see if the high is above 90. If so, give it a red background
