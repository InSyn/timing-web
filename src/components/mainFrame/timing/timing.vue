<template>

  <div class="timingMainFrame">

    <div class="competitionTitle">{{createdCompetitionData.title + ' / ' + createdCompetitionData.discipline + ' / ' + createdCompetitionData.location + ' / ' + createdCompetitionData.date}}</div>

    <div class="runSelectWrapper">

      <div class="runSelectInputWrapper">

        <label for="runSelect" class="runSelectLabel">Заезд: </label>
        <select name="runSelect" id="runSelect" class="runSelectSelect">
          <option class="runSelectOption" :value="race" v-for="(race, index) in createdCompetitionData.races" :key="index"> {{ race.stage + ' ' + race.sex }} </option>
        </select>

      </div>

    </div>

    <router-view class="judgeTimingFrame">

    </router-view>

  </div>

</template>

<script>

  import {mapGetters, mapActions} from 'vuex';

  export default {

    name: "timing",

    created(){

        if (localStorage.getItem('accountRole') !== '' && localStorage.getItem('accountRole') !== 'guest')
          if (this.$router.currentRoute.name !== localStorage.getItem('login'))
            this.$router.replace({name: localStorage.getItem('login')}).catch();

    },

    mounted(){

      let competitors = this.competitors;

      this.setList(competitors);

    },

    computed:{
      ...mapGetters('timing', {
        competitorsList: 'competitorsList',
        competitorStarted: 'competitorStarted',
        competitorsFinished: 'competitorsFinished'
      }),
      ...mapGetters('authorization',{
        accountRole: 'accountRole'
      }),
      ...mapGetters('createdCompetition', {
        createdCompetitionData: 'createdCompetitionData'
      }),
      ...mapGetters('competitors', {
        // competitors: 'competitors'
      }),
      ...mapGetters('races',{
        competitors: 'competitors'
      })
    },

    methods:{
      ...mapActions('timing', {
        setList: 'setList',
        setStarted: 'setStarted',
        setFinished: 'setFinished'
      }),

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

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/colors";
  @import "../../../assets/scss/transition-conf";

  *{
    /*border: 1px solid black;*/
  }
  .timingMainFrame{
    display: flex;
    flex-direction: column;
    height: calc(100% - 100px);
    width: 100%;
    padding: 32px 0;

    .competitionTitle{
      font-weight: bold;
      padding: 12px 8px;
    }
    .runSelectWrapper{
      padding: 12px 8px;

      .runSelectLabel{
        padding: 2px 4px;
        font-weight: bold;
      }
      .runSelectSelect{
        font-size: 1rem;
        padding: 2px 4px;
        border: 1px solid $light_grey-medium;
        outline: none;
        color: $light_grey-light;
        background: $dark_blue-medium;

        .runSelectOption{
          background: transparent;
          color: $light_grey-light;
          outline: none;

          &:hover{
            background: $light_grey-light;
          }
        }
      }
    }
  }

</style>
