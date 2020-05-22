<template>
    <div class="root">
      <TopBar title='Sign up' to='/Home'/>
      <div class="spacer mt-2"></div>
      <b-container class="text-center" fluid="sm">
        <div class="information-text">
          <h5>Sign up</h5>
          <p>When you use this method we will not be
              able to get events from your Google
              Calendar and you will have to do it manually.</p>
        </div>
        <div class="functional-container">
          <input placeholder="Email*" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" id="email" type="email" v-model="email">
          <input placeholder="Password*" id="pass1" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" type="password" v-model="pass1">
          <input placeholder="Re-enter Password**" id="pass2" type="password" v-model="pass2">
<!--          <CustomInput type="email" placeholder="Email*"/>-->
<!--          <CustomInput type="password" placeholder="Password*"/>-->
<!--          <CustomInput type="password" placeholder="Re-enter Password*"/>-->
          <p style="opacity: .7"  id="hint">For security use 8 or more characters with a mix
              of letters, numbers & symbols</p>
          <div v-on:click="saveData">
          <CustomButton class="custom-btn" text="Submit" v-on:click="saveData()" />
          </div>
          <p style="opacity: .5; font-size: .8rem;">
            By proceeding you also agree to the Terms of Service
            and Privacy Policy</p>
        </div>
      </b-container>
    </div>
</template>

<script>
export default {
  props: ['placeholder', 'type'],
  name: 'Register',
  data() {
    return {
      email: '',
      pass1: '',
      pass2: '',
    };
  },
  methods: {
    saveData() {
      if (this.pass1 === this.pass2 && this.pass1 !== '') {
        // eslint-disable-next-line no-undef
        saveToDb(this.email, this.pass1);
        this.$router.push('/login');
      } else {
        document.getElementById('hint').innerText = 'Make sure you re-entered password correctly.';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.root {
  height: 100vh;
  color: white;
}
.information-text {
  margin-top: 100px;
  opacity: .8;
}
.spacer {
  height: 1px;
  background-color: #fff;
  opacity: .5;
}
.custom-btn {
  margin-bottom: 15px;
  @media (min-width: 900px) {
    margin-top: 30px;
  }
}
.functional-container {
  margin-top: 80px;
  @media (min-width: 900px) {
    position: absolute;
  left: 50%;
  transform: translateX(-50%);
      max-width: 40%;
  }
  @media (min-width: 1250px) {
      max-width: 25%;
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
