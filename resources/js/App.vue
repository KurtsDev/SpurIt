<template>
    <div>
        <h1>Tasks</h1>
        <TaskCreatedForm></TaskCreatedForm>
        <TaskList></TaskList>
        <UpdateTask></UpdateTask>
    </div>
</template>

<script>
    import TaskCreatedForm from "./components/TaskCreatedForm";
    import TaskList from "./components/TaskList";
    import UpdateTask from "./components/UpdateTask";

    export default {
        components: {
            TaskCreatedForm,
            TaskList,
            UpdateTask
        }
    }
</script>
