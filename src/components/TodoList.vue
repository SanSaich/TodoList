<template>
    <div class="container"  v-if="resToken">
        <div class="title">
            <p>{{nameList}}</p>
        </div>
        <div class="list">
            <ul v-for="item of getList" :key="item.id">
                <div class="item">
                    <input type="checkbox" name="" id="">
                    <li>{{item.name}}</li>
                </div>
            </ul>
        </div>
        <div class="add-todo" v-if="getList">
            <div class="creat-item">
                <form @submit.prevent>
                    <input placeholder="Введите Дело" v-model="itemName" type="text" >
                    <input type="checkbox" v-model="check">
                    <span>Срочное</span>
                    <button type="button" @click="addItem([itemName, check])">Добавить</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapActions } from "vuex";
export default {
    name: 'TodoList',
    data() {
        return {
            itemName: "",
            check: "",
        }
    },
    computed: 
        mapState({
            getList: state => state.list,
            nameList: state => state.nameList,
            resToken: state => state.token
        }),
    methods:{
        ...mapActions( ['setItem'] ),
        addItem(param) {
            this.itemName = ""
            return this.setItem(param);
        },
    }
}
</script>

<style scoped>
template {
    height: 100%;
}
.container {
min-height: 100%;
display: flex;
flex-direction: column;
padding: 0;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
li {
    margin-left: 10px;
}
.title {
    font-size: 20px;
}
.item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.list {
    flex: 1 1 auto;
    margin: 0 auto;
}
</style>