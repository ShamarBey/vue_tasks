<template>
    <div>
      <button @click="showSquare(2)">Квадрат числа 2</button>
      <button @click="showSquare(3)">Квадрат числа 3</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Task13",
    methods: {
      showSquare(num) {
        alert(num * num); // Выводим квадрат числа
      },
    },
  };
  </script>
  