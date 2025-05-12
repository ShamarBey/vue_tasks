<template>
    <div>
      <!-- Первый абзац будет показан, если visible == true -->
      <p v-if="visible">Первый абзац: visible = true</p>
  
      <!-- Второй абзац будет показан, если visible == false -->
      <p v-if="!visible">Второй абзац: visible = false</p>
    </div>
  </template>
  
  <script>
  export default {
    name:"Task17",
    data() {
      return {
        visible: true, // можно изменить на false, чтобы увидеть второй абзац
      };
    },
  };
  </script>
  