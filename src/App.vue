<template>
  <div id="app">
    <section>
      <List :lists="lists" />
    </section>
    <section>
      <h1 v-for="list of lists" :key="list.id">{{list.listName}}</h1>
      <AddTodo />
      <hr>
      <TodoList 
        v-for="list of lists" :key="list.id"
        v-bind:todos="list.todos"
        v-on:remove-todo="removeTodo"
      />
    </section>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import List from "@/components/List"

export default {
  name: 'App',
  data() {
    return {
      lists: [
        { 
          id: Date.now(),
          listName: 'дела',
          placeholder: 'Введите имя списка',
          inputTodoItem: '',
          todos: [
            {id: 1, title: 'Купить хлеб', completed: false},
            {id: 2, title: 'Купить масло', completed: false},
            {id: 3, title: 'Купить соль', completed: false}
          ]
        },
        {
          id: (Date.now() * 2),
          listName: 'команды',
          placeholder: 'Введите имя списка',
          inputTodoItem: '',
          todos: [
            {id: 1, title: 'беги', completed: false},
            {id: 2, title: 'стой', completed: false},
            {id: 3, title: 'сиди', completed: false}
          ]
        }
      ]
    }
  },
  components: {
    TodoList, AddTodo, List
  },
  methods: {
        removeTodo(id) {
          this.todos = this.todos.filter(t => t.id !== id)
        },
    }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  section {
    flex: 0 1 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
