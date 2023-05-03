<script setup lang="ts">
import { Workout } from '../../../types/types';

interface props {
    workout: Workout;
}
const props = defineProps<props>()

</script>

<template>

<div class="element">
    <h1>{{ props.workout.series }}</h1>
</div>

</template>

<style scoped>
.element{
    outline: 1px solid green;
    width: 80vw;
    height: 20vh;
    margin-top: 4rem;
}
</style>