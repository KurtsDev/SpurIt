<template>
    <div>


        <transition name="fade">

            <div class="taskList">


                <div class="TODO">
                    <h3>TODO</h3>
                    <template v-for="task in taskList" v-if="task.status == 'TODO'">
                        <div class="item">
                            <p>{{task.name}}</p>
                            <p>{{task.description}}</p>
                            <button v-on:click="updateTask(task.id)">Изменить</button>
                        </div>
                    </template>
                </div>

                <div class="DOING">
                    <h3>DOING</h3>
                    <template v-for="task in taskList" v-if="task.status == 'DOING'">
                        <div class="item">
                            <p>{{task.name}}</p>
                            <p>{{task.description}}</p>
                            <button v-on:click="updateTask(task.id)">Изменить</button>
                        </div>
                    </template>
                </div>

                <div class="DONE">
                    <h3>DONE</h3>
                    <template v-for="task in taskList" v-if="task.status == 'DONE'">
                        <div class="item">
                            <p>{{task.name}}</p>
                            <p>{{task.description}}</p>
                            <button v-on:click="updateTask(task.id)">Изменить</button>
                        </div>
                    </template>
                </div>


            </div>

        </transition>


    </div>
</template>

<script>


    export default {

        mounted() {
            this.$store.dispatch('taskList');
        },

        computed: {

            taskList() {
                return this.$store.getters.taskList;
            },

        },


        methods: {
            updateTask(id) {
                this.$root.$store.commit('updateFormState');
                this.$root.$store.dispatch('updateTask', id);

            }
        }


    }
</script>


<style scoped>

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
    {
        opacity: 0;
    }

    .taskList {
        display: flex;
        justify-content: space-around;
        border: 1px solid black;
        background-color: aquamarine;
    }
    .item {
        background-color: white;
        padding: 0 20px;
        margin: 5px 0;
        border: 1px solid black;
    }


</style>

