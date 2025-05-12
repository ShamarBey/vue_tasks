<template>
    
    <h1>Tasks 28 - 30</h1>
    
    <div>
      <!-- Задание 1: Вывод ключей массива в виде списка -->
      <ul>
        <li v-for="(elem, key) in arr" :key="key">{{ key }}</li>
      </ul>
  
      <!-- Задание 2: Перебор объектов и вывод элементов -->
      <ul>
        <li v-for="(elem, key) in obj" :key="key">{{ elem }}</li>
      </ul>
  
      <!-- Задание 3: Перебор объектов и вывод ключей с элементами -->
      <ul>
        <li v-for="(elem, key) in obj" :key="key">{{ key }} - {{ elem }}</li>
      </ul>
  
      <!-- Задание 4: Перебор объектов с порядковыми номерами -->
      <ul>
        <li v-for="(elem, key, index) in obj" :key="key">{{ key }} - {{ elem }} - {{ index }}</li>
      </ul>
  
      <!-- Задание 5: Перебор объектов с номерами, начинающимися с 1 -->
      <ul>
        <li v-for="(elem, key, index) in obj" :key="key">{{ key }} - {{ elem }} - {{ index + 1 }}</li>
      </ul>
  
      <!-- Задание 6: Перебор массива с группой тегов -->
      <template v-for="item in items" :key="item">
        <div>
          <p>{{ item }}</p>
          <p class="divider"></p>
        </div>
      </template>
  
      <!-- Задание 7: Перебор массива и создание списка с разделителями -->
      <ul>
        <template v-for="item in items" :key="item">
          <li>{{ item }}</li>
          <li class="divider"></li>
        </template>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name : "Task30",
    data() {
      return {
        // Массив для задания 1 и 6-7
        arr: ['x', 'y', 'z'],
  
        // Массив для задания 6-7
        items: [1, 2, 3],
  
        // Объект для задания 2-5
        obj: {
          user1: '100$',
          user2: '200$',
          user3: '300$',
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .divider {
    border-bottom: 1px solid #000;
    margin: 5px 0;
  }
  </style>
  