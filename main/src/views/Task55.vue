<template>
    
    <h1>Tasks 51 - 55</h1>
    
    <div>
      <!-- Блокировка инпута -->
      <input v-model="inputText" :disabled="isDisabled">
      <button @click="toggleDisabled">Toggle Input</button>
      
      <!-- Блокировка через checkbox -->
      <label>
        <input type="checkbox" v-model="isDisabled"> Disable Input
      </label>
  
      <!-- Ввод текста по Enter -->
      <input v-model="enteredText" @keyup.enter="submitText">
      <p>{{ enteredText }}</p>
  
      <!-- Checkbox: массив значений -->
      <label v-for="lang in languages" :key="lang">
        <input type="checkbox" v-model="selectedLanguages" :value="lang"> {{ lang }}
      </label>
      <ul>
        <li v-for="lang in selectedLanguages" :key="lang">{{ lang }}</li>
      </ul>
  
      <!-- Radio -->
      <p>Выберите родной язык:</p>
      <label v-for="lang in languages" :key="lang">
        <input type="radio" v-model="nativeLanguage" :value="lang"> {{ lang }}
      </label>
      <p>Ваш родной язык: {{ nativeLanguage }}</p>
  
      <!-- Select -->
      <select v-model="selectedCity">
        <option v-for="city in cities" :key="city">{{ city }}</option>
      </select>
      <p>Выбранный город: {{ selectedCity }}</p>
  
      <!-- Дни, месяцы, годы -->
      <select v-model="selectedDay">
        <option v-for="day in days" :key="day">{{ day }}</option>
      </select>
      <select v-model="selectedMonth">
        <option v-for="month in months" :key="month">{{ month }}</option>
      </select>
      <select v-model="selectedYear">
        <option v-for="year in years" :key="year">{{ year }}</option>
      </select>
  
      <!-- Добавление элементов в список -->
      <input v-model="newItem">
      <button @click="addItemToEnd">Добавить в конец</button>
      <button @click="addItemToStart">Добавить в начало</button>
      <ul>
        <li v-for="(item, index) in items" :key="index" @click="removeItem(index)">
          {{ item }}
        </li>
      </ul>
  
      <!-- Таблица сотрудников -->
      <table border="1">
        <tr>
          <th>Имя</th>
          <th>Зарплата</th>
          <th>Возраст</th>
          <th>Удалить</th>
        </tr>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.salary }}</td>
          <td>{{ user.age }}</td>
          <td><button @click="removeUser(user.id)">X</button></td>
        </tr>
      </table>
    </div>
  </template>
  
<script>
  export default {
    name: "Task55",
    data() {
      return {
        isDisabled: false,
        inputText: '',
        enteredText: '',
        selectedLanguages: [],
        nativeLanguage: '',
        selectedCity: '',
        selectedDay: '',
        selectedMonth: '',
        selectedYear: '',
        newItem: '',
        items: ['a', 'b', 'c', 'd', 'e'],
        users: [
          { id: 1, name: 'name1', salary: 100, age: 30 },
          { id: 2, name: 'name2', salary: 200, age: 40 },
          { id: 3, name: 'name3', salary: 300, age: 50 },
        ],
        languages: ['Русский', 'Английский', 'Испанский'],
        cities: ['Москва', 'Лондон', 'Нью-Йорк'],
        days: Array.from({ length: 31 }, (_, i) => i + 1),
        months: ['Январь', 'Февраль', 'Март'],
        years: Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i),
      };
    },
    methods: {
      toggleDisabled() {
        this.isDisabled = !this.isDisabled;
      },
      submitText() {
        this.enteredText = this.inputText;
      },
      addItemToEnd() {
        if (this.newItem) {
          this.items.push(this.newItem);
          this.newItem = '';
        }
      },
      addItemToStart() {
        if (this.newItem) {
          this.items.unshift(this.newItem);
          this.newItem = '';
        }
      },
      removeItem(index) {
        this.items.splice(index, 1);
      },
      removeUser(id) {
        this.users = this.users.filter(user => user.id !== id);
      }
    }
  };
</script>
  