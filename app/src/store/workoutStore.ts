import { reactive } from "vue";
import { Exercise } from "../types/types";

export const workoutStore = reactive({
  series: "1",
  exercises: [
    { name: Exercise.Pullups, level: "", repetitions: new Array() },
    { name: Exercise.Squats, level: "", repetitions: new Array() },
    { name: Exercise.Dips, level: "", repetitions: new Array() },
    { name: Exercise.Hinges, level: "", repetitions: new Array() },
    { name: Exercise.Rows, level: "", repetitions: new Array() },
    { name: Exercise.Pushups, level: "", repetitions: new Array() },
    { name: Exercise.AntiExtension, level: "", repetitions: new Array() },
    { name: Exercise.AntiRotation, level: "", repetitions: new Array() },
    { name: Exercise.Extension, level: "", repetitions: new Array() },
  ],
});
