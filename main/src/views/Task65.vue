<!-- src/views/Task62.vue -->
<template>
    <div class="button-container">
      <h2>Task 62: Button Events</h2>
      <button @click="handleFirst">First Button</button>
      <button @click="handleSecond">Second Button</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Task62',
    props: ['onShowAlert', 'onShowMessage'], // Принимаем функции как пропсы
    methods: {
      handleFirst() {
        if (this.onShowAlert) this.onShowAlert(); // Вызываем первую функцию
      },
      handleSecond() {
        if (this.onShowMessage) this.onShowMessage(); // Вызываем вторую функцию
      }
    }
  }
  </script>
  
  <style scoped>
  .button-container {
    padding: 20px;
    max-width: 400px;
    margin: 20px auto;
    text-align: center;
  }
  
  button {
    margin: 10px;
    padding: 10px 20px;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #34495e;
  }
  </style>