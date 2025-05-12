<template>
  <div>
    <!-- Кнопка для тогглинга первого абзаца -->
    <button @click="toggle(0)">
      {{ visible[0] ? 'Hide' : 'Show' }} 1
    </button>
    <p v-if="visible[0]">Text 1</p>

    <!-- Кнопка для тогглинга второго абзаца -->
    <button @click="toggle(1)">
      {{ visible[1] ? 'Hide' : 'Show' }} 2
    </button>
    <p v-if="visible[1]">Text 2</p>

    <!-- Кнопка для тогглинга третьего абзаца -->
    <button @click="toggle(2)">
      {{ visible[2] ? 'Hide' : 'Show' }} 3
    </button>
    <p v-if="visible[2]">Text 3</p>
  </div>
</template>

<script>
export default {
  name:"Task21",
  data() {
    return {
      // Массив видимости для каждого абзаца
      visible: [false, false, false],
    };
  },
  methods: {
    // Метод для тогглинга каждого абзаца по индексу
    toggle(index) {
      this.visible[index] = !this.visible[index];
    },
  },
};
</script>
