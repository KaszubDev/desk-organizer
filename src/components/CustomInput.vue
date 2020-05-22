<template>
  <input :type="type" :placeholder='placeholder'>
</template>

<script>
export default {
  props: ['placeholder', 'type'],
  name: 'CustomInput',
};
</script>

<style lang="scss" scoped>
  input {
    width: 100%;
    margin-bottom: 5px;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 10px;
  }
</style>
