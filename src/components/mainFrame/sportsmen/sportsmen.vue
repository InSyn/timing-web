<template>

  <div class="sportsmenListWrapper">

    <sportsmenSideMenu class="sideMenu"></sportsmenSideMenu>
    <sportsmenMainFrame class="mainFrame"></sportsmenMainFrame>

  </div>

</template>

<script>
  import sportsmenMainFrame from './sportsmenMainFrame';
  import sportsmenSideMenu from './sportsmenSideMenu';

  export default {
    name: "sportsmen",

    components:{
      sportsmenMainFrame,
      sportsmenSideMenu
    }
  }
</script>

<style lang="scss" scoped>

  .sportsmenListWrapper{
    padding: 24px 32px 0 32px;
    display: flex;
    max-height: calc(100% - 100px);

    .sideMenu{
      min-width: 228px;
    }
    .mainFrame{
      flex-grow: 1;
      max-height: inherit;
    }
  }

</style>
