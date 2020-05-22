<template>
    <div class="root">
      <TopBar title='Event' to='/Main'/>
      <div class="spacer mt-2"></div>
      <b-container fluid="sm">
        <div class="functional-container">
          <input placeholder="Event Title*" type="text" v-model="title">
<!--          <CustomInput type="text" placeholder="Event Title" v-model="title"/>-->
          <div class="setEventTime mt-5">
              <div class="d-flex justify-content-between align-items-center">
                <p style="opacity: .7">Start</p>
                <b-form-datepicker class="w-50" size="sm" offset="-130" v-model="from"></b-form-datepicker>
              </div>
              <div class="spacer mb-3"></div>
              <div class="d-flex justify-content-between align-items-center">
                <p style="opacity: .7">Finish</p>
                <b-form-datepicker class="w-50" size="sm" offset="-130" v-model="to"></b-form-datepicker>
              </div>
          </div>
          <div v-on:click="addEvent()">
            <CustomButton class="custom-btn" text="Add event"/>
          </div>
          <p v-show="hint" id="hint" style="opacity: .7"></p>
        </div>
      </b-container>
    </div>
</template>

<script>
export default {
  name: 'AddEvent',
  data() {
    return {
      from: '',
      to: '',
      title: '',
      hint: false,
    };
  },
  methods: {
    addEvent() {
      // eslint-disable-next-line radix
      const localId = parseInt(sessionStorage.getItem('loggedUserId'));
      if (this.from !== '' && this.to !== '' && this.title !== '') {
        document.getElementById('hint').innerText = 'Event added';
        // eslint-disable-next-line no-undef
        addNewEvent(localId, this.from, this.to, this.title);
      } else {
        document.getElementById('hint').innerText = 'You can not add empty event';
      }
      this.hint = true;
      // console.log(localId, ' ', this.from, ' <- from', this.title, this.to);
    },
  },
};
</script>

<style lang="scss" scoped>
.root {
  height: 100vh;
  color: white;
}
.spacer {
  height: 1px;
  background-color: #fff;
  opacity: .5;
}
.custom-btn {
  margin-top: 100px;
  @media (min-width: 900px) {
    margin-top: 30px;
  }
}
.functional-container {
  margin-top: 30px;
  @media (min-width: 900px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    min-width: 40%;
  }
  @media (min-width: 1250px) {
    min-width: 25%;
  }
}
input {
  width: 100%;
  margin-bottom: 5px;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 10px;
}
</style>
