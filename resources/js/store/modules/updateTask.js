export default {
    actions: {

        updateTask(context, id) {
            axios.get('api/update', {
                params: {
                    id: id
                }
            }).then(response => {
                context.commit('setUpdateId', response.data.id);
                context.commit('setName', response.data.name);
                context.commit('setDescription', response.data.description);
                context.commit('setStatus', response.data.status);
            })
        },

        updateTaskSubmit({state}) {
            axios.post('api/updateStore', {
                id: state.id,
                name: state.name,
                description: state.description,
                status: state.status,
            });
        }


    },

    mutations: {
        setUpdateId: (state, id) => state.id = id,
        setName: (state, name) => state.name = name,
        setDescription: (state, description) => state.description = description,
        setStatus: (state, status) => state.status = status,

        updateFormState: (state) => state.updateFormState = !state.updateFormState,
    },

    state: {
        name: '',
        description: '',
        status: '',
        updateFormState: false,
        id: '',
    },

    getters: {
        updateFormState(state) {
            return state.updateFormState;
        }

    },

}
