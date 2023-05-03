import { reactive } from "vue";
import {
  AntiExtension,
  AntiRotation,
  Dips,
  Exercise,
  Extension,
  Hinges,
  Pullups,
  Pushups,
  Rows,
  Squats,
} from "../types/types";
import { formatDate } from "../utils/formatDate";

export const workoutStore = reactive({
  series: "1",
  dateCreated: formatDate(Date.now()),
  exercises: [
    {
      name: Exercise.Pullups,
      level: Pullups.ONE,
      repetitions: new Array(),
    },
    {
      name: Exercise.Squats,
      level: Squats.ONE,
      repetitions: new Array(),
    },
    { name: Exercise.Dips, level: Dips.ONE, repetitions: new Array().fill(0) },
    {
      name: Exercise.Hinges,
      level: Hinges.ONE,
      repetitions: new Array().fill(0),
    },
    { name: Exercise.Rows, level: Rows.ONE, repetitions: new Array().fill(0) },
    {
      name: Exercise.Pushups,
      level: Pushups.ONE,
      repetitions: new Array().fill(0),
    },
    {
      name: Exercise.AntiExtension,
      level: AntiExtension.ONE,
      repetitions: new Array().fill(0),
    },
    {
      name: Exercise.AntiRotation,
      level: AntiRotation.ONE,
      repetitions: new Array().fill(0),
    },
    {
      name: Exercise.Extension,
      level: Extension.ONE,
      repetitions: new Array().fill(0),
    },
  ],
});
