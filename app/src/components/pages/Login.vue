<script setup lang="ts">
    import { ref } from 'vue';
    import { supabase } from '../../utils/supabase';

    let email = ref("")


    async function signInWithGoogle() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })
        if(error) console.error(error);
        return data
    }
</script>

<template>
    <main class="section">
        <form class="form" @submit.prevent="signInWithGoogle" prevent>
            <p class="first">Login with one time magic link</p>
            <p class="first"></p>
            <input type="text" class="input" v-model="email">
            <button type="submit" class="button">SEND</button>
        </form>
    </main>
</template>



<style scoped>
    .section {
        width: 100%;
        height: 70vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 4rem;
        background-color: transparent;
    }

    .form{
        outline: 1px solid #0d9488;
        border-radius: 10px;
        padding: 30px;
        width: 50vw;
        height: 50vh;
        display: flex;
        flex-direction: column;
    }

    .first{
        color: #0d9488;
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    .input {
        width: 250px;
        height: 25px;
        border-radius: 10px;
        border: 3px solid #0d9488;
        margin-bottom: 1rem;
    }

    .button {
        background-color: #0d9488;
        border-radius: 10px;
        width: 100px;
        height: 25px;
    }
</style>