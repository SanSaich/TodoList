<template>
    <div>
        <AddTodo />
        {{getList}}
        <ul>
           
        </ul>
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
            getList: state => state.list
        })
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>