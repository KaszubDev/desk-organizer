<template>
  <div class="top-container text-center">
        <router-link class="back-arrow" :to="to">
          <button class="btn btn-dark">
            <img alt="left arrow to return" src='../assets/left-arrow.png' class="img-fluid"/>
          </button>
        </router-link>
        <h5 class="pt-2">{{title}}</h5>
    </div>
</template>

<script>
export default {
  props: ['title', 'to'],
  name: 'TopBar',
};
</script>

<style lang="scss" scoped>
.back-arrow {
  position: absolute;
  left: 1%;
}
.top-container {
  .btn {
    background-color: #000;
    border: none;
    img {
      max-height: 15px;
    }
  }
}
</style>
