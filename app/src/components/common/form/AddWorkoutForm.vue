<script setup lang="ts">
import { useSessionStore } from '../../../store/sessionStore';
import { trainlogStore } from '../../../store/trainlogStore'
import { workoutStore } from '../../../store/workoutStore';
import FormContent from './FormContent.vue';
import FormHeader from './FormHeader.vue';
import { createNewWorkout, addExercises } from "../../../api/workoutApi"

const sessionStore = useSessionStore();
const userId = sessionStore.session?.user.id || ""

function handleSubmit() {
        createNewWorkout(userId, workoutStore).then(data => addExercises(data?.id, userId, workoutStore)).then(() => {
            trainlogStore.addWorkout(workoutStore)
        }).catch(error => console.error(error))
    }
    
</script>

<template>
    <form class="form" @submit.prevent="handleSubmit">
        <FormHeader></FormHeader>
        <FormContent></FormContent>
    </form>
</template>

<style scoped>
.form{
        width: 80vw;
        height: 20vh;
        margin-bottom: 10rem;
    }
</style>