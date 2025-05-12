<template>

    <h1>Tasks 46 - 50</h1>

    <div>
      <!-- Задача 1: Checkbox + v-if -->
      <input type="checkbox" v-model="isChecked" />
      <p v-if="isChecked">Абзац показан</p>
  
      <!-- Задача 2: Массив значений checkbox -->
      <div>
        <label><input type="checkbox" v-model="languages" value="JavaScript" /> JavaScript</label>
        <label><input type="checkbox" v-model="languages" value="Python" /> Python</label>
        <label><input type="checkbox" v-model="languages" value="Java" /> Java</label>
      </div>
      <ul>
        <li v-for="lang in languages" :key="lang">{{ lang }}</li>
      </ul>
  
      <!-- Задача 3: Radio -->
      <div>
        <label><input type="radio" v-model="nativeLanguage" value="Русский" /> Русский</label>
        <label><input type="radio" v-model="nativeLanguage" value="Английский" /> Английский</label>
        <label><input type="radio" v-model="nativeLanguage" value="Французский" /> Французский</label>
      </div>
      <p>Ваш родной язык: {{ nativeLanguage }}</p>
      <p v-if="nativeLanguage === 'Русский'">Привет!</p>
      <p v-if="nativeLanguage === 'Английский'">Hello!</p>
      <p v-if="nativeLanguage === 'Французский'">Bonjour!</p>
  
      <!-- Задача 4: Select -->
      <select v-model="selectedCity">
        <option>Москва</option>
        <option>Санкт-Петербург</option>
        <option>Новосибирск</option>
      </select>
      <p>Выбранный город: {{ selectedCity }}</p>
  
      <!-- Задача 5: Select с днями недели -->
      <select v-model="selectedDay">
        <option v-for="day in daysOfWeek" :key="day">{{ day }}</option>
      </select>
      <p>Выбранный день недели: {{ selectedDay }}</p>
  
      <!-- Задача 6: Дата (день, месяц, год) -->
      <select v-model="selectedDayDate">
        <option v-for="n in 31" :key="n">{{ n }}</option>
      </select>
      <select v-model="selectedMonth">
        <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
      </select>
      <select v-model="selectedYear">
        <option v-for="year in years" :key="year">{{ year }}</option>
      </select>
      <p>Выбранная дата: {{ selectedDayDate }}.{{ selectedMonth }}.{{ selectedYear }}</p>
    </div>
</template>

<script>
  export default {
    name: "Task50",
    data() {
      return {
        isChecked: false,
        languages: [],
        nativeLanguage: '',
        selectedCity: '',
        selectedDay: '',
        daysOfWeek: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
        selectedDayDate: new Date().getDate(),
        selectedMonth: new Date().getMonth() + 1,
        selectedYear: new Date().getFullYear(),
        months: [
          'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ],
        years: Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i)
      };
    }
  };
</script>
  