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
      // },
      // {
      //   photo:'',
      //   firstName: 'Илья',
      //   secondName: 'Буров',
      //   TWCode: '0000101',
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
      //     }
      //   ]
      // },
      // {
      //   photo:'/sportsmanExample.png',
      //   firstName: 'Александр',
      //   secondName: 'Ведренко',
      //   TWCode: '0003331',
      //   FISCode: '2534005',
      //   gender: 'Мужской',
      //   birthDate: '01.01.2000',
      //   region: 'Санкт-Петербург',
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
      //     }
      //   ]
      // },
      // {
      //   photo:'/sportsmanExample.png',
      //   firstName: 'Илья',
      //   secondName: 'Буров',
      //   TWCode: '0002001',
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
      //     }
      //   ]
      // },
      // {
      //   photo:'',
      //   firstName: 'Егор',
      //   secondName: 'Кузьмин',
      //   TWCode: '0000023',
      //   FISCode: '2532321',
      //   gender: 'Мужской',
      //   birthDate: '01.01.1999',
      //   region: 'Санкт-Петербург, Башкортостан',
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
      //     }
      //   ]
      // },
      // {
      //   photo:'',
      //   firstName: 'Илья',
      //   secondName: 'Буров',
      //   TWCode: '0020004',
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
      //     }
      //   ]
      // },
      // {
      //   photo:'',
      //   firstName: 'Егор',
      //   secondName: 'Кузьмин',
      //   TWCode: '0000014',
      //   FISCode: '2532221',
      //   gender: 'Мужской',
      //   birthDate: '01.01.1999',
      //   region: 'Санкт-Петербург, Башкортостан',
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
      //     }
      //   ]
      // },
      // {
      //   photo:'',
      //   firstName: 'Егор',
      //   secondName: 'Кузьмин',
      //   TWCode: '0030025',
      //   FISCode: '2532221',
      //   gender: 'Мужской',
      //   birthDate: '01.01.1999',
      //   region: 'Санкт-Петербург, Башкортостан',
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
      //     }
      //   ]
      // },
      // {
      //   photo:'/sportsmanExample.png',
      //   firstName: 'Александр-Первый',
      //   secondName: 'Ведренко-Ибн-Мухадин-Забиз-Зуб-Хураб',
      //   TWCode: '0403733',
      //   FISCode: '2534005',
      //   gender: 'Мужской',
      //   birthDate: '01.01.2000',
      //   region: 'Санкт-Петербург',
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
      //     }
      //   ]
      // },
      // {
      //   photo:'/sportsmanExample.png',
      //   firstName: 'Илья',
      //   secondName: 'Буров-Ибн-Мухадин-Забиз-Зуб-Хураб-Мухаммед-Аль-Хабиб',
      //   TWCode: '0000005',
      //   FISCode: '2523534',
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
      // },
      // {
      //   photo:'/sportsmanExample.png',
      //   firstName: 'Александр',
      //   secondName: 'Ведренко',
      //   TWCode: '0003754',
      //   FISCode: '2534005',
      //   gender: 'Мужской',
      //   birthDate: '01.01.2000',
      //   region: 'Санкт-Петербург',
      //   institute: 'ГБУ МО СШОР "Истина", МУ СШОР №3 им.В.И.Русанова ',
      //   rank: 'Кандидат в мастера спорта',
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
      //   photo:'',
      //   firstName: 'Илья',
      //   secondName: 'Буров',
      //   TWCode: '0005006',
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
      //     }
      //   ]
      // },
      // {
      //   photo:'',
      //   firstName: 'Илья',
      //   secondName: 'Буров',
      //   TWCode: '0000018',
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
      // },
      // {
      //   photo:'',
      //   firstName: 'Илья',
      //   secondName: 'Буров',
      //   TWCode: '1000201',
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
      //     }
      //   ]
      // },
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
