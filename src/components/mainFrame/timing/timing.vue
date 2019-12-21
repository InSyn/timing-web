<template>

  <div class="timingMainFrame">

    <div class="competitionDataFrame">

      <div class="dataItemWrapper setStageWrapper">
        <label for="setStage" class="dataItemTitle setStageLabel">Выбрать этап</label>
        <select name="" id="setStage" class="setStageSelect">
          <option value="" :key="index"
                  v-for="(race, index) in createdCompetitionData.races">{{race.stage+' '+race.sex}}</option>
        </select>
      </div>


      <div class="dataItemWrapper">
        <div class="dataItemTitle">Название</div>
        <div class="dataItem title">{{ createdCompetitionData.title }}</div>
      </div>

      <div class="dataItemWrapper">
        <div class="dataItemTitle">Дисциплина</div>
        <div class="dataItem discipline">{{ createdCompetitionData.discipline }}</div>
      </div>

      <div class="dataItemWrapper">
        <div class="dataItemTitle">Место проведения</div>
        <div class="dataItem location">{{ createdCompetitionData.location }}</div>
      </div>

      <div class="dataItemWrapper">
        <div class="dataItemTitle">Страна</div>
        <div class="dataItem nation">{{ createdCompetitionData.nation }}</div>
      </div>

      <div class="dataItemWrapper">
        <div class="dataItemTitle">Регион</div>
        <div class="dataItem region">{{ createdCompetitionData.region }}</div>
      </div>

      <div class="dataItemWrapper">
        <div class="dataItemTitle">Организация</div>
        <div class="dataItem organization">{{ createdCompetitionData.organization }}</div>
      </div>

      <div class="stuffDataWrapper tDelegateWrapper">

        <div class="dataItemWrapperTitle tDelegateTitle">Технический делегат</div>

        <div class="dataItem tDelegate">{{ createdCompetitionData.delegate.surname }}</div>
        <div class="dataItem tDelegate">{{ createdCompetitionData.delegate.name }}</div>
        <div class="dataItem tDelegate">{{ createdCompetitionData.delegate.city }}</div>

      </div>

      <div class="stuffDataWrapper chiefJudgeWrapper">

        <div class="dataItemWrapperTitle cJudgeTitle">Главный судья</div>

        <div class="dataItem chiefJudge">{{ createdCompetitionData.chiefJudge.surname }}</div>
        <div class="dataItem chiefJudge">{{ createdCompetitionData.chiefJudge.name }}</div>
        <div class="dataItem chiefJudge">{{ createdCompetitionData.chiefJudge.city }}</div>

      </div>

      <div class="stuffDataWrapper secretaryWrapper">

      <div class="dataItemWrapperTitle secretaryTitle">Секретарь</div>

      <div class="dataItem secretary">{{ createdCompetitionData.secretary.surname }}</div>
      <div class="dataItem secretary">{{ createdCompetitionData.secretary.name }}</div>
      <div class="dataItem secretary">{{ createdCompetitionData.secretary.city }}</div>

      </div>

    </div>

    <div class="competitionTimingFrame">

      <router-view class="judgeTimingFrame">

      </router-view>

      <div class="sportsmenListFrame">

        <div class="competitorListRow" v-for="(competitor, index) in competitorsList" :key="index">

          <div class="competitorDataItem competitorBib">{{competitor.bib}}</div>
          <div class="competitorDataItem competitorFullname">{{competitor.fullName}}</div>
          <div class="competitorDataItem firstJump">9.8</div>
          <div class="competitorDataItem secondJump">9.3</div>
          <div class="competitorDataItem status"></div>

        </div>

      </div>

    </div>

  </div>

</template>

<script>

  import {mapGetters, mapActions} from 'vuex';

  export default {

    name: "timing",

    created(){

      if ( this.accountRole !== '' && this.accountRole !== 'guest' )
        this.$router.replace('timing/'+this.accountRole);

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
      })
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
    flex-wrap: nowrap;
    height: calc(100% - 100px);

    .competitionDataFrame{
      display: flex;
      flex-direction: column;
      width: 300px;
      padding: 16px 32px;

      .dataItemTitle{
        cursor: default;
      }
      .dataItem{
        transition: $transition-time-double;
        padding: 4px 8px;
        margin-bottom: 8px;
        border-bottom: 1px solid $borderColor;
        font-size: 1rem;
        cursor: default;

        &:hover{
          box-shadow: inset 0 -12px 12px -10px rgba(231,234,246,0.9) ;
        }
      }
      .setStageWrapper{
        margin-bottom: 16px;

        .dataItemTitle{
          font-size: 1rem !important;
          padding: 4px 8px !important;
        }
        .setStageSelect{
          background: transparent;
          outline: none;
          border: none;
          border-bottom: 1px solid black;
          font-size: 1rem;
          padding: 4px 8px;
        }
      }
      .dataItemWrapper{

        .dataItemTitle{
          padding: 2px 4px;
          font-size: 0.8rem;
        }
        .dataItem{
          font-size: 0.9rem;
        }
      }
      .stuffDataWrapper{
        margin-top: 24px;

        .dataItemWrapperTitle{
          padding: 2px 4px;
          margin-bottom: 8px;
          font-size: 0.8rem;
        }
        .dataItem{
          border-bottom: 1px solid lighten($borderColor, 30%);
          margin-bottom: 0;
          margin-left: 4px;
          font-size: 0.9rem;
        }
      }
    }
    .competitionTimingFrame{
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      padding: 16px 32px;

      .judgeTimingFrame{
        padding: 16px 32px;
        height: 200px;
      }
      .sportsmenListFrame{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: auto;

        .competitorListRow{
          display: flex;
          flex-wrap: nowrap;
          min-height: 40px;
          align-items: center;

          .competitorDataItem{
            display: flex;
            height: 100%;
            align-items: center;
            padding: 4px 8px;
          }
          .competitorFullname{
            flex-grow: 1;
          }
          .status{
            display: flex;
            width: 40px;
            position: relative;

            &::before{
              position: absolute;
              content: '';
              left: 15px;
              width: 10px;
              height: 10px;
              display: block;
              background-color: #EEFD5F;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }

</style>
