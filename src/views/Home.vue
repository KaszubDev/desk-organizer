<template>
    <div class="root d-flex">
      <b-container class="text-center" fluid="sm">
        <div class="logo-container">
          <div>
          <h1>
            Desk <br>
            Organizer
          </h1>
          </div>
          <div class="logo-container__image">
            <img alt="logo image" class="img-fluid" src='../assets/logo.png'/>
          </div>
        </div>
        <div class="buttons-container">
          <router-link to="/Login">
            <CustomButton text="Sign in"/>
          </router-link>
          <br>
          <router-link to="/Register">
            <CustomButton text="Sign up"/>
          </router-link>
        </div>
      </b-container>
    </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
  .root {
    height: 100vh;
    color: #fff;
  }
  .logo-container {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;
    width: 80%;
    margin-top: 100px;
    h1 {
      font-weight: 300;
      line-height: 2rem;
    }
    .logo-container__image {
      max-width: 25%;
      margin-left: 10px;
    }
    @media (min-width: 1250px) {
      position: absolute;
      top: 15%;
      transform: translateX(-50%);
      left: 50%;
    }
  }
  .buttons-container {
    position: absolute;
    bottom: 10%;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    @media (min-width: 900px) {
      max-width: 40%;
    }
    @media (min-width: 1250px) {
      max-width: 25%;
    }
  }
</style>
