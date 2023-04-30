<script setup lang="ts">
import { computed, ref } from 'vue';
import FullFormSelect from '../common/form/FullFormSelect.vue';
import * as steps from "../../utils/exercises"

    const series = ref("1");

    const pullups = ref({level: "", repetitions: []});
    const squats = ref({level: "", repetitions: []});
    const dips = ref({level: "", repetitions: []});
    const hinges = ref({level: "", repetitions: []});
    const rows = ref({level: "", repetitions: []});
    const pushups = ref({level: "", repetitions: []});
    const antiExtensions = ref({level: "", repetitions: []});
    const antiRotations = ref({level: "", repetitions: []});
    const extensions = ref({level: "", repetitions: []});

    const workout = computed(() => {
        return {
            series: series.value,
            exercises: [
                {...pullups.value, name: "Pullups"},
                {...squats.value, name: "Squas"},
                {...hinges.value, name: "Hinges"},
                {...dips.value, name: "Dips"},
                {...rows.value, name: "Rows"},
                {...pushups.value, name: "Pushups"},
                {...antiExtensions.value, name: "Anti Extensions"},
                {...antiRotations.value, name: "Anti Rotations"},
                {...extensions.value, name: "Extensions"},
            ]
        }
    })

    function handleSubmit() {
        console.log(workout.value)
    }

</script>

<template>
    <main class="main">
        <form class="form" @submit.prevent="handleSubmit">
            <section class="top">
                <span class="title">New Workout</span>
                <div>
                    <label class="series-label">Number of series: {{ series }}</label>
                    <input class="input series-input" name="series" type="range" min="1" max="4" v-model="series"/>
                </div>
            </section>

            <section class="content">
                <div class="group">
                    <FullFormSelect :name="'Pullup'" :options="steps.pullupSteps" :series="series" />
                    <FullFormSelect :name="'Squats'" :options="steps.squatSteps" :series="series"/>
                </div>
                <div class="group">
                    <FullFormSelect :name="'Dips'" :options="steps.dipSteps" :series="series"/>
                    <FullFormSelect :name="'Hinges'" :options="steps.hingeSteps" :series="series"/>
                </div>
                <div class="group">
                    <FullFormSelect :name="'Rows'" :options="steps.rowSteps" :series="series"/>
                    <FullFormSelect :name="'Pushups'" :options="steps.pushupSteps" :series="series"/>
                </div>
                <div class="group">
                    <FullFormSelect :name="'Anti Extension'" :options="steps.antiExtensionSteps" :series="series"/>
                    <FullFormSelect :name="'Anti Rotation'" :options="steps.antiRotationSteps" :series="series"/>
                    <FullFormSelect :name="'Extension'" :options="steps.extensionSteps" :series="series"/>
                </div>
                <button type="submit">SUBMIT</button>
            </section>
        </form>
    </main>
</template>


<style scoped>
    .main {
        width: 100%;
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding-top: 4rem;
        background-color: transparent;
    }

    .form{
        width: 80vw;
        height: 20vh;
        outline: 1px solid white;
    }

    .top {
        outline: 1px solid white;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        color: #E3F5AB;
        font-size: 2rem;
        font-weight: 100;
    }

    .series-label {
        color: #E3F5AB;
        font-size: 1.5rem;
        font-weight: 100;
    }

    .series-input {
        font-size: 1.5rem;
    }

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