<template>
    <li  v-bind:class="{done: todo.completed}">
        <span>
            <input type="checkbox" v-on:change="todo.completed = !todo.completed">
            <strong>{{todo.id}}</strong>
            {{todo.title}}
        </span>
        <button class="rm" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }

    .rm {
        height: 25px;
        width: 25px;
        background:red;
        color: #fff;
        /* border: 1px solid red; */
        border-radius: 50%;
        font-weight: bold;
    }

    input,
    .rm:hover {
        cursor: pointer;
    }

    input {
        margin-right: 1rem;
    }

    .done {
        background: green;
        color: white;
    }
</style>