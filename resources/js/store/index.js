import Vue from 'vue';
import Vuex from 'vuex';

import taskCreatedForm from "./modules/taskCreatedForm";
import taskList from "./modules/taskList";
import updateTask from "./modules/updateTask";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        taskCreatedForm,
        taskList,
        updateTask

    },
});
