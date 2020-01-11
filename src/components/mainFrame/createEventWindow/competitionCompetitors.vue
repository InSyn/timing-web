<template>

  <div class="competitorsWrapper">

    <div class="competitorsMenu">

      <div class="competitorData"
      @keypress.enter="addCompetitor(competitorChosen) + cleanData()">

        <div class="competitorDataInput">
          <label for="competitorBib">Bib</label>
          <input v-model="competitorChosen.bib" type="text" id="competitorBib">
        </div>
        <div class="competitorDataInput">
          <label for="competitorTid">T-Id</label>
          <input v-model="competitorChosen.tid" type="text" id="competitorTid"
                 @input="getCompetitor(competitorChosen.tid) + checkLabelsAtChoose()">
        </div>
        <div class="competitorDataInput">
          <label for="competitorFisCode">FIS-Code</label>
          <input v-model="competitorChosen.fisCode" type="text" id="competitorFisCode">
        </div>
        <div class="competitorDataInput">
          <label for="competitorFullName">Фамилия, Имя</label>
          <input v-model="competitorChosen.fullName" type="text" id="competitorFullName">
        </div>
        <div class="competitorDataInput">
          <label for="competitorBirthYear">Год рождения</label>
          <input v-model="competitorChosen.birthYear" type="text" id="competitorBirthYear">
        </div>
        <div class="competitorDataInput">
          <label for="competitorRank">Разряд</label>
          <input v-model="competitorChosen.rank" type="text" id="competitorRank">
        </div>
        <div class="competitorDataInput">
          <label for="competitorCity">Город</label>
          <input v-model="competitorChosen.city" type="text" id="competitorCity">
        </div>
        <div class="competitorDataInput">
          <label for="competitorRegion">Регион</label>
          <input v-model="competitorChosen.region" type="text" id="competitorRegion">
        </div>
        <div class="competitorDataInput">
          <label for="competitorSchool">Школа</label>
          <input v-model="competitorChosen.school" type="text" id="competitorSchool">
        </div>
        <div class="competitorDataInput">
          <label for="competitorTeam">Команда</label>
          <input v-model="competitorChosen.team" type="text" id="competitorTeam">
        </div>

        <div class="competitorSearchWrapper">
          <div class="competitorSearchIcon" @click="showSearch = !showSearch"></div>
          <div class="competitorSearchInputs" v-bind:class="{searchActive: showSearch}" @keypress.enter="test()">
            <div class="searchInputWrapper searchTidWrapper">
              <label for="searchTid">T-Id</label>
              <input type="text" id="searchTid">
            </div>
            <div class="searchInputWrapper searchBibWrapper">
              <label for="searchBib">Bib</label>
              <input type="text" id="searchBib">
            </div>
            <div class="searchInputWrapper searchNameWrapper">
              <label for="searchName">ФИО</label>
              <input type="text" id="searchName">
            </div>
          </div>
        </div>

      </div>

      <div class="competitorsControls">

        <div class="competitorsButton newCompetitor"
             @click="addCompetitor(competitorChosen) + cleanData()">
          Добавить участника
        </div>
        <div class="competitorsButton changeCompetitor">
          Изменить участника
        </div>
        <div class="competitorsButton deleteCompetitor"
             @click="deleteCompetitor(competitorChosen)+cleanData()">
          Удалить участника
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
             v-for="(competitor, index) in createdCompetitionData.competitors" :key="index"
             @click="chooseCompetitor($event.target) + setChosenCompetitor() + checkLabelsAtChoose()">

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

    beforeRouteEnter(to, from, next){

      next( vm => {

        vm.loadData(vm)

      });

    },

    beforeRouteLeave(to, from, next){

      this.saveData();

      this.cleanData();
      next()

    },

    mounted(){

      let competitorDataInputs = document.querySelectorAll('.competitorDataInput');

      for (let input in competitorDataInputs) {

          if (competitorDataInputs[input].lastChild) {

              competitorDataInputs[input].lastChild.addEventListener('focus', ($event) => {

                  $event.target.value === '' ?
                      $event.target.parentElement.firstChild.classList.toggle('labelActive') :
                      null

              });

              competitorDataInputs[input].lastChild.addEventListener('blur', ($event) => {

                  $event.target.value === '' ?
                      $event.target.parentElement.firstChild.classList.toggle('labelActive') :
                      null

              })

          }

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
        },

        showSearch: false

      }

    },

    computed: {

      ...mapGetters('competitors', {
        competitorChosen: 'competitorChosen'
      }),

      ...mapGetters('createdCompetition', {
        createdCompetitionData: 'createdCompetitionData',
        competitors: 'competitors'
      })

    },

    methods: {
      ...mapActions('competitors', {
        chooseCompetitor: 'chooseCompetitor',
        getCompetitor: 'getCompetitor'
      }),

      ...mapActions('createdCompetition', {
        addCompetitor: 'addCompetitor',
        deleteCompetitor: 'deleteCompetitor'
      }),

      cleanData(){

        let data = this.competitorChosen;

        for (let i in data) {

          if (data[i])
            data[i] = ''

        }

        this.checkLabelsAtAdd();

      },

      checkLabelsAtAdd(){

        let competitorDataInputs = document.querySelectorAll('.competitorDataInput');

        for (let input in competitorDataInputs) {

            if (competitorDataInputs[input].firstChild) {

                let label = competitorDataInputs[input].firstChild;

                label.classList.contains('labelActive') ?
                    label.classList.toggle('labelActive') :
                    null

            }

        }

      },

      checkLabelsAtChoose(){

        let competitorDataInputs = document.querySelectorAll('.competitorDataInput');

        for (let i in competitorDataInputs) {

            if (competitorDataInputs[i].firstChild) {

                let label = competitorDataInputs[i].firstChild;

                if (!label.classList.contains('labelActive')) {

                    label.classList.toggle('labelActive')

                }

            }

        }

      },

      checkLabels(){

      },

      setChosenCompetitor(data){

        if ( data ) {

          this.competitorData.bib = data.bib;

          this.checkLabelsAtChoose()

        }

      },

      saveData(){

        try {

          localStorage.setItem('createdCompetition', JSON.stringify(this.createdCompetitionData))

        } catch (e) {

          console.log(e)

        }

      },

      loadData(vm){

        if (localStorage.getItem('createdCompetition')){

          try {

            let localData = JSON.parse(localStorage.getItem('createdCompetition'));

            for (let i in localData) {

              try {

                vm.createdCompetitionData[i] = localData[i];

              } catch (e) {

                console.log(e)
              }

            }

          } catch (e) {

            console.log(e)

          }

        }

      },

      test(data){
        console.log(data)
      }

    }

  }

