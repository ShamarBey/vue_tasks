<!-- src/views/Task64.vue -->
<template>
    <div class="notebook-container">
      <h2>Task 64: Notebook</h2>
      <div class="notebook-layout">
        <!-- Меню заметок -->
        <div class="notes-menu">
          <input 
            v-model="searchQuery" 
            placeholder="Search notes..." 
            class="search-input"
          >
          <ul>
            <li 
              v-for="note in filteredNotes" 
              :key="note.id" 
              :class="{ active: selectedNote && selectedNote.id === note.id }"
              @click="selectNote(note)"
            >
              {{ note.title }}
              <button @click.stop="deleteNote(note.id)" class="delete-btn">×</button>
            </li>
            <li v-if="filteredNotes.length === 0">No notes found</li>
          </ul>
          <button @click="addNote" class="add-btn">Add Note</button>
        </div>
        <!-- Текстовая область -->
        <textarea 
          v-model="currentContent" 
          placeholder="Write your note here..." 
          @input="updateNote"
        ></textarea>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    name: 'Task64',
    props: ['notes'], // Принимаем массив заметок из taskData.js
    setup(props) {
      const selectedNote = ref(null); // Текущая выбранная заметка
      const currentContent = ref(''); // Текст в textarea
      const searchQuery = ref(''); // Поисковый запрос
  
      // Фильтрация заметок по поисковому запросу
      const filteredNotes = computed(() => {
        if (!props.notes) return [];
        if (!searchQuery.value) return props.notes;
        return props.notes.filter(note => 
          note.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          note.content.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      });
  
      // Выбор заметки
      const selectNote = (note) => {
        selectedNote.value = note;
        currentContent.value = note.content;
      };
  
      // Обновление заметки при редактировании
      const updateNote = () => {
        if (selectedNote.value) {
          selectedNote.value.content = currentContent.value;
        }
      };
  
      // Добавление новой заметки
      const addNote = () => {
        const newId = props.notes.length ? Math.max(...props.notes.map(n => n.id)) + 1 : 1;
        const newNote = { id: newId, title: `Заметка ${newId}`, content: '' };
        props.notes.push(newNote);
        selectNote(newNote);
      };
  
      // Удаление заметки
      const deleteNote = (id) => {
        const index = props.notes.findIndex(note => note.id === id);
        if (index !== -1) {
          props.notes.splice(index, 1);
          if (selectedNote.value && selectedNote.value.id === id) {
            selectedNote.value = null;
            currentContent.value = '';
          }
        }
      };
  
      return {
        selectedNote,
        currentContent,
        searchQuery,
        filteredNotes,
        selectNote,
        updateNote,
        addNote,
        deleteNote
      };
    }
  };
  </script>
  
  <style scoped>
  .notebook-container {
    padding: 20px;
    max-width: 800px;
    margin: 20px auto;
  }
  
  .notebook-layout {
    display: flex;
    gap: 20px;
  }
  
  .notes-menu {
    width: 250px;
    border-right: 1px solid #ddd;
    padding-right: 10px;
  }
  
  .search-input {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    max-height: 400px;
    overflow-y: auto;
  }
  
  li {
    padding: 8px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  li:hover, .active {
    background-color: #f0f0f0;
  }
  
  .delete-btn {
    background: none;
    border: none;
    color: #e74c3c;
    font-size: 16px;
    cursor: pointer;
  }
  
  .add-btn {
    margin-top: 10px;
    padding: 8px;
    width: 100%;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .add-btn:hover {
    background-color: #34495e;
  }
  
  textarea {
    width: 100%;
    height: 400px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    resize: vertical;
  }
  </style>