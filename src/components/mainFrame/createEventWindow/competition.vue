<template>

  <div class="createEventWrapper">

    <div class="eventMainData">

      <div class="mainDataInput titleWrapper">

        <div class="eventDataInput">
          <label for="title">Название</label>
          <input type="text" id="title">
        </div>

      </div>

      <div class="mainDataInput disciplineWrapper">

        <div class="eventDataInput">
          <label for="discipline">Дисциплина</label>
          <input type="text" id="discipline">
        </div>

      </div>

      <div class="mainDataInput locationWrapper">

        <div class="eventDataInput">
          <label for="location">Место проведения</label>
          <input type="text" id="location">
        </div>

      </div>

      <div class="mainDataInput organizationWrapper">

        <div class="eventDataInput">
          <label for="organization">Организация</label>
          <input type="text" id="organization">
        </div>

      </div>

      <div class="mainDataInput nationWrapper">

        <div class="eventDataInput">
          <label for="nation">Страна</label>
          <input type="text" id="nation">
        </div>

      </div>

      <div class="mainDataInput timingProviderWrapper">

        <div class="eventDataInput">
          <label for="timingProvider">Timing service provider</label>
          <input type="text" id="timingProvider">
        </div>

      </div>

      <div class="mainDataInput codexWrapper">

        <div class="eventDataInput">
          <label for="codex">Codex</label>
          <input type="text" id="codex">
        </div>

      </div>

    </div>

    <div class="disciplineInputWrapper">

      <div class="mainSector">

        <div class="mainSectorInputWrapper delegate">

          <div class="title">Технический делегат</div>

          <div class="eventDataInput">
            <label for="delegateFirstName">Фамилия</label>
            <input id="delegateFirstName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="delegateSecondName">Имя</label>
            <input id="delegateSecondName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="delegateCity">Город</label>
            <input id="delegateCity" type="text">
          </div>

        </div>

        <div class="mainSectorInputWrapper mainJudge">

          <div class="title">Главный судья</div>

          <div class="eventDataInput">
            <label for="mainJudgeFirstName">Фамилия</label>
            <input id="mainJudgeFirstName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="mainJudgeSecondName">Имя</label>
            <input id="mainJudgeSecondName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="mainJudgeCity">Город</label>
            <input id="mainJudgeCity" type="text">
          </div>

        </div>

        <div class="mainSectorInputWrapper secretary">

          <div class="title">Главный секретарь</div>

          <div class="eventDataInput">
            <label for="secretaryFirstName">Фамилия</label>
            <input id="secretaryFirstName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="secretarySecondName">Имя</label>
            <input id="secretarySecondName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="secretaryCity">Город</label>
            <input id="secretaryCity" type="text">
          </div>

        </div>

        <div class="mainSectorInputWrapper slopeChief">

          <div class="title">Начальник склона</div>

          <div class="eventDataInput">
            <label for="slopeChiefFirstName">Фамилия</label>
            <input id="slopeChiefFirstName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="slopeChiefSecondName">Имя</label>
            <input id="slopeChiefSecondName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="slopeChiefCity">Город</label>
            <input id="slopeChiefCity" type="text">
          </div>

        </div>

        <div class="mainSectorInputWrapper seniorJudge">

          <div class="title">Старший судья</div>

          <div class="eventDataInput">
            <label for="seniorJudgeFirstName">Фамилия</label>
            <input id="seniorJudgeFirstName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="seniorJudgeSecondName">Имя</label>
            <input id="seniorJudgeSecondName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="seniorJudgeCity">Город</label>
            <input id="seniorJudgeCity" type="text">
          </div>

        </div>

      </div>

      <div class="judgesSector">

        <div class="judgesSectorInputWrapper">

          <div class="judge1Title">Судья 1</div>

          <div class="eventDataInput">
            <label for="judge1SecondName">Фамилия</label>
            <input  id="judge1SecondName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="judge1FirstName">Имя</label>
            <input id="judge1FirstName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="judge1City">Город</label>
            <input id="judge1City" type="text">
          </div>

        </div>

        <div class="judgesSectorInputWrapper">

          <div class="judge1Title">Судья 2</div>

          <div class="eventDataInput">
            <label for="judge2SecondName">Фамилия</label>
            <input  id="judge2SecondName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="judge2FirstName">Имя</label>
            <input id="judge2FirstName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="judge2City">Город</label>
            <input id="judge2City" type="text">
          </div>

        </div>

        <div class="judgesSectorInputWrapper">

          <div class="judge1Title">Судья 3</div>

          <div class="eventDataInput">
            <label for="judge3SecondName">Фамилия</label>
            <input  id="judge3SecondName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="judge3FirstName">Имя</label>
            <input id="judge3FirstName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="judge3City">Город</label>
            <input id="judge3City" type="text">
          </div>

        </div>

        <div class="judgesSectorInputWrapper">

          <div class="judge1Title">Судья 4</div>

          <div class="eventDataInput">
            <label for="judge4SecondName">Фамилия</label>
            <input  id="judge4SecondName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="judge4FirstName">Имя</label>
            <input id="judge4FirstName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="judge4City">Город</label>
            <input id="judge4City" type="text">
          </div>

        </div>

        <div class="judgesSectorInputWrapper">

          <div class="judge1Title">Судья 5</div>

          <div class="eventDataInput">
            <label for="judge5SecondName">Фамилия</label>
            <input  id="judge5SecondName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="judge5FirstName">Имя</label>
            <input id="judge5FirstName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="judge5City">Город</label>
            <input id="judge5City" type="text">
          </div>

        </div>

        <div class="judgesSectorInputWrapper">

          <div class="judge1Title">Судья 5</div>

          <div class="eventDataInput">
            <label for="judge6SecondName">Фамилия</label>
            <input  id="judge6SecondName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="judge6FirstName">Имя</label>
            <input id="judge6FirstName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="judge6City">Город</label>
            <input id="judge6City" type="text">
          </div>

        </div>

        <div class="judgesSectorInputWrapper">

          <div class="judge1Title">Судья 5</div>

          <div class="eventDataInput">
            <label for="judge7SecondName">Фамилия</label>
            <input  id="judge7SecondName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="judge7FirstName">Имя</label>
            <input id="judge7FirstName" type="text">
          </div>

          <div class="eventDataInput">
            <label for="judge7City">Город</label>
            <input id="judge7City" type="text">
          </div>

        </div>

      </div>

    </div>

    <div class="openers">

      <div class="openersTitle">
        Открывающие
        <button class="addOpener" v-on:click="addOpener({firstName:'', secondName:''})">+</button>
        <button class="removeOpener" v-on:click="removeOpener()">-</button>
      </div>

      <div class="openersWrapper">

        <div class="openersInputWrapper" v-for="(opener, index) in openers" :key="index">

          <div class="openerTitle">Открывающий 1</div>

          <div class="openerData">

            <div class="eventDataInput">
              <label for="openerSecondName">Фамилия</label>
              <input  id="openerSecondName" type="text" :value="opener.secondName">
            </div>

            <div class="eventDataInput">
              <label for="openerFirstName">Имя</label>
              <input id="openerFirstName" type="text" :value="opener.firstName">
            </div>

          </div>

        </div>

      </div>

    </div>

    <div class="conditionsSector">

      <div class="conditionsInputWrapper airTemp">

        <div class="eventDataInput">
          <label for="airTemp">Температура воздуха</label>
          <input id='airTemp' type="text">
        </div>

      </div>

      <div class="conditionsInputWrapper snowTemp">

        <div class="eventDataInput">
          <label for="snowTemp">Температура снега</label>
          <input id='snowTemp' type="text">
        </div>

      </div>

      <div class="conditionsInputWrapper wind">

        <div class="eventDataInput">
          <label for="wind">Ветер</label>
          <input id='wind' type="text">
        </div>

      </div>

      <div class="conditionsInputWrapper windSpeed">

        <div class="eventDataInput">
          <label for="windSpeed">Скорость ветра</label>
          <input id='windSpeed' type="text">
        </div>

      </div>

      <div class="conditionsInputWrapper establishingTime">

        <div class="eventDataInput">
          <label for="establishingTime">Установочное время</label>
          <input id='establishingTime' type="text">
        </div>

      </div>

      <div class="conditionsInputWrapper slopeType">

        <div class="eventDataInput">
          <label for="slopeType">Склон</label>
          <input id='slopeType' type="text">
        </div>

      </div>

      <div class="conditionsInputWrapper length">

        <div class="eventDataInput">
          <label for="length">Длина</label>
          <input id='length' type="text">
        </div>

      </div>

      <div class="conditionsInputWrapper width">

        <div class="eventDataInput">
          <label for="width">Ширина</label>
          <input id='width' type="text">
        </div>

      </div>

      <div class="conditionsInputWrapper angle">

        <div class="eventDataInput">
          <label for="angle">Угол</label>
          <input id='angle' type="text">
        </div>

      </div>

    </div>

  </div>

