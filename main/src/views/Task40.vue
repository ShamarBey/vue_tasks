<template>
    
    <h1>Tasks 35 - 40</h1>
    
    <div>
      <!-- Задание 1: Добавление элемента в массив по нажатию на кнопку -->
      <p v-for="elem in arr" :key="elem">{{ elem }}</p>
      <button @click="add">Add</button>
  
      <!-- Задание 2: Добавление нового пункта в список -->
      <ul>
        <li v-for="item in items" :key="item">{{ item }}</li>
      </ul>
      <button @click="addToList">Add Item</button>
  
      <!-- Задание 3: Удаление первого элемента из списка -->
      <ul>
        <li v-for="item in items" :key="item">{{ item }}</li>
      </ul>
      <button @click="removeFirst">Remove First</button>
  
      <!-- Задание 4: Удаление последнего элемента из списка -->
      <ul>
        <li v-for="item in items" :key="item">{{ item }}</li>
      </ul>
      <button @click="removeLast">Remove Last</button>
  
      <!-- Задание 5: Удаление предпоследнего элемента из списка -->
      <ul>
        <li v-for="item in items" :key="item">{{ item }}</li>
      </ul>
      <button @click="removeSecondLast">Remove Second Last</button>
  
      <!-- Задание 6: Сортировка массива -->
      <ul>
        <li v-for="item in items" :key="item">{{ item }}</li>
      </ul>
      <button @click="sortList">Sort</button>
  
      <!-- Задание 7: Изменение порядка элементов массива на обратный -->
      <ul>
        <li v-for="item in items" :key="item">{{ item }}</li>
      </ul>
      <button @click="reverseList">Reverse</button>
  
      <!-- Задание 8: Применение динамических CSS классов -->
      <p :class="str">Text with classes</p>
  
      <!-- Задание 9: Применение объектных CSS классов -->
      <p :class="obj">Text with dynamic classes</p>
  
      <!-- Задание 10: Тогглинг видимости элемента с классом -->
      <p :class="styles">Text with toggle visibility</p>
      <button @click="toggleVisibility">Toggle Visibility</button>
  
      <!-- Задание 11: Применение инлайн объекта с классами -->
      <p :class="{active: true, valid: false}">Text with inline object classes</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Массив для добавления и удаления элементов
        arr: ['a', 'b', 'c'],
        items: ['item1', 'item2', 'item3'],
  
        // Строка с CSS классами
        str: 'active valid',
  
        // Объект с динамическими классами
        obj: {
          active: true,
          valid: false,
        },
  
        // Стиль с классом для скрытия
        styles: {
          hidden: true,
        }
      };
    },
    methods: {
      // Добавление нового элемента в массив
      add() {
        this.arr.push('xxx');
      },
  
      // Добавление нового элемента в список
      addToList() {
        this.items.push(`item${this.items.length + 1}`);
      },
  
      // Удаление первого элемента из списка
      removeFirst() {
        this.items.shift();
      },
  
      // Удаление последнего элемента из списка
      removeLast() {
        this.items.pop();
      },
  
      // Удаление предпоследнего элемента из списка
      removeSecondLast() {
        this.items.splice(this.items.length - 2, 1);
      },
  
      // Сортировка массива
      sortList() {
        this.items.sort();
      },
  
      // Реверс массива
      reverseList() {
        this.items.reverse();
      },
  
      // Тогглинг видимости
      toggleVisibility() {
        this.styles.hidden = !this.styles.hidden;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Стили для видимости */
  .hidden {
    display: none;
  }
  
  .active {
    color: green;
  }
  
  .valid {
    font-weight: bold;
  }
  </style>
  