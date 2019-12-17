<template>

  <div class="competitionsListWrapper">

    <div class="competitionsList">

      <div class="competitionWrapper" v-for="(competition, index) in competitionsList" :key="index">

        <div class="locationSection">
          <div class="date"> {{ competition.date }} </div>
          <div class="location"> {{ competition.location }} </div>
        </div>

        <router-link tag="div" :to="{name: 'competitionPage', params: {id: competition.id}}" class="titleSection">
          <div class="title"> {{ competition.title }} </div>
          <div class="disciplines">
            <div class="discipline" v-for="(discipline, index) in competition.disciplines" :key="index">
              {{ discipline }}
            </div>
          </div>
        </router-link>

        <div class="docSection">
          <a v-for="(doc, index) in competition.documents" :key="index" :href="doc.url" class="results"> {{ doc.title }} </a>
        </div>

      </div>

    </div>

  </div>

</template>

<script>

  import {mapGetters} from 'vuex';

  export default {

    name: "competitionsMainFrame",

    computed:{
      ...mapGetters('competitions',{
        competitionsList: 'competitionsList'
      })
    }

  }

</script>

<style lang="scss" scoped>

  @import "../../../assets/scss/colors";
  @import "../../../assets/scss/transition-conf";

  .competitionsListWrapper{
    max-height: inherit;

    .competitionsList{
      display: flex;
      flex-direction: column;
      max-height: 100%;
      padding: 0 32px;
      overflow: auto;

      -ms-overflow-style: none;
      overflow: -moz-scrollbars-none;
      scrollbar-width: none;

      .competitionWrapper{
        display: flex;
        flex-grow: 1;
        transition: background-color $transition-time-default;
        background-color: rgba(255, 255, 255, 0.75);
        margin-bottom: 16px;

        .locationSection{
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-basis: 238px;
          padding: 12px 24px;

          .date{
            margin-bottom: 5px;
          }
          .location{

          }
        }
        .titleSection{
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: center;
          padding: 12px 24px;
          cursor: pointer;
          border-left: 1px solid $blueBorderColor;
          border-right: 1px solid $blueBorderColor;

          .title{
            margin-bottom: 5px;
          }
          .disciplines{
            display: flex;
            align-items: center;

            .discipline{
              margin-right: 12px;
              font-weight: 300;
            }
          }
        }
        .docSection{
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-basis: 121px;
          padding: 12px 24px;
          font-size: 0.8rem;
          *{
            cursor: pointer;
            color: $textDisabledColor;
          }
          *:hover{
            color: lighten($textDisabledColor, 10%);
          }
        }
      }
      .competitionWrapper:hover{
        background-color: $backgroundColorLight;
      }
    }
    .competitionsList::-webkit-scrollbar{
      display: none;
    }
  }

</style>