</template>

<script>

  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';

  export default {

    mounted(){

      this.animateInputsAtMount();

    },

    updated(){
      this.animateAddedOpeners()
    },

    name: "competition",

    computed:{
      ...mapGetters('createEvent', {
        openers: 'openers'
      })
    },

    methods:{
      ...mapActions('createEvent', {
        addOpener: 'addOpener',
        removeOpener: 'removeOpener'
      }),

      animateInput(elem, ev){

        elem.addEventListener(ev, ($event) =>{

          $event.target.value === '' ?
                  $event.target.parentElement.firstChild.classList.toggle('labelActive') :
                  null

        });

      },

      animateInputsAtMount(){

        let inputs = document.querySelectorAll('.eventDataInput');

        for (let input in inputs){

          this.animateInput(inputs[input].lastChild, 'blur');

          this.animateInput(inputs[input].lastChild, 'focus');

        }
      },

      animateAddedOpeners(){

        let addedOpenerInputs = document.querySelectorAll('.openerData')[document.querySelectorAll('.openerData').length-1].childNodes;

        for (let input in addedOpenerInputs){

          this.animateInput(addedOpenerInputs[input].lastChild, 'blur');
          this.animateInput(addedOpenerInputs[input].lastChild, 'focus');

        }
      }
    }

  }

