<template>
    <div>
        <h1>Tasks 25 - 27</h1>
      <!-- Скрытие абзацев по нажатию на кнопку -->
      <button @click="hideParagraphs">Скрыть абзацы</button>
      <template v-if="!hidden">
        <p>Абзац 1</p>
        <p>Абзац 2</p>
        <p>Абзац 3</p>
      </template>
  
      <!-- Тогглинг абзаца с v-show -->
      <button @click="toggleShow">Тогглить абзац</button>
      <p v-show="isVisible">Этот абзац будет показываться или скрываться при клике.</p>
  
      <!-- Перебор массива и вывод элементов в div -->
      <div v-for="item in items" :key="item">{{ item }}</div>
  
      <!-- Перебор массива и вывод квадратов элементов -->
      <div v-for="item in items" :key="item">{{ item * item }}</div>
  
      <!-- Перебор массива и вывод элементов в виде списка -->
      <ul>
        <li v-for="item in items" :key="item">{{ item }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "Task27",
    data() {
      return {
        hidden: false,
        isVisible: true,
        items: [1, 2, 3, 4, 5],
      };
    },
    methods: {
      hideParagraphs() {
        this.hidden = true;
      },

      toggleShow() {
        this.isVisible = !this.isVisible;
      },
    },
  };
  </script>
  