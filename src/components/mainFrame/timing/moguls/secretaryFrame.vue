<template>
    <div class="secretaryTimingWrapper">

        <div class="controls">
            <div class="toOnlineTranslation controlsButton">Online-трансляция</div>
            <div class="toResultsScreen controlsButton">Выести результаты на экран</div>
        </div>

        <div class="mainFrameWrapper">

            <div class="startListWrapper">

                <div class="startList" >
                    <div class="competitorWrapper" v-for="(competitor, index) in this.createdCompetitionData.competitors" :key="index">
                        {{competitor.bib + ' ' + competitor.fullName}}
                    </div>
                </div>

                <div class="nextCompetitor">

                    <div class="nextCompetitorData">{{createdCompetitionData.races[0].competitors[0].fullName}}</div>

                    <div class="setOnTrackButton" @click="setStarted()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="green">
                            <path d="M24 12l-10-10v7h-14v6h14v7z"/>
                        </svg>
                    </div>

                </div>

            </div>

            <div class="competitorOnTrackWrapper">

                <div class="name">
                    {{createdCompetitionData.races[0].competitors[0].fullName}}
                </div>

                <div class="controlsFrame">

                    <div class="time_jCodes">

                        <div class="inputWrapper">
                            <label for="time">Время:</label>
                            <input id="time" type="text" class="time">
                        </div>

                        <div class="inputWrapper">
                            <label for="fJumpCode">Код пр.1:</label>
                            <input id="fJumpCode" type="text" class="fJumpCode">
                        </div>

                        <div class="inputWrapper">
                            <label for="sJumpCode">Код пр.2:</label>
                            <input id="sJumpCode" type="text" class="sJumpCode">
                        </div>

                    </div>

                    <div class="marks">

                        <div class="judgeMarksWrapper turnsMarks">

                            <div class="judgeMarkWrapper judgeTurns1">

                                <div class="title">C1</div>

                                <div class="inputsWrapper">

                                    <div class="mark">
                                        <input type="text" id="tm1">
                                    </div>

                                    <div class="penalty">
                                        <input type="text" id="tp1">
                                    </div>

                                </div>

                            </div>

                            <div class="judgeMarkWrapper judgeTurns2">

                                <div class="title">C2</div>

                                <div class="inputsWrapper">

                                    <div class="mark">
                                        <input type="text" id="tm2">
                                    </div>

                                    <div class="penalty">
                                        <input type="text" id="tp2">
                                    </div>

                                </div>

                            </div>

                            <div class="judgeMarkWrapper judgeTurns3">

                                <div class="title">C3</div>

                                <div class="inputsWrapper">

                                    <div class="mark">
                                        <input type="text" id="tm3">
                                    </div>

                                    <div class="penalty">
                                        <input type="text" id="tp3">
                                    </div>

                                </div>

                            </div>

                            <div class="judgeMarkWrapper judgeTurns4">

                                <div class="title">C4</div>

                                <div class="inputsWrapper">

                                    <div class="mark">
                                        <input type="text" id="tm4">
                                    </div>

                                    <div class="penalty">
                                        <input type="text" id="tp4">
                                    </div>

                                </div>

                            </div>

                            <div class="judgeMarkWrapper judgeTurns5">

                                <div class="title">C5</div>

                                <div class="inputsWrapper">

                                    <div class="mark">
                                        <input type="text" id="tm5">
                                    </div>

                                    <div class="penalty">
                                        <input type="text" id="tp5">
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div class="judgeMarksWrapper jumpsMarks">

                            <div class="judgeMarkWrapper judgeJumps1">

                                <div class="title">C6</div>

                                <div class="inputsWrapper">

                                    <div class="mark1">
                                        <input type="text" id="jm11">
                                    </div>

                                    <div class="mark22">
                                        <input type="text" id="jm12">
                                    </div>

                                </div>

                            </div>

                            <div class="judgeMarkWrapper judgeJumps2">

                                <div class="title">C7</div>

                                <div class="inputsWrapper">

                                    <div class="mark1">
                                        <input type="text" id="jm21">
                                    </div>

                                    <div class="mark22">
                                        <input type="text" id="jm22">
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="footer">

                    <div class="statusButton dnfStatusButton"
                         v-bind:class="{'statusButton_active': Status.DNF}" @click="Status.DNF = !Status.DNF">
                        DNF
                    </div>

                    <div class="statusButton dsqStatusButton"
                         v-bind:class="{'statusButton_active': Status.DSQ}" @click="Status.DSQ = !Status.DSQ">
                        DSQ
                    </div>

                    <div class="result">
                        <span>Результат: </span>
                        <div class="resultScore">56.29</div>
                    </div>

                    <div class="statusButton publishButton">
                        Опубликовать
                    </div>

                </div>

            </div>

        </div>

        <div class="resultFrameWrapper">

            <div class="finishListWrapper">

                <div class="finishListTitle">
                    <span>На финише:</span>
                </div>

                <div class="finishedCompetitorRow" :key="index" v-for="(competitor, index) in this.createdCompetitionData.competitors">
                    {{competitor.fullName}}
                </div>

            </div>

            <div class="resultsWrapper">

                <div class="resultsTitle">
                    <span>Результаты заезда</span>
                </div>

                <div class="resultsHeader"></div>

            </div>

        </div>

    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {

        name: "secretaryFrame",

        data(){

            return {

                Status: {
                    DNF: false,
                    DSQ: false
                }

            }

        },

        computed: {

            ...mapGetters('createdCompetition', {
                createdCompetitionData: 'createdCompetitionData'
            })
        },

        methods: {
            ...mapActions('timing', {
                setStarted: 'setStarted'
            })
        }

    }
