<!-- src/components/Task.vue -->
<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import tasksData from '../data/taskData.js';

const route = useRoute();
const taskComponent = ref(null);
const taskProps = ref({});

watchEffect(async () => {
  try {
    taskComponent.value = (await import(`../views/Task${route.params.id}.vue`)).default;
    taskProps.value = tasksData[route.params.id] || {};
  } catch (e) {
    taskComponent.value = null;
    taskProps.value = {};
  }
});
</script>

<template>
  <component 
    :is="taskComponent || 'div'"
    v-bind="taskProps"
  >Задача не найдена</component>
</template>