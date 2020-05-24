<template>
  <div class="root d-flex">
    <router-link to="/home">
    <LogoutWithGoogle class="logout" title="Logout"></LogoutWithGoogle>
    </router-link>
    <TemperatureComponent></TemperatureComponent>
    <CurrencyComponent/>
    <div class="calendar-container">
      <functional-calendar class="calendar-container__calendar" :is-dark='true'></functional-calendar>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Main',
};
</script>

<style lang="scss">
.root {
  color: #fff;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.logout {
  right: 0;
  position: absolute;
  width: auto !important;
  border: 1px solid #fff;
  margin: 2px;
  &:hover {
    background-color: white;
    color: black;
  }
}
.calendar-container {
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: top;
  position: relative;
  padding: 10px;
  margin-top: 30px;
  @media (min-width: 900px) {
    margin-top: 50px;
  }
  &__calendar {
    max-height: 40%;
    min-width: 40%;
    @media (min-width: 900px) {
      width: 100%;
      margin-top: 10%;
    }
  }
  .vfc-calendar {
    max-height: 250px;
    @media (min-width: 900px) {
      max-height: auto;
    }
  }
}
</style>
