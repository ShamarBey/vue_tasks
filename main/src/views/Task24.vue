<template>
    <div>
        <p>Task_22</p>
      <!-- Задание 1: Вывод текста в зависимости от isAdmin -->
      <p v-if="isAdmin">Вы администратор</p>
      <p v-else>Вы не администратор</p>
        <br>
      <!-- Задание 2: Вывод текста в зависимости от значения num -->
      <p v-if="num === 1">one</p>
      <p v-if="num === 2">two</p>
      <p v-if="num === 3">three</p>
        <br>
      <!-- Задание 3: Вывод текста в зависимости от day -->
      <p>Task_23</p>
      <p v-if="day === 'Monday'">Понедельник</p>
      <p v-if="day === 'Tuesday'">Вторник</p>
      <p v-if="day === 'Wednesday'">Среда</p>
      <p v-if="day === 'Thursday'">Четверг</p>
      <p v-if="day === 'Friday'">Пятница</p>
      <p v-if="day === 'Saturday'">Суббота</p>
      <p v-if="day === 'Sunday'">Воскресенье</p>
      <br>
  
      <!-- Задание 4: Вывод текста в зависимости от возраста с v-else-if -->
      <p>Задание 24</p>
      <p v-if="age < 18">Подросток</p>
      <p v-else-if="age >= 19 && age <= 25">Молодой человек</p>
      <p v-else>Мужчина</p>
    </div>
  </template>
  
  <script>
  export default {
    name:"Task24",
    data() {
      return {
        // Задание 1: isAdmin
        isAdmin: true,
  
        // Задание 2: num
        num: 3,
  
        // Задание 3: day
        day: 'Wednesday',
  
        // Задание 4: age
        age: 25,
      };
    },
  };
  </script>
  