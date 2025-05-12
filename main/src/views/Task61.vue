<!-- src/views/Task61.vue -->
<template>
    <div class="employee-card">
      <h2>Task 61: Employee Details</h2>
      <div class="employee-details">
        <p><strong>Name:</strong> {{ name }}</p>
        <p><strong>Salary:</strong> ${{ salary }}</p>
        <p><strong>Age:</strong> {{ age }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Task61',
    props: ['name', 'salary', 'age'] // Принимаем пропсы
  }
  </script>
  
  <style scoped>
  .employee-card {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    max-width: 400px;
    margin: 20px auto;
  }
  
  .employee-details {
    margin-top: 15px;
  }
  
  .employee-details p {
    margin: 10px 0;
  }
  
  .employee-details strong {
    color: #2c3e50;
  }
  </style>