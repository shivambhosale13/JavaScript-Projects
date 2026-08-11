const searchButton = document.querySelector('.js-search-icon')

searchButton.addEventListener('click' , async() =>{
  const cityName = document.querySelector('.js-search-input').value;
  const apiKey = 'YOUR_API_KEY';

  const apiReq = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`

  const response = await fetch(apiReq);
  const data = await response.json();

  const temperature = Math.floor(data.main.temp);

  const weather = data.weather[0].main;

  const windspeed = data.wind.speed;
  const humidity = data.main.humidity;

  let html = ''

  html = `
    <img src="images/${weather}.png" class="weather-image">
    <div class="temperature js-temperature">
      ${temperature}°C
    </div>
    <div class="city-name js-city-name">
      ${data.name}
    </div>

    <div class="extra-info">
      
      <div class="col">
        <img src="images/humidity.png" class="weather-icon">
        <div>
          <p class="humidity">
            ${humidity}%
          </p>
          <p>
          humidity
          </p>
        </div>
      </div>

      <div class="col">
        <img src="images/wind.png" class="weather-icon">
        <div>
          <p class="wind">
            ${windspeed} km/h
          </p>
          <p>
            Wind Speed
          </p>
        </div>
      </div>
    </div>
  
  `

  document.querySelector('.js-Weather-container')
  .innerHTML = html;
})


