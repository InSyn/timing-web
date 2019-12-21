export default {

  namespaced: true,

  state:{
    competitionsList:[
      // {
      //   id: '0000011',
      //   date:'19-24.12.2019',
      //   location:'Горная саланга',
      //   title:'Финал кубка России',
      //   delegates: [
      //     'Козлов Вячеслав ',
      //     'Ворона Евгений',
      //     'Знаменский Иван'
      //   ],
      //   disciplines:[
      //     'SX',
      //     'SXT'
      //   ],
      //   documents:{
      //     results: {
      //       title: 'Результаты',
      //       url: ''
      //     },
      //     protocols: {
      //       title: 'Протоколы',
      //       url: ''
      //     },
      //     changes: {
      //       title: 'Изменения',
      //       url: ''
      //     }
      //   },
      //   races: [
      //     {
      //       date: '24.03.2019',
      //       code: '0000',
      //       discipline: 'Могул',
      //       gender: 'Ж',
      //       protocols: [
      //         {
      //           title: 'Стартовый',
      //           url: ''
      //         },
      //         {
      //           title: 'Итоговый',
      //           url: ''
      //         },
      //       ]
      //     }
      //   ]
      // }
    ]
  },

  getters:{
    competitionsList: state => {
      return state.competitionsList
    }
  },

  mutations:{
    loadCompetitions(state, data){
      console.log(data)
    }
  },

  actions:{
    loadCompetitions(store, data){
      store.commit('loadCompetitions', data)
    }
  }
}
