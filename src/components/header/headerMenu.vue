<template>

    <div class="headerMenuWrapper">

      <div class="menuList">

        <router-link class="menuItem" v-for="(item, index) in menuList" :key="index" tag="div" :to="item.url" active-class="linkActive">
          <a href="#"> {{item.title}} </a>
          <span class="selectedItem"></span>
        </router-link>

      </div>

      <router-link class="headerLogin" tag="div" :to="{name: 'authorization'}">

        <a href="#"></a>
        <div class="user">{{accountRole}}</div>

      </router-link>

    </div>

</template>

<script>

  import {mapGetters} from 'vuex';

    export default {

      name: "headerMenu",

      computed: {
        ...mapGetters('headerMenu', {
          menuList: 'menuList'
        }),
        ...mapGetters('authorization', {
          accountRole: 'accountRole'
        })
      }

    }

</script>

<style lang="scss" scoped>
  @import "../../assets/scss/colors";
  @import "../../assets/scss/transition-conf";

  .headerMenuWrapper{
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    .menuList{
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-end;

      .menuItem{
        position: relative;
        margin-left: 16px;
        cursor: pointer;

        .selectedItem{
          transition: transform $transition-time-double;
          transform-origin: center;
          width: 40%;
          border-radius: 4px;
          transform: scaleX(0);
        }
      }
      .linkActive{

        .selectedItem{
          position: absolute;
          bottom: -4px;
          left: 30%;
          transform: scaleX(1);
          display: block;
          height: 2px;
          background-color: $activeLinkColor;
        }
      }
    }
    .headerLogin{
      display: flex;
      align-items: center;
      height: max-content;
      font-size: 32px;
      margin-left: 72px;
      font-family: 'Segoe MDL2 Assets', sans-serif;

      .user{
        font-size: 0.8rem;
      }
    }
  }

</style>
