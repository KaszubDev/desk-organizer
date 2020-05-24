<template>
  <div style="width: 100%;">
    <GoogleLogin :params="params" :renderParams="renderParams"
    :logoutButton="isLogoutButton"
    :onSuccess="onSuccess">{{title}}</GoogleLogin>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginWithGoogle',
  props: ['isLogoutButton','title'],
  data() {
            return {
                // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
                params: {
                    client_id: "439953774653-7v3u79r0n9hd9imv844rlu621tnl8jq7.apps.googleusercontent.com"
                },
                // only needed if you want to render the button with the google ui
                renderParams: {
                    longtitle: true,
                    width: '100%',
                },
                items: null,
            }
      },
  methods: {
          onSuccess() {
            /*
              axios.get('https://www.googleapis.com/calendar/v3/calendars/primary/events')
                .then((response => this.items = response))
                .catch((err) => console.log(err));
            */

            this.$router.push('/main');
          }
      }
};
</script>
<style lang="scss">
.abcRioButton {
  width: 100% !important;
  height: 100% !important;
  padding: 6px;
  border-radius: 50px !important;
  background-color: transparent !important;
  color: #fff !important;
  border: 1px solid;
  margin-bottom: 20px;
  &:hover {
    background-color: #fff !important;
    color: #000 !important;
  }
}
.abcRioButtonContents {
  font-size: .9rem !important;
}
</style>
