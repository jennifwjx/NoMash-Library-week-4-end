<template>
    <div class="container">
        <div class="header">
            <h1>WEATHER APP</h1>
            <div class="search-bar">
                <input type="text" v-model="city" placeholder="Enter city name" class="search-input" />
                <button @click="searchByCity" class="search-button">Search</button>
            </div>
        </div>

        <!-- The main tag for displaying weather data -->
        <main>
            <!-- If there are no data returned, then skip rendering the information -->
            <div v-if="weatherData">
                <!-- Display the weather data attribute returned from API -->
                <h2>
                    {{ weatherData.name }}, {{ weatherData.sys.country }}
                </h2>
                <div>
                    <!-- The image source of the weather icon will be coming from a function called iconUrl -->
                    <img :src="iconUrl" alt="Weather Icon" />
                    <p>{{ temperature }} °C</p>
                </div>
                <!-- Display current weather description -->
                <span>{{ weatherData.weather[0].description }}</span>
            </div>
        </main>
    </div>
</template>

<script>
import axios from "axios";

// Replace this with your OpenWeatherMap API key
const apikey = "2bb83ec51a8b6ca50a1ea4b435084388";

export default {
    name: "App",
    data() {
        return {
            city: "",
            weatherData: null,
            hourlyForecast: [],
            dailyForecast: [],
        };
    },
    computed: {
        // Convert temperature from Kelvin to Celsius
        temperature() {
            return this.weatherData
                ? Math.floor(this.weatherData.main.temp - 273)
                : null;
        },
        // Get the current weather icon using the API link
        iconUrl() {
            return this.weatherData
                ? `https://api.openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
                : null;
        },
    },
    mounted() {
        this.fetchCurrentLocationWeather();
    },
    methods: {
        // Fetch weather data based on the current location
        async fetchCurrentLocationWeather() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;
                    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
                    await this.fetchWeatherData(url);
                });
            }
        },
        // Fetch weather data based on a provided URL
        async fetchWeatherData(url) {
            try {
                const response = await axios.get(url);
                this.weatherData = response.data;
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        },
        // Search weather data by city
        async searchByCity() {
            if (this.city) {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}`;
                await this.fetchWeatherData(url);
            }
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
}

.search-bar {
    margin-bottom: 20px;
}

.search-input {
    padding: 10px;
    font-size: 16px;
}

.search-button {
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
}
</style>
