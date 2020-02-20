export default {
    actions: {
        updateTask(context, id) {
            axios.get('api/update', {
                params: {
                    id: id
                }
            }).then(response => {
                context.commit('setUpdateId', response.data.id);
                context.commit('getComments', response.data.comments);
            })
        },

        updateTaskSubmit({state, commit}) {
            axios.post('api/updateStore', {
                id: state.id,
                status: state.status,
                comment: state.comment,
            }).then(response => {
                commit('updateFormState');
            })
        }
    },

    mutations: {
        setUpdateId: (state, id) => state.id = id,
        setStatus: (state, status) => state.status = status,
        setComment: (state, comment) => state.comment = comment,
        getComments: (state, comments) => state.comments = comments,
        updateFormState: (state) => {
            state.updateFormState = !state.updateFormState;
            state.comment = '';
        }
    },

    state: {
        status: '',
        updateFormState: false,
        id: '',
        comment: '',
        comments: [],
    },

    getters: {
        updateFormState(state) {
            return state.updateFormState;
        },

        comments(state) {
            return state.comments.sort(function (itemA, itemB) {
                return (itemB.id - itemA.id)
            });
        }
    },
}
