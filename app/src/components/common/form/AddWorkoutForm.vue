<script setup lang="ts">
import { useSessionStore } from '../../../store/sessionStore';
import { workoutStore } from '../../../store/workoutStore';
import FormContent from './FormContent.vue';
import FormHeader from './FormHeader.vue';
import { createNewWorkout, addExercises } from "../../../api/workoutApi"

const store = useSessionStore();
const userId = store.session?.user.id

function handleSubmit() {
        userId ? createNewWorkout(userId, workoutStore).then(data => addExercises(data?.id, userId, workoutStore)) : console.log('not logged in')
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
        margin-bottom: 4rem;
    }
</style>