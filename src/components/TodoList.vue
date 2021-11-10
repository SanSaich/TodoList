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
        <div class="add-todo">
            <div class="creat-item" v-if="resToken">
            <form @submit.prevent>
                <input placeholder="Введите Дело" v-model="name" type="text" >
                <input type="checkbox" name="" id="">
                <button type="button" @click="AddItem()">Добавить {{this.listName}}</button>
            </form>
        </div>
        </div>
    </div>
</template>

<script>

import { mapState } from "vuex";
export default {
    name: 'TodoList',
    computed: 
        mapState({
            getList: state => state.list,
            nameList: state => state.nameList,
            resToken: state => state.token
        })
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