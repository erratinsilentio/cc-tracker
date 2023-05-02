<script setup lang="ts">

import { workoutStore } from "../../store/workoutStore";
import FormContent from "../common/form/FormContent.vue";
import FormHeader from "../common/form/FormHeader.vue";

    function handleSubmit() {
        console.log(workoutStore.exercises)
    }

</script>

<template>
    <main class="main">
        <form class="form" @submit.prevent="handleSubmit">
            <FormHeader></FormHeader>
            <FormContent></FormContent>
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
    }

</style>