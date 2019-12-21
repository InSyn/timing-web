import Vue from "vue";

export default {

  namespaced: true,

  state:{
    sportsmenList: [
      // {
      //   photo:'',
      //   firstName: '',
      //   secondName: '',
      //   TWCode: '',
      //   FISCode: '',
      //   gender: '',
      //   birthDate: '',
      //   region: '',
      //   institute: '',
      //   rank: '',
      //   competitions: [
      //     {
      //       placeholder:'Ссылка на соревнование'
      //     },
      //     {
      //       placeholder:'Ссылка на соревнование'
      //     },
      //     {
      //       placeholder:'Ссылка на соревнование'
      //     }
      //   ]
      // },
      // {
      //   photo:'/sportsmanExample.png',
      //   firstName: 'Илья',
      //   secondName: 'Burov',
      //   TWCode: '0000001',
      //   FISCode: '2527534',
      //   gender: 'Мужской',
      //   birthDate: '01.01.1991',
      //   region: 'Московская обл., Ярославская обл.',
      //   institute: 'ГБУ МО СШОР "Истина", МУ СШОР №3 им.В.И.Русанова ',
      //   rank: 'Заслуженный мастер спорта',
      //   competitions: [
      //     {
      //       placeholder:'Ссылка на соревнование'
      //     },
      //     {
      //       placeholder:'Ссылка на соревнование'
      //     },
      //     {
      //       placeholder:'Ссылка на соревнование'
      //     },
      //     {
      //       placeholder:'Ссылка на соревнование'
      //     },
      //     {
      //       placeholder:'Ссылка на соревнование'
      //     },
      //     {
      //       placeholder:'Ссылка на соревнование'
      //     },
      //     {
      //       placeholder:'Ссылка на соревнование'
      //     },
      //     {
      //       placeholder:'Ссылка на соревнование'
      //     },
      //     {
      //       placeholder:'Ссылка на соревнование'
      //     },
      //     {
      //       placeholder:'Ссылка на соревнование'
      //     },
      //     {
      //       placeholder:'Ссылка на соревнование'
      //     }
      //   ]
      // }
    ]
  },

  getters:{

    sportsmenList(state){
      return state.sportsmenList
    },


  },

  mutations:{
    setSportsmenList(state, data){
      if (state.sportsmenList.length === 0)
      for (let i in data){
        state.sportsmenList.push(data[i])
      }
    }
  },

  actions:{
    loadSportsmen(store){
      Vue.http.get('http://labsd.ga/time/web/index.php?r=sportsmen%2Flist').then( response => {
        store.commit('setSportsmenList', response.body)
      })
    }
  }
}
