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



// Function that returns HTML string to build a weather forecast header
const buildHeader = (city, forecastLength) => {
  const headingHTML = `<h2>${city}</h2>
    <h3>${forecastLength}</h3>`;
  return headingHTML;
};

// Function that builds a single day in the weather forecast
// Accepts a single object representing one day's weather and returns an HTML string representing that object
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
// Accepts an array of day objects, loops over them, and calls the buildSingleDay function to build an HTML string for each day and compile it into one giant HTML string
// Returns the giant HTML string
const buildEntireForecast = (weatherArray) => {
    let giantHTMLStringOfEverything = ""
    for(let i = 0; i < weatherArray.length; i++){
        const singleDay = buildSingleDay(weatherArray[i])
        giantHTMLStringOfEverything += singleDay
    }
    return giantHTMLStringOfEverything
}

// Function that builds and returns a single city's entire weather HTML string, including heading AND forecast
const buildSingleCityHTMLString = singleCityWeatherObject => {
    return `${buildHeader(singleCityWeatherObject.location, singleCityWeatherObject.foreCastType)}
    ${buildEntireForecast(singleCityWeatherObject.forecast)}`
}


// Function that prints a given HTML string to the DOM
// Accepts two parameters: the HTML string you want to print and the id of the container you want to put it in
// This will work for anything we want to print!
const printToDOM = (htmlString, htmlContainerId) => {
    const containerToPrint = document.querySelector(`#${htmlContainerId}`)
    containerToPrint.innerHTML += htmlString
};


// ------------- Build and print Huntington -----------------------------------//
// Build the HTML string to represent Huntington's weather
const huntingtonHTMLString = buildSingleCityHTMLString(huntingtonWeather)
// Print it to the DOM to the element with an id of "weather-forecast"
printToDOM(huntingtonHTMLString, "weather-forecast")


// --------------- Build and print Charleston --------------------------------//
// Build the HTML string to represent Charleston's weather
const charlestonHTMLString = buildSingleCityHTMLString(charlestonWeather, "container")
// Print it to the DOM to element with the id of "weather-forecast"
printToDOM(charlestonHTMLString, "weather-forecast")