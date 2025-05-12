<template>
    <div>
      <!-- Задача 1: кнопка для показа абзаца -->
      <button @click="show">Показать</button>
      <p v-if="visible">text</p>
      <br>
      <!-- Задача 2: две кнопки - одна для показа, другая для скрытия -->
      <!-- <button @click="show">Показать</button> -->
      <br>
      <button @click="hide">Скрыть</button>
      <br>
  
      <!-- Задача 3: одна кнопка, меняющая текст в зависимости от состояния -->
      <button @click="toggleVisibility">
        {{ visible ? 'Скрыть' : 'Показать' }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Task19",
    data() {
      return {
        visible: false, // абзац изначально скрыт
      };
    },
    methods: {
      // Задача 1: метод для показа абзаца
      show() {
        this.visible = true;
      },
      // Задача 2: метод для скрытия абзаца
      hide() {
        this.visible = false;
      },
      // Задача 3: метод для переключения видимости
      toggleVisibility() {
        this.visible = !this.visible;
      },
    },
  };
  </script>
  