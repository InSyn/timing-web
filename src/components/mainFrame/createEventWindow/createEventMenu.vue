<template>

  <div class="createEventMenuWrapper">

    <router-link tag="div"
                 class="menuItem competition"
                 :to="{name: 'competition'}"
                 active-class="link-active">

      <div class="itemButton">Соревнование</div>

    </router-link>

    <router-link tag="div"
                 class="menuItem competitors"
                 :to="{name: 'competitionCompetitors'}"
                 active-class="link-active">

      <div class="itemButton">Участники</div>

    </router-link>

    <router-link tag="div"
                 class="menuItem competitors"
                 :to="{name: 'races'}"
                 active-class="link-active">

      <div class="itemButton">Заезды</div>

    </router-link>

    <router-link tag="div"
                 class="menuItem competitors"
                 :to="{name: 'timing'}"
                 active-class="link-active">

      <div class="itemButton" >Хронометраж</div>

    </router-link>

  </div>

</template>

<script>

  export default {

    name: "createEventMenu"

  }

</script>

<style lang="scss" scoped>

  @import "../../../assets/scss/transition-conf";
  @import "../../../assets/scss/colors";

  .createEventMenuWrapper{
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding: 32px 16px;

    .menuItem{
      cursor: pointer;
      padding: 12px 8px;

      .itemButton{
        width: fit-content;
      }
      .itemButton::after{
        content: '';
        transition: width 128ms;
        display: block;
        height: 2px;
        background-color: $dark_blue-light;
        width: 0;
        margin-top: 2px;
        margin-right: auto;
      }
    }
    .link-active{

      .itemButton::after{
        content: '';
        transition: width 128ms;
        display: block;
        height: 2px;
        background-color: $dark_blue-light;
        width: 100%;
        margin-top: 2px;
        margin-right: auto;
      }
    }
    .competition{

    }
    .competitors{

    }
  }

</style>
