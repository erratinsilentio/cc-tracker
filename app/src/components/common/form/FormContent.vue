<script setup lang="ts">
import FullFormSelect from './FullFormSelect.vue';
import * as steps from "../../../utils/exercises"
import { Exercise } from '../../../types/types';
</script>

<template>
            <section class="content">
                <div class="group">
                    <FullFormSelect :name="Exercise.Pullups" :options="steps.pullupSteps" />
                    <FullFormSelect :name="Exercise.Squats" :options="steps.squatSteps"/>
                </div>
                <div class="group">
                    <FullFormSelect :name="Exercise.Dips" :options="steps.dipSteps"/>
                    <FullFormSelect :name="Exercise.Hinges" :options="steps.hingeSteps"/>
                </div>
                <div class="group">
                    <FullFormSelect :name="Exercise.Rows" :options="steps.rowSteps"/>
                    <FullFormSelect :name="Exercise.Pushups" :options="steps.pushupSteps"/>
                </div>
                <div class="group">
                    <FullFormSelect :name="Exercise.AntiExtension" :options="steps.antiExtensionSteps"/>
                    <FullFormSelect :name="Exercise.AntiRotation" :options="steps.antiRotationSteps"/>
                    <FullFormSelect :name="Exercise.Extension" :options="steps.extensionSteps"/>
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