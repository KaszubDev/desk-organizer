<template>
  <div style="width: 100%;">
    <GoogleLogin id="googleLogout" :params="params" :renderParams="renderParams"
    :logoutButton=true
    :onSuccess="onSuccess">{{title}}</GoogleLogin>
  </div>
</template>

<script>

export default {
  name: 'LogoutWithGoogle',
  props: ['title'],
  data() {
    return {
      // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {
        client_id: '891763685217-acm57jm2tb80g3m2fc7c0f29jma9c6g0.apps.googleusercontent.com',
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        longtitle: true,
        width: '100%',
      },
    };
  },
  methods: {
    onSuccess() {
      this.$router.push('/login');
    },
  },
};
</script>
<style lang="scss">
.abcRioButton {
  width: 100% !important;
  height: 100% !important;
  padding: 8px;
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
#googleLogout {
  background: transparent;
  color: white;
  margin: 2px;
  border: none;
  transition: .2s ease-in;
  font-size: .8rem;
  &:hover {
    color: black;
  }
  @media (min-width: 900px) {
    margin: 5px;
    font-size: 1rem;
  }
}
</style>
