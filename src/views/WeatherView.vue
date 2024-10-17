<script>
import axios from "axios";

const apikey = "25b31e089b09e6a407c5643b4001d221";

export default {
    name: "App",
    data() {
        return {
            city: "",
            weatherData: null,
        };
    },
    computed: {
        temperature() {
            return this.weatherData ? Math.floor(this.weatherData.main.temp) : null;
        },
        iconUrl() {
            return this.weatherData
                ? `https://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
                : null;
        },
    },
    mounted() {
        this.fetchCurrentLocationWeather();
    },
    methods: {
        async fetchCurrentLocationWeather() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;
                    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`;
                    await this.fetchWeatherData(url);
                });
            }
        },
        async fetchWeatherData(url) {
            try {
                const response = await axios.get(url);
                this.weatherData = response.data;
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        },
        async searchByCity() {
            if (this.city) {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}&units=metric`;
                await this.fetchWeatherData(url);
            } else {
                console.error("Please enter a city name");
            }
        }
    }
};
</script>