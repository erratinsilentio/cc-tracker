<script setup lang="ts">
import { workoutStore } from '../../../store/workoutStore';
import { findExerciseIndex } from "../../../utils/findByIndex"
import { Exercise } from "../../../types/types";

    interface Props {
        name: Exercise;
        options: string[]
    }

    const props = defineProps<Props>()

    const index = findExerciseIndex(workoutStore.exercises, props.name);

</script>

<template>
    <select :name="props.name" class="select" v-model="workoutStore.exercises[index].level">
        <option v-for="option in options" :value="option" :key="option.toString()">{{ option }}</option>
    </select>
</template>

<style scoped>
    .select {
        margin-bottom: 0.25rem;
        border: 1px solid #E3F5AB;
        border-radius: 10px;
        padding: 2px;
        background-color: #ecfeff;
    }

</style>