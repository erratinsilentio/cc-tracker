<script setup lang="ts">
    import { supabase } from '../../utils/supabase';

    async function signInWithGoogle() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })
        if(error) {
            console.error(error);
            return
        }
        console.log(data)
        console.log('logged in')
        return data
    }
</script>

<template>
    <main class="section">
        <button @click="signInWithGoogle" class="article">
            <p class="span">Login with </p>
            <img class="google" src="google.svg" alt="Google" />
        </button>
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

    .article {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .styled {
        background-color: #E3F5AB;
        color: #1b1b1b;
        border-radius: 10px;
        font-size: 3rem;
        padding: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .styled:hover{
        filter: brightness(110%);
    }

    .span {
        font-size: 3rem;
        margin-right: 1rem;
        background: linear-gradient(to right, #0d9488 0%, #E3F5AB 33%, #E3F5AB 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .google {
        width: 75px;
        height: 75px;
        filter: invert(72%) sepia(43%) saturate(249%) hue-rotate(34deg) brightness(109%) contrast(92%);
    }
    </style>