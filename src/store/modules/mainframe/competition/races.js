import Vue from "vue";

export default {
    namespaced: true,

    state: {

        races:[

        ],

        stages: [
            {
                title: 'Квалификация'
            },
            {
                title: 'Финал 2'
            },
            {
                title: 'Финал 1'
            }
        ],

        competitors:[
        ],

        chosenStage: '',

        chosenSex: '',

        competitorChosen:{
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
        }

    },

    getters: {
        stages(state){
            return state.stages
        },
        chosenStage(state){
            return state.chosenStage
        },
        chosenSex(state){
            return state.chosenSex
        },
        competitors(state){
            return state.competitors
        },
        competitorChosen(state){
            return state.competitorChosen
        }
    },

    mutations: {
        setStage(state, data){
            state.chosenStage = data;
        },
        setSex(state, data){
            state.chosenSex = data;
        },
        addCompetitor(state, data){
            state.competitors.push({
                bib: data.bib,
                tid: data.tid,
                fisCode: data.fisCode,
                fullName: data.fullName,
                birthYear: data.birthYear,
                rank: data.rank,
                city: data.city,
                region: data.region,
                school: data.school,
                team: data.team,
                Jump1Mark: '',
                Jump2Mark: '',
                turns1Mark: '',
                turns1Red: '',
                turns2Mark: '',
                turns2Red: '',
                turns3Mark: '',
                turns3Red: '',
                markRes: ''
            });
        },
        fillCompetitor(state, data){

            if (data) {

                state.competitorChosen.fullName = data.surname + ' ' + data.name;
                state.competitorChosen.fisCode = data.fis_code;
                state.competitorChosen.birthYear = data.year_birthday;
                state.competitorChosen.rank = data.rank;
                state.competitorChosen.city = data.city;
                state.competitorChosen.region = data.region;
                state.competitorChosen.school = data.school;
                state.competitorChosen.team = data.team;

            }

            else console.log(0);

        },
    },

    actions: {
        setStage(store, data){
            store.commit('setStage', data)
        },
        setSex(store, data){
            store.commit('setSex', data)
        },
        addCompetitor(store, data){
            store.commit('addCompetitor', data);
        },

        fillCompetitor(store, data){
            store.commit('fillCompetitor', data)
        },

        getCompetitor(store,data){
            Vue.http.get('http://labsd.ga/time/web/index.php?r=sportsmen%2Fviewtid&id='+data).then( response => {
                store.dispatch('fillCompetitor', response.body)
            })
        },
    }
}
