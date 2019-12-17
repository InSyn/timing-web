<template>

  <div class="sportsmenListWrapper">

    <div class="sportsmanListHeader">

      <div class="photoSectionWrapper">
        <div class="photoSectionInnerWrapper">
          <div class="photo"></div>
        </div>
      </div>

      <div class="TWCodeSection">TW-Code</div>
      <div class="FISCodeSection">FIS-Code</div>
      <div class="nameSection">Фио</div>
      <div class="regionSection">Регион</div>
      <div class="birthYearSection">Год рождения</div>
      <div class="genderSection">Пол</div>
      <div class="rankSection">Звание</div>

    </div>

    <div class="sportsmanList">

      <router-link class="sportsmanRow" tag="div" :to="'sportsmen/sportsman_profile_'+sportsman.tw_code" v-for="(sportsman, index) in sportsmenList" :key="index">

        <div class="sportsmanListHeader">

          <div class="photoSectionWrapper">
            <div class="photoSectionInnerWrapper">
              <div class="photo">
                <img src="../../../assets/media/photo/sportsmanExample.png" v-if="sportsman.photo" alt="">
                <div class="emptyPhoto" v-else></div>
              </div>
            </div>
          </div>
<!--          /assets/media/photo/sportsmanExample.png-->
          <div class="TWCodeSection">{{sportsman.tw_code}}</div>
          <div class="FISCodeSection">{{sportsman.fis_code}}</div>
          <div class="nameSection">{{sportsman.surname}} {{sportsman.name}}</div>
          <div class="regionSection">{{sportsman.region}}</div>
          <div class="birthYearSection">{{sportsman.year_birthday}}</div>
          <div class="genderSection">{{sportsman.sex}}</div>
          <div class="rankSection">{{ sportsman.rank }}</div>

        </div>

      </router-link>

    </div>

  </div>

</template>

<script>
  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';

  export default {

    name: "sportsmenMainFrame",

    created(){

      this.loadSportsmen()

    },

    computed:{

      ...mapGetters('sportsmen', {
        sportsmenList: 'sportsmenList'
      })

    },

    methods: {

      ...mapActions('sportsmen',{
        loadSportsmen: 'loadSportsmen'
      }),

      shortRank(rank){

        let shortRank = [];

        rank.split(' ').forEach( el => { el.length >= 2 ? shortRank.push( el[0].toUpperCase() ) : null } );

        return shortRank.join('');

      }

    }

  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/transition-conf";
  @import "../././../../assets/fonts/lato/lato.css";

  .sportsmenListWrapper{
    display: flex;
    flex-direction: column;
    padding: 0 32px;

    .sportsmanListHeader{
      display: flex;
      align-items: center;
      padding: 0 24px 0 0;
      margin-bottom: 16px;
      background-color: rgba(255, 255, 255, 0.75);

      .photoSectionWrapper{
        width: 46px;

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
              position: absolute;
              display: flex;
              align-items: center;
              justify-content: center;
              left: 0; top: 0;
              width: 100%; height: 100%;
              background-color: rgba(255, 255, 255, 0.5);
            }
          }
        }
      }
      .TWCodeSection{
        width: 69px;
        margin-left: 12px;
      }
      .FISCodeSection{
        width: 69px;
        margin-left: 24px;
      }
      .nameSection{
        flex-grow: 1;
        margin-left: 24px;
      }
      .regionSection{
        margin-left: 24px;
        width: 180px;
      }
      .birthYearSection{
        margin-left: 24px;
        width: 103px;
      }
      .genderSection{
        margin-left: 24px;
        width: 30px;
      }
      .rankSection{
        margin-left: 24px;
        width: 52px;
      }
    }
    .sportsmanList{
      overflow-y: scroll;

      -ms-overflow-style: none;
      overflow: -moz-scrollbars-none;
      scrollbar-width: none;

      .sportsmanRow{
        transition: background-color $transition-time-default;
        cursor: pointer;
        margin-bottom: 16px;

        .photoSectionWrapper{
          flex-shrink: 0;
          width: 46px;

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
              font-family: 'Segoe MDL2 Assets' , sans-serif;
              font-size: 20px;

              img{
                width: 100%;
              }
            }
          }
        }
        .TWCodeSection{
          flex-shrink: 0;
          width: 69px;
          margin-left: 12px;
        }
        .FISCodeSection{
          flex-shrink: 0;
          width: 69px;
          margin-left: 24px;
        }
        .nameSection{
          flex-grow: 1;
          margin-left: 24px;
        }
        .regionSection{
          flex-shrink: 0;
          margin-left: 24px;
          width: 180px;
        }
        .birthYearSection{
          flex-shrink: 0;
          margin-left: 24px;
          width: 103px;
        }
        .genderSection{
          flex-shrink: 0;
          margin-left: 24px;
          width: 30px;
        }
        .rankSection{
          flex-shrink: 0;
          margin-left: 24px;
          width: 52px;
        }

        &:hover{
          background-color: rgba(255,255,255,1);
        }
      }
    }


    *:not(.emptyPhoto){
      font-family: 'Lato', sans-serif;
      font-style: normal;
      font-weight: 300;
    }

    .sportsmanList::-webkit-scrollbar{
      display: none;
    }
  }

</style>
