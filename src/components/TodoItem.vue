<template>
    <li>
        
    </li>
</template>

<script>
export default {
    
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