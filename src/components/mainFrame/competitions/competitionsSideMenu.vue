<template>
    <form class="sideMenuWrapper" spellcheck="false">

      <div class="inputWrapper">
        <label class="inputLabel" for="season">Сезон</label>
        <input class="inputArea" id="season" type="text"
               @blur="inputAnimation($event)"
               @focus="inputAnimation($event)">
      </div>

      <div class="inputWrapper">
        <label class="inputLabel" for="discipline">Дисциплина</label>
        <input class="inputArea" id="discipline" type="text"
               @blur="inputAnimation($event)"
               @focus="inputAnimation($event)">
      </div>

      <div class="inputWrapper">
        <label class="inputLabel" for="category">Категория</label>
        <input class="inputArea" id="category" type="text"
               @blur="inputAnimation($event)"
               @focus="inputAnimation($event)">
      </div>

      <div class="inputWrapper">
        <label class="inputLabel" for="gender">Пол</label>
        <input class="inputArea" id="gender" type="text"
               @blur="inputAnimation($event)"
               @focus="inputAnimation($event)">
      </div>

      <div class="inputWrapper">
        <label class="inputLabel" for="location">Место проведения</label>
        <input class="inputArea" id="location" type="text"
               @blur="inputAnimation($event)"
               @focus="inputAnimation($event)">
      </div>

      <button type="button" class="filterButton">
        ПОКАЗАТЬ
      </button>

      <router-link class="createEvent" to="/createEvent" tag="div">
        <button class="createEventButton">Создать соревнование</button>
      </router-link>

    </form>

</template>

<script>

  import createEvent from "../createEventWindow/createEvent";

  export default {

    name: "competitionsSideMenu",

    components: createEvent,

    methods:{

      inputAnimation(e){
        e.target.value === '' ?
          e.target.parentElement.firstChild.classList.toggle('labelActive') :
          null
      }

    }

  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/transition-conf";
  @import "../../../assets/scss/colors";
  @import "../../../assets/scss/autocomplete";

  .sideMenuWrapper{
    display: flex;
    flex-direction: column;
    padding-bottom: 24px;

    button{
      background-color: $buttonBackgroundColor;
      color: $buttonTextColor;
      outline: 0 none;
      border: none;
      padding: 12px 0;
      font-size: 1rem;
      letter-spacing: 0.15px;
      margin-top: auto;
    }
    .createEventButton{
      cursor: pointer;
      width: 100%;
      margin-top: 12px;
      padding: 12px 24px;

      &:hover{
        transition: background-color $transition-time-default;
        background-color: lighten($buttonBackgroundColor, 10%)
      }
    }
    .inputWrapper{
      position: relative;
      margin-bottom: 40px;
      border-bottom: 1px solid $borderColor;

      .inputLabel{
        transition: $transition-time-default;
        position: absolute;
        cursor: text;
        top: 0;
        left: 8px;

        &.labelActive{
          top: -75%;
          font-size: 0.75rem;
        }
      }
      .inputArea{
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        padding: 4px 8px;
        font-size: 1rem;
        font-family: inherit;
        font-weight: inherit;
      }
    }
    .filterButton{
      transition: background-color $transition-time-default;
      cursor: pointer;

      &:hover{
        background-color: lighten($buttonBackgroundColor, 10%)
      }
    }
  }

</style>
