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
import authorization from './modules/mainframe/account/authorization'
import profile from './modules/mainframe/account/profile'
import createdCompetition from './modules/mainframe/competition/createdCompetition'
import races from './modules/mainframe/competition/races'
import timing from './modules/mainframe/timing'

export const store = new Vuex.Store({
  modules: {
    headerMenu,
    competitions,
    sportsmen,
    createEvent,
    createEventMenu,
    competitors,
    createSportsman,
    authorization,
    profile,
    createdCompetition,
    races,
    timing
  }
});
