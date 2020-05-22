<template>
  <button class="btn btn-dark">{{text}}</button>
</template>

<script>
export default {
  props: ['text'],
  name: 'CustomButton',
};
</script>

<style lang="scss" scoped>
  button {
      width: 100%;
      margin-bottom: 30px;
      border-radius: 50px;
      padding: 10px;
      border: 1px solid white;
      background-color: #000;
      transition: .2s ease-in-out;
      &:hover {
        background-color: #fff;
        color: #000;
      }
  }
</style>
