<!-- src/views/Task60.vue -->
<template>
    <div class="list-container">
      <h2>Task 60: Array List</h2>
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Task60',
    props: ['items'] // Принимаем массив через пропс
  }
  </script>
  
  <style scoped>
  .list-container {
    padding: 20px;
    max-width: 400px;
    margin: 20px auto;
  }
  
  ul {
    list-style-type: decimal;
    padding-left: 20px;
  }
  
  li {
    margin: 5px 0;
  }
  </style>