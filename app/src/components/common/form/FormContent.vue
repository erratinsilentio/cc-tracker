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
                <div class="side">
                    <button type="submit" class="button">ADD</button>
                </div>
            </section>
</template>


<style scoped>

    .content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding-top: 2rem;
    }

    .group {
        display: flex;
        flex-direction: column;
    }

    .side {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .button {
        outline: 1px solid #E3F5AB;
        color: #E3F5AB;
        height: 150px;
        width: 85px;
        border-radius: 10px;
    }

    .button:hover{
        background-color: #E3F5AB;
        color: #1b1b1b;
    }

</style>