<template>
<div class="root">
  <DateTimeComponent v-if="weather" :weather="weather"></DateTimeComponent>
  <div class="d-flex justify-content-between">
    <div class="d-flex weather-row">
      <img class="iconweather" alt="weather icon" src='../assets/humidity.svg'/>
      <div class="humidity">{{ humidity }} %</div>
    </div>

    <div class="d-flex weather-row">
      <img class="iconweather" alt="weather icon" src='../assets/temperature.svg'/>
      <div class="temp">{{ temperature }} °C</div>
    </div>
  </div>

  <div class="d-flex justify-content-between mt-3">
    <div class="d-flex weather-row">
      <img class="iconweather" alt="weather icon" src='../assets/pressure.svg'/>
      <div class="pressure">{{ pressure }} kPa</div>
    </div>

    <div class="d-flex weather-row">
      <img class="iconweather" alt="weather icon" src='../assets/wind.svg'/>
      <div class="wind">{{ windSpeed }} km/h</div>
    </div>
  </div>

  <div class="mt-2" v-show="hourlyForecast" v-on:click="hourlyForecast = !hourlyForecast, dailyForecast = !dailyForecast">
    <div class="htempdiv d-flex justify-content-between" :key="`item-${index}`" v-for="(temp, index) in hourlyTemp">
      <div>{{ temp[0] }}</div>
      <div>{{ temp[2] }}</div>
      <div><b>{{ temp[1] }}</b></div>
    </div>
  </div>

  <div class="mt-2" v-show="dailyForecast" v-on:click="hourlyForecast = !hourlyForecast, dailyForecast = !dailyForecast">
    <div class="htempdiv" :key="`item-${index}`" v-for="(temp, index) in dailyTemp">
      <div class="d-flex justify-content-between">{{ temp[0] }} <b>{{ temp[1] }}</b></div>
      <div>{{ temp[2] }}</div>
      <div class="spacer"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TemperatureComponent',
  data() {
    return {
      temperature: '',
      hour: '',
      weather: '',
      humidity: '',
      pressure: '',
      windSpeed: '',
      hourlyTemp: [],
      dailyTemp: [],
      hourlyForecast: false,
      dailyForecast: true,
    };
  },
  methods: {
    getWeatherData() {
      const proxyURL = 'https://cors-anywhere.herokuapp.com/';
      const url = proxyURL + 'https://api.darksky.net/forecast/7a31a719515942165dd6e87e76096fb4/50.049683,%2019.944544?units=si';

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.temperature = data.currently.temperature;
          this.humidity = data.currently.humidity;
          this.windSpeed = data.currently.windSpeed;
          this.pressure = data.currently.pressure;
          this.weather = data.currently.icon;

          for (const val of data.hourly.data) {
            const time = new Date(val.time * 1000);
            const timestamp = `${(`0${time.getHours()}`).substr(-2)}:00 `;
            this.hourlyTemp.push([timestamp, `${parseInt(val.temperature)} °C`, val.summary]);
          }
          for (const val of data.daily.data) {
            const date = new Date(val.time * 1000);
            const month = `0${(date.getMonth() + 1).toString()}`;
            const day = `0${(date.getDate() + 1).toString()}`;
            const fullDate = `${month.substr(-2)}.${day.substr(-2)}`;
            this.dailyTemp.push([fullDate, `${parseInt(val.temperatureHigh)} °C`, val.summary]);
            }
           }
        );
    }
  },
  mounted () {
    this.getWeatherData();
  }
}
</script>

<style lang="scss" scoped>
.root {
  padding: 10px;
  width: 40%;
}
.time {
  font-size: 3rem;
}
.htempdiv{
  margin-top: 2px;
}
.iconweather{
  width: 20%;
  filter: invert(1);
}
.wind, .humidity, .pressure,.temp{
  font-size: 1rem;
  position: relative;
  left: 0.7rem;
  font-family: "Comfortaa Light";
}
.temp{
  float: right;
}
.weather-row {
  width: 40%;
}
.spacer {
  height: .1px;
  background-color: #fff;
  opacity: .3;
}
</style>
