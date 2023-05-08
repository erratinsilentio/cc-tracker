import { reactive } from "vue";

export const trainlogStore = reactive({
  workouts: [],
  submitRegister: 0,
  setTrainlog: (workouts) => (trainlogStore.workouts = workouts),
  addWorkout: (workout) =>
    (trainlogStore.workouts = [...trainlogStore.workouts, workout]),
});
