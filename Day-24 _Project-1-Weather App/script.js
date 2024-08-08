document.addEventListener("DOMContentLoaded", () => {
  const weatherIcons = {
    "clear sky": "icons/01clearsky.png",
    "few clouds": "icons/02fewclouds.png",
    "scattered clouds": "icons/03scatteredclouds.png",
    "broken clouds": "icons/04brokenclouds.png",
    "shower rain": "icons/05showerrain.png",
    rain: "icons/06rain.png",
    thunderstorm: "icons/07thunderstrom.png",
    snow: "icons/08snow.png",
    mist: "icons/09mist.png",
    "overcast clouds": "icons/03scatteredclouds.png",
    "light rain": "icons/05showerrain.png",
    "moderate rain": "icons/05showerrain.png",
    haze: "icons/09mist.png",
    "heavy intensity rain": "icons/06rain.png",
    default: "icons/default.png",
  };

  const apiKey = "d0dddca6518178db9307647c1cf9f711";

  const fetchWeatherData = (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Waiting for user to get city name`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        const temperature = data.main.temp;
        const temp_max = data.main.temp_max;
        const temp_min = data.main.temp_min;
        const windSpeed = data.wind.speed;
        const weatherCondition = data.weather[0].description;
        const cityName = data.name;
        const weatherIcon =
          weatherIcons[weatherCondition] || weatherIcons["default"];

        document.querySelector(
          ".weather-info"
        ).innerHTML = `<h3>${cityName}</h3>
        <div class="main">
          <div class="main_left">
            <img
              src="${weatherIcon}"
              alt="${weatherCondition}"
              class="weather-icon"
            />
            <h2 class="weather-condition">${weatherCondition}</h2>
          </div>
          <div class="main_center">
            <h2 class="temperature">${temperature} °C</h2>
          </div>
          <div class="main_right">
            <span class="wind">Wind: ${windSpeed}</span>
            <span class="max-temp">Max_Temp: ${temp_max}</span>
            <span class="min-temp">Min_Temp: ${temp_min}</span>
          </div>
        </div>`;

        fetchForecastData(city);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        document.querySelector(".weather-info").innerHTML = `
                    <p>Error: ${error.message}</p>
                `;
      });
  };

  const fetchForecastData = (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`City not found: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Forecast data:", data);
        displayForecast(data);
      })
      .catch((error) => {
        console.error("Error fetching forecast data:", error);
      });
  };

  const displayForecast = (data) => {
    const forecastContainer = document.querySelector(".forecast-info");
    forecastContainer.innerHTML = "";

    const dailyForecasts = data.list.filter((item) =>
      item.dt_txt.includes("12:00:00")
    );

    dailyForecasts.forEach((forecast) => {
      const date = new Date(forecast.dt_txt);
      const temperature = forecast.main.temp;
      const weatherCondition = forecast.weather[0].description;
      const weatherIcon =
        weatherIcons[weatherCondition] || weatherIcons["default"];

      const forecastElement = document.createElement("div");
      forecastElement.classList.add("forecast-item");
      forecastElement.innerHTML = `
      <div class="forecast-card">
          <h2>${date.toDateString()}</h2>
          <img src="${weatherIcon}" alt="${weatherCondition}" class="weather-icon">
          <h2>${temperature} °C</h2>
        </div>
        `;

      forecastContainer.appendChild(forecastElement);
    });
  };

  document.getElementById("search-button").addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    if (city) {
      fetchWeatherData(city);
    } else {
      alert("Please enter a city name");
    }
  });

  fetchWeatherData();
});
