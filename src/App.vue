<template>
  <div id="app">

    <div class="appWrapper">

      <appHeader class="appHeader"></appHeader>
      <router-view></router-view>

    </div>

  </div>
</template>

<script>

  import appHeader from './components/header/appHeader';

  export default {

    name: 'app',

    components: {
      appHeader
    }

  }
</script>

<style lang="scss">
  @import "assets/scss/colors";
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap&subset=cyrillic');

  *, ::before, ::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: $textMainColor;
  }
  *::selection{
    background-color: $textMainColor;
    color: #FFFFFF;
  }

  html{
    background: url("./assets/background/background.jpg") no-repeat fixed;
    background-size: cover;
    height: 100%;

    body{
      height: inherit;

      #app{
        background: inherit;
        height: inherit;
        width: 100vw;
        font-family: 'Montserrat', sans-serif;
        font-weight: normal;
        font-style: normal;
        overflow: hidden;

        .appWrapper{
          max-width: 1440px;
          margin: auto;
          height: inherit;

          .appHeader{
            padding: 24px 32px;
          }
        }
      }

    }
  }

</style>
