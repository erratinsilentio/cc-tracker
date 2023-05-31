<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useSessionStore } from '../../../store/sessionStore';
    import { Paths } from '../../../types/types.js';
    import { supabase } from '../../../utils/supabase';
    import gsap from "gsap";

    const store = useSessionStore()
    const sessionData = ref(store.session);

    const logo = ['R', 'O', 'U', 'T', 'I', 'N', 'E']
    const letter = ref(null)
    const navbutton = ref(null)

    onMounted(() => {
        gsap.to(letter.value, {
        y: 0,
        stagger: 0.05,
        delay: .2,
        duration: .1,
        })

        gsap.to(navbutton.value, {
            y: 0,
            duration: 0.1,
        })

        supabase.auth.getSession().then(({data: { session }}) => {
            if(session) {
                store.setSession(session)
                sessionData.value = session
                return
            } else {
                sessionData.value = null
            }
        })
    })

    async function logOut() {
        let { error } = await supabase.auth.signOut();

        if (error) {
            console.error(error)
            return;
        }
        console.log("logged out")

        sessionData.value = null
        store.setSession(null);
    }

</script>

<template>
    <header class="header">
        <article class="logo">
            <div v-for="char in logo" ref="letter" class="letter">{{ char }}</div>
        </article>
        <article class="nav">
        <router-link :to="Paths.Home" class="navbutton">Home</router-link>
        <router-link :to="Paths.Exercises" class="navbutton">Exercises</router-link>
        <router-link :to="Paths.Workouts" class="navbutton">Workouts</router-link>
        <router-link v-if="!sessionData" :to="Paths.Login" class="navbutton">Login</router-link>
        <router-link v-else :to="Paths.Home" @click="logOut" class="navbutton">Logout</router-link>
    </article>
    </header>
</template>

<style scoped>
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 70px;
    }

    .logo {
        padding-left: 3rem;
        color: #E3F5AB;
        font-weight: 100;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        display: flex;
        flex-direction: row;
        font-size: 1.25rem;
    }

    a {
        color: #E3F5AB;
        margin-right: 3rem;
        font-weight: 100;
        transition-duration: 0.3s;
    }

    a:hover{
        text-decoration: underline;
    }

    .letter {
        transform: translateY(115px);
        transition: transform .5s;
    }

    .navbutton{
        animation: fadeIn 1s ease-in forwards;
        animation-delay: 1.3;
    }

    @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
    }

    @media (min-width: 390px) and (max-width: 767px) {
        .header{
            height: 50px;
            border-bottom: 0.1px solid #E3F5AB;
        }
        .logo{
            padding-left: 10px;
            padding-right: 10px;
            font-weight: 300;
            background-color: #E3F5AB;
            color: #1b1b1b;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 1rem;
        }
        .navbutton{
            font-size: 1rem;
        }

        a{
            margin-right: 18px;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
    }

</style>