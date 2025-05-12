<template>
    <div>
        <h1><p class="lg-12">Task 1: {{ num_task1 * num_task1 }}</p></h1>
        <h1><p class="lg-12">Task 2: {{ num1 + num2 + num3 }}</p></h1>
    </div>
</template>

<script>
export default {
name: "Task6",
    data() {
        return {
            num_task1: 5,
            num1: 1,
            num2: 2,
            num3: 3,
        }
    }
};
</script>
