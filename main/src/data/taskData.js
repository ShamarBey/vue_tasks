// src/data/tasksData.js
export default {
    59: {
      name: "John",
      surname: "Doe",
      age: "30"
    },
    60: {
        items: [1, 2, 3, 4, 5] // Передаем массив для Task60
    },
    61: {
        name: "Alice",
        salary: 50000,
        age: 28
    },
    65: {
        onShowAlert: () => alert('First button clicked!'),
        onShowMessage: () => alert('Second button clicked!')
    },
    70: {
        workers: [
          { id: 1, name: "Bob", salary: 45000, age: 35 }
        ],
        add: function(name, salary, age) {
          const id = this.workers.length + 1;
          this.workers.push({ id, name, salary, age });
          console.log('New worker added:', { id, name, salary, age }); // Для отладки
        }
    },
    72: {
        notes: [
          { id: 1, title: "Заметка 1", content: "Это текст первой заметки" },
          { id: 2, title: "Заметка 2", content: "Это текст второй заметки" }
        ]
    },
  };