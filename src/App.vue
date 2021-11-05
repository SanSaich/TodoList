<template>
  <div id="app">
    <section>
      <p>Логин</p>
      <input v-model="login" type="text" >
      <p>email</p>
      <input v-model="email" type="text" >
      <p>Пароль</p>
      <input v-model="password" type="text" >
      <button v-on:click="sendRequest()">GO</button>
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
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import List from "@/components/List"

export default {
  name: 'App',
  data() {
    return {
      login: '',
      password: '',
      email: '',
    }
  },
  components: {
    TodoList, AddTodo, List
  },
  methods: {
        async sendRequest(method = 'POST', requestUrl = 'user/register') {
          const url = `http://sergey-melnikov-api.academy.smartworld.team/${requestUrl}`
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 6h0t10ads',
          }
          // let formData = new FormData()
          //  formData.append('name', 'SanSaich')
          //  formData.append('email', 'sansaich@sansaich.ru')
          //  formData.append('password', '123qwe')
           
          const body = {
            name: this.login,
            email: this.email,
            password: this.password,
          }
          console.log(this.login);
          console.log(this.password);
          console.log(this.email);

          await fetch(url, {
            method: method,
            body: JSON.stringify(body),
            // body: formData,
            headers: headers
          }).then(response => {
            if (response.ok) {
              return console.log('ответ1:', response.json().then(data => console.log('ответ2:',data))); 
            }
            return response.json().then(error => console.log('ошибка:', error))
          })
        }

        
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
  hr {
    width: 300px;
    margin: 25px 0;
  }
</style>
