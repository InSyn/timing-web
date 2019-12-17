<template>

  <div class="headerWrapper">

    <headerLogo></headerLogo>
    <headerMenu></headerMenu>

  </div>

</template>

<script>
  import headerLogo from './headerLogo'
  import headerMenu from './headerMenu'

  export default {

    name: "appHeader",

    components:{
      headerLogo,
      headerMenu
    }

  }
</script>

<style lang="scss" scoped>

  .headerWrapper{
    display: flex;
    flex-wrap: nowrap;
  }

</style>
