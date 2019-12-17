<template>

  <div class="competitorsWrapper">

    <div class="competitorsMenu">

      <div class="competitorsControls">

        <div class="competitorsButton newCompetitor"
             @click="addCompetitor(competitorData) + cleanData()">
          Добавить участника
        </div>
        <div class="competitorsButton changeCompetitor"> Изменить участника </div>
        <div class="competitorsButton deleteCompetitor"> Удалить участника </div>

      </div>

      <div class="competitorData">

        <div class="competitorDataInput">
          <label for="competitorBib">Bib</label>
          <input v-model="competitorData.bib" type="text" id="competitorBib">
        </div>
        <div class="competitorDataInput">
          <label for="competitorTid">T-Id</label>
          <input v-model="competitorData.tid" type="text" id="competitorTid">
        </div>
        <div class="competitorDataInput">
          <label for="competitorFisCode">FIS-Code</label>
          <input v-model="competitorData.fisCode" type="text" id="competitorFisCode">
        </div>
        <div class="competitorDataInput">
          <label for="competitorFullName">Фамилия, Имя</label>
          <input v-model="competitorData.fullName" type="text" id="competitorFullName">
        </div>
        <div class="competitorDataInput">
          <label for="competitorBirthYear">Год рождения</label>
          <input v-model="competitorData.birthYear" type="text" id="competitorBirthYear">
        </div>
        <div class="competitorDataInput">
          <label for="competitorRank">Разряд</label>
          <input v-model="competitorData.rank" type="text" id="competitorRank">
        </div>
        <div class="competitorDataInput">
          <label for="competitorCity">Город</label>
          <input v-model="competitorData.city" type="text" id="competitorCity">
        </div>
        <div class="competitorDataInput">
          <label for="competitorRegion">Регион</label>
          <input v-model="competitorData.region" type="text" id="competitorRegion">
        </div>
        <div class="competitorDataInput">
          <label for="competitorSchool">Школа</label>
          <input v-model="competitorData.school" type="text" id="competitorSchool">
        </div>
        <div class="competitorDataInput">
          <label for="competitorTeam">Команда</label>
          <input v-model="competitorData.team" type="text" id="competitorTeam">
        </div>

      </div>

    </div>

    <div class="competitorsList">

      <div class="competitorsListHeader">

        <div class="bib">Bib</div>
        <div class="tid">T-Id</div>
        <div class="fisCode">FIS-Code</div>
        <div class="fullName">Фамилия, Имя</div>
        <div class="birthYear">Год</div>
        <div class="rank">Разряд</div>
        <div class="city">Город</div>
        <div class="region">Регион</div>
        <div class="school">Школа</div>
        <div class="team">Команда</div>

      </div>

      <div class="competitorsListBody">

        <div class="competitorsListRow"
             v-for="(competitor, index) in competitors" :key="index"
             @click="chooseCompetitor($event.target) + setChosenCompetitor()">

          <div class="bib">{{competitor.bib}}</div>
          <div class="tid">{{competitor.tid}}</div>
          <div class="fisCode">{{competitor.fisCode}}</div>
          <div class="fullName">{{competitor.fullName}}</div>
          <div class="birthYear">{{competitor.birthYear}}</div>
          <div class="rank">{{competitor.rank}}</div>
          <div class="city">{{competitor.city}}</div>
          <div class="region">{{competitor.region}}</div>
          <div class="school">{{competitor.school}}</div>
          <div class="team">{{competitor.team}}</div>

        </div>

      </div>

    </div>

  </div>

</template>

<script>

  import {mapGetters, mapActions} from 'vuex'

  export default {

    mounted(){

      let competitorDataInputs = document.querySelectorAll('.competitorDataInput');

      for (let input in competitorDataInputs) {

        competitorDataInputs[input].lastChild.addEventListener('focus', ($event) =>{

          $event.target.value === '' ?
                  $event.target.parentElement.firstChild.classList.toggle('labelActive') :
                  null

        });

        competitorDataInputs[input].lastChild.addEventListener('blur', ($event) =>{

          $event.target.value === '' ?
                  $event.target.parentElement.firstChild.classList.toggle('labelActive') :
                  null

        })

      }

    },

    name: "competitionCompetitors",

    data(){

      return{

        competitorData: {
          bib: '',
          tid: '',
          fisCode: '',
          fullName: '',
          birthYear: '',
          rank: '',
          city: '',
          region: '',
          school: '',
          team: ''
        }

      }

    },

    computed: {

      ...mapGetters('competitors', {

        competitors: 'competitors',
        competitorChosen: 'competitorChosen'

      })

    },

    methods: {

      ...mapActions('competitors', {
        addCompetitor: 'addCompetitor',
        chooseCompetitor: 'chooseCompetitor'
      }),

      cleanData(){

        let data = this.$data.competitorData;

        for (let i in data) {

          data[i] = ''

        }

        this.checkLabelsAtAdd();

      },

      checkLabelsAtAdd(){

        let competitorDataInputs = document.querySelectorAll('.competitorDataInput');

        for (let input in competitorDataInputs) {

          let label = competitorDataInputs[input].firstChild;

          label.classList.contains('labelActive')?
                  label.classList.toggle('labelActive'):
                  null

        }

      },

      checkLabelsAtChoose(){

        let competitorDataInputs = document.querySelectorAll('.competitorDataInput');

        for (let i in competitorDataInputs) {

          let label = competitorDataInputs[i].firstChild;

          if (!label.classList.contains('labelActive')){
            label.classList.toggle('labelActive')
          }

        }

      },

      checkLabels(){

      },

      setChosenCompetitor(){

        this.competitorData.bib = this.competitorChosen.bib;
        this.competitorData.tid = this.competitorChosen.tid;
        this.competitorData.fisCode = this.competitorChosen.fisCode;
        this.competitorData.fullName = this.competitorChosen.fullName;
        this.competitorData.birthYear = this.competitorChosen.birthYear;
        this.competitorData.rank = this.competitorChosen.rank;
        this.competitorData.city = this.competitorChosen.city;
        this.competitorData.region = this.competitorChosen.region;
        this.competitorData.school = this.competitorChosen.school;
        this.competitorData.team = this.competitorChosen.team;

        this.checkLabelsAtChoose()

      }

    }

  }

