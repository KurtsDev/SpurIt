<template>
    <div>
        <button v-on:click="openForm">Создать задачу</button>

        <transition name="fade">
            <form v-if="$data.formState">

                <div class="field">
                    <label for="name">Имя</label>
                    <input v-model="name" type="text" id="name" name="name">
                </div>

                <div class="field">
                    <label for="description">Описание </label>
                    <textarea v-model="description" id="description" name="description"></textarea>
                </div>

                <div class="field">
                    <label for="status">Статус </label>
                    <select v-model="status" id="status" name="status">
                        <option>TODO</option>
                        <option>DOING</option>
                        <option>DONE</option>
                    </select>
                </div>

                <button v-on:click.prevent="submit" type="submit">Отправить</button>
            </form>
        </transition>

    </div>
</template>

<script>
    export default {
        computed: {

            name: {
                get() {
                    return this.$store.state.name;
                },
                set(name) {
                    this.$store.commit('setName', name)
                }
            },
            description: {
                get() {
                    return this.$store.state.description;
                },
                set(description) {
                    this.$store.commit('setDescription', description)
                }
            },
            status: {
                get() {
                    return this.$store.state.status;
                },
                set(status) {
                    this.$store.commit('setStatus', status)
                }
            },
        },

        data: function () {
            return {
                formState: false,
            }
        },

        methods: {
            openForm() {
                this.formState = !this.formState
            },

            submit() {
                this.$store.dispatch('submitTask');
                this.$root.$store.dispatch('taskList');
            }
        }
    }
</script>

<style scoped>

    div.field {
        padding-bottom: 5px;
    }

    div.field label {
        display: block;
        float: left;
        width: 70px;
        height: 15px;
    }

    button {
        margin: 10px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
