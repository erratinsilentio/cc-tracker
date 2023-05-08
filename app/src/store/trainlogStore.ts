import { reactive } from "vue";
import { Workout } from "../types/types";

interface Trainlog {
  workouts: Workout[];
  submitRegister: number;
  setTrainlog: (x: Workout[]) => void;
  addWorkout: (x: Workout[]) => void;
}

export const trainlogStore: Trainlog = reactive({
  workouts: [] as Workout[],
  submitRegister: 0,
  setTrainlog: (workouts) => (trainlogStore.workouts = workouts),
  addWorkout: (workout) => {
    trainlogStore.workouts = [...trainlogStore.workouts, workout];
  },
});
