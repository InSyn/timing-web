import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import emptyPage from './components/mainFrame/emptyPage/emptyPage'
import competitions from './components/mainFrame/competitions/competitions'
import sportsmen from './components/mainFrame/sportsmen/sportsmen'
import sportsmenProfile from './components/mainFrame/sportsmen/sportsmanProfile/sportsmanProfile'
import competitionPage from './components/mainFrame/competitions/competition/competitionPage'
import timing from './components/mainFrame/timing/timing'
import createEvent from './components/mainFrame/createEventWindow/createEvent'
import competitionCompetitors from './components/mainFrame/createEventWindow/competitionCompetitors'
import competition from './components/mainFrame/createEventWindow/competition'
import createSportsman from "./components/mainFrame/sportsmen/createSportsman";
import judgeJumpsFrame from "./components/mainFrame/timing/moguls/judgeJumpsFrame";
import judgeTurnsFrame from "./components/mainFrame/timing/moguls/judgeTurnsFrame";
import secretaryFrame from "./components/mainFrame/timing/moguls/secretaryFrame";
import mainJudgeFrame from "./components/mainFrame/timing/moguls/mainJudgeFrame";

const routes = [
  {
    path: '*',
    component: emptyPage
  },
  {
    path: '',
    redirect: '/competitions'
  },
  {
    name: 'competitions',
    path:'/competitions',
    component:competitions
  },
  {
    name: 'sportsmen',
    path:'/sportsmen',
    component:sportsmen
  },
  {
    name: 'createSportsman',
    path: '/createSportsman',
    component: createSportsman
  },
  {
    name: 'sportsmenProfile',
    path:'/sportsmen/sportsman_profile_:twCode',
    component: sportsmenProfile,
    props: true
  },
  {
    name: 'competitionPage',
    path: '/competitions/competition_:id',
    component: competitionPage,
    props: true
  },
  {
    name:'timing',
    path:'/timing',
    component: timing,
    props: true,
    children: [
      {
        name: 'judgeJumps',
        path: 'judge_jumps_timing',
        component: judgeJumpsFrame,
        props: true
      },
      {
        name: 'judgeTurns',
        path: 'judge_turns_timing',
        component: judgeTurnsFrame,
        props: true
      },
      {
        name: 'mainJudge',
        path: 'main_judge_timing',
        component: mainJudgeFrame,
        props: true
      },
      {
        name: 'secretary',
        path: 'secretary_timing',
        component: secretaryFrame,
        props: true
      }
    ]
  },
  {
    name:'createEvent',
    path:'/createEvent',
    redirect: competition,
    component: createEvent,
    props: true,
    children:[
      {
        name:'competitionCompetitors',
        path: 'competitionCompetitors',
        component: competitionCompetitors,
      },
      {
        name: 'competition',
        path: 'competition',
        component: competition,
      }
    ]
  }
];

export const router = new VueRouter({
  mode: 'history',
  routes,
});
