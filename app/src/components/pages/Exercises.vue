<script setup lang="ts">
    import { ref } from 'vue';
    import { Exercise } from '../../types/types';

    interface FullExercise {
        id: number;
        name: Exercise; 
        steps: string[];
        reps: string;
    }

    const exercises = ref([
        {id: 0, name: Exercise.Pullups, steps: ["Scapular pulls", "Arch hangs", "Pullup negatives", "Pullups", "Weighted pullups"], reps: "5-8"}, 
        {id: 1, name: Exercise.Squats, steps: ["Assisted squats", "Squats", "Split squats", "Bulgarian split squats", "Beginner shrimp squats", "Intermediate shrimp squats", "Advanced shrimp squats", "Weighted shrimp squats"], reps: "5-8"}, 
        {id: 2, name: Exercise.Dips, steps: ["Parallel bar support holds", "Negative dips", "Parallel bar dips", "Weighted dips"], reps: "5-8"}, 
        {id: 3, name: Exercise.Hinges, steps: ["Romanian deadlift", "Single legged deadlift", "Banded nordic curl negative", "Banded nordic curl", "Nordic curls"], reps: "5-8"}, 
        {id: 4, name: Exercise.Rows, steps: ["Vertical rows", "Incline rows", "Horizontal rows", "Wide rows", "Weighted inverted rows"], reps: "5-8"}, 
        {id: 5, name: Exercise.Pushups, steps: ["Vertical pushup", "Incline pushup", "Full pushup", "Diamond pushup", "Pseudo planche pushup"], reps: "5-8"}, 
        {id: 6, name: Exercise.AntiExtension, steps: ["Plank", "Ring AB rollouts"], reps: "8-12"}, 
        {id: 7, name: Exercise.AntiRotation, steps: ["Banded pallof press"], reps: "8-12"}, 
        {id: 8, name: Exercise.Extension, steps: ["Reverse Hyperextension"], reps: "8-12"}
    ]);

    const chosen = ref(exercises.value[0])

    function setChosen(val: FullExercise) {
        chosen.value = val
    }

</script>

<template>
    <section class="section">
        <nav class="nav">
                <li v-for="exercise in exercises" :key="exercise.name">
                    <button @click="setChosen(exercise)" :class="{chosen: chosen.name===exercise.name}">{{ exercise.name }}</button>
                </li>
        </nav>
        <article class="display">
            <section class="left">
            <li class="item">
                <span>-</span>
                <span>reps</span>
            </li>
            <p class="line"></p>
            <li v-for="(step, index) in chosen.steps" :id="step" class="item">
                <span>{{ index + 1 }}</span>
                <span>{{ step }}</span>
                <span>{{ chosen.reps }}</span>
                  
            </li>
        </section>
        <section class="right">

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
        outline: 1px solid #E3F5AB;
        color: #E3F5AB;
        border-radius: 10px;
    }

    button:hover{
        background-color: #E3F5AB;
        color: #1b1b1b;
    }

    .chosen {
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

    .item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
        margin-bottom: 10px;
    }

    .line {
        width: 100%;
        height: 0.5px;
        background-color: #E3F5AB;
        margin-bottom: 1rem;
    }
</style>