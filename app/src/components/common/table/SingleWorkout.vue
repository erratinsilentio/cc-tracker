<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { getAllExercises, getAllWorkouts } from '../../../api/workoutApi';
import { useSessionStore } from '../../../store/sessionStore';
import { connectTogether } from "../../../utils/connectTogether"

const store = useSessionStore();
const userId = store.session?.user.id || "";

let allWorkouts = ref();
let allExercises = ref();


onMounted(() => {
    getAllWorkouts(userId).then(data => allWorkouts.value = data)
    getAllExercises(userId).then(data => allExercises.value = data)
})

let structuredWorkouts = computed(() => connectTogether(allWorkouts.value, allExercises.value))

</script>

<template>

<div class="element">

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