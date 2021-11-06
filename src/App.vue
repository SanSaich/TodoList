<template>
  <div id="app">
    <section>
      <input placeholder="Логин" v-model="login" type="text" >
      <input placeholder="email" v-model="email" type="text" >
      <input placeholder="Пароль" v-model="password" type="text" >
      <button 
        v-on:click="sendRequest(
          method = 'POST', 
          requestUrl = 'user/register', 
          body = {
            name: login, 
            email: email, 
            password: password
          }
        )">
        Регистрация
      </button>
      <button 
        v-on:click="sendRequest(
          method = 'POST', 
          requestUrl = 'user/login', 
          body = {
            email: email, 
            password: password
          },
          token = access_token
        )">
        Авторизация
      </button>
      <p>{{access_token}}</p>
      <hr>
      <List />
      <button 
        v-on:click="sendRequest(
          method = 'GET', 
          requestUrl = 'list?withs[0]=tasks',
          body = null,
          token = access_token
        )">
        получить список
      </button>
      <p>{{lists}}</p>
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
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import List from "@/components/List";
// import { mapState } from "vuex";

export default {
  name: 'App',
  data() {
    return {
      login: '',
      password: '',
      email: '',
      access_token: '',
      lists: ''
    }
  },
  components: {
    TodoList, AddTodo, List
  },
  methods: { 
    async sendRequest(method, requestUrl, body = null, token = "") {
      const url = `http://sergey-melnikov-api.academy.smartworld.team/${requestUrl}`;
      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      };
      
      if (body) {body = JSON.stringify(body)}

      await fetch(url, {
          method: method,
          body: body,
          headers: headers,
        }).then((response) => {
        if (response.ok) {
          return response.json().then((data) => {
            console.log("ответ:", data);
            this.access_token = data.data.access_token;
            this.lists = data.data.items;
          });
        }
        return response.json().then((error) => console.log("ошибка:", error));
      });
    },
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  section > {
    margin: 25px 0;
  }
  hr {
    width: 300px;
  }
</style>
