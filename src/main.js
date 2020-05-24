import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import GoogleLogin from 'vue-google-login';
import firebase from 'firebase/app';
import 'firebase/firestore';
import VueTextareaAutosize from 'vue-textarea-autosize';
import App from './App.vue';
import router from './router';
import CustomButton from './components/CustomButton.vue';
import CustomInput from './components/CustomInput.vue';
import TopBar from './components/TopBar.vue';
import MyCalendar from './components/MyCalendar.vue';
import TemperatureComponent from './components/TemperatureComponent.vue';
import LoginWithGoogle from './components/LoginWithGoogle.vue';
import LogoutWithGoogle from './components/LogoutWithGoogle.vue';
import DateTimeComponent from './components/DateTimeComponent.vue';
import CurrencyComponent from './components/CurrencyComponent.vue';
import { FunctionalCalendar } from 'vue-functional-calendar';
import { LoaderPlugin } from 'vue-google-login';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './registerServiceWorker';

Vue.component('CustomButton', CustomButton);
Vue.component('CustomInput', CustomInput);
Vue.component('TopBar', TopBar);
Vue.component('MyCalendar', MyCalendar);
Vue.component('TemperatureComponent', TemperatureComponent);
Vue.component('GoogleLogin', GoogleLogin);
Vue.component('LoginWithGoogle', LoginWithGoogle);
Vue.component('LogoutWithGoogle', LogoutWithGoogle);
Vue.component('DateTimeComponent', DateTimeComponent);
Vue.component('CurrencyComponent', CurrencyComponent);
Vue.component('FunctionalCalendar', FunctionalCalendar);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueTextareaAutosize);
Vue.config.productionTip = false;
Vue.use(LoaderPlugin, {
  client_id: '439953774653-7v3u79r0n9hd9imv844rlu621tnl8jq7.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events.readonly https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.events.readonly',

});

firebase.initializeApp({
  apiKey: 'AIzaSyDvMEsaN4ivlogM2tUmMjGHpCER7tezSfI',
  authDomain: 'desk-organizer.firebaseapp.com',
  databaseURL: 'https://desk-organizer.firebaseio.com',
  projectId: 'desk-organizer',
  storageBucket: 'desk-organizer.appspot.com',
  messagingSenderId: '439953774653',
  appId: '1:439953774653:web:ac2ea26c1367f39b68f254',
  measurementId: 'G-KWETXEY06J',
});


export const db = firebase.firestore();

new Vue({
  router,
  mode: 'hash',
  render: (h) => h(App),
}).$mount('#app');
