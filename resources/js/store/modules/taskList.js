export default {
    actions: {
        taskList: (context) => {
            axios.get('api/getList')
                .then(response => {
                    context.commit('getList', response.data)
                })
        },


    },

    mutations: {
        getList(state, tasks) {
            state.tasks = tasks;

        }

    },

    state: {
        tasks: [],
    },

    getters: {

        taskList(state) {
            return state.tasks;
        }

    },

}
