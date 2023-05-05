<script setup lang="ts">
import SingleWorkout from './SingleWorkout.vue';
import { computed, onMounted, ref } from 'vue';
import { getAllExercises, getAllWorkouts } from '../../../api/workoutApi';
import { useSessionStore } from '../../../store/sessionStore';
import { connectTogether } from "../../../utils/connectTogether"
import { trainlogStore } from "../../../store/trainlogStore"

const sessionStore = useSessionStore();
const userId = sessionStore.session?.user.id || "";

const workoutsPerPage = 5
const currentPage = ref(1)

const slicedWorkouts = computed(() => {
    const startIndex = (currentPage.value - 1) * workoutsPerPage
    const endIndex = startIndex + workoutsPerPage;
    return trainlogStore.workouts.slice(startIndex, endIndex);
})

const totalPages = computed(() => {
    return Math.ceil(trainlogStore.workouts.length / workoutsPerPage)
})

const promises = [getAllWorkouts(userId), getAllExercises(userId)]

onMounted(() => {
    Promise.all(promises).then(([workouts, exercises]) => {
        trainlogStore.setTrainlog(connectTogether(workouts, exercises))
    })
})

</script>

<template>
    <section class="section">
        <SingleWorkout v-for="(workout, index) in slicedWorkouts" :workout="workout" :index="index"></SingleWorkout>
        <div v-if="trainlogStore.workouts.length>5" class="buttons">
            <button :disabled="currentPage===1" @click="currentPage--">prev</button>
            <button :disabled="currentPage===totalPages" @click="currentPage++">next</button>
        </div>
    </section>
</template>

<style scoped>
.section{
    margin-bottom: 4rem;
    width: 80vw;
}

.buttons{
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
}

button{
    width: 150px;
    height: 30px;
    outline: 0.5px solid #E3F5AB;
    border-radius: 10px;
    color: #E3F5AB;
    font-weight: 100;
}

button:hover{
    background-color: #E3F5AB;
    color: #1b1b1b;
}
</style>