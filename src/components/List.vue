<template>
    <div >
        <ul v-for="list of getLists" :key="list.id">
            <li>
                <p @click="getList([list.id, list.name])">{{list.name}}</p>
                <div class="del" @click="delList(list.id)"></div>
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
        ...mapActions( ['getListId', 'setList', 'delListId'] ),
        getList(param) {
            return this.getListId(param);
        },
        AddList(param) {
            this.listName = ""
            return this.setList(param);
        },
        delList(param) {
            return this.delListId(param);
        }
    },
    computed: 
        mapState({
            getLists: state => state.lists
        })
    
}

</script>

<style scoped>
.del {
    position: absolute;
    top: 4px;
    right: 6px;
    height: 12px;
    width: 12px;
}
.del:after {
    content: "\274c";
    font-size: 12px;
    cursor: pointer;
}
hr {
    width: auto;
}
input {
    border: 1px solid grey;
    border-radius: 5px;
}
button {
    width: 100%;
    margin-top: 10px;
    border: 1px solid grey;
    border-radius: 5px;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
li {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 1;
    margin-top: 5px;
    padding: 14px 12px 0 14px;
    border: 1px solid grey;
    border-radius: 5px;
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