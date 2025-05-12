<template>
    <div>
        <h1>Task 1:</h1>
        <p>{{ task_one_arr[0] }}</p>
        <p>{{ task_one_arr[1] }}</p>
        <p>{{ task_one_arr[2] }}</p>
        <br>
        <h1><p class="lg-12">Task 2: {{ task_two_arr[0] + task_two_arr[1] + task_two_arr[2] }}</p></h1>
    </div>
</template>

<script>
export default {
name: "Task7",
    data() {
        return {
            task_one_arr: ['x', 'y', 'z'],
            task_two_arr: [1, 2, 3],
        }
    }
};
</script>
