<template>
    <div>
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
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.title {
    font-size: 20px;
}
</style>