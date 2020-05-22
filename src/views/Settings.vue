<template>
    <div class="root">
      <TopBar title='Settings' to='/Main'/>
      <div class="image-container">
        <img src="../assets/person.png" alt="person icon" class="img-fluid"/>
      </div>
      <div class="menu mt-5">
        <div class="bg-grey">
          <span>Profile</span>
        </div>
        <div class="bg-white">Username</div>
        <div class="bg-white">Email</div>
        <div class="bg-grey">
          <span>Account</span>
        </div>
        <div class="bg-white">Change password</div>
        <div class="bg-white">Log out...</div>
        <div class="bg-grey">
          <span>Customize</span>
        </div>
        <div class="bg-white">Customize dashboard</div>
        <div class="bg-white">Reset to default</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Settings',
};
</script>

<style lang="scss" scoped>
.root {
  height: 100vh;
  color: white;
}
.image-container {
  margin: 10% auto 0 auto;
  width: 100px;
  @media (min-width: 600px) {
    margin-top: 5%;
  }
}
.menu {
  color: #000;
  div {
    padding: 10px;
  }
  @media (min-width: 600px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    min-width: 60%;
  }
  @media (min-width: 900px) {
    min-width: 40%;
  }
}
.bg-grey {
  background-color: #EFF1F8;
  span {
    text-transform: uppercase;
    font-size: .8rem;
    opacity: .5;
  }
}
</style>
