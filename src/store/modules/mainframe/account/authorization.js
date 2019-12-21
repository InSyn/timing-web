export default {

    namespaced: true,

    state: {

        accountRole: '',

        isAdmin: false,

        isAuthorized: false,

        accounts: [
            {
                name: 'judge_jumps',
                login: 'judge-jumps',
                password: 'jjtw2019'
            },
            {
                name: 'judge_turns',
                login: 'judge-turns',
                password: 'jttw2019'
            },
            {
                name: 'chief_judge',
                login: 'chief-judge',
                password: 'cjtw2019'
            },
            {
                name: 'secretary',
                login: 'secretary',
                password: 'sjtw2019'
            }
        ]

    },

    getters: {

        accountRole(state){
            return state.accountRole
        },

        isAdmin(state){
            return state.isAdmin
        },

        isAuthorized(state){
            return state.isAuthorized
        },

        accounts(state){
            return state.accounts
        }

    },

    mutations: {

        approveAuth(state, data){
            console.log(data)
        },

        setRole(state, data){
            state.accountRole = data;
        },

        setAuthorized(state){
            state.isAuthorized = true;
        }

    },

    actions: {

        approveAuth(store, data){
            store.commit('approveAuth', data);
        },

        setRole(store, data){
            store.commit('setRole', data)
        },

        setAuthorized(store){
            store.commit('setAuthorized')

        }

    }

}
