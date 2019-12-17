<template>

  <form class="sideMenuWrapper" spellcheck="false">

    <div class="inputWrapper">
      <label class="inputLabel" for="surName">Фамилия</label>
      <input class="inputArea" id="surName" type="text"
             @blur="inputAnimation($event)"
             @focus="inputAnimation($event)">
    </div>

    <div class="inputWrapper">
      <label class="inputLabel" for="firstName">Имя</label>
      <input class="inputArea" id="firstName" type="text"
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
      <label class="inputLabel" for="twCode">TW-Code</label>
      <input class="inputArea" id="twCode" type="text"
             @blur="inputAnimation($event)"
             @focus="inputAnimation($event)">
    </div>

    <div class="inputWrapper">
      <label class="inputLabel" for="fisCode">FIS-Code</label>
      <input class="inputArea" id="fisCode" type="text"
             @blur="inputAnimation($event)"
             @focus="inputAnimation($event)">
    </div>

    <div class="inputWrapper">
      <label class="inputLabel" for="birthDate">Дата рождения</label>
      <input class="inputArea" id="birthDate" type="text"
             @blur="inputAnimation($event)"
             @focus="inputAnimation($event)">
    </div>

    <div class="inputWrapper">
      <label class="inputLabel" for="gender">Пол</label>
      <input class="inputArea" id="gender" type="text"
             @blur="inputAnimation($event)"
             @focus="inputAnimation($event)">
    </div>

    <div class="sportsmenSideMenuControls">

      <button type="button" class="filterButton">
        ПОКАЗАТЬ
      </button>

      <router-link tag="button" :to="{name: 'createSportsman'}" class="filterButton">
        <div class="">
          СОЗДАТЬ
        </div>
      </router-link>

    </div>

  </form>

</template>

<script>

  export default {
    name: "sportsmenSideMenu",

    components: {
    },

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

    .sportsmenSideMenuControls{
      display: flex;
      flex-direction: column;
      margin-top: auto;
    }
    button{
      background-color: $buttonBackgroundColor;
      color: $buttonTextColor;
      outline: 0 none;
      border: none;
      padding: 12px 0;
      font-size: 1rem;
      letter-spacing: 0.15px;
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

        &::selection{
          background-color: $textMainColor;
          color: #FFFFFF;
        }
      }
    }
    .filterButton{
      transition: background-color $transition-time-default;
      cursor: pointer;
      margin-top: 12px;

      *{
        color: $buttonTextColor
      }
      &:hover{
        background-color: lighten($buttonBackgroundColor, 10%)
      }
    }
  }

</style>
