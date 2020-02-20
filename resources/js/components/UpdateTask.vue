<template>
    <div>
        <transition name="fade">
            <form v-if="updateFormState">

                <div class="field">
                    <label for="status">Статус </label>
                    <select v-model="status" id="status" name="status">
                        <option>TODO</option>
                        <option>DOING</option>
                        <option>DONE</option>
                    </select>
                </div>

                <div class="field">
                    <label for="comment">Комментарий</label>
                    <br>
                    <textarea v-model="comment" id="comment" name="comment"></textarea>
                </div>

                <button v-on:click.prevent="submit" type="submit">Сохранить</button>

                <div class="comments">
                    <div v-for="comment in comments">
                        <p>{{comment.created_at}}</p>
                        <p>{{comment.comment}}</p>
                    </div>
                </div>

            </form>
        </transition>
    </div>
</template>

<script>

    export default {
        computed: {
            updateFormState() {
                return this.$store.getters.updateFormState;
            },

            comments() {
                return this.$store.getters.comments;
            },

            comment: {
                get() {
                    return this.$store.state.comment;
                },
                set(comment) {
                    this.$store.commit('setComment', comment);
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

        methods: {
            submit() {
                this.$store.dispatch('updateTaskSubmit');
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
