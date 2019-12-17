<template>

  <div class="competitionPageWrapper">
    <div class="competitionTitle">
      {{ competitionItem.title }}
    </div>
    <div class="competitionInfoWrapper">
      <div class="competitionInfo">
        <div class="infoDisciplines">
          <div class="disciplineItem" v-for="(discipline, index) in competitionItem.disciplines" :key="index">{{ discipline }}</div>
        </div>
        <div class="infoDate">
          <div class="title">Дата проведения</div>
          <div class="date">{{ competitionItem.date }}</div>
        </div>
        <div class="infoLocation">
          <div class="title">Место проведения</div>
          <div class="location">{{ competitionItem.location }}</div>
        </div>
        <div class="infoDelegates">
          <div class="delegates">Технические делегаты:</div>
          <div class="delegate" v-for="(delegate, index) in competitionItem.delegates" :key="index">
            {{ delegate}}
          </div>
        </div>
        <div class="infoDocuments">
          <div class="documentItem">
            <div class="title">Положение</div>
            <a href="" class="docUrl"></a>
          </div>
        </div>
      </div>
      <div class="racesListWrapper">
        <div class="racesListHeader">
          <div class="raceListSection raceDate">
            <span>Дата</span>
          </div>
          <div class="raceListSection raceCode">
            <span>Код</span>
          </div>
          <div class="raceListSection raceDiscipline">
            <span>Дисциплина</span>
          </div>
          <div class="raceListSection raceGender">
            <span>Пол</span>
          </div>
          <div class="raceListSection raceProtocols">
            <span>Протоколы</span>
          </div>
        </div>
        <div class="racesList">
          <div class="raceRow" v-for="(race, index) in competitionItem.races" :key="index">
            <div class="raceListSection raceDate">
              {{ race.date }}
            </div>
            <div class="raceListSection raceCode">
              {{ race.code }}
            </div>
            <div class="raceListSection raceDiscipline">
              {{ race.discipline }}
            </div>
            <div class="raceListSection raceGender">
              {{ race.gender.toUpperCase() }}
            </div>
            <div class="raceListSection raceProtocols">
              <div class="protocol" v-for="(protocol, index) in race.protocols" :key="index">
                <div>{{ protocol.title }}</div>
                <a :href="protocol.url" class="link"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'

  export default {

    name: "competitionPage",

    computed: {
      ...mapGetters('competitions',{
        competitionsList: 'competitionsList'
      }),
      competitionItem(id){
        id = this.$route.params.id;
        return this.competitionsList.filter( item => item.id === id )[0]
      }
    }

  }
</script>

<style lang="scss" scoped>

  .competitionPageWrapper{
    display: flex;
    flex-direction: column;
    height: calc(100% - 100px);

    .competitionTitle{
      width: 100%;
      padding: 32px;
      font-size: 2rem;
      font-weight: 300;
    }
    .competitionInfoWrapper{
      display: flex;
      height: calc(100% - 103px);
      padding: 0 32px;

      .competitionInfo{
        display: flex;
        flex-direction: column;
        width: 294px;
        margin-right: 32px;

        .infoDisciplines{
          display: flex;
          margin-bottom: 32px;

          .disciplineItem{
            margin-right: 10px;
          }
        }
        .infoDate{
          margin-bottom: 32px;

          .title{
            font-size: 0.75rem;
          }
        }
        .infoLocation{
          margin-bottom: 32px;

          .title{
            font-size: 0.75rem;
          }
        }
        .infoDelegates{
          display: flex;
          flex-direction: column;
          margin-bottom: 32px;

          .delegate{
            font-weight: 300;
            margin-top: 16px;
          }
        }
        .infoDocuments{

          .documentItem{
            display: flex;

            .docUrl{
              margin-left: 8px;
              font-family: 'Segoe MDL2 Assets', sans-serif;
            }
          }
        }
      }
      .racesListWrapper{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        height: 100%;
        font-weight: 300;

        .racesListHeader{
          display: flex;
          flex-wrap: nowrap;
          padding: 12px 24px;
          background-color: rgba(255, 255, 255, 0.75);
          margin-bottom: 16px;
        }
        .racesList{
          overflow-y: scroll;

          -ms-overflow-style: none;
          overflow: -moz-scrollbars-none;
          scrollbar-width: none;


          .raceRow{
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            padding: 12px 24px;
            background-color: rgba(255, 255, 255, 0.75);
            margin-bottom: 16px;
          }
        }
        .racesList::-webkit-scrollbar{
          display: none;
        }
        .raceListSection{
          margin-right: 24px;
        }
        .raceDate{
          flex-shrink: 0;
          width: 137px;
        }
        .raceCode{
          flex-shrink: 0;
          width: 38px;
        }
        .raceDiscipline{
          flex-grow: 1;
        }
        .raceGender{
          flex-shrink: 0;
          width: 30px;
        }
        .raceProtocols{
          display: flex;
          flex-wrap: nowrap;
          flex-shrink: 0;
          width: 232px;

          .protocol{
            display: flex;
            margin-right: 24px;

            .link{
              margin-left: 8px;
              font-family: 'Segoe MDL2 Assets', sans-serif;
            }
          }
        }
      }
    }
  }

</style>
