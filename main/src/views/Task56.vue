<script>
import { ref } from 'vue';

export default {
    name:"Task56",
  setup() {
    // Блокировка элементов
    const isDisabled = ref(true);
    const toggleDisabled = () => { isDisabled.value = !isDisabled.value };

    // Модификаторы клавиш
    const inputText = ref('');
    const outputText = ref('');
    const handleEnter = () => { outputText.value = inputText.value; };
    
    const ctrlClickText = ref('');
    const handleCtrlClick = (event) => {
      if (event.ctrlKey) ctrlClickText.value = 'Ctrl нажата!';
    };

    const mouseClickText = ref('');
    const handleMouseClick = (event) => {
      if (event.button === 0) mouseClickText.value = 'left';
      else if (event.button === 1) mouseClickText.value = 'middle';
      else if (event.button === 2) mouseClickText.value = 'right';
    };
    
    // Добавление элементов
    const items = ref(['a', 'b', 'c', 'd', 'e']);
    const newItem = ref('');
    const addItem = () => { items.value.push(newItem.value); newItem.value = ''; };
    const addItemToStart = () => { items.value.unshift(newItem.value); newItem.value = ''; };

    // Удаление элементов
    const removeItem = (index) => { items.value.splice(index, 1); };
    
    // Массив объектов
    const users = ref([
      { id: 1, name: 'name1', salary: 100, age: 30, isEdit: false },
      { id: 2, name: 'name2', salary: 200, age: 40, isEdit: false },
      { id: 3, name: 'name3', salary: 300, age: 50, isEdit: false }
    ]);
    
    const removeUser = (id) => { users.value = users.value.filter(user => user.id !== id); };
    const editUser = (user) => { user.isEdit = true; };
    const saveUser = (user) => { user.isEdit = false; };

    return {
      isDisabled, toggleDisabled,
      inputText, outputText, handleEnter,
      ctrlClickText, handleCtrlClick,
      mouseClickText, handleMouseClick,
      items, newItem, addItem, addItemToStart, removeItem,
      users, removeUser, editUser, saveUser
    };
  }
}
</script>

<template>
  <div>
    <h2>Блокировка элементов</h2>
    <input :disabled="isDisabled">
    <button @click="toggleDisabled">Toggle</button>

    <h2>Модификаторы клавиш</h2>
    <input v-model="inputText" @keyup.enter="handleEnter">
    <p>{{ outputText }}</p>
    <a href="#" @click.prevent="handleCtrlClick">Нажми с Ctrl</a>
    <p>{{ ctrlClickText }}</p>
    <a href="#" @mousedown.prevent="handleMouseClick">Нажми любую кнопку мыши</a>
    <p>{{ mouseClickText }}</p>

    <h2>Добавление элементов</h2>
    <input v-model="newItem">
    <button @click="addItem">Добавить в конец</button>
    <button @click="addItemToStart">Добавить в начало</button>
    <ul>
      <li v-for="(item, index) in items" :key="index" @click="removeItem(index)">{{ item }}</li>
    </ul>

    <h2>Работа с объектами</h2>
    <table border="1">
      <tr>
        <th>Имя</th>
        <th>Зарплата</th>
        <th>Возраст</th>
        <th>Действия</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <template v-if="!user.isEdit">
          <td>{{ user.name }}</td>
          <td>{{ user.salary }}</td>
          <td>{{ user.age }}</td>
          <td>
            <button @click="editUser(user)">Редактировать</button>
            <button @click="removeUser(user.id)">Удалить</button>
          </td>
        </template>
        <template v-else>
          <td><input v-model="user.name"></td>
          <td><input v-model="user.salary"></td>
          <td><input v-model="user.age"></td>
          <td>
            <button @click="saveUser(user)">Сохранить</button>
          </td>
        </template>
      </tr>
    </table>
  </div>
</template>

<style scoped>
  div { margin: 20px; }
  table { width: 100%; border-collapse: collapse; }
  th, td { padding: 10px; text-align: left; border: 1px solid #ddd; }
  button { margin: 5px; }
</style>
