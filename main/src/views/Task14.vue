<template>
    <div>
      <!-- Задача 1: Выводим содержимое свойства text в абзаце -->
      <p>{{ text }}</p>
  
      <!-- Задача 2: Кнопка, меняющая значение text -->
      <button @click="changeText">Изменить текст</button>
  
      <!-- Задача 3: Две кнопки, каждая меняет text на своё значение -->
      <button @click="changeTextTo('Значение 1')">Текст 1</button>
      <button @click="changeTextTo('Значение 2')">Текст 2</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        text: 'Исходный текст', // Изначальное значение свойства text
      };
    },
    methods: {
      // Метод для изменения text
      changeText() {
        this.text = 'Новый текст'; // Изменяем текст на "Новый текст"
      },
      // Метод для изменения text на заданное значение
      changeTextTo(newText) {
        this.text = newText; // Изменяем text на переданное значение
      },
    },
  };
  </script>
  