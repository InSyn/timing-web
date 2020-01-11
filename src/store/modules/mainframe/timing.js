export default {

  namespaced: true,

  state: {

    competitorsList: [

    ],

    competitorStarted: [

    ],

    competitorsFinished: [

    ]

  },

  getters: {

    competitorsList(state){
      return state.competitorsList
    },
    competitorStarted(state){
      return state.competitorStarted
    },
    competitorsFinished(state){
      return state.competitorsFinished
    }
  },

  mutations: {
    setList(state, data){

      let list = [];

      list = data;

      state.competitorsList = list;

    },
    setStarted(state, data){

      let list =[];

      list = data;

      state.competitorStarted = list;
    },
    setFinished(state, data){

      let list =[];

      list = data;

      state.competitorsFinished = list;
    }
  },

  actions: {
    setList(store, data){
      store.commit('setList', data)
    },
    setStarted(store, data){
      store.commit('setStarted', data)
    },
    setFinished(store, data){
      store.commit('setFinished', data)
    }
  }

}
