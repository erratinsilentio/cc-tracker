<script setup lang="ts">
import { computed } from 'vue';
import FormSelect from './FormSelect.vue';
import { Exercise } from "../../../types/types";
import { workoutStore } from '../../../store/workoutStore';
import { findExerciseIndex } from '../../../utils/findByIndex';

    interface Props {
            name: Exercise;
            options: string[];
        }

    const props = defineProps<Props>()

    const repetitions = computed(() => {
        return new Array(Number(workoutStore.series)).fill(0)
    })

    const exerciseIndex = findExerciseIndex(workoutStore.exercises, props.name);

    function handleChange() {
        workoutStore.exercises[exerciseIndex].repetitions = repetitions.value;
        console.log(repetitions.value)
    }

</script>


<template>
    <article class="exercise">
        <FormSelect :name="props.name" :options="options" />
        <div>
            <label class="label">Repetitions: </label>
            <input v-for="(num, index) in repetitions" v-model="repetitions[index]" @input="handleChange" name="reps" type="number" min="0" max="30" class="input"/>
        </div>
    </article>
</template>


<style scoped>
    .exercise {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;
    }

    .label {
        color: #E3F5AB;
        font-weight: 100;
    }
    .input {
        margin-left: 0.5rem;
    }
</style>