</script>

<style lang="scss" scoped>

  @import "../../../assets/scss/transition-conf";
  @import "../../../assets/scss/colors";

  .competitorsWrapper{
    display: flex;
    height: calc(100% - 50px);
    padding-top: 32px;

    .competitorsMenu{
      min-width: 200px;
      padding: 16px 0;

      .competitorsControls{

        .competitorsButton{
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: $buttonBackgroundColor;
          color: $buttonTextColor;
          outline: 0 none;
          border: none;
          padding: 8px 0;
          margin-bottom: 8px;
          font-size: 0.8rem;
          letter-spacing: 0.15px;
          margin-top: auto;
          transition: background-color $transition-time-default;
          cursor: pointer;

          &:hover{
            background-color: lighten($buttonBackgroundColor, 10%)
          }
        }
      }
      .competitorData{
        padding: 0 4px;

        .competitorDataInput{
          position: relative;
          margin-top: 28px;
          border-bottom: 1px solid $borderColor;

          label{
            transition: $transition-time-default;
            position: absolute;
            cursor: text;
            top: 0;
            left: 8px;
            font-size: 1rem;


            &.labelActive{
              top: -85%;
              font-size: 0.8rem;
            }
          }
          input{
            width: 100%;
            background-color: transparent;
            border: none;
            outline: none;
            font-size: 1rem;
            font-family: inherit;
            font-weight: inherit;
          }
          &:hover{
            background: rgba(255, 255, 255, 0.1);
          }
        }
      }
    }
    .competitorsList{
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      padding: 0 32px 32px 32px;

      .competitorsListHeader{
        display: flex;
        flex-wrap: nowrap;
        align-items: stretch;
        width: 100%;

        *{
          padding: 16px 8px;
          border-right: 1px solid #c2c2c2;
          border-bottom: 1px solid #c2c2c2;

          &:last-child{
            border-right: none;
          }
        }
        .bib{
          flex-shrink: 0;
          text-align: center;
          width: 60px;
        }
        .tid{
          flex-shrink: 0;
          text-align: center;
          width: 60px;
        }
        .fisCode{
          flex-shrink: 0;
          text-align: center;
          width: 80px;
        }
        .fullName{
          width: 200px;
          flex-grow: 1;
        }
        .birthYear {
          flex-shrink: 0;
          width: 60px;
        }
        .rank{
          flex-shrink: 0;
          width: 80px;
        }
        .city{
          flex-shrink: 0;
          width: 120px;
        }
        .region{
          flex-shrink: 0;
          width: 120px;
        }
        .school{
          flex-shrink: 0;
          width: 150px;
        }
        .team{
          flex-shrink: 0;
          width: 150px;
        }
      }
      .competitorsListBody{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: calc(100% - 50px);
        overflow-y: auto;

        .competitorsListRow{
          transition: background-color $transition-time-double;
          cursor: pointer;
          display: flex;
          flex-wrap: nowrap;
          align-items: stretch;
          min-height: 60px;
          width: 100%;

          *{
            display: flex;
            align-items: center;
            padding: 0 8px;
            background: transparent;
            border-right: 1px solid #c2c2c2;
            overflow: hidden;

            &:last-child{
              border: none;
            }
          }
          .bib{
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            width: 60px;
          }
          .tid{
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            width: 60px;
          }
          .fisCode{
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            width: 80px;
          }
          .fullName{
            width: 200px;
            flex-grow: 1;
          }
          .birthYear {
            flex-shrink: 0;
            width: 60px;
          }
          .rank{
            flex-shrink: 0;
            width: 80px;
          }
          .city{
            flex-shrink: 0;
            width: 120px;
          }
          .region{
            flex-shrink: 0;
            width: 120px;
          }
          .school{
            flex-shrink: 0;
            width: 150px;
          }
          .team{
            flex-shrink: 0;
            width: 150px;
          }
        }
        .competitorsListRow__chosen{
          background-color: rgba(255,255,255, 0.2);
        }
      }
    }
  }

</style>
