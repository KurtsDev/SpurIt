export default {
    actions: {
        submitTask({state}) {
            axios.post('api/store', {
                name: state.name,
                description: state.description,
                status: state.status,

            });
        }
    },

    mutations: {
        setName: (state, name) => state.name = name,
        setDescription: (state, description) => state.description = description,
        setStatus: (state, status) => state.status = status,
    },

    state: {
        name: '',
        description: '',
        status: '',
    },
}
