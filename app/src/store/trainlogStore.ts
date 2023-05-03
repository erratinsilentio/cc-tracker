import { reactive } from "vue";

export const trainlogStore = reactive({
  workouts: [],
  setTrainlog: (workouts) => (trainlogStore.workouts = workouts),
  addWorkout: (workout) =>
    (trainlogStore.workouts = [...trainlogStore.workouts, workout]),
});
