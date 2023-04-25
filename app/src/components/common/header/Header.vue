<script setup lang="ts">
import { Paths } from '../../../types/types.js';
</script>
<template>
    <header class="header">
        <article class="logo">
            CC TRACKER
        </article>
        <article class="nav">
        <router-link :to="Paths.Home">Home</router-link>
        <router-link :to="Paths.Exercises">Exercises</router-link>
        <router-link :to="Paths.Workouts">Workouts</router-link>
        <router-link :to="Paths.Login">Login</router-link>
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
    }
</style>