</script>

<style lang="scss" scoped>

  @import "../../../assets/scss/transition-conf";
  @import "../../../assets/scss/colors";

  .competitorsWrapper{
    display: flex;
    flex-direction: column;
    height: calc(100% - 50px);
    padding-top: 32px;

    .competitorsMenu{
      min-width: 200px;
      padding: 16px 32px;

      .competitorsControls{
        display: flex;
        padding: 12px 8px;
        width: 100%;

        .competitorsButton{
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: $buttonBackgroundColor;
          color: $buttonTextColor;
          outline: 0 none;
          border: none;
          padding: 8px 4px;
          margin-left: 24px;
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
      .createCompetition{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $buttonBackgroundColor;
        color: $buttonTextColor;
        outline: 0 none;
        border: none;
        padding: 8px 0;
        font-size: 0.8rem;
        letter-spacing: 0.15px;
        margin-top: 32px;
        transition: background-color $transition-time-default;
        cursor: pointer;

        &:hover{
          background-color: lighten($buttonBackgroundColor, 10%)
        }
      }
      .competitorData{
        position: relative;
        display: flex;
        flex-wrap: wrap;
        padding: 0 32px 0 0;

        .competitorDataInput{
          position: relative;
          margin: 8px 12px;
          border-bottom: 1px solid $borderColor;

          label{
            transition: $transition-time-default;
            position: absolute;
            cursor: text;
            top: 0;
            left: 8px;
            font-size: 0.9rem;


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
        .competitorSearchWrapper{
          height: 100%;
          position: absolute;
          right: 0;
          display: flex;
          align-items: center;

          .competitorSearchIcon{
            transition: color $transition-time-double;
            display: flex;
            align-items: center;
            height: 100%;
            padding: 0 6px;
            color: #FFFFFF;
            cursor: pointer;
            font-family: "Segoe MDL2 Assets";
            background-color: $dark_blue-medium;

            &:hover{
              color: #00a0e3;
            }
          }
          .competitorSearchInputs{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            transition: width $transition-time-double;
            width: 0;
            height: 100%;
            overflow: hidden;
            border-bottom: 1px solid $dark_blue-medium;
            border-top: 1px solid $dark_blue-medium;
            background: rgba(41, 44, 68, 0.4);

            .searchInputWrapper{
              display: flex;
              flex-wrap: nowrap;
              justify-content: space-between;
              padding: 2px 0 2px 8px;

              label{
                color: $light_grey-light;
              }
              input{
                margin-left: 8px;
                background: rgba(41, 44, 68, 0.8);
                outline: none;
                color: $light_grey-light;
                border: none;
                margin-right: 16px;
              }
            }
          }
          .searchActive{
            width: 300px;
          }
        }
      }
    }
    .competitorsList{
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      padding: 0 32px 32px 32px;
      overflow: auto;

      .competitorsListHeader{
        display: flex;
        flex-wrap: nowrap;
        align-items: stretch;
        width: 100%;
        border-bottom: 2px solid $borderColor;

        *{
            padding: 8px 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-right: 1px solid $borderColor;

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
            border-right: 1px solid $borderColor;
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
            &:hover{
                background: rgba(255,255,255,0.2);
            }
        }
        .competitorsListRow__chosen{
          background-color: rgba(255,255,255, 0.4);
        }
      }
      .competitorsListBody::-webkit-scrollbar{
        display: none;
      }
    }
  }

</style>
