<!-- src/views/Task63.vue -->
<template>
    <div class="form-container">
      <h2>Task 63: Add New Worker</h2>
      <form @submit.prevent="save">
        <div class="input-group">
          <label>Name:</label>
          <input v-model="newName" placeholder="Enter name" required>
        </div>
        <div class="input-group">
          <label>Salary:</label>
          <input v-model.number="newSalary" type="number" placeholder="Enter salary" required>
        </div>
        <div class="input-group">
          <label>Age:</label>
          <input v-model.number="newAge" type="number" placeholder="Enter age" required>
        </div>
        <button type="submit">Save</button>
      </form>
      <h3>Current Workers:</h3>
      <ul>
        <li v-for="worker in workers" :key="worker.id">
          {{ worker.name }} - ${{ worker.salary }} - {{ worker.age }} years
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Task63',
    props: ['workers', 'add'], // Принимаем массив workers и функцию add
    data() {
      return {
        newName: '',
        newSalary: '',
        newAge: ''
      };
    },
    methods: {
      save() {
        if (this.add) {
          this.add(this.newName, this.newSalary, this.newAge); // Вызываем функцию add
          // Очищаем форму после добавления
          this.newName = '';
          this.newSalary = '';
          this.newAge = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    padding: 20px;
    max-width: 500px;
    margin: 20px auto;
  }
  
  .input-group {
    margin: 10px 0;
  }
  
  label {
    display: inline-block;
    width: 80px;
    font-weight: bold;
  }
  
  input {
    padding: 5px;
    width: 200px;
  }
  
  button {
    margin-top: 10px;
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
  
  ul {
    list-style-type: decimal;
    padding-left: 20px;
    margin-top: 20px;
  }
  
  li {
    margin: 5px 0;
  }
  </style>