</script>

<style lang="scss" scoped>

    @import "../../../../assets/scss/colors";
    @import "../../../../assets/scss/transition-conf";

    *{
        /*border: 1px solid crimson;*/
    }
    .secretaryTimingWrapper{
        display: flex;
        position: relative;
        flex-direction: column;
        height: 100%;

        .controls{
            position: absolute;
            display: flex;
            top: -40px;
            right: 64px;

            .controlsButton{
                transition: background-color $transition-time-default;
                margin-right: 32px;
                padding: 4px 8px;
                color: $light_grey-light;
                background: rgba($dark_blue-light, 1);
                cursor: pointer;

                &:hover{
                    background: rgba(32, 196, 128, 0.4);
                }
                &:last-child{
                    margin-right: 0;
                }
            }
        }
        .mainFrameWrapper{
            display: flex;

            .startListWrapper{
                display: flex;
                flex-direction: column;
                flex-basis: 400px;

                .startList{
                    flex-grow: 1;

                    .competitorWrapper{
                        padding: 2px 0;
                    }
                }
                .nextCompetitor{
                    display: flex;
                    flex-wrap: nowrap;
                    align-items: center;

                    .nextCompetitorData{

                    }
                    .setOnTrackButton{
                        cursor: pointer;
                        margin-left: auto;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: rgba(0, 0, 0, 0.1);
                        padding: 4px 8px;
                    }
                }
            }
            .competitorOnTrackWrapper{
                flex-basis: 800px;
                flex-grow: 1;
                margin-left: 16px;

                .name{
                    padding: 4px 8px;
                }
                .controlsFrame{
                    display: flex;

                    .time_jCodes{
                        display: flex;
                        flex-direction: column;

                        .inputWrapper{
                            display: flex;
                            padding: 4px 0;

                            label{
                                margin-right: 24px;
                            }
                            input{
                                transition: background-color $transition-time-double;
                                margin-left: auto;
                                max-width: 64px;
                                padding: 4px 6px;
                                font-size: 1rem;
                                font-weight: bold;
                                border: 0;
                                outline: none;
                                color: $light_grey-light;
                                background: rgba(0, 0, 0, 0.2);

                                &:focus{
                                    background: rgba(255, 255, 255, 0.2);
                                    color: $dark_grey-dark;
                                }
                            }
                        }
                    }
                    .marks{
                        flex-grow: 1;
                        display: flex;
                        margin-left: 16px;

                        .judgeMarksWrapper{
                            display: flex;

                            .judgeMarkWrapper{
                                display: flex;
                                flex-grow: 1;
                                flex-direction: column;
                                border: 1px solid black;
                                align-items: center;

                                .inputsWrapper{
                                    display: flex;
                                    flex-direction: column;
                                    flex-grow: 1;
                                    justify-content: space-around;
                                    padding: 0px 8px;

                                    input{
                                        width: 50px;
                                        font-size: 1rem;
                                    }
                                }
                            }
                        }
                        .turnsMarks{
                            flex-basis: 71%;
                        }
                        .jumpsMarks{
                            flex-basis: 28%;
                        }
                    }
                }
                .footer{
                    display: flex;
                    margin-top: 16px;

                    .statusButton{
                        margin: 4px 8px;
                        padding: 0.8rem 1.8rem;
                        transition: border $transition-time-double, background $transition-time-default;
                        cursor: pointer;
                        background: rgba(222,64,64, 0.2);

                        &:hover{
                            box-shadow: inset 0 0 4px $light_grey-light;
                        }
                    }
                    .publishButton{
                        font-weight: bold;
                        font-size: 1rem;
                        color: $light_grey-light;
                        background: rgba($dark_blue-light, 1);
                        cursor: pointer;
                    }
                    .statusButton_active{
                        background-color: rgba(64,222,64, 0.4);
                    }
                    .result{
                        display: flex;
                        margin: 0 auto;
                        justify-content: center;
                        align-items: center;
                        font-size: 1.5rem;

                        .resultScore{
                            margin-left: 8px;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
        .resultFrameWrapper{
            height: 100%;
            margin-top: 16px;
            display: flex;
            flex-wrap: nowrap;

            .finishListWrapper{
                border-top: 1px solid $light_grey-light;
                border-right: 1px solid $light_grey-light;
                padding: 0 16px;
                flex-basis: 65%;

                .finishedCompetitorRow{
                    padding: 2px 0;
                }
                .finishListTitle{
                    font-size: 1.2rem;
                    padding: 4px 8px;
                }
            }
            .resultsWrapper{
                border-top: 1px solid $light_grey-light;
                padding: 0 16px;
                flex-basis: 35%;

                .resultsTitle{
                    font-size: 1.2rem;
                    padding: 4px 8px;
                }
            }
        }
    }
    @keyframes pressButton {
        from {
            background: rgba(0,0,0,0.1);
        }
        50%{
            background: rgba(0,0,0,0.4);
        }
        to{
            background: rgba(0,0,0,0.1);
        }
    }

</style>
