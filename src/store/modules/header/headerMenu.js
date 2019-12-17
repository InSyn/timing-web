export default {

  namespaced: true,

  state:{
    menuList: [
      {
        title:'Спортсмены',
        url:'/sportsmen'
      },
      {
        title:'Соревнования',
        url:'/competitions'
      },
      {
        title:'Хронометраж',
        url:'/timing'
      },
      {
        title:'Рейтинги',
        url:'/ratings'
      },
      {
        title:'Тренеры',
        url:'/trainers'
      },
      {
        title:'Судьи',
        url:'/judges'
      },
      {
        title:'Регионы',
        url:'/regions'
      },
      {
        title:'Учреждения',
        url:'/institutions'
      },
      {
        title:'Обьекты',
        url:'/objects'
      },
      {
        title:'Медиа',
        url:'/media'
      }
    ]
  },

  getters:{
    menuList(state){
      return state.menuList;
    }
  },

  mutations:{

  },

  actions:{

  }

}
