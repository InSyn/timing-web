<template>

    <div class="competitionsWrapper">

      <competitionsSideMenu class="sideMenu"></competitionsSideMenu>
      <competitionsMainFrame class="mainFrame"></competitionsMainFrame>

    </div>

</template>

<script>

  import competitionsSideMenu from "./competitionsSideMenu";
  import competitionsMainFrame from "./competitionsMainFrame";
  import {mapActions} from 'vuex';

  export default {
    name: "competitions",

    created(){

    },

    components: {
      competitionsSideMenu,
      competitionsMainFrame
    },

    methods: {
      ...mapActions('competitions', {
        loadSportsmen: 'loadSportsmen'
      })
    }
  }

</script>

<style lang="scss" scoped>

  .competitionsWrapper{
    padding: 24px 32px 0 32px;
    display: flex;
    max-height: calc(100% - 100px);

    .sideMenu{
      flex-basis: 228px;
    }
    .mainFrame{
      flex-grow: 1;
      max-height: inherit;
    }
  }

</style>
