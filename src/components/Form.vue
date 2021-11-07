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
      <p>{{authMessage}}</p>
    </form>
</template>


<script>
import { mapState, mapActions } from 'vuex';
export default {
    mounted() {
            if (localStorage.getItem("access_token")) {
                this.$store.dispatch('sendLists');
            }
    },
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
            authMessage: state => localStorage.getItem("access_token") ? "Logged!" : state.messageLogin,
        }),
        
            
        
    methods: {
        ...mapActions( ['sendReg', 'sendLogin' ] ),
        sendRequest(param) {
            return this.sendReg(param);
        },
        sendLog(param) {
            return this.sendLogin(param);
        },
        
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