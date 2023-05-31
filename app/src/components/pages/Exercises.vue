<script setup lang="ts">
    import { ref } from 'vue';
    import { FullExercise, Step } from '../../types/types';
    import { exercises as allExercises } from '../../utils/exercises'


    const exercises = ref(allExercises);

    const chosenExercise = ref<FullExercise>(exercises.value[0])
    const chosenStep = ref(chosenExercise.value.steps[0])

    function setChosenExercise(val: FullExercise) {
        chosenExercise.value = val
        chosenStep.value = val.steps[0]
    }

    function setChosenStep(step: Step) {
        chosenStep.value = step
    }

</script>

<template>
    <section class="section">
        <nav class="nav">
                <li v-for="exercise in exercises" :key="exercise.name">
                    <button @click="setChosenExercise(exercise)" :class="{chosenExercise: chosenExercise.name===exercise.name}">{{ exercise.name }}</button>
                </li>
        </nav>
        <article class="display">
            <section class="left">
            <li class="item">
                <span>-</span>
                <span>reps</span>
            </li>
            <p class="line"></p>
            <li v-for="(step, index) in chosenExercise.steps" :id="step.name" class="item" @click="setChosenStep(step)">
                <span>{{ index + 1 }}</span>
                <span class="name" :class="{chosenStep: chosenStep.name === step.name}">{{ step.name }}</span>
                <span class="reprange">{{ chosenExercise.reps }}</span>
            </li>
        </section>
        <section class="right">
            <iframe class="frame" :src="chosenStep.link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
        </article>
    </section>
</template>


<style scoped>
    .section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4rem;
        background-color: transparent;
    }

    .nav {
        width: 80vw;
        height: 10vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 1rem;
    }

    button {
        width: 100px;
        height: 40px;
        border: 0.5px solid #E3F5AB;
        color: #E3F5AB;
        border-radius: 10px;
    }

    button:hover{
        background-color: #E3F5AB;
        color: #1b1b1b;
    }

    .chosenExercise {
        background-color: #E3F5AB;
        color: #1b1b1b;
    }

    .display {
        border: 1px solid #E3F5AB;
        width: 80vw;
        height: 50vh;
        border-radius: 10px;
        color: #E3F5AB;
        display: flex;
        flex-direction: row;
    }

    .left {
        border-right: 1px solid #E3F5AB;
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5rem;
        overflow: scroll;
    }

    .right {
        width: 100%;
    }

    .frame {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    .item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
        margin-bottom: 10px;
    }

    .item:hover{
        text-decoration: underline;
        font-weight: 500;
    }

    .chosenStep{
        text-decoration: underline;
        font-weight: 500;
    }

    .line {
        width: 100%;
        height: 0.5px;
        background-color: #E3F5AB;
        margin-bottom: 1rem;
    }

    .reprange{
        min-width: 40px;
        text-align: center;
    }

    .name{
        text-align: center;
    }

    @media (min-width: 390px) and (max-width: 767px) {
    .display{
        width: 90%;
        height: auto;
        flex-direction: column;
    }
    .nav {
        width: 100%;
        flex-wrap: wrap;
        margin-bottom: 5rem;
        gap: 5px;
    }

    .left {
        width: 100%;
        border-right: 0;
    }

    .item {

        width: 85%;
    }
    .line {
        width: 90%;
        display: block;
    }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
    .display{
        width: 90%;
    }
    .nav {
        width: 100%vw;
        gap: 5px;
        flex-wrap: wrap;
    }

    .left {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5rem;
        overflow: scroll;
    }

    .right {
        width: 100%;
    }

    .frame {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    .item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
        margin-bottom: 10px;
        gap: 10px;
    }
    }
</style>