export default {

    namespaced: true,

    state: {

        competitors:[
            {
                bib: '101',
                tid: '2439',
                fisCode: '1100',
                fullName: 'Grandissimo Daddy-Baddy',
                birthYear: '1901',
                rank: 'б.р.',
                city: 'Московская обл.',
                region: 'Московская обл.',
                school: 'Школа Самых Классных Ребят №69',
                team: 'Фристайлеры намба уан'
            }
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

        }

    },

    actions: {

        addCompetitor(store, data){
            store.commit('addCompetitor', data)
        },

        chooseCompetitor(store, data){
            store.commit('chooseCompetitor', data)
        }

    }

}
