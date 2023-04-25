<script setup lang="ts">
import { Paths } from '../../../types/types.js';
</script>
<template>
    <header class="header">
        <router-link :to="Paths.Home">Home</router-link>
        <router-link :to="Paths.Exercises">Exercises</router-link>
        <router-link :to="Paths.Workouts">Workouts</router-link>
        <router-link :to="Paths.Login">Login</router-link>
    </header>
</template>