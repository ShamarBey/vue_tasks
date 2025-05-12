<template>

    <h1>Tasks 31 - 34</h1>

    <div>
      <!-- Задание 1: Перебор массива объектов с выводом имени и фамилии -->
      <p v-for="user in users" :key="user.id">
        {{ user.name }} {{ user.surn }}
      </p>
  
      <!-- Задание 2: Перебор массива объектов с гиперссылками -->
      <ul>
        <li v-for="href in hrefs" :key="href.href">
          <a :href="href.href">{{ href.text }}</a>
        </li>
      </ul>
  
      <!-- Задание 3: Перебор массива продуктов с выводом таблицы -->
      <table>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
        </tr>
      </table>
  
      <!-- Задание 4: Перебор чисел от 1 до 30 -->
      <div>
        <p v-for="num in 30" :key="num">{{ num }}</p>
      </div>
  
      <!-- Задание 5: Перебор массива с условием на положительные элементы -->
      <ul>
        <template v-for="elem in items" :key="elem">
          <li v-if="elem > 0">{{ elem }}</li>
        </template>
      </ul>
  
      <!-- Задание 6: Перебор массива объектов с указанием уникального ключа -->
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "Task34",
    data() {
      return {
        // Массив пользователей для задания 1
        users: [
          { id: 1, name: 'name1', surn: 'surn1' },
          { id: 2, name: 'name2', surn: 'surn2' },
          { id: 3, name: 'name3', surn: 'surn3' },
        ],
  
        // Массив ссылок для задания 2
        hrefs: [
          { href: '1.html', text: 'text1' },
          { href: '2.html', text: 'text2' },
          { href: '3.html', text: 'text3' },
        ],
  
        // Массив продуктов для задания 3 и 6
        products: [
          { id: 1, name: 'product1', price: 100, quantity: 5 },
          { id: 2, name: 'product2', price: 200, quantity: 4 },
          { id: 3, name: 'product3', price: 300, quantity: 3 },
        ],
  
        // Массив чисел для задания 4
        items: [1, -2, 3, -4, 5],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Стили для разделителей */
  .divider {
    border-bottom: 1px solid #000;
    margin: 5px 0;
  }
  </style>
  