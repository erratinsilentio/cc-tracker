<script setup lang="ts">
import { ref } from 'vue';


    const props = defineProps({
        name: String,
        options: Array<String>,
    })

    const step = ref(props.options[0]);

</script>

<template>
    <select :name="props.name" class="select" v-model="step">
        <option v-for="option in options" :value="option" :key="option.toString()">{{ option }}</option>
    </select>
</template>

<style scoped>
    .select {
        margin-bottom: 0.25rem;
    }

</style>