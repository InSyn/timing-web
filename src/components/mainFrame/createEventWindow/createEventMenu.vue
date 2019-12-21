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

      <div class="itemButton">Хронометраж</div>

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
    height: 50px;
    padding: 16px 32px 0 32px;

    .menuItem{
      cursor: pointer;
      padding: 4px 8px;

      .itemButton::after{
        content: '';
        transition: width 128ms;
        display: block;
        height: 2px;
        background-color: #00A0E3;
        width: 0;
        margin-top: 2px;
        margin-right: auto;
        margin-left: auto;
      }
    }
    .link-active{

      .itemButton::after{
        content: '';
        transition: width 128ms;
        display: block;
        height: 2px;
        background-color: #00A0E3;
        width: 60%;
        margin-top: 2px;
        margin-right: auto;
        margin-left: auto;
      }
    }
    .competition{

    }
    .competitors{

    }
  }

</style>
