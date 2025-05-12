<template>
    
    <h1>Tasks 41 - 45</h1>

    <div>
      <!-- Привязка CSS классов через data -->
      <p :class="{ valid: isValid, disabled: isDisabled }">Styled text</p>
      
      <!-- Применение инлайн-стилей -->
      <p :style="{ color: 'green', backgroundColor: 'yellow' }">Green text on yellow</p>
      <p :style="{ fontWeight: 'bold', fontStyle: 'italic' }">Bold and italic text</p>
      
      <!-- Двусторонняя привязка к инпуту -->
      <input v-model="message">
      <p>{{ message }}</p>
      
      <input v-model="uppercaseMessage">
      <p>{{ uppercaseMessage }}</p>
      
      <input v-model.number="number">
      <p>{{ squared }}</p>
      
      <!-- Получение данных формы по событию -->
      <input v-model.number="num">
      <button @click="calculateSqrt">Calculate sqrt</button>
      <p>{{ sqrtResult }}</p>
  
      <input v-model.number="num1">
      <input v-model.number="num2">
      <button @click="calculateSum">Calculate sum</button>
      <p>{{ sumResult }}</p>
  
      <input v-model="text1">
      <input v-model="text2">
      <button @click="swapText">Swap</button>
      
      <p>{{ text1 }}</p>
      <p>{{ text2 }}</p>
  
      <input v-model="fullName">
      <button @click="splitName">Split Name</button>
      <p>{{ surname }}</p>
      <p>{{ name }}</p>
      <p>{{ patronymic }}</p>
  
      <!-- Работа с textarea -->
      <textarea v-model="textareaText"></textarea>
      <p>{{ textareaText }}</p>
  
      <textarea v-model="wordListInput"></textarea>
      <button @click="splitWords">Get Words</button>
      <ul>
        <li v-for="word in words" :key="word">{{ word }}</li>
      </ul>
    </div>
</template>
  
<script>
  export default {
    name: "Task45",
    data() {
      return {
        isValid: true,
        isDisabled: true,
        message: '',
        number: 0,
        num: 0,
        sqrtResult: 0,
        num1: 0,
        num2: 0,
        sumResult: 0,
        text1: '',
        text2: '',
        fullName: '',
        surname: '',
        name: '',
        patronymic: '',
        textareaText: '',
        wordListInput: '',
        words: []
      };
    },
    computed: {
      uppercaseMessage() {
        return this.message.toUpperCase();
      },
      squared() {
        return this.number ** 2;
      }
    },
    methods: {
      calculateSqrt() {
        this.sqrtResult = Math.sqrt(this.num);
      },
      calculateSum() {
        this.sumResult = this.num1 + this.num2;
      },
      swapText() {
        [this.text1, this.text2] = [this.text2, this.text1];
      },
      splitName() {
        let parts = this.fullName.split(' ');
        this.surname = parts[0] || '';
        this.name = parts[1] || '';
        this.patronymic = parts[2] || '';
      },
      splitWords() {
        this.words = this.wordListInput.split(' ');
      }
    }
  };
  </script>
  
  <style scoped>
  .valid {
    color: green;
  }
  .disabled {
    color: gray;
  }
  </style>
  