<template>
    <div >
        <ul v-for="list of getLists" :key="list.id">
            <li>
                <p v-on:click="getList(list.id)">{{list.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: 'List',
    methods: {
        ...mapActions( ['getListId'] ),
        getList(param) {
            return this.getListId(param);
        },
    },
    computed: 
        mapState({
            getLists: state => state.lists
        })
    
}

</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
p {
  text-decoration: none;
  color: black;
  font-size: 20px;
}
p:hover {
  color: green;
  cursor: pointer;
}
</style>