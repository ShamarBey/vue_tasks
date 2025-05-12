<template>
    <div>
      <!-- Задача 1: Ссылка с обработчиком клика, который предотвращает переход -->
      <a href="https://google.com" @click.prevent="handleLinkClick">Кликни меня</a>
  
      <!-- Задача 2: Кнопка, срабатывающая только один раз -->
      <button @click.once="handleButtonClick">Кликни меня (один раз)</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Task16",
    methods: {
      // Обработчик для ссылки
      handleLinkClick() {
        alert('Клик по ссылке, но переход не произойдёт!');
      },
  
      // Обработчик для кнопки
      handleButtonClick() {
        alert('Этот клик сработает только один раз!');
      },
    },
  };
  </script>
  