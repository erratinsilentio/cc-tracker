<script setup lang="ts">
import AddworkoutForm from "../common/form/AddWorkoutForm.vue"
import WorkoutTable from "../common/table/WorkoutTable.vue";
</script>

<template>
    <main class="main">
        <AddworkoutForm></AddworkoutForm>
        <WorkoutTable></WorkoutTable>
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

</style>