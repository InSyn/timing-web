<template>

  <div class="createEventWrapper">

    <createEventMenu></createEventMenu>

    <router-view></router-view>

  </div>

</template>

<script>

  import createEventMenu from './createEventMenu'

    export default {

      name: "createEvent",

      components: {
        'createEventMenu': createEventMenu
      }
    }

</script>

<style lang="scss" scoped>

  .createEventWrapper{
    display: flex;
    height: calc(100% - 100px);
  }

</style>