</script>

<style lang="scss" scoped>

  @import "../../../assets/scss/colors";
  @import "../../../assets/scss/transition-conf";

  *{
    transition: background $transition-time-default;
  }
  .createEventWrapper{
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    padding: 32px 32px;

    .eventMainData{
      display: flex;
      flex-wrap: wrap;

      .mainDataInput{
        max-width: 200px;
        padding: 12px 8px;
      }
    }
    .disciplineInputWrapper{
      display: flex;
      flex-grow: 1;
      overflow: auto;

      .mainSector{
        height: fit-content;
        max-height: 100%;
        overflow: auto;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
        flex-basis: 50%;

        .mainSectorInputWrapper{
          max-width: 200px;
          padding: 24px 16px;
          margin: 8px;

          .title{
            margin-bottom: 12px;
          }
        }
      }
      .judgesSector{
        height: fit-content;
        max-height: 100%;
        overflow: auto;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        flex-basis: 50%;

        .judgesSectorInputWrapper{
          max-width: 200px;
          padding: 24px 16px;
          margin: 8px;
        }
      }
      .judgesSector::-webkit-scrollbar-track{
        width: 5px;
      }
    }
    .openers{
      padding: 32px 0;

      .openersTitle{
        display: flex;
        font-size: 1.2rem;
        margin-bottom: 12px;

        .addOpener{
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-left: 8px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: rgba(128, 256, 128, 0.5);
        }
        .removeOpener{
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-left: 8px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: rgba(256, 128, 128, 0.5);
        }
      }
      .openersWrapper{
        display: flex;
        flex-wrap: nowrap;
        overflow: auto;

        .openersInputWrapper{
          max-width: 200px;
          padding: 8px 16px;

          .openerTitle{
            padding: 0 0 8px 0;
          }
        }
      }
    }
    .conditionsSector{
      display: flex;
      flex-wrap: wrap;

      .conditionsInputWrapper{
        max-width: 300px;
        padding: 12px 8px;
      }
    }

    .eventDataInput{
      position: relative;
      margin-top: 12px;
      border-bottom: 1px solid $borderColor;

      label{
        transition: $transition-time-default;
        position: absolute;
        cursor: text;
        top: 0;
        left: 8px;
        font-size: 0.8rem;


        &.labelActive{
          top: -50%;
          font-size: 0.6rem;
        }
      }
      input{
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 0.8rem;
        font-family: inherit;
        font-weight: inherit;
      }
      &:hover{
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }

</style>
