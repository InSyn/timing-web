import Vue from 'vue';

export default {

  namespaced: true,

  state:{

  },

  getters: {

  },

  mutations:{

  },

  actions:{
    createSportsman(store, data) {

      let jsonData = JSON.stringify(data);

      Vue.http.post('http://labsd.ga/time/web/index.php?r=sportsmen%2Fcreatejson',
        jsonData, {
        headers:{
        }
      }).then( response => {
        console.log(response.body)
      }, (e)=>{
        console.log(e.body)
      })

    }
  }

}
