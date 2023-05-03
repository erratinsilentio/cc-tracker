<script setup lang="ts">
import SingleWorkout from './SingleWorkout.vue';
import { onMounted } from 'vue';
import { getAllExercises, getAllWorkouts } from '../../../api/workoutApi';
import { useSessionStore } from '../../../store/sessionStore';
import { connectTogether } from "../../../utils/connectTogether"
import { trainlogStore } from "../../../store/trainlogStore"

const sessionStore = useSessionStore();
const userId = sessionStore.session?.user.id || "";

const promises = [getAllWorkouts(userId), getAllExercises(userId)]

onMounted(() => {
    Promise.all(promises).then(([workouts, exercises]) => {
        trainlogStore.setTrainlog(connectTogether(workouts, exercises))
    })
})

</script>

<template>
<SingleWorkout  v-for="(workout, index) in trainlogStore.workouts" :workout="workout" :index="index"></SingleWorkout>
</template>

<style scoped>

</style>