<template>
    <div>
        <ul>
            <TodoItem />
        </ul>
    </div>
</template>

<script>
import TodoItem from "@/components/TodoItem"

export default {
    components: {
        TodoItem
    },
   
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>