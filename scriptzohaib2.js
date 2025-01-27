const weatherData = [
    {
        city: "Karachi",
        temperature: 32,
        condition: "Sunny",
        humidity: 60,
        windSpeed: 10,
    },
    {
        city: "Lahore",
        temperature: 28,
        condition: "Cloudy",
        humidity: 70,
        windSpeed: 8,
    },
    {
        city: "Islamabad",
        temperature: 25,
        condition: "Rainy",
        humidity: 80,
        windSpeed: 5,
    },
    {
        city: "Quetta",
        temperature: 22,
        condition: "Clear",
        humidity: 45,
        windSpeed: 15,
    },
    {
        city: "Peshawar",
        temperature: 30,
        condition: "Partly Cloudy",
        humidity: 55,
        windSpeed: 12,
    }
];

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherInfo = document.getElementById('weatherInfo');
const darkModeToggle = document.getElementById('darkModeToggle');

searchBtn.addEventListener('click', searchWeather);
cityInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchWeather();
    }
});

darkModeToggle.addEventListener('click', toggleDarkMode);

function searchWeather() {
    const cityName = cityInput.value.trim().toLowerCase();
    const cityData = weatherData.find(data => data.city.toLowerCase() === cityName);

    if (cityData) {
        displayWeather(cityData);
    } else {
        weatherInfo.innerHTML = '<p>City not found. Please try another city.</p>';
    }
}

function displayWeather(data) {
    const weatherIcon = getWeatherIcon(data.condition);
    const weatherImage = getWeatherImage(data.condition);
    const html =`
        <h2>${data.city}</h2>
        <div class="weather-details">
            <div class="weather-icon">${weatherIcon}</div>
            <div>
                <p>Temperature: ${data.temperature}°C</p>
                <p>Condition: ${data.condition}</p>
                <p>Humidity: ${data.humidity}%</p>
                <p>Wind Speed: ${data.windSpeed} km/h</p>
            </div>
        </div>
    `;
    weatherInfo.innerHTML = html;
}

function getWeatherIcon(condition) {
    switch (condition.toLowerCase()) {
        case 'sunny':
            return '<i class="fas fa-sun"></i>';
        case 'cloudy':
            return '<i class="fas fa-cloud"></i>';
        case 'rainy':
            return '<i class="fas fa-cloud-rain"></i>';
        case 'clear':
            return '<i class="fas fa-moon"></i>';
        case 'partly cloudy':
            return '<i class="fas fa-cloud-sun"></i>';
        default:
            return '<i class="fas fa-question"></i>';
    }
}

function getWeatherImage(condition) {
    switch (condition.toLowerCase()) {
        case 'sunny':
            return '/placeholder.svg?height=100&width=100&text=Sunny';
        case 'cloudy':
            return '/placeholder.svg?height=100&width=100&text=Cloudy';
        case 'rainy':
            return '/placeholder.svg?height=100&width=100&text=Rainy';
        case 'clear':
            return '/placeholder.svg?height=100&width=100&text=Clear';
        case 'partly cloudy':
            return '/placeholder.svg?height=100&width=100&text=Partly+Cloudy';
        default:
            return '/placeholder.svg?height=100&width=100&text=Weather';
    }
}


function toggleDarkMode() {
    document.body.classList.toggle("dark-mode")
    updateBackgroundImage()
  }
  
  function updateBackgroundImage() {
    const body = document.body
    if (body.classList.contains("dark-mode")) {
      body.style.backgroundImage = "url('free-photo-of-traffi-at-night.jpeg')"
    } else {
      body.style.backgroundImage = "url('shahra-e-faisal-road-karachi-traffic.jpg')"
    }
  }

// *****   Prevents user to click ctrl + u ***** 
  document.addEventListener("keydown", function (event) {
    // Check if 'Control' and 'U' keys are pressed together
    if (event.ctrlKey && event.key.toLowerCase() === 'u') {
      event.preventDefault(); // Prevent the default action
   
    }
  });

  updateBackgroundImage()
  
  
