<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useSessionStore } from '../../../store/sessionStore';
    import { Paths } from '../../../types/types.js';
    import { supabase } from '../../../utils/supabase';
    const store = useSessionStore()
    const sessionData = ref(store.session);

    onMounted(() => {
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
            ROUTINE
        </article>
        <article class="nav">
        <router-link :to="Paths.Home">Home</router-link>
        <router-link :to="Paths.Exercises">Exercises</router-link>
        <router-link :to="Paths.Workouts">Workouts</router-link>
        <router-link v-if="!sessionData" :to="Paths.Login">Login</router-link>
        <router-link v-else :to="Paths.Home" @click="logOut">Logout</router-link>
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
        font-weight: 400;
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
</style>