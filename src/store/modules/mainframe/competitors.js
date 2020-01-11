import Vue from "vue";

export default {

    namespaced: true,

    state: {

        competitors:[
        ],

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

        competitors(state){
            return state.competitors
        },

        competitorChosen(state){
            return state.competitorChosen
        }

    },

    mutations: {

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
                team: data.team
            })
        },

        chooseCompetitor(state, elem){

            elem.parentNode.classList.toggle('competitorsListRow__chosen');

            let container = elem.parentNode.childNodes;

            let dataList = [];

            for (let i in container){
                i <= (container.length)-1?
                    dataList.push(container[i].innerText):
                    null
            }

            state.competitorChosen.bib = dataList[0];
            state.competitorChosen.tid = dataList[1];
            state.competitorChosen.fisCode = dataList[2];
            state.competitorChosen.fullName = dataList[3];
            state.competitorChosen.birthYear = dataList[4];
            state.competitorChosen.rank = dataList[5];
            state.competitorChosen.city = dataList[6];
            state.competitorChosen.region = dataList[7];
            state.competitorChosen.school = dataList[8];
            state.competitorChosen.team = dataList[9];

        },

        fillCompetitor(state, data) {

            if (data) {

                state.competitorChosen.fullName = data.surname + ' ' + data.name;
                state.competitorChosen.fisCode = data.fis_code;
                state.competitorChosen.birthYear = data.year_birthday;
                state.competitorChosen.rank = data.rank;
                state.competitorChosen.city = data.city;
                state.competitorChosen.region = data.region;
                state.competitorChosen.school = data.school;
                state.competitorChosen.team = data.team;

                console.log(data);

                return data

            }
        }

    },

    actions: {

        addCompetitor(store, data){
            store.commit('addCompetitor', data)
        },

        chooseCompetitor(store, data){
            store.commit('chooseCompetitor', data)
        },

        fillCompetitor(store, data){
          store.commit('fillCompetitor', data)
        },

        getCompetitor(store, data){
            Vue.http.get('http://labsd.ga/time/web/index.php?r=sportsmen%2Fviewtid&id='+data).then( response => {
                store.dispatch('fillCompetitor', response.body)
            })
        }

    }

}
