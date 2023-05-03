<script setup lang="ts">
import SingleWorkout from './SingleWorkout.vue';
import { onMounted, ref } from 'vue';
import { getAllExercises, getAllWorkouts } from '../../../api/workoutApi';
import { useSessionStore } from '../../../store/sessionStore';
import { connectTogether } from "../../../utils/connectTogether"

const store = useSessionStore();
const userId = store.session?.user.id || "";

const allWorkouts = ref()

const promises = [getAllWorkouts(userId), getAllExercises(userId)]

onMounted(() => {
    Promise.all(promises).then(([workouts, exercises]) => {
        console.log(workouts)
        allWorkouts.value = connectTogether(workouts, exercises)
    })
})

</script>

<template>
<SingleWorkout v-if="allWorkouts" :workout="allWorkouts[0]"></SingleWorkout>
</template>

<style scoped>

</style>