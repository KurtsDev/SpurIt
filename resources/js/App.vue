<template>
    <div>
       <Tasks></Tasks>
        <h1>Tasks</h1>
        <TaskCreatedForm></TaskCreatedForm>
        <TaskList></TaskList>
        <UpdateTask></UpdateTask>

    </div>
</template>

<script>

   import Tasks from "./components/Tasks";
   import TaskCreatedForm from "./components/TaskCreatedForm";
   import TaskList from "./components/TaskList";
   import UpdateTask from "./components/UpdateTask";

    export default {
        components: {Tasks, TaskCreatedForm, TaskList, UpdateTask}
    }

</script>

<style scoped>

</style>
