<template>
    <form @submit.prevent>
        <input placeholder="Логин" v-model="login" type="text" >
        <input placeholder="email" v-model="email" type="text" >
        <input placeholder="Пароль" v-model="password" type="text" >
        <button type="button"
            v-on:click="sendRequest(
                body = {
                    name: login, 
                    email: email, 
                    password: password
                }
            )">
            Регистрация
        </button>
        <p>{{message}}</p>
    
        <button type="button"
            v-on:click="sendLog(
                body = {
                    email: email, 
                    password: password
                }
            )">
            Авторизация
        </button>
      <p>{{token}}</p>
    </form>
</template>


<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'Form',
    data() {
        return {
            login: "",
            password: "",
            email: "",
        }
    },
    computed: 
        mapState({
            message: state => state.message,
            token: state => state.access_token ? "Logged!" : "False",
        }),
        
            
        
    methods: {
        ...mapActions( ['sendReg', 'sendLogin'] ),
        sendRequest(param) {
            return this.sendReg(param);
        },
        sendLog(param) {
            return this.sendLogin(param);
        }
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