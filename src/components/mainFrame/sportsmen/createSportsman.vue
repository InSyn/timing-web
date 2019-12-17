<template>
  <div class="createSportsmanWrapper">

    <div class="createSportsmanInputWrapper">

      <div class="createSportsmanInput">
        <label for="tw_code">T-Id</label>
        <input v-model="profile.tw_code" type="text" id="tw_code">
      </div>

    </div>

    <div class="createSportsmanInputWrapper">

      <div class="createSportsmanInput">
        <label for="fis_code">FIS-Code</label>
        <input v-model="profile.fis_code" type="text" id="fis_code">
      </div>

    </div>

    <div class="createSportsmanInputWrapper">

      <div class="createSportsmanInput">
        <label for="surname">Фамилия</label>
        <input v-model="profile.surname" type="text" id="surname">
      </div>

    </div>

    <div class="createSportsmanInputWrapper">

      <div class="createSportsmanInput">
        <label for="name">Имя</label>
        <input v-model="profile.name" type="text" id="name">
      </div>

    </div>

    <div class="createSportsmanInputWrapper">

      <div class="createSportsmanInput">
        <label for="sex">Пол</label>
        <input v-model="profile.sex" type="text" id="sex">
      </div>

    </div>

    <div class="createSportsmanInputWrapper">

      <div class="createSportsmanInput">
        <label for="birthDate">Дата рождения</label>
        <input v-model="profile.birth_date" type="text" id="birthDate">
      </div>

    </div>

    <div class="createSportsmanInputWrapper">

      <div class="createSportsmanInput">
        <label for="region">Регион</label>
        <input v-model="profile.region" type="text" id="region">
      </div>

    </div>

    <button type="button" @click="createSportsman(profile)">
      Создать профиль
    </button>

  </div>
</template>

<script>

  import {mapActions} from 'vuex'

    export default {

      mounted(){

        let inputs = document.querySelectorAll('.createSportsmanInput');

        for (let input in inputs){

          this.animateInput(inputs[input].lastChild, 'blur');

          this.animateInput(inputs[input].lastChild, 'focus');

        }

      },

      name: "createSportsman",

      data(){

        return {

          profile: {
            tw_code: '',
            fis_code: '',
            surname: '',
            name: '',
            sex: '',
            birth_date: '',
            region: ''
          }

        }

      },

      methods:{

        ...mapActions('createSportsman', {

          createSportsman: 'createSportsman'

        }),

        animateInput(elem, ev){

          elem.addEventListener(ev, ($event) =>{

            $event.target.value === '' ?
              $event.target.parentElement.firstChild.classList.toggle('labelActive') :
              null

          });

        }

      }
    }
</script>

<style lang="scss" scoped>

  @import "../../../assets/scss/colors";
  @import "../../../assets/scss/transition-conf";

  .createSportsmanWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 32px 32px;

    .createSportsmanInputWrapper {
      padding: 12px 8px;
      max-width: 250px;

      .createSportsmanInput {
        position: relative;
        margin-top: 12px;
        border-bottom: 1px solid $borderColor;

        label {
          transition: $transition-time-default;
          position: absolute;
          cursor: text;
          top: 0;
          left: 8px;
          font-size: 1rem;


          &.labelActive {
            top: -75%;
            font-size: 0.8rem;
          }
        }

        input {
          background-color: transparent;
          border: none;
          outline: none;
          font-size: 1rem;
          font-family: inherit;
          font-weight: inherit;
        }

        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      }
    }
    button{
      width: 200px;
      margin-top: 32px;
      background-color: $buttonBackgroundColor;
      color: $buttonTextColor;
      padding: 12px 8px;
      border: none;
      outline: 0;
      font-size: 1rem;
      cursor: pointer;

      &:hover{
        background-color: lighten($buttonBackgroundColor, 10%)
      }
    }
  }

</style>
