<template>
  <div id="app">
    <section>
      <Form />
      <hr>
      <List />
    </section>
    <section>
      <h1>Лист 1</h1>
      <AddTodo />
      <hr>
      <TodoList />
    </section>
  </div>
</template>

<script>
import Form from "@/components/Form";
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import List from "@/components/List";
// import { mapState } from "vuex";

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    TodoList, AddTodo, List, Form
  },
  methods: { 
    
   },
  computed: {
   
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
  }
  hr {
    width: 300px;
  }
</style>
