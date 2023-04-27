<script setup lang="ts">
import { Paths } from '../../types/types';
</script>

<template>
    <section>
        <article class="hero">
            <p class="first">Track your bodyweight workouts</p>
            <p class="second">With Recommended Routine program</p>
            <p class="third">
                <router-link :to="Paths.Login">Login</router-link>
                to start or
                <a href="https://www.reddit.com/r/bodyweightfitness/wiki/kb/recommended_routine/#wiki_first_pair" target=”_blank”>read more</a>
            </p>
    </article>
    </section>
</template>

<style scoped>
    .hero {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, 0%);
    }
    .first {
        background: #F8FFE8;
        background: linear-gradient(to right, #0d9488 0%, #E3F5AB 33%, #B7DF2D 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 500;
        font-size: 4rem;
        margin-bottom: 1.2rem;
    }
    .second {
        background: #F8FFE8;
        background: linear-gradient(to right, #0d9488 0%, #14b8a6 33%, #0f766e 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;        font-size: 2rem;
        font-weight: 300;
        margin-bottom: 1.2rem;
    }
    .third {
        color: #0e7490;
    }

    a{
        color: #0f766e;
        font-size: 1.2rem;
    }
    a:hover{
        color: #14b8a6;
    }
</style>