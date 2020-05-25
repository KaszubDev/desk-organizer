<template>
  <div class="image-container">
    <img v-on:click="goToAddEvent()" src="../assets/icon-plus.png" alt="user icon" class="img-fluid" style="cursor: pointer;"/>
    <h1 v-on:click="readEvent()">Read events</h1>
  </div>
</template>

<script>

  import { db } from '../main.js';


  export default {
    name: 'MyCalendar',
    data() {
      return {
        eventId: [],
        fromDate: [],
        toDate: [],
        title: []
      };
    },
    methods: {
      goToAddEvent() {
        this.$router.push('/addEvent');
      },
      readEvent:  function () {
        const localId = parseInt(sessionStorage.getItem('loggedUserId'));
        var ref = firebase.database().ref().child('users/' + localId + '/events');
        let dataObj;
        ref.on('value', snap => {
             dataObj = snap.val();
             //console.log(dataObj);
             var arrFromObj = Array.from(dataObj);
             //console.log(arrFromObj);
             var i = 0;
             for (i; i < arrFromObj.length; i++){
               this.title+= (arrFromObj[i].toString());
             }
             console.log(this.title);
          });
          //console.log(this.title);
        }

    }
  };
</script>

<style scoped>

</style>
