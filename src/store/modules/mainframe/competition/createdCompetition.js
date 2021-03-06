import Vue from "vue";

export default {

    namespaced: true,

    state:{
        createdCompetitionData:{
            title: '',
            date: '',
            discipline: '',
            location: '',
            organization: '',
            nation: '',
            region: '',
            timingProvider: '',
            codex: '',
            delegate: {
                name: '',
                surname: '',
                city: ''
            },
            chiefJudge: {
                name: '',
                surname: '',
                city: ''
            },
            secretary: {
                name: '',
                surname: '',
                city: ''
            },
            slopeChief:{
                name:'',
                surname:'',
                city:''
            },
            seniorJudge:{
                name:'',
                surname:'',
                city:''
            },
            timingChief: {
                name:'',
                surname:'',
                city:''
            },
            judge1:{
                name:'',
                surname:'',
                city:''
            },
            judge2:{
                name:'',
                surname:'',
                city:''
            },
            judge3:{
                name:'',
                surname:'',
                city:''
            },
            judge4:{
                name:'',
                surname:'',
                city:''
            },
            judge5:{
                name:'',
                surname:'',
                city:''
            },
            competitors:[

            ],
            races: [

            ],
            temp: '',
            tempSnow: '',
            windDir: '',
            windSpeed: '',
            declaredTime: '',
            slopeName: '',
            length: '',
            width: '',
            angle: ''

        },
        competitors: [

        ]

    },

    getters:{
        createdCompetitionData(state){
            return state.createdCompetitionData
        },
        competitors(state){
            return state.competitors
        }
    },

    mutations: {

        addRace(state, data){
            let race={
                stage: '',
                sex: '',
                competitors: []
            };

            race.stage = data.stage;
            race.sex = data.sex;
            race.competitors = data.competitors;


            if (race.stage !== '' && race.sex !== '' && race.competitors !== [])
                state.createdCompetitionData.races.push(race);
            else
                console.log('Заезд не заполнен');

            console.log(state.createdCompetitionData.races)
        },

        addCompetitor(state, data){

            if (data.tid !== '')
                state.createdCompetitionData.competitors.push({
                    bib: data.bib,
                    tid: data.tid,
                    fisCode: data.fisCode,
                    fullName: data.fullName,
                    birthYear: data.birthYear,
                    rank: data.rank,
                    city: data.city,
                    region: data.region,
                    school: data.school,
                    team: data.team
                })

        },

        deleteCompetitor(state, chosen){

            let competitors = state.createdCompetitionData.competitors;

            for (let i in competitors) {

                if (competitors[i])

                    try {
                        if (competitors[i].tid === chosen.tid)
                            competitors = competitors.splice(competitors.indexOf(competitors[i]), 1)
                        // state.competitors.slice(data)
                    } catch (e) {
                        console.log(e)
                    }

            }

        }
    },

    actions: {

        addRace(store, data){
            store.commit('addRace', data)
        },

        sendCompetition(store, data){

            let jsonData = JSON.stringify(data);

            Vue.http.post('http://labsd.ga/time/web/index.php?r=sportsmen%2Fcreatejson',
                jsonData, {
                    headers:{
                    }
                }).then( response => {
                console.log(response)
            }, (e)=>{
                console.log(e.body)
            })

        },

        addCompetitor(store, data){
            store.commit('addCompetitor', data)
        },

        deleteCompetitor(store, data){
            store.commit('deleteCompetitor', data)
        }
    }

}
