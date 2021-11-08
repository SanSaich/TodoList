<template>
    <form>
        <input 
            type="text"
        >
        <button type="submit">Create</button>
    </form>
</template>

<script>
export default {
    name: 'AddTodo',
}
</script>


<style scoped>
    form {
        display: flex;
    }
    input {
        width: 300px;
    }
</style>