<template>
    <div >
        <ul v-for="list of getLists" :key="list.id">
            <li>
                <p v-on:click="getList([list.id, list.name])">{{list.name}}</p>
            </li>
        </ul>
        <div class="creat-list">
            <form @submit.prevent>
                <hr>
                <input placeholder="Введите название списка" v-model="listName" type="text" >
                <button type="button" @click="AddList(listName)">Добавить {{this.listName}}</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: 'List',
    data() {
        return {
            listName: "",
        }
    },
    methods: {
        ...mapActions( ['getListId', 'setList'] ),
        getList(param) {
            return this.getListId(param);
        },
        AddList(param) {
            this.listName = ""
            return this.setList(param);
        },
    },
    computed: 
        mapState({
            getLists: state => state.lists
        })
    
}

</script>

<style scoped>
hr {
    width: auto;
}
button {
    width: 100%;
    margin-top: 10px;
}
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