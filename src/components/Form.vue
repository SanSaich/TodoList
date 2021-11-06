<template>
    <form>
        <input placeholder="Логин" v-model="login" type="text" >
        <p>{{login}}</p>
        <input placeholder="email" v-model="email" type="text" >
        <p>{{email}}</p>
        <input placeholder="Пароль" v-model="password" type="text" >
        <p>{{password}}</p>
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
    </form>
</template>


<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
        login: {
            get() {return this.$store.state.login},
            set(value) {this.$store.commit('updateLogin', value)}

            },
            email: state => state.email,
            password: state => state.password
    })
    },
        
    methods: {
        
    }
}

</script>

<style scoped>
    form {
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    input,
    button {
        margin-bottom: 10px;
    }
</style>