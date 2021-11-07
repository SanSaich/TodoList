<template>
    <div >
        <ul v-for="list of getLists" :key="list.id">
            <li>
                <p>{{list.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    methods: {
        
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
</style>