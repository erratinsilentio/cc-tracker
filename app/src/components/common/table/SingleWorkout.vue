<script setup lang="ts">
import { ref } from 'vue';
import { Workout } from '../../../types/types';
import { formatDate } from '../../../utils/formatDate'

interface props {
    workout: Workout;
    index: number;
}
const props = defineProps<props>()

const state = ref("closed");

const toggleState = () => {
    state.value === "opened" ? state.value = "closed" : state.value = "opened"
}

</script>

<template>

<article class="element">
    <section class="main">
        <span class="number">{{ props.index + 1 }}</span>
        <span class="date">{{ formatDate(props.workout.dateCreated) }}</span>
        <button class="more" @click="toggleState"> {{ state === "opened" ? "show less" : "show more" }}</button>
    </section>
    <section :class="[state, 'columns']">
        <div class="group">
            <span>{{ props.workout.exercises[0].level+": "+props.workout.exercises[0].repetitions }}</span>
            <span>{{ props.workout.exercises[1].level+": "+props.workout.exercises[1].repetitions }}</span>
            <span>{{ props.workout.exercises[2].level+": "+props.workout.exercises[2].repetitions }}</span>
        </div>
        <div class="group">
            <span>{{ props.workout.exercises[3].level+": "+props.workout.exercises[3].repetitions }}</span>
            <span>{{ props.workout.exercises[4].level+": "+props.workout.exercises[4].repetitions }}</span>
            <span>{{ props.workout.exercises[5].level+": "+props.workout.exercises[5].repetitions }}</span>
        </div>
        <div class="group">
            <span>{{ props.workout.exercises[6].level+": "+props.workout.exercises[6].repetitions }}</span>
            <span>{{ props.workout.exercises[7].level+": "+props.workout.exercises[7].repetitions }}</span>
            <span>{{ props.workout.exercises[8].level+": "+props.workout.exercises[8].repetitions }}</span>
        </div>
    </section>
</article>

</template>

<style scoped>
.element{
    border: 1px solid #1b1b1b;
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color:  #E3F5AB;
    outline: 1px solid #1b1b1b;
    height: 50px;
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 10px;
    z-index: 2;
}

.opened {
    border: 1px solid #E3F5AB;
    border-top: 1px solid #1b1b1b;
    height: 100px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition-duration: 0.2s;
    padding-left: 2rem;
    padding-right: 2rem;
    color: #E3F5AB;
}

.closed {
    display: none;
    opacity: 0;
    height: 0;
}

.columns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.group{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

span{
    margin-bottom: 0.5rem;
}

.more {
    height: 100%;
}
</style>