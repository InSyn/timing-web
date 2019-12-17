// import Vue from 'vue';

export default {

  namespaced: true,

  state: {

    openers:[
    ]

  },

  getters: {

    openers(state){
      return state.openers
    }

  },

  mutations: {

    removeOpener(state){
      state.openers.pop();
    },

    addOpener(state, data){
      state.openers.push({secondName: data.secondName, firstName: data.firstName});
    }

  },

  actions: {

    removeOpener(store){
      store.commit('removeOpener')
    },

    addOpener(store, data){
      store.commit('addOpener', data)
    }

  }

}
