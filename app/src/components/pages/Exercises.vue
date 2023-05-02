<script setup lang="ts">
    import { ref } from 'vue';
    import { AntiExtension, AntiRotation, Dips, Exercise, Extension, Hinges, Pullups, Pushups, Rows, Squats } from '../../types/types';

    interface Step {
        name: Pullups | Squats | Dips | Extension | Hinges | Pushups | Rows | AntiExtension | AntiRotation;
        link: string;
    }

    interface FullExercise {
        id: number;
        name: Exercise; 
        steps: Step[];
        reps: string;
    }

    const exercises = ref([
        {id: 0, name: Exercise.Pullups, steps: [{name: Pullups.ONE, link: "https://www.youtube.com/embed/FgYoc4O-cio?start=82"}, {name: Pullups.TWO, link: "https://www.youtube.com/embed/C995b3KLXS4"}, {name: Pullups.THREE, link: "https://www.youtube.com/embed/EkpJkHpJXmM"},{name: Pullups.FOUR, link: "https://www.youtube.com/embed/eGo4IYlbE5g"}, {name: Pullups.FIVE, link: "https://www.youtube.com/embed/c90yZnUXdQM"}], reps: "5-8"}, 
        {id: 1, name: Exercise.Squats, steps: [{name: Squats.ONE, link: "https://www.youtube.com/embed/OuR_Fp7AB0c"}, {name: Squats.TWO, link: "https://www.youtube.com/embed/zJBLDJMJiDE"}, {name: Squats.THREE, link: "https://get-strong.fit/images/GobletSplitSquat.jpg"}, {name: Squats.FOUR, link: "https://www.youtube.com/embed/kkdmHTASZg8?start=76"}, {name: Squats.FIVE, link: "https://www.youtube.com/embed/TKt0-c83GSc?start=191"}, {name: Squats.SIX, link: "https://www.youtube.com/embed/TKt0-c83GSc?start=191"}, {name: Squats.SEVEN, link: "https://www.youtube.com/embed/TKt0-c83GSc?start=191"}, {name: Squats.EIGHT, link: "https://www.youtube.com/embed/TKt0-c83GSc?start=191"}], reps: "5-8"}, 
        {id: 2, name: Exercise.Dips, steps: [{name: Dips.ONE, link: "https://antranik.org/wp-content/uploads/2014/01/antranik-holding-support-hold-on-parallel-bars.jpg"}, {name: Dips.TWO, link: "https://www.youtube.com/embed/T3Scqw1BbCc"}, {name: Dips.THREE, link: "https://www.youtube.com/embed/2z8JmcrW-As"}, {name: Dips.FOUR, link: "https://www.youtube.com/embed/nNMC4NK-FiU"}], reps: "5-8"}, 
        {id: 3, name: Exercise.Hinges, steps: [{name: Hinges.ONE, link: "https://www.youtube.com/embed/FUwsp0OVyVM"}, {name: Hinges.TWO, link: "https://www.youtube.com/embed/iDV8r5u6En0"}, {name: Hinges.THREE, link: "https://www.youtube.com/embed/HUXS3S2xSX4"}, {name: Hinges.FOUR, link: "https://www.youtube.com/embed/HUXS3S2xSX4"}, {name: Hinges.FIVE, link: "https://www.youtube.com/embed/d8AAPcYxPo8"}], reps: "5-8"}, 
        {id: 4, name: Exercise.Rows, steps: [{name: Rows.ONE, link: "https://www.youtube.com/embed/rloXYB8M3vU"}, {name: Rows.TWO, link: "https://www.youtube.com/embed/LR2EnFWpVao"}, {name: Rows.THREE, link: "https://www.youtube.com/embed/dvkIaarnf0g"}, {name: Rows.FOUR, link: "https://www.youtube.com/embed/f3yfJ0RStQw"}, {name: Rows.FIVE, link: "https://www.youtube.com/embed/3cYR6pis5zc"}], reps: "5-8"}, 
        {id: 5, name: Exercise.Pushups, steps: [{name: Pushups.ONE, link: "https://www.youtube.com/embed/5NPvv40gd3Q"}, {name: Pushups.TWO, link: "https://www.youtube.com/embed/4dF1DOWzf20"}, {name: Pushups.THREE, link: "https://www.youtube.com/embed/IODxDxX7oi4"}, {name: Pushups.FOUR, link: "https://www.youtube.com/embed/_4EGPVJuqfA"}, {name: Pushups.FIVE, link: "https://www.youtube.com/embed/Cdmg0CfMZeo"}], reps: "5-8"}, 
        {id: 6, name: Exercise.AntiExtension, steps: [{name: AntiExtension.ONE, link: "https://www.youtube.com/embed/44ScXWFaVBs?start=10"}, {name: AntiExtension.TWO, link: "https://www.youtube.com/embed/LBUfnmugKLw"}], reps: "8-12"}, 
        {id: 7, name: Exercise.AntiRotation, steps: [{name: AntiRotation.ONE, link: "https://www.youtube.com/embed/AH_QZLm_0-s"}], reps: "8-12"}, 
        {id: 8, name: Exercise.Extension, steps: [{name: Extension.ONE, link: "https://www.youtube.com/embed/ZeRsNzFcQLQ"}], reps: "8-12"}
    ]);

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
                <span :class="{chosenStep: chosenStep.name === step.name}">{{ step.name }}</span>
                <span>{{ chosenExercise.reps }}</span>
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
        outline: 0.5px solid #E3F5AB;
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
        outline: 1px solid #E3F5AB;
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
</style>