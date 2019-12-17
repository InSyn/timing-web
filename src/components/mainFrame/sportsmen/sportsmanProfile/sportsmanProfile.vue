<template>

    <div class="sportsmanProfileWrapper">

      <div class="mainSection">

        <div class="profilePhoto">
          <div class="photoSectionWrapper">
            <div class="photoSectionInnerWrapper">
              <div class="photo">
                <img src="../../../../assets/media/photo/sportsmanExample.png" v-if="sportsmanData.foto" alt="">
                <div class="emptyPhoto" v-else></div>
              </div>
            </div>
          </div>
        </div>

        <div class="profileInfo">

          <div class="profileInfoHeader">

            <div class="name"> <span> {{ sportsmanData.surname + ' ' + sportsmanData.name }} </span>  </div>

            <div class="section TWCode"> <span class="title">TW-Code:</span> <span> {{ sportsmanData.tw_code }} </span> </div>

            <div class="section FISCode"> <span class="title">FIS-Code:</span> <span> {{ sportsmanData.fis_code }} </span> </div>

            <div class="section gender"> <span class="title">Пол</span> <span> {{ sportsmanData.sex }} </span> </div>

            <div class="section birthDate"> <span class="title">Дата рождения</span> <span> {{ sportsmanData.year_birthday }} </span> </div>

          </div>

          <div class="profileInfoBody">

            <div class="section region"> <span class="title">Регион</span> <span> {{ sportsmanData.region }} </span> </div>

            <div class="section institute"> <span class="title">Учреждение</span> <span> {{ sportsmanData.school }} </span> </div>

            <div class="section rank"> <span class="title">Звание</span> <span> {{ sportsmanData.rank }} </span> </div>

          </div>

        </div>

      </div>

      <div class="profileCompetitionsSection">

        <div class="profileCompetitionsHeader">

          <div class="section competitionDate">
            <span>Дата</span>
          </div>

          <div class="section competitionLocation">
            <span>Место проведения</span>
          </div>

          <div class="section competitionCategory">
            <span>Категория</span>
          </div>

          <div class="section competitionDiscipline">
            <span>Дисциплина</span>
          </div>

          <div class="section competitionPosition">
            <span>Позиция</span>
          </div>

        </div>

        <div class="profileCompetitionsList">

          <div v-for="(competition, index) in sportsmanData.competitions" :key="index" class="profileCompetitionListRow">

            <div class="section competitionDate">
              <span>01.01.2020</span>
            </div>

            <div class="section competitionLocation">
              <span>Кластер Сопка, г. Красноярск Кластер Сопка, г. Красноярск Кластер Сопка, г. Красноярск</span>
            </div>

            <div class="section competitionCategory">
              <span>Чемпионат России по фристайлуЧемпионат России по фристайлу {{ competition.placeholder }}</span>
            </div>

            <div class="section competitionDiscipline">
              <span>Акробатика</span>
            </div>

            <div class="section competitionPosition">
              <span>1</span>
            </div>

          </div>

        </div>

      </div>

    </div>

</template>

<script>

  import {mapGetters} from 'vuex'

  export default {

    name: "sportsmanProfile",

    computed:{

      ...mapGetters('sportsmen', {
        sportsmenList: 'sportsmenList'
      }),

      sportsmanData(){
        return this.sportsmenList.filter(
          sportsman => sportsman.tw_code === this.$route.params.twCode
        )[0];
      }

    }

  }

</script>

<style lang="scss" scoped>

  .sportsmanProfileWrapper{
    display: flex;
    flex-direction: column;
    height: calc(100% - 100px);
    padding: 32px 32px 0 32px;

    .mainSection{
      display: flex;
      padding-bottom: 32px;
      max-height: 50%;

      .profilePhoto{

        .photoSectionWrapper{
          width: 228px;

          .photoSectionInnerWrapper{
            position: relative;
            padding-bottom: 134.8%;

            .photo{
              position: absolute;
              display: flex;
              align-items: center;
              justify-content: center;
              left: 0; top: 0;
              width: 100%; height: 100%;
              font-family: 'Segoe MDL2 Assets', sans-serif;
              font-size: 20px;

              .emptyPhoto{
                font-size: 8rem;
              }
            }
          }
        }
      }
      .profileInfo{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin-left: 32px;

        .profileInfoHeader{
          display: flex;
          align-items: flex-start;
          margin-bottom: 32px;


          .name{
            font-size: 2rem;
          }

          .section{
            display: flex;
            flex-direction: column;
            margin-left: 32px;

            .title{
              font-size: 0.75rem;
              margin-bottom: 2px;
            }
          }

        }
        .profileInfoBody{

          .section{
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;

            .title{
              font-size: 0.75rem;
              margin-bottom: 2px;
            }
          }
        }
      }
    }

    .profileCompetitionsSection{
      display: flex;
      min-height: 50%;
      flex-direction: column;

      .section{
        display: flex;
        align-items: center;
        margin-right: 24px;
      }

      .competitionDate{
        flex-shrink: 0;
        width: 84px;
      }

      .competitionLocation{
        flex-grow: 1;
      }

      .competitionCategory{
        flex-shrink: 0;
        width: 308px;
      }

      .competitionDiscipline{
        flex-shrink: 0;
        width: 308px;
      }

      .competitionPosition{
        flex-shrink: 0;
        width: 64px;
      }

      .profileCompetitionsHeader{
        display: flex;
        flex-wrap: nowrap;
        padding: 12px 24px;
        background-color: rgba(255, 255, 255, 0.75);
      }

      .profileCompetitionsList{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin-top: 16px;
        overflow-y: scroll;

        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
        scrollbar-width: none;

        .profileCompetitionListRow{
          display: flex;
          width: 100%;
          padding: 12px 24px;
          margin-bottom: 16px;
          background-color: rgba(255, 255, 255, 0.75);
        }
      }
      .profileCompetitionsList::-webkit-scrollbar{
         display: none;
      }
    }
  }

</style>
