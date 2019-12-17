export default {

    namespaced: true,

    state: {

        accountRole: 'judge_jumps_timing',

        isAdmin: false

    },

    getters: {

        accountRole(state){
            return state.accountRole;
        },

        isAdmin(state){
            return state.isAdmin;
        }

    },

    mutations: {

    },

    actions: {

    }

}
