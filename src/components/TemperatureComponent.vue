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

  <div class="d-flex justify-content-between mt-2">
    <div class="d-flex weather-row">
      <img class="iconweather" alt="weather icon" src='../assets/pressure.svg'/>
      <div class="pressure">{{ pressure }} hPa</div>
    </div>

    <div class="d-flex weather-row">
      <img class="iconweather" alt="weather icon" src='../assets/wind.svg'/>
      <div class="wind">{{ windSpeed }} km/h</div>
    </div>
  </div>

  <canvas v-show="hourlyForecast" v-on:click="hourlyForecast = !hourlyForecast" id="bar-chart-h" width="800" height="200" class='chart'></canvas>
  <canvas v-show="!hourlyForecast" v-on:click="hourlyForecast = !hourlyForecast" id="bar-chart-d" width="800" height="200" class='chart'></canvas>

  <div class="mt-2" v-show="hourlyForecast" v-on:click="hourlyForecast = !hourlyForecast">
    <div class="htempdiv d-flex justify-content-between" :key="`item-${index}`" v-for="(temp, index) in hourlyTemp">
      <div>{{ temp[0] }}</div>
      <div>{{ temp[2] }}</div>
      <div><b>{{ temp[1] }}</b></div>
    </div>
  </div>

  <div class="mt-2" v-show="!hourlyForecast" v-on:click="hourlyForecast = !hourlyForecast">
    <div class="htempdiv" :key="`item-${index}`" v-for="(temp, index) in dailyTemp">
      <div class="d-flex justify-content-between">{{ temp[0] }} <b>{{ temp[1] }}</b></div>
      <div>{{ temp[2] }}</div>
      <div class="spacer"></div>
    </div>
  </div>
</div>
</template>

<script>
import Chart from 'chart.js';

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
      hourlyTempChart: [],
      dailyTempChart: [],
      hourlyForecast: false,
      dailyForecast: true,
    };
  },
  methods: {
    async getWeatherData() {
      var hourly = [];
      var daily = [];
      var dailyLabels = [];
      var hourlyLabels = [];

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
            this.hourlyTempChart.push(val.temperature);
            hourly.push(val.temperature);
            hourlyLabels.push(timestamp);

          }
          for (const val of data.daily.data) {
            const date = new Date(val.time * 1000);
            const month = `0${(date.getMonth() + 1).toString()}`;
            const day = `0${(date.getDate() + 1).toString()}`;
            const fullDate = `${month.substr(-2)}.${day.substr(-2)}`;
            this.dailyTemp.push([fullDate, `${parseInt(val.temperatureHigh)} °C`, val.summary]);
            this.dailyTempChart.push(val.temperatureHigh);
            daily.push(val.temperatureHigh);
            dailyLabels.push(fullDate);

          }

          this.drawChart(hourly, hourlyLabels, document.getElementById('bar-chart-h'));
          this.drawChart(daily, dailyLabels, document.getElementById('bar-chart-d'));
        });

    },
    drawChart(temps, labels, context) {

      new Chart(context, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: "Temperature in Celsius degrees",
                backgroundColor: "#3e95cd",
                data: temps
              }
            ]
          },
          options: {
            labels: { display: false },
            legend: { display: false },
          }
        });
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
  font-size: .7rem;
  @media (min-width: 900px) {
    font-size: 1rem;
  }
}
.iconweather{
  width: 2rem;
  filter: invert(1);
}
.wind, .humidity, .pressure,.temp{
  font-size: .85rem;
  position: relative;
  left: 0.7rem;
  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
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
.chart{
  margin-top: 15px;
}
</style>
