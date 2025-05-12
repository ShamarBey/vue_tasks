<template>
    <div>
      <button @click="showDay">Показать день недели</button>
      <button @click="showToday">Показать текущий день недели</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Task12",
    data() {
      return {
        dayNumber: 3, 
      };
    },
    methods: {
      getDayByNumber(num) {
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return days[num] || 'Некорректный номер дня';
      },
  
      showDay() {
        alert(this.getDayByNumber(this.dayNumber)); 
      },
  
      showToday() {
        const currentDay = new Date().getDay(); 
        alert(this.getDayByNumber(currentDay)); 
      },
    },
  };
  </script>
  