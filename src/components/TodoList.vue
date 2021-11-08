<template>
    <div class="container">
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
            <AddTodo />
        </div>
    </div>
</template>

<script>

import { mapState } from "vuex";
import AddTodo from "@/components/AddTodo";
export default {
    name: 'TodoList',
    components: {
        AddTodo
    },
    computed: 
        mapState({
            getList: state => state.list,
            nameList: state => state.nameList
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
}
</style>