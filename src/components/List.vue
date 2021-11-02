<template>
    <div >
        <ul>
            <li v-for="list of lists" :key="list.id">
                <button @click="viewList(list.todos)">{{list.listName}}</button>
                {{list.id}}
                {{zaz}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['lists'],
    methods: {
        viewList(todos) {
            return console.log(todos);
        }
    }
}

</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>