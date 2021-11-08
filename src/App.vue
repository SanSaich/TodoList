<template>
  <div id="app">
    <section class="section-left">
      <Form />
      <List />
    </section>
    <section class="section-right">
      <TodoList />
    </section>
  </div>
</template>

<script>
import Form from "@/components/Form";
import TodoList from "@/components/TodoList";
import List from "@/components/List";

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    TodoList, List, Form
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
    margin: 40px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 1200px;

  }
  section {
    border: 1px solid grey;
    padding: 20px;
  }
  .section-left {
    flex: 0 1 20%;
  }
  .section-right {
    flex: 0 1 80%;
  }
  hr {
    width: 300px;
  }
</style>
