<script setup lang="ts">
import { computed, ref } from 'vue';
import FormSelect from './FormSelect.vue';

    const props = defineProps({
        name: String,
        options: Array<String>,
        series: String,
    })

    const array = computed(() => {
        return new Array(Number(props.series)).fill(0)
    })

    const repetitions = ref(array.value)
</script>


<template>
    <article class="exercise">
        <FormSelect :name="props.name" :options="options" />
        <div>
            <label class="label">Repetitions: </label>
            <input v-for="(num, index) in array" v-model="repetitions[index]" name="reps" type="number" min="1" max="30" class="input"/>
        </div>
    </article>
</template>


<style scoped>
    .exercise {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;
    }

    .label {
        color: #E3F5AB;
        font-weight: 100;
    }
    .input {
        margin-left: 0.5rem;
    }
</style>