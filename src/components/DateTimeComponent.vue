<template>
  <div class="d-flex justify-content-between">
    <div id="hour">
      {{ hour }}
    </div>
    <div>
      <img class="icon img-fluid" alt="weather icon" :src="weatherIconSrc"/>
      <p id="date">{{ date }}</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'DateTimeComponent',
  props: ['weather'],
  data() {
    return {
      hour: '',
      date: '',
      todayWeather: this.weather,
    };
  },
  computed: {
    weatherIconSrc() {
      if (this.todayWeather === 'partly-cloudy-day') return require('../assets/part-cloudy-day.svg')
      if (this.todayWeather === 'clear-day') return require('../assets/clear-day.svg')
      if (this.todayWeather === 'clear-night') return require('../assets/clear-night.svg')
      if (this.todayWeather === 'rain') return require('../assets/rain.svg')
      if (this.todayWeather === 'snow') return require('../assets/snow.svg')
      if (this.todayWeather === 'sleet') return require('../assets/sleet.svg')
      if (this.todayWeather === 'wind') return require('../assets/wind-weather.svg')
      if (this.todayWeather === 'fog') return require('../assets/fog.svg')
      if (this.todayWeather === 'cloudy') return require('../assets/cloudy.svg')
      if (this.todayWeather === 'partly-cloudy-night') return require('../assets/part-cloudy-night.svg')
    }
  },
  methods: {
    async getDateTimeFunction() {
      this.hour = moment().format('HH:mm');
      this.date = moment().format('dddd, Do MMMM YYYY');
    },
  },
  mounted () {
    this.getDateTimeFunction();
    this.timer = setInterval(this.getDateTimeFunction, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};

</script>

<style scoped>
.icon{
  width: 40%;
  filter: invert(1);
  float: right;
}
#hour{
  font-size: 3rem;
}
#date{
  font-size: 0.8rem;
  clear: both;
  text-align: right;
}
</style>
