<template>
    <div class="racesWrapper">

        <div class="setParametersWrapper">

            <div class="racesInputWrapper">
                <label for="stage">Стадия</label>
                <select name="" id="stage" v-model="raceData.stage" @change="setStage(raceData.stage)">
                    <option :value="stage.title" v-for="(stage, index) in stages" :key="index" >{{stage.title}}</option>
                </select>
            </div>
            <div class="racesInputWrapper">
                <label class="sexLabel" for="sex">Пол</label>
                <select name="" id="sex" v-model="raceData.sex" @change="setSex(raceData.sex)">
                    <option value="М" >М</option>
                    <option value="Ж" >Ж</option>
                </select>
            </div>

            <div class="raceCompetitors">

                <div class="competitorDataInput">

                    <label for="selectCompetitor">Выбрать участника</label>

                    <select type="text" id="selectCompetitor" class="competitorSelect" v-model="competitorData">

                        <option :value="competitor" :key="index" class="competitorOption" v-for="(competitor, index) in createdCompetitionData.competitors">
                            {{competitor.tid + ' ' + competitor.fullName}}
                        </option>

                    </select>

                </div>

<!--                <div class="competitorDataInput">-->
<!--                    <label for="competitorBib">Bib</label>-->
<!--                    <input v-model="competitorData.bib" type="text" id="competitorBib">-->
<!--                </div>-->
<!--                <div class="competitorDataInput">-->
<!--                    <label for="competitorTid">T-Id</label>-->
<!--                    <input v-model="competitorData.tid" type="text" id="competitorTid"-->
<!--                           @input="getCompetitor(competitorData.tid)"-->
<!--                           @keyup.enter="setChosenCompetitor">-->
<!--                </div>-->
<!--                <div class="competitorDataInput">-->
<!--                    <label for="competitorFisCode">FIS-Code</label>-->
<!--                    <input v-model="competitorData.fisCode" type="text" id="competitorFisCode">-->
<!--                </div>-->
<!--                <div class="competitorDataInput">-->
<!--                    <label for="competitorFullName">Фамилия, Имя</label>-->
<!--                    <input v-model="competitorData.fullName" type="text" id="competitorFullName">-->
<!--                </div>-->
<!--                <div class="competitorDataInput">-->
<!--                    <label for="competitorBirthYear">Год рождения</label>-->
<!--                    <input v-model="competitorData.birthYear" type="text" id="competitorBirthYear">-->
<!--                </div>-->
<!--                <div class="competitorDataInput">-->
<!--                    <label for="competitorRank">Разряд</label>-->
<!--                    <input v-model="competitorData.rank" type="text" id="competitorRank">-->
<!--                </div>-->
<!--                <div class="competitorDataInput">-->
<!--                    <label for="competitorCity">Город</label>-->
<!--                    <input v-model="competitorData.city" type="text" id="competitorCity">-->
<!--                </div>-->
<!--                <div class="competitorDataInput">-->
<!--                    <label for="competitorRegion">Регион</label>-->
<!--                    <input v-model="competitorData.region" type="text" id="competitorRegion">-->
<!--                </div>-->
<!--                <div class="competitorDataInput">-->
<!--                    <label for="competitorSchool">Школа</label>-->
<!--                    <input v-model="competitorData.school" type="text" id="competitorSchool">-->
<!--                </div>-->
<!--                <div class="competitorDataInput">-->
<!--                    <label for="competitorTeam">Команда</label>-->
<!--                    <input v-model="competitorData.team" type="text" id="competitorTeam">-->
<!--                </div>-->

            </div>

            <div class="raceControls">

                <button class="addCompetitor" type="button"
                        @click="addCompetitor(competitorData)">Добавить участника</button>

                <button class="addStage" type="button" @click="addRace(race)">Создать заезд</button>

            </div>

        </div>

        <div class="competitorsWrapper">

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
                     v-for="(competitor, index) in competitors" :key="index">

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
        name: "races",

        beforeRouteLeave(to, from, next){

            this.saveData();

            next()

        },

        beforeRouteUpdate(to, from, next){

            next( vm => {

                vm.loadData()

            })

        },

        data(){

          return {

              stage: '',

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

              raceData: {
                  stage: '',
                  sex: ''
              }

          }

        },

        computed:{

            ...mapGetters('races',{

                stages: 'stages',
                chosenStage: 'chosenStage',
                competitors: 'competitors',
                competitorChosen: 'competitorChosen'

            }),

            ...mapGetters('createdCompetition', {

                createdCompetitionData: 'createdCompetitionData'

            }),

            race(){
                return {
                    stage: this.raceData.stage,
                    sex: this.raceData.sex,
                    competitors: this.competitors
                }
            }

        },

        methods:{

            ...mapActions('races',{
                setStage: 'setStage',
                setSex: 'setSex',
                addCompetitor: 'addCompetitor',
                getCompetitor: 'getCompetitor'
            }),

            ...mapActions('createdCompetition', {
                addRace: 'addRace'
            }),

            ...mapActions('competitors', {
                chooseCompetitor: 'chooseCompetitor',
                deleteCompetitor: 'deleteCompetitor'
            }),

            setChosenCompetitor(){

                if(this.competitorChosen.bib)
                    this.competitorData.bib = this.competitorChosen.bib;
                if(this.competitorChosen.tid)
                    this.competitorData.tid = this.competitorChosen.tid;
                if(this.competitorChosen.fisCode)
                    this.competitorData.fisCode = this.competitorChosen.fisCode;
                if(this.competitorChosen.fullName)
                    this.competitorData.fullName = this.competitorChosen.fullName;
                if(this.competitorChosen.birthYear)
                    this.competitorData.birthYear = this.competitorChosen.birthYear;
                if(this.competitorChosen.rank)
                    this.competitorData.rank = this.competitorChosen.rank;
                if(this.competitorChosen.city)
                    this.competitorData.city = this.competitorChosen.city;
                if(this.competitorChosen.region)
                    this.competitorData.region = this.competitorChosen.region;
                if(this.competitorChosen.school)
                    this.competitorData.school = this.competitorChosen.school;
                if(this.competitorChosen.team)
                    this.competitorData.team = this.competitorChosen.team;

                // this.checkLabelsAtChoose()

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

            cleanData(){

                let data = this.$data.competitorData;

                for (let i in data) {

                    if (data[i])
                        data[i] = ''

                }

                // this.checkLabelsAtAdd();

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
    @import '../../../assets/scss/colors';
    @import "../../../assets/scss/transition-conf";

    .racesWrapper{
        display: flex;
        height: 100%;
        padding: 32px 16px;

        .setParametersWrapper {
            display: flex;
            flex-direction: column;
            height: calc(100% - 100px);
            padding: 32px 16px;

            .racesInputWrapper {
                display: flex;
                flex-direction: column;

                label {
                    font-size: 1.2rem;
                    margin-bottom: 8px;
                }

                select {
                    transition: border $transition-time-double;
                    background: transparent;
                    font-size: 1.2rem;
                    padding: 4px 8px;
                    outline: transparent;
                    border: none;
                    border-bottom: 1px solid black;

                    &:hover{
                        border-bottom: 1px solid lighten(black, 50%);
                    }
                    option {
                        background-color: rgba(0, 0, 0, 0);
                        padding: 4px 8px;
                    }
                }
                .sexLabel{
                    margin-top: 8px;
                    margin-bottom: 4px;
                    font-size: 1rem;
                }
                #sex{
                    font-size: 1rem;
                }
            }

            .raceCompetitors {
                display: flex;
                flex-direction: column;
                margin-top: 24px;
                flex-grow: 1;

                .competitorDataInput {
                    margin-bottom: 8px;
                    display: flex;
                    flex-direction: column;

                    label{
                        font-size: 0.8rem;
                    }
                    input{
                        background: transparent;
                        border: none;
                        border-bottom: 1px solid black;
                        outline: transparent;
                        font-size: 1rem;
                        padding: 2px 4px;
                    }
                    .competitorSelect{
                        padding: 4px 4px;
                        font-size: 0.8rem;
                        border: 1px solid rgba(255, 255, 255, 0.3);
                        outline: transparent;
                        background-color: rgba(255, 255, 255, 0.4);
                    }
                }
            }

            .raceControls{
                display: flex;
                flex-direction: column;

                button{
                    transition: background-color $transition-time-double;
                    cursor: pointer;
                    padding: 8px 12px;
                    margin-bottom: 8px;
                    font-size: 1rem;
                    border: none;
                    outline: transparent;
                    background-color: $buttonBackgroundColor;
                    color: $buttonTextColor;


                    &:hover{
                        background-color: lighten($buttonBackgroundColor, 10%);
                    }
                }
            }
        }
        .competitorsWrapper{

            display: flex;
            flex-direction: column;
            flex-grow: 1;
            padding: 0 32px;

            .competitorsListHeader{
                display: flex;
                flex-wrap: nowrap;
                align-items: stretch;
                width: 100%;

                *{
                    display: flex;
                    align-items: center;
                    padding: 16px 8px;
                    border-right: 1px solid $borderColor;
                    border-bottom: 1px solid $borderColor;

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
            .competitorsListBody::-webkit-scrollbar-thumb{
                background-color: crimson;
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
                }
                .competitorsListRow__chosen{
                    background-color: rgba(255,255,255, 0.2);
                }
            }
        }
    }

</style>
