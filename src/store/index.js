import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import headerMenu from './modules/header/headerMenu'
import competitions from './modules/mainframe/competitions'
import sportsmen from './modules/mainframe/sportsmen'
import createEvent from './modules/mainframe/createEvent'
import createEventMenu from './modules/mainframe/createEventMenu'
import competitors from './modules/mainframe/competitors'
import createSportsman from './modules/mainframe/createSportsman'


export const store = new Vuex.Store({
  modules: {
    headerMenu,
    competitions,
    sportsmen,
    createEvent,
    createEventMenu,
    competitors,
    createSportsman
  }
});
