<script setup lang="ts">
import { workoutStore } from "../../../store/workoutStore";

</script>


<template>
    <section class="top">
        <span class="title">New Workout</span>
        <div>
            <label class="series-label">Number of series: {{ workoutStore.series }}</label>
            <input class="input series-input" name="series" type="range" min="1" max="4" v-model="workoutStore.series"/>
        </div>
    </section>
</template>


<style scoped>

    .top {
        outline: 1px solid white;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        color: #E3F5AB;
        font-size: 2rem;
        font-weight: 100;
    }

    .series-label {
        color: #E3F5AB;
        font-size: 1.5rem;
        font-weight: 100;
    }

    .series-input {
        font-size: 1.5rem;
    }

</style>