<template>
  <div class="root text-center mt-3">
    <div class="image-container">
      <img v-on:click="goToSettings()" src="../assets/person.png" alt="user icon" class="img-fluid" style="cursor: pointer;"/>
    </div>
    <div v-for="(item, index) in currency_items" :key="`item-${index}`" class="currency-item">
      <div class="d-flex justify-content-center mt-2">
        <p style="font-size: 1.1rem; margin: 0;">{{item.name}}</p>
        <div class="currency-arrow ml-2">
          <img v-if="(item.yesterday_value != null) && (item.value > item.yesterday_value)" alt="currency value increase" src="../assets/triangle_green.png" class="img-fluid"/>
          <img v-if="(item.yesterday_value != null) && (item.value < item.yesterday_value)" alt="currency value decrease" src="../assets/triangle_red.png" class="img-fluid"/>
        </div>
      </div>
      <span style="opacity: .7">{{item.value}} zł</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'CurrencyComponent',
  data() {
    return {
      currency_items: [
        {
          name: 'EUR',
          value: null,
          yesterday_value: null,
        },
        {
          name: 'GBP',
          value: null,
          yesterday_value: 3,
        },
        {
          name: 'USD',
          value: null,
          yesterday_value: 3,
        },
        {
          name: 'NOK',
          value: null,
          yesterday_value: 3,
        },
        {
          name: 'SEK',
          value: null,
          yesterday_value: null,
        },
        {
          name: 'CHF',
          value: null,
          yesterday_value: null,
        },
      ],
    };
  },
  methods: {
    goToSettings() {
      this.$router.push('/settings');
    },
  },
  computed: {
    yesterday_date() {
      return moment().subtract(1, 'days').format('YYYY-MM-DD');
    },
  },
  mounted() {
    for (const key in this.currency_items) {
      axios.get(`https://api.nbp.pl/api/exchangerates/rates/a/${this.currency_items[key].name}/?format=json`)
        .then((response) => this.currency_items[key].value = response.data.rates[0].mid.toFixed(2))
        .catch((err) => console.log(err));
    }
    for (const key in this.currency_items) {
      axios.get(`https://api.nbp.pl/api/exchangerates/rates/a/${this.currency_items[key].name}/${this.yesterday_date}/?format=json`)
        .then((response) => this.currency_items[key].yesterday_value = response.data.rates[0].mid.toFixed(2))
        .catch((err) => console.log(err));
    }
  },
};
</script>

<style lang="scss" scoped>
.root {
  width: 20%;
}
.image-container {
  margin: 0 auto;
  max-width: 40%;
}
.currency-arrow {
  max-width: 10%;
  @media (min-width: 900px) {
    max-width: 5%;
  }
}
</style>
