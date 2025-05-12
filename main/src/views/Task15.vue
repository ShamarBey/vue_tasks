<template>
    <div>
      <!-- Отображаем цену, количество и полную стоимость -->
      <p>Цена: {{ cost }}</p>
      <p>Количество: {{ amount }}</p>
      <p>Полная стоимость: {{ price }}</p>
  
      <!-- Кнопка для изменения цены -->
      <button @click="changePrice">Изменить цену</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Task15",
    data() {
      return {
        cost: 10, // цена одного продукта
        amount: 5, // количество продуктов
      };
    },
    computed: {
      // Вычисляемое свойство для полной стоимости
      price() {
        return this.cost * this.amount; // умножаем цену на количество
      },
    },
    methods: {
      // Метод для изменения цены
      changePrice() {
        this.cost = 20; // меняем цену на 20
      },
    },
  };
  </script>
  