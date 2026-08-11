# 🌤️ Weather App

A simple and responsive weather application built using **HTML, CSS, and JavaScript**.  
The app uses the **OpenWeather API** to fetch real-time weather information for cities around the world.

---

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ Display current temperature
- 🌤️ Dynamic weather images based on weather conditions
- 💧 Display humidity
- 💨 Display wind speed
- 🌎 Display city name
- 📱 Responsive and clean user interface
- ⚡ Real-time weather data using OpenWeather API

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- OpenWeather API

---

## 📂 Project Structure

```text
Weather-App/
│
├── images/
│   ├── clear.png
│   ├── clouds.png
│   ├── rain.png
│   ├── mist.png
│   ├── snow.png
│   ├── humidity.png
│   ├── wind.png
│   ├── drizzle.png
│   └── search.png
│
├── screenshots/
│   ├── weather-home.png
│
├── index.html
├── style.css
├── script.js
└── README.md

```

---

## 📸 Screenshots

### Weather App

![WEATHER-APP](screenshot/weather-home.png)

---


## 🔑 API Setup

This project uses the OpenWeather API.

Create an account on OpenWeather.
Generate an API key.
Add your API key to the JavaScript file.
const apiKey = 'YOUR_API_KEY';

For production applications, the API key should be stored securely on a backend server or using environment variables.

---

## ⚙️ How It Works

```text
The application follows this flow:

User enters city
       ↓
Search button clicked
       ↓
JavaScript gets city name
       ↓
Request sent to OpenWeather API
       ↓
Weather data received
       ↓
Weather information extracted
       ↓
HTML updated dynamically

```

---

## 📊 Weather Information

The application currently displays:

Information	API Data
City	data.name
Temperature	data.main.temp
Weather Condition	data.weather[0].main
Humidity	data.main.humidity
Wind Speed	data.wind.speed
🖼️ Dynamic Weather Images

The application uses the weather condition returned by the API to select the appropriate image.

For example:


```text
const weather = data.weather[0].main;
```
Then:

```text
<img src="images/${weather}.png" class="weather-image">
```
So if the API returns:

```text
rain
```
the application loads:

images/rain.png
▶️ Running the Project
Clone the repository:
git clone YOUR_REPOSITORY_URL
Open the project in VS Code.
Open index.html using Live Server.
Enter a city name in the search box.
Click the search button.

---

# 🔮 Future Improvements

Planned improvements include:

 Handle invalid city names
 Add loading indicator
 Search using the Enter key
 Add Celsius/Fahrenheit conversion
 Add current-location weather
 Improve mobile responsiveness
 Move API requests to a backend
 Secure API key using environment variables
 Add weather forecast for upcoming days

----

## 📚 What I Learned

While building this project, I practiced:

DOM manipulation
Event listeners
async/await
Fetch API
Working with JSON data
JavaScript objects and arrays
Template literals
Dynamic HTML generation
Working with external APIs
Updating webpage content dynamically

---

## 👨‍💻 Author

Shivam Bhosale

Built as a JavaScript learning project while learning Web Development and API integration.

⭐ If you found this project useful, feel free to star the repository!