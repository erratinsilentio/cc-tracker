<script setup lang="ts">
import { workoutStore } from '../../../store/workoutStore';
import FormContent from './FormContent.vue';
import FormHeader from './FormHeader.vue';

function handleSubmit() {
        console.log(workoutStore.exercises)
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
    }
</style>