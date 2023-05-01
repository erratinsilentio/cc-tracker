<script setup lang="ts">
import FullFormSelect from './FullFormSelect.vue';
import * as steps from "../../../utils/exercises"
import { workoutStore } from '../../../store/workoutStore';
import { Exercise } from '../../../types/types';
</script>

<template>
            <section class="content">
                <div class="group">
                    <FullFormSelect :name="Exercise.Pullups" :options="steps.pullupSteps" :series="workoutStore.series" />
                    <FullFormSelect :name="Exercise.Squats" :options="steps.squatSteps" :series="workoutStore.series"/>
                </div>
                <div class="group">
                    <FullFormSelect :name="Exercise.Dips" :options="steps.dipSteps" :series="workoutStore.series"/>
                    <FullFormSelect :name="Exercise.Hinges" :options="steps.hingeSteps" :series="workoutStore.series"/>
                </div>
                <div class="group">
                    <FullFormSelect :name="Exercise.Rows" :options="steps.rowSteps" :series="workoutStore.series"/>
                    <FullFormSelect :name="Exercise.Pushups" :options="steps.pushupSteps" :series="workoutStore.series"/>
                </div>
                <div class="group">
                    <FullFormSelect :name="Exercise.AntiExtension" :options="steps.antiExtensionSteps" :series="workoutStore.series"/>
                    <FullFormSelect :name="Exercise.AntiRotation" :options="steps.antiRotationSteps" :series="workoutStore.series"/>
                    <FullFormSelect :name="Exercise.Extension" :options="steps.extensionSteps" :series="workoutStore.series"/>
                </div>
                <button type="submit">SUBMIT</button>
            </section>
</template>


<style scoped>

    .content {
        outline: 1px solid white;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .group {
        display: flex;
        flex-direction: column;
    }

</style>